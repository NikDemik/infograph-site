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
                    className="absolute top-[56%] left-[50%]"
                >
                    <h1 className=" text-[2.5vw] font-bold leading-none">
                        Выйди в ТОП
                        <br /> — подай заявку уже сегодня
                    </h1>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
