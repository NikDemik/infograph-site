'use client';

import Case from '@/components/catalogs/Case';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MobileContactModal from '@/components/modals/ContactFormModal';
import { Button } from '@/components/ui/button';

import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Header />
            <div className=" relative z-10 mt-[3.5vw]">
                <Button variant="default" size="small" asChild className="mb-10">
                    <Link href="/">на главную</Link>
                </Button>
            </div>
            <Case caseId={'min'} />
            <Case caseId={'standart'} />
            <Case caseId={'max'} />
            <Footer />
        </>
    );
}
