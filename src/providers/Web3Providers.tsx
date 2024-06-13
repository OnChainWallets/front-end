"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { ReactNode } from "react";

import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import {
    RainbowKitSiweNextAuthProvider,
    GetSiweMessageOptions,
} from "@rainbow-me/rainbowkit-siwe-next-auth";
import { SessionProvider } from "next-auth/react";

import { WagmiProvider } from "wagmi";
import { mainnet, optimism, arbitrum, polygon, base } from "wagmi/chains";

interface RainbowKitProviderProps {
    children: ReactNode;
    autoConnect?: boolean;
}
const config = getDefaultConfig({
    appName: 'My RainbowKit App',
    projectId: '79e8e12939d28b3317fa48a7abb3c41b',
    chains: [mainnet, polygon, optimism, arbitrum, base],
    ssr: true,
});

const getSiweMessageOptions: GetSiweMessageOptions = () => ({
    statement: "Sign in to The Test App",
});

export default function Web3Provider(props: RainbowKitProviderProps) {

    return (
        <WagmiProvider config={config}>
            <SessionProvider>
                <RainbowKitSiweNextAuthProvider
                    getSiweMessageOptions={getSiweMessageOptions}
                >
                    <RainbowKitProvider>
                        {props.children}
                    </RainbowKitProvider>
                </RainbowKitSiweNextAuthProvider>
            </SessionProvider>
        </WagmiProvider>
    );
}