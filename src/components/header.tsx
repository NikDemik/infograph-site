'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();
    const isActive = (path: string) => pathname.startsWith(path);

    return (
        <header className=" w-full z-50 hidden md:block">
            <div className="flex justify-between items-center h-20">
                {/* ЛОГОТИП */}
                <Link href="/">
                    <Image src={'/logo/logo.svg'} width={100} height={52} alt="Логотип сайта" />
                </Link>

                {/* ДЕСКТОП МЕНЮ */}
                <nav>
                    <ul className="flex text-lg gap-11">
                        <li>
                            <Link href="/" className={isActive('/') ? 'text-active' : 'hover'}>
                                О нас
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className={isActive('#') ? 'text-active' : 'hover'}>
                                Работы
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className={isActive('#') ? 'text-active' : 'hover'}>
                                Этапы работы
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className={isActive('#') ? 'text-active' : 'hover'}>
                                Цены
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className={isActive('#') ? 'text-active' : 'hover'}>
                                Контакты
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
