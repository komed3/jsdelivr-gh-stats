import type { Period } from './types';

const PERIODS: { value: Period; label: string }[] = [
    { value: 'week', label: 'Last 7 Days' },
    { value: 'month', label: 'Last 30 Days' },
    { value: 'quarter', label: 'Last 90 Days' },
    { value: 'year', label: 'Last Year' },
    { value: 's-month', label: 'Last Month' },
    { value: 's-quarter', label: 'Last Quarter' },
    { value: 's-year', label: 'Last Year (Static)' }
];

export default function App () {
    return ( <></> );
}
