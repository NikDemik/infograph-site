'use client';

import { slideInFromLeft, containerDelay, variantDelayMap, viewportOptions } from '@/utils/motion';
import { motion } from 'framer-motion';

export default function About() {
    const stats = [
        { label: '1000+', value: 'проектов' },
        { label: 'Под', value: 'ключ' },
        { label: 'Четкие', value: 'сроки' },
    ];

    return (
        <motion.section
            id="about"
            variants={containerDelay(0.2, 0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className=" relative z-10 mt-[8.5vw] hidden md:block"
        >
            <motion.h2 variants={slideInFromLeft(0)}>О нас</motion.h2>
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.p variants={slideInFromLeft(0.4)} className=" mt-5">
                    Мы создаём инфографику, которая помогает брендам уверенно занимать выдачу и
                    повышать конверсию. Работаем с акцентом на точность, чистый визуальный язык и
                    структурный подход. Фокусируемся на том, чтобы каждая карточка ясно передавала
                    ценность товара, выделяла его среди конкурентов и формировала доверие у
                    покупателей.
                </motion.p>
                <div className=" grid grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={variantDelayMap(0.4)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportOptions}
                            className=" w-full h-39.75 bg-active-light shadow-main rounded-3xl"
                        >
                            <div className="p-5">
                                <div className=" text-3xl xl:text-[2.5rem] font-inter font-extrabold text-active leading-8 mb-1">
                                    {stat.label}
                                </div>
                                <div className="font-inter font-extrabold text-xl text-active">
                                    {stat.value}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
