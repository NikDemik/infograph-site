'use client';

import { useState } from 'react';
import Image from 'next/image';
import PlusMinusIcon from '@/components/ui/plusMinusIcon';

export default function Question() {
    // Храним ID открытого аккордеона (или null, если все закрыты)
    const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

    const handleAccordionToggle = (id: string): void => {
        setActiveAccordion(activeAccordion === id ? null : id);
    };

    const questions = [
        {
            id: 'q1',
            title: 'Можно ли получить исходники своих слайдов?',
            answer: 'Да! При необходимости мы подготовим и предоставим вам проект от каждого слайда. В таком случае стоимость заказа увеличится на 10%.',
        },
        {
            id: 'q2',
            title: 'Работаете ли вы по договору?',
            answer: 'Да, при необходимости можем заключить договор! Мы принимаем оплату на расчетный счет, также предоставляем чеки для Физ.лиц и все необходимые закрывающие документы для Юр.лиц.',
        },
        {
            id: 'q3',
            title: 'Как будет проходить работа?',
            answer: 'После оплаты с вами свяжется менеджер для обсуждения подробного тех.задания на основе референсов по стилистике, чтобы вы и мы понимали, какой результат хотим получить по итогам работы. Далее ваш заказ отправляется в разработку, по готовности отправляется вам, и при необходимости вносятся правки.',
        },
        {
            id: 'q4',
            title: 'Что делать, если я еще не знаю, какой текст и наполнение будет на каждом из слайдов?',
            answer: 'Мы можем провести Анализ вашей ниши, товара, конкурентов с помощью сервисов аналитики, и дать подробные рекомендации по продвижению вашего товара, и выстроить продающую смысловую нагрузку в вашей карточке.',
        },
    ];

    return (
        <section id="price" className=" relative z-10 mt-[8.5vw]">
            <h2>Вопросы</h2>
            <div className=" flex flex-col gap-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-7.5 mt-14 relative">
                    <div className=" flex flex-col gap-7.5 justify-between">
                        {questions.map((question) => {
                            const isOpen = activeAccordion === question.id;

                            return (
                                <div
                                    key={question.id}
                                    className=" flex flex-col justify-between w-full bg-gray-light rounded-[20px] px-5 py-3 shadow-main "
                                >
                                    {/* Вопрос */}
                                    <div className=" flex justify-between gap-24 items-center content-center">
                                        <p className=" text-black leading-6 ">{question.title}</p>
                                        <div className="">
                                            <PlusMinusIcon
                                                variant="simple"
                                                color="black"
                                                size="small"
                                                initialState={!isOpen} // Плюс, если не открыт
                                                onToggle={() => handleAccordionToggle(question.id)}
                                                ariaLabel={
                                                    isOpen ? 'Свернуть ответ' : 'Развернуть ответ'
                                                }
                                            />
                                        </div>
                                    </div>
                                    {/* Ответ */}
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${
                                            isOpen
                                                ? 'max-h-96 opacity-100 mt-3'
                                                : 'max-h-0 opacity-0'
                                        }`}
                                    >
                                        <div className=" border-t-2 border-black w-full"></div>
                                        <p className=" mt-8 text-black leading-6">
                                            {question.answer}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="hidden lg:block">
                        <div className=" absolute -top-[60%] right-0 w-150 h-150 transform pointer-events-none">
                            <Image src="/img/dog.png" fill alt="Крестик маленький" />
                        </div>
                        <div className=" absolute top-[50%] right-[20%] w-80 h-80 transform pointer-events-none">
                            <Image src="/img/arrow.png" fill alt="Крестик" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
