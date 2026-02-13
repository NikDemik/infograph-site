'use client';

import { slideInFromLeft, containerDelay, viewportOptions, variantDelayMap } from '@/utils/motion';
import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';
import Image from 'next/image';

const cards = [
    { id: '1', src: '/products/card-product-1.png', alt: 'Карточка фена для маркетплейса' },
    { id: '2', src: '/products/card-product-2.png', alt: 'Карточка фена для маркетплейса' },
    { id: '3', src: '/products/card-product-3.png', alt: 'Карточка фена для маркетплейса' },
    { id: '4', src: '/products/card-product-4.png', alt: 'Карточка фена для маркетплейса' },
    { id: '5', src: '/products/card-product-5.png', alt: 'Карточка фена для маркетплейса' },
    { id: '6', src: '/products/card-product-6.png', alt: 'Карточка фена для маркетплейса' },
    { id: '7', src: '/products/card-product-7.png', alt: 'Карточка фена для маркетплейса' },
    { id: '8', src: '/products/card-product-8.png', alt: 'Карточка фена для маркетплейса' },
    { id: '9', src: '/products/card-product-9.png', alt: 'Карточка фена для маркетплейса' },
    { id: '10', src: '/products/card-product-10.png', alt: 'Карточка фена для маркетплейса' },
    { id: '11', src: '/products/card-product-11.png', alt: 'Карточка фена для маркетплейса' },
    { id: '12', src: '/products/card-product-12.png', alt: 'Карточка фена для маркетплейса' },
    { id: '13', src: '/products/card-product-13.png', alt: 'Карточка фена для маркетплейса' },
    { id: '14', src: '/products/card-product-14.png', alt: 'Карточка фена для маркетплейса' },
    { id: '15', src: '/products/card-product-15.png', alt: 'Карточка фена для маркетплейса' },
    { id: '16', src: '/products/card-product-16.png', alt: 'Карточка фена для маркетплейса' },
    { id: '17', src: '/products/card-product-17.png', alt: 'Карточка фена для маркетплейса' },
    { id: '18', src: '/products/card-product-18.png', alt: 'Карточка фена для маркетплейса' },
    { id: '19', src: '/products/card-product-19.png', alt: 'Карточка фена для маркетплейса' },
    { id: '20', src: '/products/card-product-20.png', alt: 'Карточка фена для маркетплейса' },
    { id: '21', src: '/products/card-product-21.png', alt: 'Карточка фена для маркетплейса' },
    { id: '22', src: '/products/card-product-22.png', alt: 'Карточка фена для маркетплейса' },
    { id: '23', src: '/products/card-product-23.png', alt: 'Карточка фена для маркетплейса' },
    { id: '24', src: '/products/card-product-24.png', alt: 'Карточка фена для маркетплейса' },
    { id: '25', src: '/products/card-product-25.png', alt: 'Карточка фена для маркетплейса' },
    { id: '26', src: '/products/card-product-26.png', alt: 'Карточка фена для маркетплейса' },
    { id: '27', src: '/products/card-product-27.png', alt: 'Карточка фена для маркетплейса' },
    { id: '28', src: '/products/card-product-28.png', alt: 'Карточка фена для маркетплейса' },
    { id: '29', src: '/products/card-product-29.png', alt: 'Карточка фена для маркетплейса' },
    { id: '30', src: '/products/card-product-30.png', alt: 'Карточка фена для маркетплейса' },
];

export default function Work() {
    return (
        <motion.section
            id="works"
            variants={containerDelay}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className=" relative z-10"
        >
            <motion.h2 variants={slideInFromLeft(0)}>Примеры работ</motion.h2>
            <div className=" flex flex-col gap-5">
                <div className="flex justify-between ">
                    <motion.p variants={slideInFromLeft(0.4)} className=" mt-5 hidden md:block">
                        Подборка реализованных проектов, демонстрирующая подход к визуализации
                        товаров и качество исполнения.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10 mt-20">
                    {cards.map((card, id) => (
                        <motion.div
                            key={id}
                            variants={variantDelayMap}
                            viewport={viewportOptions}
                            className=" w-auto h-auto"
                        >
                            <Image
                                width={222}
                                height={333}
                                src={card.src}
                                alt={card.alt}
                                className=" shadow-main rounded-3xl"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
