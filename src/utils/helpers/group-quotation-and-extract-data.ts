import data from '@/mocks/Grafico-cotacao.json'
import extractData from '@/mocks/Grafico-extract.json'

export interface ObjectCot {
    timestamp: number
    cotacao: number
    compra?: number | null
    count?: number
}

export function groupQuotationAndExtractData() {
    let extractDataObj: ObjectCot[] = []
    let obj: ObjectCot[] = []

    const dataTimestamps = Object.values((data as any).timestamp) as number[];
    const dataCotacoes = Object.values((data as any).cotacao) as number[];
    const extractDataTimestamps = Object.values(extractData.bloco_timestamp).slice(1) as number[];
    const extractDataCotacoes = Object.values(extractData.cotacao).slice(1) as number[];
    const extractDataCompras = Object.values(extractData.compra).slice(1) as number[];


    for (let i = 0; i < extractDataTimestamps.length; i++) {
        extractDataObj.push({
            timestamp: extractDataTimestamps[i],
            cotacao: extractDataCotacoes[i],
            compra: extractDataCompras[i],
        });
    }

    const newArray = filterTransactionsInSameDay(extractDataObj)

    for (let i = 0; i < dataTimestamps.length; i++) {
        obj.push({
            timestamp: dataTimestamps[i],
            cotacao: dataCotacoes[i],
            compra: null
        });
    }
    const quotationObj = obj.concat(newArray)
    const orderedArray = quotationObj.sort((a, b) => a.timestamp - b.timestamp);


    return orderedArray;
}


function filterTransactionsInSameDay(orderedArray: ObjectCot[]) {
    const resultArray: ObjectCot[] = [];
    let i = 0;

    while (i < orderedArray.length) {
        let j = i;
        const currentCompra = orderedArray[i].compra;
        let count = 0;
        while (
            j < orderedArray.length &&
            isSameDay(orderedArray[i].timestamp, orderedArray[j].timestamp) &&
            orderedArray[j].compra === currentCompra
        ) {
            count++;
            j++;
        }

        if (count >= 5) {
            const firstItem = { ...orderedArray[i], count };
            resultArray.push(firstItem);
        } else {
            for (let k = i; k < j; k++) {
                resultArray.push(orderedArray[k]);
            }
        }
        i = j;
    }
    return resultArray
}


const isSameDay = (timestamp1: number, timestamp2: number): boolean => {
    const date1 = new Date(timestamp1);
    const date2 = new Date(timestamp2);
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
};