'use client';

import { useState } from 'react';
import ContactFormModal from '../modals/ContactFormModal';
import { Button } from '../ui/button';
import Image from 'next/image';

export default function Price() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const prices = [
        {
            tag: 'Популярно',
            title: 'Разработка обложки',
            img: ['/products/slide-1.png', '/products/prod2-1.png'],
            desc: 'Стильная обложка для вашего товара без дополнительных слайдов',
            price: '2.190 ₽',
        },
        {
            tag: 'Повышаем результативность воронки',
            title: 'Второстепенный слайд',
            img: ['/products/slide-3.png', '/products/prod2-1.png'],
            desc: 'Дополнительные слайды для вашей карточки товара, на которых будут размещены все остальные преимущества',
            price: '1.490 ₽',
        },
        {
            tag: 'Проверка кликабельности',
            title: '3 обложки',
            img: ['/products/prod3-1.png', '/products/prod2-1.png'],
            desc: 'Разработаем 3 главных слайда для вашего товара в разных стилистиках, чтобы понять, какой дизайн будет показывать наилучшие результаты',
            price: '1.990 ₽',
        },
        {
            tag: 'Оптимально',
            title: 'Обложка + 3 второстепенных слайда',
            img: ['/products/slide-1.png', '/products/prod2-1.png'],
            desc: 'Стильная обложка и дополнительные слайды для вашей карточки',
            price: '5.390 ₽',
        },
    ];

    return (
        <section id="price" className=" relative z-10 mt-[8.5vw]">
            <h2>Стоимость</h2>
            <div className=" flex flex-col gap-5">
                <div className=" hidden md:flex justify-between ">
                    <p className=" mt-5 hidden md:block">
                        Для вашего удобства мы подготовили пакетные предложения
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-7.5 mt-10">
                    {prices.map((price, index) => (
                        <div
                            key={index}
                            className=" w-full h-95 rounded-3xl p-5 flex flex-col justify-between bg-gray-light shadow-main relative"
                        >
                            {/* Top card */}
                            <div className="z-20">
                                <div
                                    className={`w-fit rounded-3xl px-4 py-1.5 ${index === 0 ? 'text-white bg-black' : 'text-black border  border-black'} `}
                                >
                                    {price.tag}
                                </div>
                                <h3 className=" mt-5 text-black text-3xl font-bold max-w-66.25">
                                    {price.title}
                                </h3>
                            </div>

                            {/* Bottom card */}
                            <div className="z-20">
                                <p className=" max-w-121.5">{price.desc}</p>
                                <div className="flex flex-col xl:flex-row gap-3.5 mt-2.5">
                                    <div className="flex items-center w-fit rounded-full bg-active-light px-12 py-2.5 text-black text-3xl font-semibold">
                                        {price.price}
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

                                    {/* Модальное окно контактов */}
                                    <ContactFormModal
                                        isOpen={isContactOpen}
                                        onClose={() => setIsContactOpen(false)}
                                    />
                                </div>
                            </div>

                            {/* Изображения */}
                            {price.img.map((imgSrc, imgIndex) => {
                                // Определяем позицию для каждого изображения
                                const positions = [
                                    'top-[22%] right-[8%] w-37.5 h-52 transform rotate-26',
                                    'top-[15%] right-[24%] w-32 h-40 transform -rotate-12',
                                    'bottom-[15%] right-[5%] w-28 h-36 transform rotate-15',
                                ];

                                return (
                                    <div
                                        key={imgIndex}
                                        className={`absolute ${positions[imgIndex] || positions[0]} z-${10 + imgIndex}`}
                                    >
                                        <Image
                                            src={imgSrc}
                                            fill
                                            alt={`Пример карточки ${imgIndex + 1}`}
                                            className="object-contain"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
