'use client';

import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';

const cases = [
    {
        id: 'min',
        items: [
            { src: '/products/slide-1.png', title: 'prod1-1' },
            { src: '/products/slide-2.png', title: 'prod1-2' },
            { src: '/products/slide-3.png', title: 'prod1-3' },
            { src: '/products/slide-4.png', title: 'prod1-4' },
            { src: '/products/slide-5.png', title: 'prod1-5' },
        ],
    },
    {
        id: 'standart',
        items: [
            { src: '/products/prod2-1.png', title: 'prod2-1' },
            { src: '/products/prod2-2.png', title: 'prod2-2' },
            { src: '/products/prod2-3.png', title: 'prod2-3' },
            { src: '/products/prod2-4.png', title: 'prod2-4' },
            { src: '/products/prod2-5.png', title: 'prod2-5' },
        ],
    },
    {
        id: 'max',
        items: [
            { src: '/products/prod3-1.png', title: 'prod3-1' },
            { src: '/products/prod3-2.png', title: 'prod3-2' },
            { src: '/products/prod3-3.png', title: 'prod3-3' },
            { src: '/products/prod3-4.png', title: 'prod3-4' },
            { src: '/products/prod3-5.png', title: 'prod3-5' },
        ],
    },
];

export default function Case( case ) {
    const targetCase = cases.find((c) => c.id === 'min');

    return (
        <section className=" relative z-10 mt-[3.5vw]">
            <Button variant="default" size="small" asChild className="mb-10">
                <Link href="/">на главную</Link>
            </Button>
            <h2>
                Кейс#1<span className="text-active"> (Тариф "Минимум")</span>
            </h2>
            <div className=" flex flex-col gap-5">
                <div className="flex justify-between ">
                    <p className=" mt-5 hidden md:block">
                        Подборка реализованных проектов, демонстрирующая
                        <br />
                        подход к визуализации товаров и качество исполнения.
                    </p>
                </div>

                {/* Карточки*/}
                <div className="grid grid-cols-6">
                    {targetCase?.items.map((product) => (
                        <Image
                            key={product.title}
                            src={product.src}
                            width={230}
                            height={305}
                            alt={product.title}
                        />
                    ))}
                </div>

                {/* Кнопка*/}
                <Button variant="default" size="default" asChild>
                    <Link href="#">заказать карточку товара</Link>
                </Button>
            </div>
        </section>
    );
}
