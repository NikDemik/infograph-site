'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import MenuIcon from './ui/menu-icon';
import Image from 'next/image';

export default function HeaderMobil() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full h-102.5 bg-banner-gradient md:hidden rounded-b-[2.5rem] relative overflow-hidden">
            <div className="min-h-screen mx-auto px-5">
                {/* СЛОЙ КОНТЕНТА */}
                <div className="relative z-10 mx-auto">
                    {/* МОБИЛЬНЫЙ БУРГЕР */}
                    <button className=" mt-28" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={30} /> : <MenuIcon />}
                    </button>

                    <h1 className="mt-36 text-[2.125rem] font-bold leading-10 z-99">
                        Выйди в ТОП
                        <br /> подай заявку уже сегодня
                    </h1>
                </div>

                {/* СЛОЙ ФОНА */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image
                        src="/img/obj-1.png"
                        alt="Объект баннера"
                        width={204}
                        height={204}
                        className="absolute top-[30%] left-[2%] w-[40vw] max-w-96 h-auto z-1"
                    />
                    <Image
                        src="/img/obj-2.png"
                        alt="Объект баннера"
                        width={148}
                        height={148}
                        className="absolute top-[22%] left-[32%] w-[40vw] max-w-60 h-auto"
                    />
                    <Image
                        src="/img/obj-3.png"
                        alt="Объект баннера"
                        width={326}
                        height={337}
                        className="absolute bottom-[1%] right-[1%] w-[60vw] max-w-full h-auto"
                    />
                </div>
            </div>
        </header>
    );
}
