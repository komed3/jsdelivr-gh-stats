import { Search } from 'lucide-react';
import React from 'react';

export const EmptyState: React.FC = () => {
    return ( <div className="flex flex-col items-center justify-center py-32 text-center">
        <div className="border-2 border-black border-dashed p-12 max-w-lg">
            <Search className="w-16 h-16 mx-auto mb-6 opacity-20" />
            <h2 className="text-2xl font-black uppercase mb-4">Awaiting Input</h2>
            <p className="font-bold text-gray-500">
                Enter a GitHub username and repository above to begin the statistical analysis.
            </p>
        </div>
    </div> );
};
