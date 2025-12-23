import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import HeaderMobil from '@/components/header-mobil';

const interSans = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
});

const sfFont = localFont({
    src: [
        {
            path: '../fonts/SF-Pro-Display-Regular.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/SF-Pro-Display-Medium.woff',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../fonts/SF-Pro-Display-Semibold.woff',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../fonts/SF-Pro-Display-Bold.woff',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-sf',
});

export const metadata: Metadata = {
    title: 'OK DESIGN',
    description: 'Инфографика для товаров',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={`${interSans.variable} ${sfFont.variable} antialiased`}>
                <HeaderMobil />
                <main className="min-h-screen max-w-(--container-max-width) mx-auto px-5 sm:px-6 lg:px-8 dark:bg-black">
                    {children}
                </main>
            </body>
        </html>
    );
}
