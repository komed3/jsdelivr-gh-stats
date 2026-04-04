export interface StatsData {
    rank: number | null;
    typeRank: number | null;
    total: number;
    dates: Record<string, number>;
    prev: {
        rank: number | null;
        typeRank: number | null;
        total: number;
    };
}

export interface JsDelivrResponse {
    hits: StatsData;
    bandwidth: StatsData;
    links: {
        self: string;
        versions: string;
    };
}

export type Period =
    | 'day' | 'week' | 'month' | 'quarter' | 'year'
    | 's-month' | 's-quarter' | 's-year';

export interface ChartDataPoint {
    date: string;
    hits: number;
    bandwidth: number;
    formattedDate: string;
}
