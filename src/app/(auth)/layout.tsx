import type { Metadata } from "next";
import { Banner } from "./components/Banner";

export const metadata: Metadata = {
    title: "OnChainWallet",
};

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen bg-gradient-to-r from-zinc-700 to-zinc-950 text-white grid grid-cols-2 divide-x divide-zinc-800">
            <Banner />
            <main className="flex flex-col justify-start lg:justify-center items-center col-span-2 lg:col-span-1">
                {children}
            </main>
        </div>
    );
}
