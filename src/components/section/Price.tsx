'use client';

import { useState } from 'react';
import ContactFormModal from '../modals/ContactFormModal';
import { Button } from '../ui/button';
import Image from 'next/image';

import { slideInFromLeft, containerDelay, variantDelayMap, viewportOptions } from '@/utils/motion';
import { motion } from 'framer-motion';

export default function Price() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const cards = [
        {
            tag: 'Популярно',
            title: 'Разработка обложки',
            img: ['/products/card-product-6.png'],
            desc: 'Стильная обложка для вашего товара без дополнительных слайдов',
            price: '2.190 ₽',
        },
        {
            tag: 'Повышаем результативность воронки',
            title: 'Второстепенный слайд',
            img: ['/products/card-product-20.png'],
            desc: 'Дополнительные слайды для вашей карточки товара, на которых будут размещены все остальные преимущества',
            price: '1.490 ₽',
        },
        {
            tag: 'Проверка кликабельности',
            title: '3 обложки',
            img: [
                '/products/card-product-34.jpg',
                '/products/card-product-36.jpg',
                '/products/card-product-35.jpg',
            ],
            desc: 'Разработаем 3 главных слайда для вашего товара в разных стилистиках, чтобы понять, какой дизайн будет показывать наилучшие результаты',
            price: '1.990 ₽',
        },
        {
            tag: 'Оптимально',
            title: 'Обложка + 3 второстепенных слайда',
            img: [
                '/products/card-product-4.png',
                '/products/card-product-33.jpg',
                '/products/card-product-32.jpg',
            ],
            desc: 'Стильная обложка и дополнительные слайды для вашей карточки',
            price: '5.390 ₽',
        },
        {
            tag: 'Мини-лендинг',
            title: 'Rich-контент обложка',
            img: ['/products/card-product-101.png'],
            desc: 'Главный слайд Rich-контента для бесшовной презентации основных преимуществ товара.',
            price: '2.190 ₽',
        },
        {
            tag: 'Мини-лендинг',
            title: 'Rich-контент доп. слайд',
            img: ['/products/card-product-102.png'],
            desc: 'Дополнительные слайды для Rich-контента',
            price: '1.490 ₽',
        },
        {
            tag: 'Доводим дизайн до идеала',
            title: 'Правки',
            img: ['/products/edit.svg'],
            desc: 'Первые 3 правки - бесплатно Далее:',
            price: '300 ₽',
        },
    ];

    return (
        <motion.section
            id="price"
            variants={containerDelay}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className=" relative z-10 mt-[8.5vw]"
        >
            <motion.h2 variants={slideInFromLeft(0)}>Стоимость</motion.h2>
            <div className=" flex flex-col gap-5">
                <div className=" hidden md:flex justify-between ">
                    <motion.p variants={slideInFromLeft(0.4)} className=" mt-5 hidden md:block">
                        Для вашего удобства мы подготовили пакетные предложения
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 2xl:grid-cols-2 gap-7.5 mt-10 ">
                    {cards.map((card, index) => {
                        // Определяем ширину описания
                        const widht = [
                            'w-full md:max-w-65 lg:max-w-100 xl:max-w-185 2xl:max-w-107.5',
                            'w-full md:max-w-65 lg:max-w-100 xl:max-w-185 2xl:max-w-88',
                            'w-full md:max-w-65 lg:max-w-100 xl:max-w-185 2xl:max-w-69.5',
                        ];

                        const widhtDesc =
                            index > 3
                                ? widht[2]
                                : card.img.length === 1
                                  ? widht[0]
                                  : card.img.length === 2
                                    ? widht[1]
                                    : card.img.length === 3 && widht[2];

                        return (
                            <motion.div
                                key={index}
                                variants={variantDelayMap}
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportOptions}
                                custom={index}
                                className=" w-full h-auto md:h-95 rounded-3xl p-5 flex flex-col justify-between bg-gray-light shadow-main relative"
                            >
                                {/* Top card */}
                                <div className="z-20">
                                    <div
                                        className={`w-fit rounded-3xl px-4 py-1.5 ${index === 0 ? 'text-white bg-black' : 'text-black border  border-black'} `}
                                    >
                                        {card.tag}
                                    </div>
                                    <h3 className=" mt-5 text-black text-3xl font-bold w-full md:max-w-66.25">
                                        {card.title}
                                    </h3>

                                    {/* Изображения на мобилке на экране до 768px*/}
                                    <div className=" relative mt-5 h-70 md:h-auto">
                                        {card.img.map((imgSrc, imgIndex) => {
                                            // Определяем позицию для каждого изображения
                                            const positions = [
                                                'top-[4%] left-0 w-46.75 h-70',
                                                'top-[12%] left-[26%] w-37.5 h-56',
                                                'top-[20%] left-[46%] w-28 h-41.25',
                                                'top-[4%] left-0 w-100 h-65.25', // для index 4-5
                                                'top-[4%] left-0 w-64.75 h-64.75', // для index 6
                                            ];

                                            // Логика выбора позиции
                                            const positionClass =
                                                index === 6
                                                    ? positions[4]
                                                    : index > 3
                                                      ? positions[3]
                                                      : positions[imgIndex] || positions[0];

                                            return (
                                                <div
                                                    key={imgIndex}
                                                    className={`md:hidden absolute ${positionClass} transform z-${40 - imgIndex * 10}`}
                                                >
                                                    <Image
                                                        src={imgSrc}
                                                        fill
                                                        alt={`Пример карточки ${imgIndex + 1}`}
                                                        className={` ${index <= 5 ? 'rounded-2xl shadow-main' : ''}`}
                                                    />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Bottom card */}
                                <div className="z-20">
                                    <p className={`${widhtDesc} mt-5`}>{card.desc}</p>
                                    <div className="flex flex-col sm:flex-row gap-3.5 mt-2.5">
                                        <div
                                            className={`flex items-center w-fit rounded-full px-12 py-2.5 text-black text-3xl font-semibold 
                                            ${
                                                index <= 1
                                                    ? 'bg-active-light'
                                                    : index <= 3
                                                      ? 'bg-active-middle'
                                                      : index <= 5
                                                        ? 'bg-yellow'
                                                        : 'bg-gray-pantone'
                                            }`}
                                        >
                                            {card.price}
                                            <p className=" font-normal">/Слайд</p>
                                        </div>
                                        <Button
                                            value="default"
                                            size="middle"
                                            className=" "
                                            onClick={() => setIsContactOpen(true)}
                                        >
                                            Отправить заявку
                                        </Button>
                                    </div>
                                </div>

                                {/* Изображения */}
                                {card.img.map((imgSrc, imgIndex) => {
                                    // Определяем позицию для каждого изображения
                                    const positions = [
                                        'top-[4%] right-[2%] w-46.75 h-70',
                                        'top-[12%] right-[24%] w-37.5 h-56',
                                        'top-[20%] right-[40%] w-28 h-41.25',
                                        'top-[4%] right-[2%] w-105.75 h-65.25', // для index 4-5
                                        'top-[4%] right-[2%] w-64.75 h-64.75', // для index 6
                                    ];

                                    // Логика выбора позиции
                                    const positionClass =
                                        index === 6
                                            ? positions[4]
                                            : index > 3
                                              ? positions[3]
                                              : positions[imgIndex] || positions[0];

                                    return (
                                        <div
                                            key={imgIndex}
                                            className={`hidden md:block absolute ${positionClass} transform z-${40 - imgIndex * 10}`}
                                        >
                                            <Image
                                                src={imgSrc}
                                                fill
                                                alt={`Пример карточки ${imgIndex + 1}`}
                                                className={` ${index <= 5 ? 'rounded-2xl shadow-main' : ''}`}
                                            />
                                        </div>
                                    );
                                })}
                            </motion.div>
                        );
                    })}
                    {/* Модальное окно контактов */}
                    <ContactFormModal
                        isOpen={isContactOpen}
                        onClose={() => setIsContactOpen(false)}
                    />
                </div>
            </div>
        </motion.section>
    );
}
