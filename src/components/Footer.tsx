import React from 'react';

export const Footer: React.FC = () => {
    return ( <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t-2 border-black mt-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-xs font-black uppercase tracking-widest">
            <p>(c) { new Date().getFullYear() } komed3</p>
            <div className="flex items-center gap-10">
                <a href="https://github.com/komed3/jsdelivr-gh-stats" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">GitHub</a>
                <a href="https://www.jsdelivr.com/" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">jsDelivr</a>
                <a href="https://github.com/jsdelivr/data.jsdelivr.com" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">API-Docs</a>
            </div>
        </div>
    </footer> );
};
