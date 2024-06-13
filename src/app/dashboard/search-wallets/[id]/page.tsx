import { WalletPageContent } from "./components/WalletPageContent";

export interface WalletProps {
    params: {
        id: string;
    }
}

export default async function WalletPage({ params }: WalletProps) {

    return (
        <WalletPageContent params={params} />
    )
}