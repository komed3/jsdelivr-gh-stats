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
    return ( <div className="border-2 border-black p-8 bg-white min-w-0">
        <div className="flex items-center justify-between mb-8">
            <h4 className="font-black uppercase tracking-widest flex items-center gap-2">
                { icon }
                { label }
            </h4>
            <div className="text-xs font-black bg-black text-white px-1.5 py-0.5">
                Peak: { formatter( Math.max( 0, ...data.map( ( d ) => d[ dataKey ] ) ) ) }
            </div>
        </div>
        <div className="w-full">
            <ResponsiveContainer width="100%" height={ 350 }>
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
                        labelFormatter={ ( label: any ) => formatDate( label ) }
                        formatter={ ( value: any ) => [ formatter( value as number ), label ] }
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
