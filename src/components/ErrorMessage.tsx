import { AlertCircle } from 'lucide-react';
import React from 'react';

interface ErrorMessageProps {
    error: string;
}

export const ErrorMessage: React.FC< ErrorMessageProps > = ( { error } ) => {
    return ( <div className="flex flex-col items-center justify-center py-32 text-center">
        <div className="border-2 border-black p-12 max-w-lg">
            <AlertCircle className="w-16 h-16 mx-auto mb-6" />
            <p className="font-bold text-gray-500">{ error }</p>
            <p className="text-sm mt-2 text-gray-600">
                Please verify the GitHub username and repository name.
            </p>
        </div>
    </div> );
};
