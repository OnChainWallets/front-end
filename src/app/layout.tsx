import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../providers/Providers";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OnChainWallet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="antialiased">

      <body className={inter.className}>
        <Providers>
          {children}
          <ToastContainer stacked />
        </Providers>
      </body>
    </html>
  );
}
