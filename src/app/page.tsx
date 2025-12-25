import Header from '@/components/Header';
import { SectionShell } from '@/components/layout/SectionShell';
import About from '@/components/section/About';
import ButtonHome from '@/components/section/ButtonMain';
import HeroBanner from '@/components/section/Hero';
import Works from '@/components/section/Works';

export default function Home() {
    return (
        <>
            <Header />
            <SectionShell>
                <HeroBanner />
                <ButtonHome />
                <About />
                <Works />
            </SectionShell>
        </>
    );
}
