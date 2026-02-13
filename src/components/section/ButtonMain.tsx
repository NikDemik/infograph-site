'use client'

import { useState } from 'react';
import ContactFormModal from '../modals/ContactFormModal';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { slideInFromBottom, viewportOptions } from '@/utils/motion';

export default function ButtonHome() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <section className="relative w-full mt-10 overflow-hidden">
            <motion.div
                id="buttonMain"
                variants={slideInFromBottom(0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-5 px-6"
            >
                <Button size="home" variant="home" onClick={() => setIsContactOpen(true)}>
                    Заказать инфографику под ключ
                </Button>

                {/* Модальное окно контактов */}
                <ContactFormModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

                <div className="flex items-center justify-center">
                    <p className=" text-center">
                        Карточки, которые продают, а не просто <br className="md:hidden" />
                        показывают.
                        <br />
                        <span className="hidden md:block">
                            Ваш товар. Наша визуальная эффективность
                        </span>
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
