'use client';

import { Button } from '../ui/button';
import MySwiper from '../swiper/Swiper';
import SwiperDemo from '../swiper/SwiperDemo';

export default function Works() {
    return (
        <section className=" relative z-10 mt-[8.5vw] hidden md:block">
            <h2>Каталог работ</h2>
            <div className=" flex flex-col gap-5">
                <p className=" mt-5">
                    Подборка реализованных проектов, демонстрирующая
                    <br />
                    подход к визуализации товаров и качество исполнения.
                </p>
                <div className=" grid grid-cols-3 gap-8">
                    <div className="flex col-span-1 items-end ">
                        <Button variant="default" size="default">
                            смотреть все работы
                        </Button>
                    </div>
                    <div className="col-span-2 col-start-2 w-full h-full">
                        <MySwiper />
                        {/* <SwiperDemo /> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
