import Header from '@/components/Header';
import { SectionShell } from '@/components/layout/SectionShell';
import About from '@/components/section/About';
import ButtonHome from '@/components/section/ButtonMain';
import Contacts from '@/components/section/Contacts';
import Deadlines from '@/components/section/Deadlines';
import HeroBanner from '@/components/section/Hero';
import HowWork from '@/components/section/HowWork';
import Plans from '@/components/section/Plans';
import Price from '@/components/section/Price';
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
                <HowWork />
                <Price />
                <Plans />
                <Deadlines />
                <Contacts />
            </SectionShell>
        </>
    );
}
