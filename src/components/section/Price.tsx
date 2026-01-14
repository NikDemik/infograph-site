'use client';

import { useState } from 'react';
import ContactFormModal from '../modals/ContactFormModal';
import { Button } from '../ui/button';

export default function Price() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const prices = [
        {
            title: 'Минимум',
            price: '4.900 руб.',
            desc: ['1-3 карточки', 'лёгкая обработка фото', 'стандартная структура карточки.'],
            button: 'заказать карточку товара',
        },
        {
            title: 'Стандарт',
            price: '8.900 руб.',
            desc: [
                '4-6 карточек',
                'улучшенная обработка фото',
                'проработка преимуществ и размеров.',
            ],
            button: 'заказать карточку товара',
        },
        {
            title: 'Максимум',
            price: '14.900 руб.',
            desc: [
                '7-10 карточек',
                'индивидуальная концепция',
                'глубокая ретушь',
                'расширенный контент-пакет.',
            ],
            button: 'заказать карточку товара',
        },
    ];
    return (
        <section id="price" className=" relative z-10 mt-[8.5vw]">
            <h2>Стоимость</h2>
            <div className=" flex flex-col gap-5">
                <div className="flex justify-between flex-col lg:flex-row gap-7.5 mt-10">
                    {prices.map((price, index) => (
                        <div
                            key={index}
                            className=" w-full border-3 border-active rounded-3xl p-5 pt-10 flex flex-col shadow-main"
                        >
                            <p className=" text-black font-semibold">{price.title}</p>
                            <div className=" mt-3 font-bold text-7xl text-yellow">
                                {price.price}
                            </div>
                            <div className=" mt-14">
                                {price.desc.map((line, index) => (
                                    <p key={index} className="leading-7 text-black">
                                        {line}
                                    </p>
                                ))}
                            </div>
                            <div className=" mt-auto">
                                <Button
                                    value="default"
                                    size="default"
                                    className=" mt-5 w-full"
                                    onClick={() => setIsContactOpen(true)}
                                >
                                    {price.button}
                                </Button>

                                {/* Модальное окно контактов */}
                                <ContactFormModal
                                    isOpen={isContactOpen}
                                    onClose={() => setIsContactOpen(false)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
