'use client'

import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { ThemeProvider } from "next-themes";
import { Theme } from '@radix-ui/themes';
import { Header } from "./components/Header";
import '@radix-ui/themes/styles.css';

// export const metadata: Metadata = {
//     title: "OnChainWallet",
// };

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [minimalistSidebar, setMinimalistSidebar] = useState(false)
    return (
        <div>
            <ThemeProvider attribute="class">
                <Theme>
                    <div className="grid grid-cols-1 lg:grid-cols-app min-h-screen dark:bg-zinc-900">
                        <div className={minimalistSidebar ? 'lg:w-36' : 'lg:w-80'}>
                            <Sidebar minimalistSidebar={minimalistSidebar} setMinimalistSidebar={setMinimalistSidebar} />
                        </div>
                        <main className="max-w-[100vw] px-4 pb-12 pt-24 lg:px-8 lg:pt-8">
                            <Header />
                            {children}
                        </main>
                    </div>
                </Theme>
            </ThemeProvider>
        </div>
    );
}