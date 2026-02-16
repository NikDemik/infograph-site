'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import MenuIcon from './ui/menu-icon';
import Image from 'next/image';
import Link from 'next/link';
import ContactFormModal from '@/components/modals/ContactFormModal';
import { Button } from '@/components/ui/button';

export default function HeaderMobil() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

    // Блокировка скролла при открытом меню
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]);

    // Добавьте в useEffect
    useEffect(() => {
        const handleTouchStart = (e: TouchEvent) => {
            // Логика для свайпа
        };

        if (menuOpen) {
            window.addEventListener('touchstart', handleTouchStart);
        }

        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
        };
    }, [menuOpen]);

    // Закрытие по ESC
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setMenuOpen(false);
            setTimeout(() => {
                if (document.activeElement instanceof HTMLElement) {
                    document.activeElement.blur();
                }
            }, 0);
        };

        if (menuOpen) {
            document.addEventListener('keydown', handleEsc);
        }

        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, [menuOpen]);

    // if (!menuOpen) return null;

    const menuItems = [
        { name: 'Главная', href: '/' },
        { name: 'Работы', href: '#works' },
        { name: 'Этапы работы', href: '#how-work' },
        { name: 'Цены', href: '#price' },
        { name: 'Контакты', href: '#contact' },
    ];

    return (
        <>
            <header className="w-full h-102.5 bg-banner-gradient md:hidden rounded-b-[2.5rem] relative overflow-hidden">
                <div className="min-h-screen mx-auto px-5">
                    {/* СЛОЙ КОНТЕНТА */}
                    <div className="relative z-10 mx-auto">
                        {/* МОБИЛЬНЫЙ БУРГЕР */}
                        <button
                            className=" mt-28 relative z-50"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Меню"
                        >
                            {menuOpen ? <X size={30} className="text-black" /> : <MenuIcon />}
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
            {/* МОБИЛЬНОЕ МЕНЮ */}
            <div
                className={`fixed inset-0 bg-black/90 backdrop-blur-md z-40 md:hidden transition-opacity duration-300 ${
                    menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setMenuOpen(false)}
            >
                <div
                    className={`absolute right-0 top-0 h-full w-[85%] max-w-100 bg-banner-gradient shadow-xl transition-transform duration-300 ease-in-out ${
                        menuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* ШАПКА МЕНЮ С КРЕСТИКОМ */}
                    <div className="flex justify-end p-6">
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            aria-label="Закрыть меню"
                        >
                            <X size={24} className="text-black" />
                        </button>
                    </div>

                    {/* НАВИГАЦИЯ */}
                    <nav className="p-8">
                        <ul className="space-y-6">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-black/80 hover:text-white text-xl font-medium transition-colors block py-2"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* КНОПКА СВЯЗАТЬСЯ */}
                        <div className="mt-12">
                            <Button
                                value="default"
                                size="default"
                                onClick={() => {
                                    setIsContactOpen(true);
                                    setMenuOpen(false);
                                }}
                            >
                                связать с нами
                            </Button>
                            {/* Модальное окно контактов */}
                            <ContactFormModal
                                isOpen={isContactOpen}
                                onClose={() => setIsContactOpen(false)}
                            />
                        </div>

                        {/* ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ */}
                        <div className="absolute bottom-8 left-8 right-8">
                            <div className="pt-8 border-t border-white/10">
                                <p className="text-white/60 text-sm text-center">
                                    Работаем по всей России
                                </p>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}
