import { format, parseISO } from 'date-fns';

const SIZES = [ 'Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB' ];

export function formatBytes ( bytes: number, decimals = 2 ) : string {
    if ( bytes === 0 ) return '0 Bytes';

    const k = 1024, dm = decimals < 0 ? 0 : decimals, i = Math.floor( Math.log( bytes ) / Math.log( k ) );
    return parseFloat( ( bytes / Math.pow( k, i ) ).toFixed( dm ) ) + ' ' + SIZES[ i ];
}

export function formatNumber ( num: number | null, d: number = 0 ) : string {
    return num === null ? 'N/A' : new Intl.NumberFormat( undefined, {
        minimumFractionDigits: d, maximumFractionDigits: d
    } ).format( num );
}

export function formatDate ( dateStr: string ) : string {
    try { return format( parseISO( dateStr ), 'MMM d, yyyy' ) }
    catch { return dateStr }
}

export function calculateTrend ( current: number, prev: number ) : number {
    return prev === 0 ? 0 : ( ( current - prev ) / prev ) * 100;
}
