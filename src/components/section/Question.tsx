'use client';

import { useState } from 'react';
import Image from 'next/image';
import PlusMinusIcon from '@/components/ui/plusMinusIcon';

export default function Question() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState<string>('usage');

    const handleAccordionToggle = (id: string): void => {
        setActiveAccordion(activeAccordion === id ? '' : id);
    };

    const questions = [
        {
            title: 'Можно ли получить исходники своих слайдов?',
            answer: 'Мы можем провести Анализ вашей ниши, товара, конкурентов с помощью сервисов аналитики, и дать подробные рекомендации по продвижению вашего товара, и выстроить продающую смысловую нагрузку в вашей карточке.',
        },
        {
            title: 'Работаете ли вы по договору?',
            answer: 'Мы можем провести Анализ вашей ниши, товара, конкурентов с помощью сервисов аналитики, и дать подробные рекомендации по продвижению вашего товара, и выстроить продающую смысловую нагрузку в вашей карточке.',
        },
        {
            title: 'Как будет проходить работа?',
            answer: 'Мы можем провести Анализ вашей ниши, товара, конкурентов с помощью сервисов аналитики, и дать подробные рекомендации по продвижению вашего товара, и выстроить продающую смысловую нагрузку в вашей карточке.',
        },
        {
            title: 'Что делать, если я еще не знаю, какой текст и наполнение будет на каждом из слайдов?',
            answer: 'Мы можем провести Анализ вашей ниши, товара, конкурентов с помощью сервисов аналитики, и дать подробные рекомендации по продвижению вашего товара, и выстроить продающую смысловую нагрузку в вашей карточке.',
        },
    ];

    return (
        <section id="price" className=" relative z-10 mt-[8.5vw]">
            <h2>Вопросы</h2>
            <div className=" flex flex-col gap-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-7.5 mt-14">
                    <div className=" flex flex-col gap-7.5 justify-between">
                        {questions.map((question, index) => (
                            <div
                                key={index}
                                className=" flex flex-col gap-5 justify-between w-full bg-gray-light rounded-[20px] p-5 shadow-main "
                            >
                                <div className=" flex justify-between gap-24 items-center content-center">
                                    <p className=" text-black leading-6 ">{question.title}</p>
                                    <div className=" bg-black rounded-full w-10 h-10 aspect-square relative">
                                        <PlusMinusIcon
                                            variant="simple"
                                            color="black"
                                            size="small"
                                            onToggle={() => handleAccordionToggle('usage')}
                                        />
                                    </div>
                                </div>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${
                                        activeAccordion === 'usage'
                                            ? 'max-h-96 opacity-100'
                                            : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    {question.answer}
                                </div>
                                {/* <p className=" text-[1.25rem] text-black font-semibold">
                                    от {question.answer} ₽
                                </p> */}
                            </div>
                        ))}
                    </div>
                    <div className="hidden lg:block relative">
                        <div className=" absolute -top-[50%] left-[30%] w-150 h-150 transform ">
                            <Image src="/img/dog.png" fill alt="Крестик маленький" />
                        </div>
                        <div className=" absolute bottom-0 left-[10%] w-95 h-95 transform pointer-events-none">
                            <Image src="/img/arrow.png" fill alt="Крестик" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
