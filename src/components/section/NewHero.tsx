'use client';

import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function NewHero() {
    return (
        <motion.section
            initial="hidden"
            animate="visible"
            className=" w-full hidden md:block mt-12 overflow-hidden"
        >
            <div className="relative z-10 h-150 rounded-3xl overflow-hidden">
                <div className=" absolute top-0 left-0 w-full h-full">
                    <Image src="/img/bg-banner.png" fill alt="Баннер" />
                </div>
                <div className=" absolute top-0 left-0 w-full h-full">
                    <div className=" flex justify-center items-center h-full">
                        <Image src="/img/circle-hero.svg" width={85} height={85} alt="Круг" />
                    </div>
                </div>
                <div className=" grid grid-cols-12 h-full">
                    <div className="col-start-1 col-span-6 bg-banner-blur h-full z-30"></div>
                </div>
            </div>
            {/* <motion.div variants={slideInFromTop} className="relative z-10">
                <Image src="/img/banner.png" width={1530} height={600} alt="Баннер" />
                <motion.div
                    variants={slideInFromRight(0.8)}
                    className="absolute top-[11%] left-[4%]"
                >
                    <h1 className=" text-[5rem] text-black font-bold leading-none">Инфографика</h1>
                    <p>
                        Создадим грамотное и стильное оформление вашего товара, основываясь на
                        анализе конкурентов и ключевых преимуществах продукта
                    </p>
                </motion.div>
            </motion.div> */}
        </motion.section>
    );
}
