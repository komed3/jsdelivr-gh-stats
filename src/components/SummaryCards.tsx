import { Download, Database, TrendingUp, Info } from 'lucide-react';
import React from 'react';
import type { JsDelivrResponse } from '../types';
import { formatBytes, formatNumber } from '../utils';

interface SummaryCardProps {
    icon: React.ReactNode;
    title: string;
    value: string;
    trend?: number;
}

interface SummaryCardsProps {
    data: JsDelivrResponse;
    hitTrend: number;
    bandwidthTrend: number;
}

const SummaryCard: React.FC< SummaryCardProps > = ( { icon, title, value, trend } ) => {
    return ( <div className="p-8 bg-white">
        <div className="flex items-center justify-between mb-6">
            { icon }
            { trend && ( <div className="text-xs font-black bg-black text-white px-1.5 py-0.5">
                { trend > 0 ? '+' : '' }{ trend.toFixed( 1 ) }%
            </div> ) }
        </div>
        <p className="text-xs font-black uppercase tracking-widest mb-2 opacity-50">{ title }</p>
        <h3 className="text-4xl lg:text-5xl font-black tabular-nums">{ value }</h3>
    </div> );
};

export const SummaryCards: React.FC< SummaryCardsProps > = ( { data, hitTrend, bandwidthTrend } ) => {
    return ( <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-black divide-x-2 divide-y-2 md:divide-y-0 divide-black">
        <SummaryCard
            icon={ <Download className="w-6 h-6" /> } title="Total Hits"
            value={ formatNumber( data.hits.total ) } trend={ hitTrend }
        />
        <SummaryCard
            icon={ <Database className="w-6 h-6" /> } title="Bandwidth"
            value={ formatBytes( data.bandwidth.total, 1 ) } trend={ bandwidthTrend }
        />
        <SummaryCard
            icon={ <TrendingUp className="w-6 h-6" /> } title="Global Rank"
            value={ data.hits.rank !== null ? `#${ formatNumber( data.hits.rank ) }` : 'N/A' }
        />
        <SummaryCard
            icon={ <Info className="w-6 h-6" /> } title="Type Rank"
            value={ data.hits.typeRank !== null ? `#${ formatNumber( data.hits.typeRank ) }` : 'N/A' }
        />
    </div> );
};
