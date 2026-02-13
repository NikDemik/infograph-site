'use client';

import Image from 'next/image';

import { slideInFromLeft, containerDelay, variantDelayMap, viewportOptions } from '@/utils/motion';
import { motion } from 'framer-motion';

export default function Deadlines() {
    return (
        <motion.section
            id="deadlines"
            variants={containerDelay(0.2, 0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="relative z-10 mt-[8.5vw] py-16 md:py-25.5 md:pl-64"
        >
            {/* Фон, который выходит за пределы контейнера */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[99vw] bg-gray-light -z-10 rounded-b-3xl md:rounded-b-none" />

            {/* Картинка рядом с текстом десктоп */}
            <motion.div
                variants={slideInFromLeft(0.2)}
                className=" absolute -top-25 -left-50 hidden md:block"
            >
                <Image src="/img/lightning.png" width={501} height={501} alt="Молния" />
            </motion.div>

            {/* Картинка рядом с текстом мобильная */}
            <motion.div
                variants={slideInFromLeft(0.2)}
                className=" absolute top-47.5 right-0 md:hidden"
            >
                <Image src="/img/lightning.png" width={301} height={301} alt="Молния" />
            </motion.div>

            <motion.h2 variants={slideInFromLeft(0)}>Сроки</motion.h2>
            <motion.div variants={slideInFromLeft(0.4)} className=" flex flex-col gap-5">
                <p className=" mt-5">
                    Сроки зависят от объёма и тарифа, полноценная инфографика делается за 2–4
                    рабочих дня. Сложные проекты согласуем заранее. Есть ускоренный режим. Мы сдаём
                    материалы строго в срок и полностью готовыми к загрузке.
                </p>
            </motion.div>
        </motion.section>
    );
}
