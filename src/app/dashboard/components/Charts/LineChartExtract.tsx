import React from 'react';
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
import { Line } from 'react-chartjs-2';
import data from '@/mocks/Grafico-extract.json'
import annotationPlugin from 'chartjs-plugin-annotation';
import { useTheme } from 'next-themes';
ChartJS.register(LinearScale, PointElement, LineElement, CategoryScale, Title, Tooltip, Legend, annotationPlugin);



export function LineChartExtract() {

    const { resolvedTheme } = useTheme()

    const balancoUSD = Object.values(data.balanco_USD);
    const balancoTokenUSD = Object.values(data.balanco_token_USD);
    const compras = Object.keys(data.compra);

    const chartData = {
        labels: compras,
        datasets: [
            {
                label: 'Balance USD',
                data: balancoUSD,
                borderColor: '#9333ea',
                backgroundColor: '#9333ea',
            },
            {
                label: 'Balance Token USD',
                data: balancoTokenUSD,
                borderColor: 'lightblue',
                backgroundColor: 'lightblue',
            }
        ],
    };

    const options = {
        responsive: true,
        scales: {

            y: {
                grid: {
                    color: '#71717a',
                },
                ticks: {
                    color: resolvedTheme === 'dark' ? '#ffff' : '#000',
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
                position: "top" as const,
                labels: {
                    color: resolvedTheme === 'dark' ? '#ffff' : '#000',
                }
            },
            title: {
                display: true,
                text: 'Accumulated Profit or Loss (USD) And Remaining Token Balance (USD)',
                color: resolvedTheme === 'dark' ? '#ffff' : '#000',
            },
            // annotation: {
            //     annotations: {
            //         box1: {
            //             type: "line",
            //             xMin: 1,
            //             xMax: 50,
            //             yMin: balancoUSD[balancoUSD.length - 1],
            //             yMax: balancoUSD[balancoUSD.length - 1],
            //             value: balancoTokenUSD[balancoTokenUSD.length - 1],
            //             backgroundColor: "rgba(255, 99, 132, 0.25)",
            //             borderColor: 'lightblue',
            //             borderWidth: 2,
            //             label: {
            //                 content: `Balance USD: ${balancoUSD[balancoUSD.length - 1]}`,
            //                 enabled: true,
            //                 position: 'right',
            //             },
            //         }
            //     }
            // }
        },
    };

    return (
        <div className='w-[50rem] m-auto'>
            <Line options={options} data={chartData} />
        </div>
    );
}
