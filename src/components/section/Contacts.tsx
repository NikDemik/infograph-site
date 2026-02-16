'use client';

import {
    slideInFromLeft,
    containerDelay,
    variantDelayMap,
    viewportOptions,
    slideInFromRight,
} from '@/utils/motion';
import { motion } from 'framer-motion';

import Image from 'next/image';
import ContactFormTelegram from '../contact/ContactFormTelegram';
import telegramIcon from '@/assets/svg/telegram.svg';
import siteIcon from '@/assets/svg/site.svg';
import phoneIcon from '@/assets/svg/phone.svg';
import mailIcon from '@/assets/svg/mail.svg';

export default function Contacts() {
    const contacts = [
        { icon: telegramIcon, type: 'telegram', value: 't.me/b2bstudio' },
        { icon: siteIcon, type: 'site', value: 'dizain-kartochek.ru' },
        { icon: phoneIcon, type: 'phone', value: '+7 (991) 588-41-93' },
        { icon: mailIcon, type: 'mail', value: ' info@dizain-kartochek.ru' },
    ];

    return (
        <motion.section
            id="contact"
            variants={containerDelay}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className=" relative grid grid-cols-1 lg:grid-cols-12 gap-7.5 -10 mt-[8.5vw] overflow-hidden md:overflow-visible"
        >
            {/* Картинка рядом с текстом десктоп */}
            <motion.div
                animate={{
                    y: [0, -300, 0],
                    x: [0, 0, 0],
                    scale: [1, 0.6, 1],
                }}
                transition={{
                    duration: 200,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 2,
                }}
                className=" absolute top-25 right-0 hidden md:block -z-10"
            >
                <Image src="/img/spiral.png" width={501} height={501} alt="Картинка фона спираль" />
            </motion.div>

            <div className=" col-span-1 lg:col-span-3">
                <motion.h2 variants={slideInFromLeft(0)}>Контакты</motion.h2>
                <div className=" mt-5 lg:mt-14 w-full flex flex-col gap-5 ">
                    {contacts.map((contact, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={variantDelayMap}
                            className="flex justify-start gap-6 p-5 bg-gradient-custom rounded-3xl"
                        >
                            <Image src={contact.icon} alt={contact.type} />
                            <p className=" text-[18px] text-black dark:text-white">
                                {contact.value}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
            <motion.div
                variants={slideInFromRight(0.6)}
                className=" mt-3 col-span-1 lg:col-span-7 lg:col-start-5"
            >
                <ContactFormTelegram />
            </motion.div>
        </motion.section>
    );
}
