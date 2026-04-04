import { Download, Database } from 'lucide-react';
import React from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { formatBytes, formatNumber, formatDate } from '../utils';

interface ChartProps {
    icon: React.ReactNode;
    data: Array< {
        date: string;
        hits: number;
        bandwidth: number;
    } >;
    dataKey: 'hits' | 'bandwidth';
    label: string;
    formatter: ( value: number ) => string;
}

interface StatsChartsProps {
    chartData: Array< {
        date: string;
        hits: number;
        bandwidth: number;
    } >;
}

const Chart = ( { icon, data, dataKey, label, formatter } : ChartProps ) => {
    return ( <div className="border-2 border-black p-8 bg-white">
        <div className="flex items-center justify-between mb-8">
            <h4 className="font-black uppercase tracking-widest flex items-center gap-2">
                { icon }
                { label }
            </h4>
            <div className="text-[11px] font-black px-2 py-1 bg-black text-white uppercase tracking-tighter">
                Peak: { formatter( Math.max( 0, ...data.map( ( d ) => d[ dataKey ] ) ) ) }
            </div>
        </div>
        <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={ data } margin={ { top: 5, right: 0, left: 0, bottom: 5 } }>
                    <XAxis dataKey="date" hide />
                    <Tooltip
                        contentStyle={ {
                            fontWeight: 'bold',
                            color: '#fff',
                            backgroundColor: '#000',
                            border: 'none',
                            borderRadius: '0'
                        } }
                        itemStyle={ { color: '#fff' } }
                        labelFormatter={ ( label: string ) => formatDate( label ) }
                        formatter={ ( value: number ) => [ formatter( value ), label ] }
                    />
                    <Area
                        type="monotone"
                        dataKey={ dataKey }
                        stroke="#000"
                        strokeWidth={ 3 }
                        fill="url(#hatch)"
                        fillOpacity={ 1 }
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </div> );
};

export const StatsCharts: React.FC< StatsChartsProps > = ( { chartData } ) => {
    return ( <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Chart
            icon={ <Download className="w-5 h-5" /> } data={ chartData } dataKey="hits"
            label="Hits History" formatter={ formatNumber }
        />
        <Chart
            icon={ <Database className="w-5 h-5" /> } data={ chartData } dataKey="bandwidth"
            label="Bandwidth Flow" formatter={ formatBytes }
        />
    </div> );
};
