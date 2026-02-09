'use client';

import { useState } from 'react';
import ContactFormModal from '../modals/ContactFormModal';
import Image from 'next/image';
import { Button } from '../ui/button';

export default function HowWork() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const datas = [
        {
            title: 'Брифинг и анализ товара',
            desc: 'Определяем ключевые характеристики, аудиторию и требования маркетплейса.',
        },
        {
            title: 'Разработка концепции',
            desc: 'Формируем визуальное решение и структуру будущей карточки.',
        },
        {
            title: 'Подготовка материалов',
            desc: 'Обрабатываем фото, создаём инфографику, собираем контент.',
        },
        {
            title: 'Верстка карточек',
            desc: 'Собираем финальные макеты в соответствии с техническими требованиями площадки.',
        },
        {
            title: 'Сдача и корректировки',
            desc: 'Передаём готовые материалы и вносим необходимые правки.',
        },
        { title: 'Все!', desc: '' },
    ];
    return (
        <section id="how-work" className="relative z-10 mt-[4.5vw] md:py-11 md:bg-gray-light">
            {/* Фон, который выходит за пределы контейнера */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen md:bg-gray-light -z-10 dark:bg-gray-900" />

            <h2>Как мы работаем</h2>
            <div className=" flex flex-col gap-5">
                <div className=" hidden md:flex justify-between ">
                    <p className=" mt-5 hidden md:block">
                        Понятная и выверенная последовательность действий,
                        <br />
                        обеспечивающая стабильный результат.
                    </p>
                </div>

                {/* Контент десктоп */}
                <div className=" hidden md:grid grid-cols-1 md:grid-cols-4 gap-7.5">
                    <div className=" col-span-1 hidden xl:flex">
                        <Image
                            src="/img/how-work-new.png"
                            width={458}
                            height={660}
                            alt="Инфографика как мы работаем"
                            className=" transform scale-130 -translate-x-18 translate-y-22"
                        />
                    </div>
                    <div className="grid col-span-4 col-start-1 xl:col-span-3 xl:col-start-2 ">
                        <div className="flex flex-col gap-28">
                            {/* Карточки с 1-3 */}
                            <div className="w-full">
                                {/* Первая полоса */}
                                <div className="pr-[17vw]">
                                    <svg
                                        className="w-full h-10 max-w-205.25"
                                        viewBox="0 0 821 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <rect
                                            width="781"
                                            height="8"
                                            transform="matrix(-1 0 0 1 801 16)"
                                            fill="url(#paint0_linear_2327_102)"
                                        />
                                        <circle
                                            cx="19.6078"
                                            cy="19.6078"
                                            r="19.6078"
                                            transform="matrix(-1 0 0 1 39.2158 0)"
                                            fill="#694FD7"
                                        />
                                        <circle
                                            cx="19.6078"
                                            cy="19.6078"
                                            r="19.6078"
                                            transform="matrix(-1 0 0 1 430.216 0)"
                                            fill="#AE9BDC"
                                        />
                                        <circle
                                            cx="19.6078"
                                            cy="19.6078"
                                            r="19.6078"
                                            transform="matrix(-1 0 0 1 820.216 0)"
                                            fill="#DED0DF"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_2327_102"
                                                x1="0"
                                                y1="4"
                                                x2="781"
                                                y2="4"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#E3D5DF" />
                                                <stop offset="1" stopColor="#694FD7" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                {/*Первые ряд карточки */}
                                <div className="grid grid-cols-3 gap-7.5 mt-5">
                                    {datas.slice(0, 3).map((data, index) => (
                                        <div key={index} className=" w-full max-w-67.5 h-39.75 ">
                                            <div>
                                                <div className=" text-xl font-semibold mb-2">
                                                    {data.title}
                                                </div>
                                                <p className="">{data.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Карточки с 4-6 */}
                            <div className="w-full">
                                {/* Вторая полоса */}
                                <div className="pr-[17vw]">
                                    <svg
                                        className="w-full h-10 max-w-205.25"
                                        viewBox="0 0 821 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <path
                                            d="M800.608 0C811.437 0.000227816 820.216 8.77864 820.216 19.6074C820.216 30.4364 811.437 39.2156 800.608 39.2158C791.289 39.2158 783.488 32.7144 781.494 24H429.722C427.727 32.7143 419.927 39.2156 410.608 39.2158C401.289 39.2158 393.488 32.7144 391.494 24H38.7217C36.7274 32.7143 28.9273 39.2156 19.6084 39.2158C8.77929 39.2158 0 30.4365 0 19.6074C0.000227818 8.7785 8.77943 0 19.6084 0C29.2047 0.000201888 37.1891 6.89449 38.8828 16H391.333C393.027 6.89435 401.012 0 410.608 0C420.205 0.000201888 428.189 6.89449 429.883 16H781.333C783.027 6.89435 791.012 0 800.608 0Z"
                                            fill="url(#paint0_linear_2328_204)"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_2328_204"
                                                x1="689.216"
                                                y1="19.6079"
                                                x2="1.71418e-06"
                                                y2="19.6079"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#FFC300" />
                                                <stop offset="1" stopColor="#DFD8FF" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                {/* Второй ряд карточек */}
                                <div className="grid grid-cols-3 gap-7.5 mt-5">
                                    {datas.slice(3, 6).map((data, index) => (
                                        <div key={index} className=" w-full max-w-67.5 h-39.75 ">
                                            <div>
                                                <div className=" text-xl font-semibold mb-2">
                                                    {data.title}
                                                </div>
                                                <p className="">{data.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Контент мобильный */}
                <div className=" flex md:hidden justify-start mt-10 gap-5">
                    <svg
                        width="26"
                        height="851"
                        viewBox="0 0 26 851"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15.0355 439.862L15.0355 12.7682L9.92829 12.7682L9.92827 439.862L15.0355 439.862Z"
                            fill="url(#paint0_linear_2105_123)"
                        />
                        <circle
                            cx="12.5178"
                            cy="12.5178"
                            r="12.5178"
                            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 25.0355 25.0356)"
                            fill="#694FD7"
                        />
                        <circle
                            cx="12.5178"
                            cy="12.5178"
                            r="12.5178"
                            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 25.0355 190.071)"
                            fill="#AE9BDC"
                        />
                        <circle
                            cx="12.5178"
                            cy="12.5178"
                            r="12.5178"
                            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 25.0355 355.107)"
                            fill="#DED0DF"
                        />
                        <path
                            d="M15.0355 846.072L15.0355 425.072L10.0355 425.072L10.0355 846.072L15.0355 846.072Z"
                            fill="url(#paint1_linear_2105_123)"
                        />
                        <circle
                            cx="12.5178"
                            cy="12.5178"
                            r="12.5178"
                            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 25.0355 520.143)"
                            fill="#E0D7F6"
                        />
                        <circle
                            cx="12.5178"
                            cy="12.5178"
                            r="12.5178"
                            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 25.0355 850.214)"
                            fill="#FCC105"
                        />
                        <circle
                            cx="12.5178"
                            cy="12.5178"
                            r="12.5178"
                            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 25.0355 685.178)"
                            fill="#F2CC67"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_2105_123"
                                x1="12.4819"
                                y1="439.862"
                                x2="12.4819"
                                y2="12.7682"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#E3D5DF" />
                                <stop offset="1" stopColor="#694FD7" />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_2105_123"
                                x1="12.5355"
                                y1="846.072"
                                x2="12.5355"
                                y2="425.072"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#FFC300" />
                                <stop offset="1" stopColor="#DFD8FF" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div>
                        {datas.map((data, index) => (
                            <div
                                key={index}
                                className={`w-full max-w-67.5 ${index < 5 ? 'h-41' : 'h-auto'}`}
                            >
                                <div>
                                    <div className=" text-xl font-semibold mb-2">{data.title}</div>
                                    <p className="">{data.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Кнопка Связаться с нами  */}
                <div className="mt-10 md:mt-0 flex md:justify-end">
                    <Button value="default" size="default" onClick={() => setIsContactOpen(true)}>
                        связать с нами
                    </Button>
                    {/* Модальное окно контактов */}
                    <ContactFormModal
                        isOpen={isContactOpen}
                        onClose={() => setIsContactOpen(false)}
                    />
                </div>
            </div>
        </section>
    );
}
