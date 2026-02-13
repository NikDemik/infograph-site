'use client';

import { slideInFromLeft, containerDelay, viewportOptions, slideInFromRight } from '@/utils/motion';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

export default function NoFound() {
    const router = useRouter();
    return (
        <motion.section
            id="works"
            variants={containerDelay}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="relative z-10"
        >
            <div className=" flex flex-col gap-5">
                <div className="flex gap-10">
                    <motion.h1
                        variants={slideInFromLeft(0)}
                        className=" text-[20vw] font-extrabold leading-none text-black"
                    >
                        404
                    </motion.h1>
                    <motion.h1
                        variants={slideInFromRight(0)}
                        className=" text-[20vw] font-extrabold leading-none text-black"
                    >
                        {':('}
                    </motion.h1>
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-center ">
                    <motion.p
                        variants={slideInFromLeft(0.4)}
                        className=" mt-10 text-black font-medium leading-none"
                    >
                        что-то случилось, уже чиним... товаров и качество исполнения.
                        <br />
                        извините...
                    </motion.p>
                    <Button
                        variant="default"
                        size="small"
                        onClick={() => router.push('/')}
                        asChild
                        className="mt-10 lg:mt-0"
                    >
                        на главную
                    </Button>
                </div>
            </div>
        </motion.section>
    );
}
