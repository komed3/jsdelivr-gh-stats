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
