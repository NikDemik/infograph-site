'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Work from '@/components/catalogs/Work';

export default function Catalog() {
    return (
        <>
            <Header />
            <div className=" relative z-10 mt-14 md:mt-32">
                <Work />
            </div>
            <Footer />
        </>
    );
}
