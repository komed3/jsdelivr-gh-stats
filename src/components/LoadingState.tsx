import { Activity, Loader2 } from 'lucide-react';
import React from 'react';

export const LoadingState: React.FC = () => {
    return ( <div className="flex flex-col items-center justify-center py-32 gap-6">
        <div className="relative">
            <Loader2 className="w-16 h-16 animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
                <Activity className="w-6 h-6" />
            </div>
        </div>
        <p className="font-black uppercase tracking-widest animate-pulse">Processing Data …</p>
    </div> );
};
