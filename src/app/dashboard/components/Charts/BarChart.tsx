import React from 'react';
import jsonData from '@/mocks/Saldo-SaldoComCotacao.json'
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

const labels = ['Token Balance (USD)'];
const values = Object.values(jsonData['Token Balance (USD)']);

const data = {
    labels,
    datasets: [
        {
            label: 'Token Balance (USD)',
            data: values,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
    ],
};

const options = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

export function BarChart() {
    return (
        <div className='w-[50rem] m-auto'>
            <h2>Token Balance (USD)</h2>
            <Bar data={data} options={options} />
        </div>
    )
}

