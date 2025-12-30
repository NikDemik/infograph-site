import Case from '@/components/catalogs/Case';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Works from '@/components/section/Works';

export default function Home() {
    return (
        <>
            <Header />
            <Case case={'min'} />
            <Footer />
        </>
    );
}
