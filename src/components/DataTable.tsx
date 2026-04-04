import React from 'react';
import { formatBytes, formatNumber } from '../utils';

interface DataTableProps {
    chartData: any[];
}

export const DataTable: React.FC< DataTableProps > = ( { chartData } ) => {
    return ( <div className="border-2 border-black bg-white">
        <div className="px-8 py-4 border-b-2 border-black flex items-center justify-between">
            <h4 className="font-black uppercase tracking-widest">Full Data Log</h4>
            <p className="text-xs font-black bg-black text-white px-1.5 py-0.5">
                { chartData.length } Records
            </p>
        </div>
        <div className="max-h-[500px] overflow-y-auto">
            <table className="w-full text-left border-collapse">
                <thead className="sticky top-0 bg-white text-black z-10">
                    <tr>
                        <th className="relative px-8 py-4 text-xs font-black uppercase border-r-2 border-black">
                            <span className="relative z-10">Date</span>
                            <svg className="absolute inset-0 w-full h-full pointer-events-none border-b-2 border-black">
                                <rect width="100%" height="100%" fill="url(#hatch)" />
                            </svg>
                        </th>
                        <th className="relative px-8 py-4 text-xs font-black uppercase border-r-2 border-black">
                            <span className="relative z-10">Hits</span>
                            <svg className="absolute inset-0 w-full h-full pointer-events-none border-b-2 border-black">
                                <rect width="100%" height="100%" fill="url(#hatch)" />
                            </svg>
                        </th>
                        <th className="relative px-8 py-4 text-xs font-black uppercase border-black">
                            <span className="relative z-10">Bandwidth</span>
                            <svg className="absolute inset-0 w-full h-full pointer-events-none border-b-2 border-black">
                                <rect width="100%" height="100%" fill="url(#hatch)" />
                            </svg>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y-2 divide-black">
                    { [ ...chartData ].reverse().map( ( row ) => (
                        <tr key={ row.date } className="hover:bg-gray-100 transition-colors">
                            <td className="px-8 py-4 text-sm font-bold border-r-2 border-black">{ row.formattedDate }</td>
                            <td className="px-8 py-4 text-sm font-black border-r-2 border-black tabular-nums">{ formatNumber( row.hits ) }</td>
                            <td className="px-8 py-4 text-sm font-bold tabular-nums">{ formatBytes( row.bandwidth ) }</td>
                        </tr>
                    ) ) }
                </tbody>
            </table>
        </div>
    </div> );
};
