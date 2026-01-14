'use client';

import { Button } from '../ui/button';
import MySwiper from '../swiper/Swiper';
import Link from 'next/link';
export default function Works() {
    return (
        <section id="works" className=" relative z-10 mt-[8.5vw]">
            <h2>Каталог работ</h2>
            <div className=" flex flex-col gap-5">
                <div className="flex justify-between ">
                    <p className=" mt-5 hidden md:block">
                        Подборка реализованных проектов, демонстрирующая
                        <br />
                        подход к визуализации товаров и качество исполнения.
                    </p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    {/* Кнопка - показывается только на xl+ экранах в сетке */}
                    <div className="hidden xl:flex col-span-1 xl:items-end ">
                        <Button variant="default" size="default" asChild>
                            <Link href="/catalogs">смотреть все работы</Link>
                        </Button>
                    </div>

                    {/* Swiper - занимает 2 колонки на xl+ */}
                    <div className="xl:col-span-2 xl:col-start-2 w-full h-full md:mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] mt-5 md:mt-0">
                        <MySwiper />
                    </div>

                    {/* Кнопка для экранов меньше 1280px - показывается под swiper */}
                    <div className="flex xl:hidden justify-start mt-5 w-full">
                        <Button variant="default" size="default" asChild>
                            <Link href="/catalogs">смотреть все работы</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
