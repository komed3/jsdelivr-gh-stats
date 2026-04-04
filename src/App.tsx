import React, { useMemo, useState } from 'react';
import type { JsDelivrResponse, Period } from './types';
import { calculateTrend, formatDate } from './utils';

import { DataTable } from './components/DataTable';
import { EmptyState } from './components/EmptyState';
import { ErrorMessage } from './components/ErrorMessage';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { LoadingState } from './components/LoadingState';
import { Patterns } from './components/Patterns';
import { SummaryCards } from './components/SummaryCards';

const PERIODS: { value: Period; label: string }[] = [
    { value: 'week', label: 'Last 7 Days' },
    { value: 'month', label: 'Last 30 Days' },
    { value: 'quarter', label: 'Last 90 Days' },
    { value: 'year', label: 'Last Year' },
    { value: 's-month', label: 'Last Month' },
    { value: 's-quarter', label: 'Last Quarter' },
    { value: 's-year', label: 'Last Year (Static)' }
];

export default function App () {
    const [ user, setUser ] = useState( '' );
    const [ repo, setRepo ] = useState( '' );
    const [ period, setPeriod ] = useState<Period>( 'quarter' );
    const [ data, setData ] = useState< JsDelivrResponse | null >( null );
    const [ loading, setLoading ] = useState( false );
    const [ error, setError ] = useState< string | null >( null );
    const [ hasSearched, setHasSearched ] = useState( false );

    const fetchData = async ( u: string, r: string, p: Period ) : Promise< void > => {
        if ( ! u || ! r ) return;

        setLoading( true );
        setError( null );
        setHasSearched( true );

        try {
            const response = await fetch( `https://data.jsdelivr.com/v1/stats/packages/gh/${u}/${r}?period=${p}` );
            if ( ! response.ok ) {
                if ( response.status === 404 ) throw new Error( `Repository "${u}/${r}" not found on jsDelivr.` );
                throw new Error( `API Error: ${response.statusText} (${response.status})` );
            }

            const result: JsDelivrResponse = await response.json();
            if ( result.hits.rank === null && result.hits.typeRank === null && result.hits.total === 0 ) {
                throw new Error( `Repository "${u}/${r}" has no data or does not exist on jsDelivr.` );
            }

            setData( result );
        } catch ( err ) {
            setError( err instanceof Error ? err.message : 'An unknown error occurred' );
            setData( null );
        } finally {
            setLoading( false );
        }
    };

    const handleSubmit = ( e: React.SubmitEvent ) => {
        e.preventDefault();
        fetchData( user, repo, period );
    };

    const chartData = useMemo( () => {
        if ( ! data ) return [];

        const dates = Object.keys( data.hits.dates ).sort();
        return dates.map( date => ( {
            date, formattedDate: formatDate( date ),
            hits: data.hits.dates[ date ] || 0,
            bandwidth: data.bandwidth.dates[ date ] || 0
        } ) );
    }, [ data ] );

    const hitTrend = data ? calculateTrend( data.hits.total, data.hits.prev.total ) : 0;
    const bandwidthTrend = data ? calculateTrend( data.bandwidth.total, data.bandwidth.prev.total ) : 0;
    const globalRankTrend = data ? calculateTrend( data.hits.rank, data.hits.prev.rank ) : 0;
    const typeRankTrend = data ? calculateTrend( data.hits.typeRank, data.hits.prev.typeRank ) : 0;

    return ( <div className="min-h-screen bg-white text-black font-mono selection:bg-black selection:text-white">
        <Patterns />

        <Header
            user={ user } setUser={ setUser } repo={ repo } setRepo={ setRepo } period={ period }
            setPeriod={ setPeriod } loading={ loading } hasSearched={ hasSearched } onSubmit={ handleSubmit }
            onFetch={ fetchData } periods={ PERIODS }
        />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            { error && <ErrorMessage error={ error } /> }
            { ! hasSearched && ! loading && <EmptyState /> }
            { loading && <LoadingState /> }

            { data && ! loading && ( <div className="space-y-12 animate-in fade-in duration-500">
                <SummaryCards
                    data={ data } hitTrend={ hitTrend } bandwidthTrend={ bandwidthTrend }
                    globalRankTrend={ globalRankTrend } typeRankTrend={ typeRankTrend }
                />
                <DataTable chartData={ chartData } />
            </div> ) }
        </main>

        <Footer />
    </div> );
}
