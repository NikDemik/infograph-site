'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';

export default function Header() {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState<string>('');
    const headerHeight = 80;

    // Реф для отслеживания первого рендера
    const isInitialMount = useRef(true);

    // Функция для определения активной секции при скролле
    useEffect(() => {
        if (pathname !== '/') return; // Работаем только на главной странице

        const sections = ['about', 'works', 'how-work', 'price', 'contact'];

        // Функция для определения активной секции
        const handleScroll = () => {
            const scrollPosition = window.scrollY + headerHeight + 50; // Добавляем отступ

            let currentSection = '';

            sections.forEach((sectionId) => {
                const element = document.getElementById(sectionId);
                if (element) {
                    const { offsetTop, offsetHeight } = element;

                    // Если секция находится в видимой области с отступом
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        currentSection = sectionId;
                    }
                }
            });

            if (currentSection !== activeSection) {
                setActiveSection(currentSection);
            }
        };

        // Добавляем обработчик скролла
        window.addEventListener('scroll', handleScroll);

        // Вызываем сразу для определения начальной позиции
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathname, activeSection, headerHeight]);

    // Функция для проверки активности ссылки
    const isLinkActive = (sectionId: string) => {
        // Если мы на главной странице, используем отслеживание скролла
        if (pathname === '/') {
            return activeSection === sectionId;
        }
        // Для других страниц используем старую логику (если нужно)
        return false;
    };

    // Старая функция для проверки по pathname (оставляем для совместимости)
    const isActive = (path: string) => pathname.startsWith(path);

    // Функция для плавного скролла к якорям с отступом
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();

        // Если мы уже на главной странице
        if (pathname === '/') {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                // Устанавливаем активную секцию сразу при клике
                setActiveSection(targetId);

                // Вычисляем позицию с учетом высоты header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20; // Дополнительный отступ 20px

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
            }
        } else {
            // Если на другой странице, переходим на главную с якорем
            window.location.href = `/#${targetId}`;

            // После перехода на главную, нужно будет проскроллить к нужной секции
            // Это можно сделать через sessionStorage или query параметры
            sessionStorage.setItem('scrollToSection', targetId);
        }
    };

    // Обработка скролла при переходе с других страниц
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;

            // Проверяем hash в URL
            const hash = window.location.hash.substring(1);
            if (hash && sections.includes(hash)) {
                // Небольшая задержка для полной загрузки страницы
                setTimeout(() => {
                    const targetElement = document.getElementById(hash);
                    if (targetElement) {
                        setActiveSection(hash);
                        const offsetPosition = targetElement.offsetTop - headerHeight - 20;
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth',
                        });
                    }
                }, 100);
            }

            // Проверяем sessionStorage
            const scrollToSection = sessionStorage.getItem('scrollToSection');
            if (scrollToSection && sections.includes(scrollToSection)) {
                const targetElement = document.getElementById(scrollToSection);
                if (targetElement) {
                    setActiveSection(scrollToSection);
                    const offsetPosition = targetElement.offsetTop - headerHeight - 20;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth',
                    });
                    sessionStorage.removeItem('scrollToSection');
                }
            }
        }
    }, []);

    const sections = ['about', 'works', 'how-work', 'price', 'contact'];

    return (
        <header className="fixed top-0 left-0 right-0 w-full z-50 hidden md:block backdrop-blur">
            <div className="max-w-(--container-max-width) mx-auto px-5 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* ЛОГОТИП */}
                    <Link href="/">
                        <Image src={'/logo/logo.svg'} width={100} height={52} alt="Логотип сайта" />
                    </Link>

                    {/* ДЕСКТОП МЕНЮ */}
                    <nav>
                        <ul className="flex text-lg gap-11">
                            <li>
                                <a
                                    href="#about"
                                    onClick={(e) => handleSmoothScroll(e, 'about')}
                                    className={`cursor-pointer transition-colors duration-300 ${
                                        isLinkActive('about') ? 'text-active' : 'hover:text-active'
                                    }`}
                                >
                                    О нас
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#works"
                                    onClick={(e) => handleSmoothScroll(e, 'works')}
                                    className={`cursor-pointer transition-colors duration-300 ${
                                        isLinkActive('works') ? 'text-active' : 'hover:text-active'
                                    }`}
                                >
                                    Работы
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#how-work"
                                    onClick={(e) => handleSmoothScroll(e, 'how-work')}
                                    className={`cursor-pointer transition-colors duration-300 ${
                                        isLinkActive('how-work')
                                            ? 'text-active'
                                            : 'hover:text-active'
                                    }`}
                                >
                                    Этапы работы
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#price"
                                    onClick={(e) => handleSmoothScroll(e, 'price')}
                                    className={`cursor-pointer transition-colors duration-300 ${
                                        isLinkActive('price') ? 'text-active' : 'hover:text-active'
                                    }`}
                                >
                                    Цены
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    onClick={(e) => handleSmoothScroll(e, 'contact')}
                                    className={`cursor-pointer transition-colors duration-300 ${
                                        isLinkActive('contact')
                                            ? 'text-active'
                                            : 'hover:text-active'
                                    }`}
                                >
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
