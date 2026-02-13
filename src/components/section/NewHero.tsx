'use client';

import {
    floatAnimation,
    pulseAnimation,
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
    spinAnimation,
} from '@/utils/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function NewHero() {
    return (
        <motion.section
            initial="hidden"
            animate="visible"
            className=" w-full hidden md:block mt-12 overflow-hidden"
        >
            <div className="relative z-10 rounded-3xl overflow-hidden">
                <motion.div
                    variants={slideInFromTop}
                    className=" absolute top-0 left-0 w-full h-full"
                >
                    <Image src="/img/bg-banner.png" fill alt="Баннер" />
                </motion.div>
                <div className=" absolute top-0 left-0 w-full h-full">
                    <div className=" flex justify-center items-center h-full">
                        <Image src="/img/circle-hero.svg" width={85} height={85} alt="Круг" />
                    </div>
                </div>
                <div className=" grid grid-cols-12 h-full">
                    <motion.div
                        variants={slideInFromLeft(0.8)}
                        className="col-start-1 col-span-6 bg-banner-blur h-full z-30 px-14 py-14"
                    >
                        <div className="flex flex-col justify-between gap-[12vw] h-full">
                            <div>
                                <h1 className=" text-[4.2vw] font-bold text-black ">Инфографика</h1>
                                <p className=" text-black mt-5 max-w-137">
                                    Создадим грамотное и стильное оформление вашего товара,
                                    основываясь на анализе конкурентов и ключевых преимуществах
                                    продукта
                                </p>
                            </div>
                            <div className=" flex gap-4 z-40">
                                <Image
                                    src="/icons/wildb.png"
                                    width={58}
                                    height={58}
                                    alt="wildberries"
                                />
                                <Image src="/icons/ozon.png" width={58} height={58} alt="ozon" />
                                <Image
                                    src="/icons/ym.png"
                                    width={58}
                                    height={58}
                                    alt="yandex market"
                                />
                                <Image src="/icons/avito.png" width={58} height={58} alt="avito" />
                            </div>
                        </div>
                    </motion.div>
                    <div className="col-start-7 col-span-6 z-30 relative pointer-events-none">
                        <motion.div
                            variants={slideInFromRight(0.6)}
                            animate={pulseAnimation(40)}
                            className=" absolute top-0 left-1/10 w-[21vw] h-[21vw]"
                        >
                            <Image
                                src="/img/figma-icon-3d.png"
                                fill
                                alt="Фигма"
                                className="object-contain transform rotate-x-12"
                            />
                        </motion.div>
                        <motion.div
                            variants={slideInFromRight(1)}
                            animate={pulseAnimation(60)}
                            className="absolute top-0 left-3/6 w-[17vw] h-[17vw]"
                        >
                            <Image src="/img/ps-icon-3d.png" fill alt="Фотошоп" />
                        </motion.div>
                        <motion.div
                            variants={slideInFromRight(1.4)}
                            animate={floatAnimation(40)}
                            className="absolute top-3/6 left-2/6 w-[12vw] h-[12vw] "
                        >
                            <Image src="/img/ai-icon-3d.png" fill alt="Илюстратор" />
                        </motion.div>
                    </div>
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
