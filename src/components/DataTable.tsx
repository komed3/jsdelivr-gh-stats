import React from 'react';
import { formatBytes, formatNumber } from '../utils';

interface DataTableProps {
    chartData: any[];
}

export const DataTable: React.FC< DataTableProps > = ( { chartData } ) => {
    return ( <div className="border-2 border-black bg-white">
        <div className="px-8 py-4 border-b-2 border-black flex items-center justify-between">
            <h4 className="font-black uppercase tracking-widest">Full Data Log</h4>
            <p className="text-xs font-bold">{ chartData.length } Records</p>
        </div>
        <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-100">
            <table className="w-full text-left border-collapse">
                <thead className="sticky top-0 bg-black text-white z-10">
                    <tr>
                        <th className="px-8 py-4 text-xs font-black uppercase border-r-2">Date</th>
                        <th className="px-8 py-4 text-xs font-black uppercase border-r-2">Hits</th>
                        <th className="px-8 py-4 text-xs font-black uppercase">Bandwidth</th>
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
