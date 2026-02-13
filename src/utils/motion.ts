import { Variants, TargetAndTransition, Transition } from 'framer-motion';

export function slideInFromLeft(delay: number) {
    return {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            },
        },
    };
}

export function slideInFromRight(delay: number) {
    return {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            },
        },
    };
}

export const slideInFromTop = {
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 0.5,
        },
    },
};

// Анимация появления снизу
export function slideInFromBottom(delay: number = 0) {
    return {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
                ease: 'easeOut' as const,
            },
        },
    };
}

// Добавляем опции для viewport
export const viewportOptions = {
    once: true, // Анимация сработает только один раз
    amount: 0.2, // Какая часть элемента должна быть видна (0.3 = 30%)
    margin: '0px 0px -50px 0px', // Опционально: смещение триггера
};

// Контейнер для управления последовательностью дочерних анимаций
export const containerDelay = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Задержка между анимациями дочерних элементов
            delayChildren: 0.3, // Общая задержка перед началом последовательности
        },
    },
} as Variants;

// Вариант анимации с индивидуальной задержкой для map
export const variantDelayMap = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            // delay: custom * delay,
            duration: 0.5,
            ease: 'easeOut' as const,
        },
    }),
} as Variants;

// Анимации
export function floatAnimation(speed: number = 20): TargetAndTransition {
    const transition: Transition = {
        y: {
            duration: speed,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
        },
        rotate: {
            duration: speed,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
        },
    };

    return {
        y: [0, -30, 0],
        rotate: [0, -40, 0],
        transition,
    };
}

export function spinAnimation(speed: number = 20): TargetAndTransition {
    const transition: Transition = {
        duration: speed,
        repeat: Infinity,
        ease: 'linear',
    };

    return {
        rotate: [0, 360],
        transition,
    };
}

export function pulseAnimation(speed: number = 2): TargetAndTransition {
    const transition: Transition = {
        duration: speed,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
    };

    return {
        scale: [1, 1.15, 1],
        opacity: [0.7, 1, 0.7],
        transition,
    };
}
