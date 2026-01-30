'use client';

import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroBanner() {
    return (
        <motion.section
            initial="hidden"
            animate="visible"
            className=" w-full hidden md:block mt-12 overflow-hidden"
        >
            <motion.div variants={slideInFromTop} className="relative z-10">
                <Image src="/img/banner.png" width={1530} height={600} alt="Баннер" />
                <motion.div
                    variants={slideInFromRight(0.8)}
                    className="absolute top-[11%] left-[4%]"
                >
                    {/* <h1 className=" text-[5rem] text-black font-bold leading-none">Инфографика</h1> */}
                    {/* <p>
                        Создадим грамотное и стильное оформление вашего товара, основываясь на
                        анализе конкурентов и ключевых преимуществах продукта
                    </p> */}
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
