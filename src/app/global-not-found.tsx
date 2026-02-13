// Import global styles and fonts
import './globals.css';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import type { Metadata } from 'next';
import HeaderMobil from '@/components/Header-mobile';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/theme-provider';
import NoFound from '@/components/404';

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
        {
            path: '../fonts/SF-Pro-Display-Bold.woff',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-sf',
});

export const metadata: Metadata = {
    title: '404 - Страница не найдена',
    description: 'Страница, которую вы ищете, не существует.',
};

export default function GlobalNotFound() {
    return (
        <html lang="ru" suppressHydrationWarning>
            <body className={`${interSans.variable} ${sfFont.variable} antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    <HeaderMobil />
                    <main className="min-h-screen max-w-(--container-max-width) mx-auto px-5 sm:px-6 lg:px-8">
                        <Header />
                        <div className="relative z-10 mt-14 md:mt-32">
                            <NoFound />
                        </div>
                        <Footer />
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
