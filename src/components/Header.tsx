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
            </div>
        </div>
    </header> );
};
