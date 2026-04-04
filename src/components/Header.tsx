import { SiGithub } from '@icons-pack/react-simple-icons';
import { Activity, Loader2, Search } from 'lucide-react';
import React from 'react';
import type { Period } from '../types';

interface HeaderProps {
    user: string;
    setUser: ( u: string ) => void;
    repo: string;
    setRepo: ( r: string ) => void;
    period: Period;
    setPeriod: ( p: Period ) => void;
    loading: boolean;
    hasSearched: boolean;
    onSubmit: ( e: React.SubmitEvent ) => void;
    onFetch: ( u: string, r: string, p: Period ) => void;
    periods: { value: Period; label: string }[];
}

export const Header: React.FC< HeaderProps > = ( { user, setUser, repo, setRepo, period, setPeriod, loading, hasSearched, onSubmit, onFetch, periods } ) => {
    return ( <header className="border-b-2 border-black sticky top-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                    <div className="border-2 border-black p-1">
                        <Activity className="w-6 h-6" />
                    </div>
                    <h1 className="text-2xl font-black uppercase tracking-tighter">
                        JS<span className="bg-black text-white px-1.5 ml-1">delivr</span> GitHub Stats
                    </h1>
                </div>

                <form onSubmit={ onSubmit } className="flex flex-wrap items-stretch gap-3 w-full md:w-auto">
                    <div className="flex items-center border-2 border-black px-2 py-1 flex-grow md:flex-grow-0">
                        <SiGithub className="w-4 h-4 mr-2 flex-shrink-0" />
                        <input
                            type="text" placeholder="USER" value={ user } onChange={ ( e ) => setUser( e.target.value ) }
                            className="bg-transparent text-sm font-bold w-full md:w-24 outline-none uppercase placeholder:text-gray-400"
                        />
                        <span className="mx-1 text-gray-400">/</span>
                        <input
                            type="text" placeholder="REPO" value={ repo } onChange={ ( e ) => setRepo( e.target.value ) }
                            className="bg-transparent text-sm font-bold w-full md:w-32 outline-none uppercase placeholder:text-gray-400"
                        />
                    </div>
                    <select
                        value={ period } onChange={ ( e ) => {
                            const p = e.target.value as Period;
                            setPeriod( p );
                            if ( hasSearched ) onFetch( user, repo, p );
                        } }
                        className="border-2 border-black px-3 py-1.5 text-sm font-bold bg-white cursor-pointer uppercase outline-none focus:bg-black focus:text-white transition-colors flex-grow md:flex-grow-0"
                    >
                        { periods.map( p => (
                            <option key={ p.value } value={ p.value }>{ p.label }</option>
                        ) ) }
                    </select>
                    <button
                        type="submit" disabled={ loading }
                        className="bg-black text-white px-6 text-sm font-black uppercase tracking-widest cursor-pointer transition-colors flex items-center justify-center gap-2 disabled:bg-gray-400 flex-grow md:flex-grow-0"
                    >
                        { loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" /> }
                        Run
                    </button>
                </form>
            </div>
        </div>
    </header> );
};
