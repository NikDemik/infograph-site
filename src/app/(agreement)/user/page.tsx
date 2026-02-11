import { Metadata } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NewsletterConsent from '@/components/NewsletterConsent';

export const metadata: Metadata = {
    title: 'Политика конфиденциальности | Шинопровод.РУ',
    description: 'Политика обработки персональных данных ООО «Шинопровод.РУ»',
    openGraph: {
        title: 'Политика конфиденциальности | Шинопровод.РУ',
        description: 'Политика обработки персональных данных ООО «Шинопровод.РУ»',
        type: 'website',
    },
};

export default function Politic() {
    return (
        <div className="min-h-screen ">
            <Header />
            <NewsletterConsent />
            <Footer />
        </div>
    );
}
