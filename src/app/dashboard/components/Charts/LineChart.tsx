import { useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import { Line } from 'react-chartjs-2';
import { useTheme } from 'next-themes';
import { Button } from '../Button';
import { groupQuotationAndExtractData } from '@/utils/helpers/group-quotation-and-extract-data';
import { filterDaysInChart } from '@/utils/helpers/filterDaysInChart';

ChartJS.register(
    zoomPlugin,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

//compra -> 0 - Compra / 1 - Venda


export function LineChart() {

    const orderedArray = groupQuotationAndExtractData()

    const chartData = {
        labels: orderedArray.slice(-300).map(value => {
            const date = new Date(value.timestamp);
            return `${date.toLocaleString('en-US', { month: 'short' })} ${date.getDate()}`;
        }),
        datasets: [

            {
                label: 'Purchase',
                data: orderedArray.slice(-300).map((value) => ({
                    x: value.timestamp,
                    y: value.cotacao,
                    count: value.count || 1
                })),
                pointBackgroundColor: orderedArray.map((value) => {
                    return value.compra === 0 ? 'red' : ''
                }),
                pointBorderColor: orderedArray.map((value) => {
                    return value.compra === 0 ? 'red' : ''
                }),
                pointRadius: orderedArray.map((value) => {
                    return (value.compra === 0 && value.count && value.count >= 5 && value.count <= 15) ? 5 : (value.compra === 0 && value.count && value.count > 15) ? 10 : value.compra === 0 ? 3 : 0
                }),
                pointHoverRadius: orderedArray.map((value) => {
                    return (value.compra === 0 && value.count && value.count >= 5 && value.count <= 15) ? 5 : (value.compra === 0 && value.count && value.count > 15) ? 10 : value.compra === 0 ? 3 : 0
                }),
                hitRadius: orderedArray.map((value) => {
                    return (value.compra === 0 && value.count && value.count >= 5 && value.count <= 15) ? 5 : (value.compra === 0 && value.count && value.count > 15) ? 10 : value.compra === 0 ? 3 : 0
                }),
                showLine: false,
                borderColor: 'red',
                backgroundColor: 'red',
            },
            {
                label: 'Sell',
                data: orderedArray.slice(-300).map((value) => ({
                    x: value.timestamp,
                    y: value.cotacao,
                    count: value.count || 1
                })),
                pointBackgroundColor: orderedArray.map((value) => {
                    return value.compra === 1 ? '#3ea' : ''
                }),
                pointBorderColor: orderedArray.map((value) => {
                    return value.compra === 1 ? '#3ea' : ''
                }),
                pointRadius: orderedArray.map((value) => {
                    return (value.compra === 1 && value.count && value.count >= 5 && value.count <= 15) ? 5 : (value.compra === 1 && value.count && value.count > 15) ? 10 : value.compra === 1 ? 3 : 0
                }),
                pointHoverRadius: orderedArray.map((value) => {
                    return (value.compra === 1 && value.count && value.count >= 5 && value.count <= 15) ? 5 : (value.compra === 1 && value.count && value.count > 15) ? 10 : value.compra === 1 ? 3 : 0
                }),
                hitRadius: orderedArray.map((value) => {
                    return (value.compra === 1 && value.count && value.count >= 5 && value.count <= 15) ? 5 : (value.compra === 1 && value.count && value.count > 15) ? 10 : value.compra === 1 ? 3 : 0
                }),
                showLine: false,
                borderColor: '#3ea',
                backgroundColor: '#3ea',
            },
            {
                label: 'Quotation',
                data: orderedArray.slice(-300).map((value) => ({
                    x: value.timestamp,
                    y: value.cotacao
                })),
                borderColor: '#9333ea',
                backgroundColor: '#c084fc',
                pointRadius: 2
            },

        ],
    };
    const { resolvedTheme } = useTheme()

    const [activeFilter, setActiveFilter] = useState('lastDay');
    const [filteredData, setFilteredData] = useState<any>(chartData);


    const options = {
        responsive: true,
        scales: {

            y: {
                grid: {
                    color: '#71717a',
                },
                ticks: {
                    color: resolvedTheme === 'dark' ? '#ffff' : '#000',
                    callback: function (value: any) {

                        return value.toFixed(8).toString();
                    },
                },
            },
            x: {
                grid: {
                    color: 'transparent',
                },
                ticks: {
                    color: resolvedTheme === 'dark' ? '#ffff' : '#000',
                },
            },

        },
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                    color: resolvedTheme === 'dark' ? '#ffff' : '#000',
                }
            },
            title: {
                display: true,
                text: 'Buy and Sell',
                color: resolvedTheme === 'dark' ? '#ffff' : '#000',
            },
            tooltip: {
                intersect: true,
                callbacks: {
                    label: function (context: any) {
                        let label = context.dataset.label || '';
                        if (label === 'Quotation') {
                            label += ': ';
                            if (context.parsed.y !== null) {
                                label += context.parsed.y.toFixed(8);
                            }
                        }

                        else if (label === 'Sell') {
                            if (context.parsed.y !== null) {
                                label += `: ${context.raw.count}`;
                            }
                        }
                        else if (label === 'Purchase') {
                            if (context.parsed.y !== null) {
                                label += `: ${context.raw.count}`;
                            }
                        }

                        return label;
                    }
                }
            },
            zoom: {
                pan: {
                    enabled: true,
                    mode: 'xy' as any,
                },
                zoom: {
                    wheel: {
                        enabled: true,
                    },
                    pinch: {
                        enabled: true,
                    },
                    mode: 'xy' as any,
                },
            },
        },

    };


    return (
        <div className='w-[45rem] 2xl:w-[70rem] m-auto'>
            <div className='w-full flex justify-end items-center gap-3'>
                <Button onClick={() => filterDaysInChart({
                    filterType: 'lastDay',
                    numberToSlice: 300,
                    orderedArray: orderedArray,
                    setActiveFilter: setActiveFilter,
                    setFilteredData: setFilteredData
                })} variant={activeFilter === 'lastDay' ? 'primary' : 'outline'}>Last day</Button>
                <Button onClick={() => filterDaysInChart({
                    filterType: 'lastMonth',
                    numberToSlice: 6500,
                    orderedArray: orderedArray,
                    setActiveFilter: setActiveFilter,
                    setFilteredData: setFilteredData
                })} variant={activeFilter === 'lastMonth' ? 'primary' : 'outline'}>Last month</Button>
                <Button onClick={() => filterDaysInChart({
                    filterType: 'allTime',
                    numberToSlice: 0,
                    orderedArray: orderedArray,
                    setActiveFilter: setActiveFilter,
                    setFilteredData: setFilteredData
                })} variant={activeFilter === 'allTime' ? 'primary' : 'outline'}>All time</Button>
            </div>
            <Line options={options} data={filteredData} />
        </div>
    )
}
