import React, { useMemo, useState } from 'react';
import type { JsDelivrResponse, Period } from './types';
import { calculateTrend, formatDate } from './utils';

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

    return ( <></> );
}
