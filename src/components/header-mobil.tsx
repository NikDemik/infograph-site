'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import MenuIcon from './ui/menu-icon';

export default function HeaderMobil() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full h-102.5 bg-banner-gradient md:hidden rounded-b-[2.5rem]">
            <div className="min-h-screen mx-auto px-5">
                {/* МОБИЛЬНЫЙ БУРГЕР */}
                <button className=" mt-28" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={30} /> : <MenuIcon />}
                </button>
                <h1 className="mt-36 text-[2.125rem] font-bold">
                    Выйди в ТОП
                    <br /> подай заявку уже сегодня
                </h1>
            </div>
        </header>
    );
}
