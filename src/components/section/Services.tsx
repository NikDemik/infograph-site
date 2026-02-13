'use client';

import { useState } from 'react';
import ContactFormModal from '../modals/ContactFormModal';
import { Button } from '../ui/button';
import Image from 'next/image';

import {
    slideInFromLeft,
    containerDelay,
    variantDelayMap,
    viewportOptions,
    slideInFromRight,
    floatAnimation,
    spinAnimation,
    pulseAnimation,
} from '@/utils/motion';
import { motion } from 'framer-motion';

export default function Services() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const services = [
        {
            name: 'Предметная фотосъемка',
            price: '300',
        },
        {
            name: 'Статичные рекламные баннеры',
            price: '300',
        },
        {
            name: 'Логотипы',
            price: '300',
        },
        {
            name: 'Дизайн сайтов',
            price: '300',
        },
    ];

    return (
        <motion.section
            variants={containerDelay}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            id="services"
            className=" relative z-10 mt-[8.5vw]"
        >
            <motion.h2 variants={slideInFromLeft(0)}>Дополнительные услуги</motion.h2>
            <div className=" flex flex-col gap-5">
                <div className=" hidden md:flex justify-between ">
                    <motion.p variants={slideInFromLeft(0.4)} className=" mt-5 hidden md:block">
                        Помимо инфографики мы также предоставляем другие дизайн-услуги под любые
                        нужды
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-7.5 mt-14">
                    <div className=" flex flex-col gap-7.5 justify-between">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={variantDelayMap}
                                custom={index}
                                className=" flex flex-col gap-5 lg:flex-row justify-between items-center w-full bg-gray-light rounded-[20px] p-5 shadow-main"
                            >
                                <h4 className=" leading-6">{service.name}</h4>
                                <div className=" flex justify-between items-center gap-5">
                                    <p className=" text-[1.25rem] text-black font-semibold">
                                        от {service.price} ₽
                                    </p>

                                    {/* Кнопка Узнать подробнее  */}
                                    <Button
                                        variant="default"
                                        size="small"
                                        onClick={() => setIsContactOpen(true)}
                                    >
                                        Узнать подробнее
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                        {/* Модальное окно контактов */}
                        <ContactFormModal
                            isOpen={isContactOpen}
                            onClose={() => setIsContactOpen(false)}
                        />
                    </div>
                    <div className="hidden lg:block relative">
                        <motion.div
                            variants={slideInFromRight(0.4)}
                            animate={floatAnimation(40)}
                            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                            className=" absolute -top-[10%] left-[10%] w-65 h-65 transform -rotate-28"
                        >
                            <Image src="/img/cross.png" fill alt="Крестик маленький" />
                        </motion.div>
                        <motion.div
                            variants={slideInFromRight(0.8)}
                            animate={spinAnimation(100)}
                            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                            className=" absolute -bottom-[20%] right-0 w-95 h-95 transform"
                        >
                            <Image src="/img/cross.png" fill alt="Крестик" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
