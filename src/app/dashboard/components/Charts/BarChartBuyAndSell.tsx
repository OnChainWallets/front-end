import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
import data from '@/mocks/Grafico-extract.json'
import { useTheme } from 'next-themes';

interface ChartData {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string[];
    }[];
}
export function BarChartBuyAndSell() {

    const { resolvedTheme } = useTheme()


    const valores = Object.values(data.valor_USD);
    const compras = Object.values(data.compra);
    const timestamps = Object.values(data.bloco_timestamp)
        .slice(1)
        .map(value => {
            const date = new Date(value);
            return `${date.toLocaleString('en-US', { month: 'short' })} ${date.getDate()}`;
        })

    const chartData: ChartData = {
        labels: timestamps,
        datasets: [{
            label: 'Buy',
            data: [],
            backgroundColor: [],
        }, {
            label: 'Sell',
            data: [],
            backgroundColor: [],
        }]
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
            }


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
                text: 'Buy and Sell',
                color: resolvedTheme === 'dark' ? '#ffff' : '#000',
            },
        },
    };

    valores.forEach((value, index) => {
        if (index > 0) {
            const datasetIndex = compras[index] === 0 ? 0 : 1;

            const backgroundColor = compras[index] === 0 ? 'red' : '#3ea';

            if (datasetIndex === 0) {
                chartData.datasets[datasetIndex].data.push(-value);
                chartData.datasets[1].data.push(0);
                chartData.datasets[datasetIndex].backgroundColor.push(backgroundColor);

            }

            else {
                chartData.datasets[datasetIndex].data.push(value);
                chartData.datasets[0].data.push(0);
                chartData.datasets[datasetIndex].backgroundColor.push(backgroundColor);
            }

        }
    });

    return (
        <div className='w-[50rem] m-auto'>
            <Bar data={chartData} options={options} />
        </div>
    );
};

