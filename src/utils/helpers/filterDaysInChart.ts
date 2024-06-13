import { ObjectCot } from "./group-quotation-and-extract-data";

interface FilterDaysInChartProps {
    filterType: string
    numberToSlice: number
    orderedArray: ObjectCot[]
    setFilteredData: (filteredData: any) => void
    setActiveFilter: (activeFilter: string) => void
}

export function filterDaysInChart({ filterType, numberToSlice, orderedArray, setFilteredData, setActiveFilter }: FilterDaysInChartProps) {
    let selectedValues: ObjectCot[] = [];

    if (filterType === 'allTime') {
        const numberOfPoints = 700;
        const temp = orderedArray;

        const interval = Math.floor(temp.length / numberOfPoints);
        let value = 0;
        let count = 0;

        while (count < numberOfPoints && value < temp.length) {

            selectedValues.push(temp[value]);


            value += interval;

            if (value >= temp.length) break;
            let nextValue = value;
            while (nextValue > value - interval && nextValue < temp.length) {
                if (temp[nextValue].compra !== null && !selectedValues.includes(temp[nextValue])) {
                    selectedValues.push(temp[nextValue]);
                    count++;
                    if (count >= numberOfPoints) break;
                }
                nextValue--;
            }
        }

    }
    else if (filterType === 'lastMonth') {
        const numberOfPoints = 200;
        const temp = orderedArray.slice(-numberToSlice);

        const interval = Math.floor(temp.length / numberOfPoints);
        let value = 0;
        let count = 0;

        while (count < numberOfPoints && value < temp.length) {

            selectedValues.push(temp[value]);

            value += interval;

            if (value >= temp.length) break;
            let nextValue = value;
            while (nextValue > value - interval && nextValue < temp.length) {
                if (temp[nextValue].compra !== null && !selectedValues.includes(temp[nextValue])) {
                    selectedValues.push(temp[nextValue]);
                    count++;
                    if (count >= numberOfPoints) break;
                }
                nextValue--;
            }
        }
    }

    else {
        selectedValues = orderedArray.slice(-numberToSlice);
    }


    selectedValues.sort((a, b) => a.timestamp - b.timestamp);
    const chartData = {
        labels: selectedValues.map(value => {
            const date = new Date(value.timestamp);
            return `${date.toLocaleString('en-US', { month: 'short' })} ${date.getDate()}`;
        }),
        datasets: [

            {
                label: 'Purchase',
                data: selectedValues.map((value) => ({
                    x: value.timestamp,
                    y: value.cotacao,
                    count: value.count || 1
                })),
                pointBackgroundColor: selectedValues.map((value) => {
                    return value.compra === 0 ? 'red' : ''
                }),
                pointBorderColor: selectedValues.map((value) => {
                    return value.compra === 0 ? 'red' : ''
                }),
                pointRadius: selectedValues.map((value) => {
                    return (value.compra === 0 && value.count && value.count >= 5 && value.count <= 15) ? 5 : (value.compra === 0 && value.count && value.count > 15) ? 10 : value.compra === 0 ? 3 : 0
                }),
                pointHoverRadius: selectedValues.map((value) => {
                    return (value.compra === 0 && value.count && value.count >= 5 && value.count <= 15) ? 5 : (value.compra === 0 && value.count && value.count > 15) ? 10 : value.compra === 0 ? 3 : 0
                }),
                hitRadius: selectedValues.map((value) => {
                    return (value.compra === 0 && value.count && value.count >= 5 && value.count <= 15) ? 5 : (value.compra === 0 && value.count && value.count > 15) ? 10 : value.compra === 0 ? 3 : 0
                }),
                showLine: false,
                borderColor: 'red',
                backgroundColor: 'red',
            },
            {
                label: 'Sell',
                data: selectedValues.map((value) => ({
                    x: value.timestamp,
                    y: value.cotacao,
                    count: value.count || 1
                })),
                pointBackgroundColor: selectedValues.map((value) => {
                    return value.compra === 1 ? '#3ea' : ''
                }),
                pointBorderColor: selectedValues.map((value) => {
                    return value.compra === 1 ? '#3ea' : ''
                }),
                pointRadius: selectedValues.map((value) => {
                    return (value.compra === 1 && value.count && value.count >= 5 && value.count <= 15) ? 5 : (value.compra === 1 && value.count && value.count > 15) ? 10 : value.compra === 1 ? 3 : 0
                }),
                pointHoverRadius: selectedValues.map((value) => {
                    return (value.compra === 1 && value.count && value.count >= 5 && value.count <= 15) ? 5 : (value.compra === 1 && value.count && value.count > 15) ? 10 : value.compra === 1 ? 3 : 0
                }),
                hitRadius: selectedValues.map((value) => {
                    return (value.compra === 1 && value.count && value.count >= 5 && value.count <= 15) ? 5 : (value.compra === 1 && value.count && value.count > 15) ? 10 : value.compra === 1 ? 3 : 0
                }),
                showLine: false,
                borderColor: '#3ea',
                backgroundColor: '#3ea',
            },

            {
                label: 'Quotation',
                data: selectedValues.map((value) => ({
                    x: value.timestamp,
                    y: value.cotacao
                })),
                borderColor: '#9333ea',
                backgroundColor: '#c084fc',
                pointRadius: filterType === 'allTime' ? 0 : 2
            },
        ],
    }

    setFilteredData(chartData)
    setActiveFilter(filterType)
};