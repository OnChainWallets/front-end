import { QRCodeSVG } from "qrcode.react";
import { Button } from "../../../components/Button";
import { useState } from "react";
import { toastMessage } from "@/utils/helpers/toast-message";

interface PaymentCardProps {
    crypto: string
    setCrypto: (crypto: string | null) => void
}

export function PaymentCard({ crypto, setCrypto }: PaymentCardProps) {

    const [cryptoAddress, setCryptoAddress] = useState('3A9XSfSCPLv1kvzfhMQsEuUYeGBggeZaQM')
    const [amount, setAmount] = useState('0.0014')

    function copyCryptoAddressToClipboard() {
        navigator.clipboard.writeText(cryptoAddress);
        toastMessage({ message: `${crypto} address copied to clipboard!`, type: 'success' })
    }
    function copyAmountToClipboard() {
        navigator.clipboard.writeText(amount);
        toastMessage({ message: `amount copied to clipboard!`, type: 'success' })
    }
    return (
        <div className="w-full flex flex-col justify-center items-center gap-5 p-3 rounded-md bg-zinc-100 dark:bg-zinc-700">
            <QRCodeSVG value="https://www.youtube.com/" className="w-52 h-52" />
            <span className="text-sm font-normal">Only send {crypto} from this address</span>
            <div className="w-full h-px bg-zinc-200 dark:bg-zinc-500" />

            <div className="w-full flex justify-between items-center">
                <div className="flex flex-col justify-center items-start gap-2">
                    <p className="font-bold">{crypto} Address</p>
                    <span className="text-sm">{cryptoAddress}</span>
                </div>
                <Button onClick={copyCryptoAddressToClipboard}>Copy</Button>
            </div>

            <div className="w-full h-px bg-zinc-200 dark:bg-zinc-500" />

            <div className="w-full flex justify-between items-center">
                <div className="flex flex-col justify-center items-start gap-2">
                    <p className="font-bold">Total amount</p>
                    <span className="text-sm">{amount} {crypto}</span>
                </div>
                <Button onClick={copyAmountToClipboard}>Copy</Button>
            </div>

            <div className="w-full h-px bg-zinc-200 dark:bg-zinc-500" />

            <div className="w-full flex justify-end items-center">

                <Button onClick={() => setCrypto(null)} className="bg-red-500 dark:bg-red-500 hover:bg-red-600 dark:hover:bg-red-600">Return</Button>
            </div>
        </div>
    )
}