import type { Metadata } from "next";
import { Header } from "./components/Header";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });

export const metadata: Metadata = {
    title: "OnChainWallet",
};

export default function LandingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={poppins.className}>
            <div className="min-h-screen bg-gradient-to-r from-zinc-800 to-zinc-950 text-white">
                <Header />
                <main className="max-w-[100vw] flex flex-col justify-center items-center pt-28 overflow-x-hidden">
                    {children}
                </main>
            </div>
        </div>
    );
}
