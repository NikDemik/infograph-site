'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function SectionShell({ children }: { children: React.ReactNode }) {
    return (
        <section className="relative overflow-visible mt-32">
            {/* ФОНОВЫЕ ОБЪЕКТЫ */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                {/* Объект 1 — синяя звезда */}
                <motion.div
                    animate={{
                        y: [-10, 10, -10],
                        x: [0, 5, 0],
                        scale: [1, 1.1, 1], // Плавное приближение-отдаление
                        rotate: [15, 50, 15],
                    }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    <Image
                        src="/img/blue-star.png"
                        width={566}
                        height={566}
                        alt="Картинка фона синяя звезда"
                        className="
                        hidden 
                        md:block
                        absolute
                        top-[40vh]
                        -right-[max(16px,calc((100vw-1530px)/2-60px))]
                        w-[clamp(260px,28vw,420px)]
                        h-auto
                    "
                    />
                </motion.div>

                {/* Объект 2 — второй элемент выше */}
                <motion.div
                    animate={{
                        y: [-15, 15, -15],
                        x: [0, 8, 0],
                        scale: [1, 1.05, 1], // Более заметное изменение масштаба
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 3,
                    }}
                >
                    <Image
                        src="/img/yellow-star.png"
                        width={555}
                        height={555}
                        alt="Картинка фона желтая звезда"
                        className="
                        hidden 
                        md:block
                        absolute
                        top-[160vh]
                        -left-[max(16px,calc((100vw-1530px)/2-60px))]
                        w-[clamp(260px,28vw,420px)]
                        h-auto
                    "
                    />
                </motion.div>
            </div>

            {/* КОНТЕНТ */}
            <div className="relative z-10">{children}</div>
        </section>
    );
}
