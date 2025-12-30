'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname();
    const isActive = (path: string) => pathname.startsWith(path);
    return (
        <footer className=" w-full z-50 mt-10 md:mt-30">
            <div className="flex justify-between items-center py-5">
                {/* ЛОГОТИП */}
                <Link href="/">
                    <Image src={'/logo/logo.svg'} width={100} height={52} alt="Логотип сайта" />
                </Link>

                {/* ДЕСКТОП МЕНЮ */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:text-lg">
                    <ul className="flex flex-col gap-1">
                        <li>
                            <Link href="/" className={isActive('/') ? 'text-active' : 'hover'}>
                                Политика конфиденциальности
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className={isActive('#') ? 'text-active' : 'hover'}>
                                Пользовательское соглашение
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-1">
                        <li>
                            <Link href="/" className={isActive('#') ? 'text-active' : 'hover'}>
                                Заказать карточку товара
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className={isActive('#') ? 'text-active' : 'hover'}>
                                Выбрать тариф
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-1">
                        <li>
                            <Link href="/" className={isActive('#') ? 'text-active' : 'hover'}>
                                Телефон: +7 (xxx) xxx-xx-xx
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className={isActive('#') ? 'text-active' : 'hover'}>
                                Email: info@okdesign.ru
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
