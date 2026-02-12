import React, { useState } from 'react';

// Типы для пропсов компонента
export type PlusMinusIconSize = 'small' | 'medium' | 'large';
export type PlusMinusIconVariant = 'simple' | 'rotate' | 'cross';
export type PlusMinusIconColor = 'blue' | 'green' | 'red' | 'purple' | 'indigo' | 'teal' | 'black';

export interface PlusMinusIconProps {
    /** Размер иконки */
    size?: PlusMinusIconSize;
    /** Вариант анимации */
    variant?: PlusMinusIconVariant;
    /** Цветовая схема */
    color?: PlusMinusIconColor;
    /** Функция обратного вызова при переключении состояния */
    onToggle?: (isPlus: boolean) => void;
    /** Начальное состояние (true = плюс, false = минус) */
    initialState?: boolean;
    /** Дополнительные CSS классы для контейнера */
    className?: string;
    /** Отключение интерактивности */
    disabled?: boolean;
    /** Текст для скринридеров */
    ariaLabel?: string;
}

// Интерфейс для опций размера
interface SizeOptions {
    container: string;
    icon: string;
    lineWidth: string;
    lineHeight: string;
    lineVertWidth: string;
}

// Интерфейс для цветовых схем
interface ColorScheme {
    plus: string;
    minus: string;
    textPlus: string;
    textMinus: string;
}

const PlusMinusIcon: React.FC<PlusMinusIconProps> = ({
    size = 'medium',
    variant = 'simple',
    color = 'blue',
    onToggle,
    initialState = true,
    className = '',
    disabled = false,
    ariaLabel = 'Переключить иконку плюс/минус',
}) => {
    // const [isPlus, setIsPlus] = useState<boolean>(initialState);

    // Опции размера
    const sizeOptions: Record<PlusMinusIconSize, SizeOptions> = {
        small: {
            container: 'w-10 h-10',
            icon: 'w-4 h-4',
            lineWidth: 'w-4',
            lineHeight: 'h-0.5',
            lineVertWidth: 'w-0.5',
        },
        medium: {
            container: 'w-12 h-12',
            icon: 'w-6 h-6',
            lineWidth: 'w-4',
            lineHeight: 'h-1',
            lineVertWidth: 'w-1',
        },
        large: {
            container: 'w-20 h-20',
            icon: 'w-10 h-10',
            lineWidth: 'w-5',
            lineHeight: 'h-2',
            lineVertWidth: 'w-2',
        },
    };

    // Цветовые схемы
    const colorSchemes: Record<PlusMinusIconColor, ColorScheme> = {
        black: {
            plus: 'bg-black',
            minus: 'bg-black',
            textPlus: 'text-blue-600',
            textMinus: 'text-indigo-600',
        },
        blue: {
            plus: 'bg-gradient-to-r from-blue-500 to-indigo-600',
            minus: 'bg-gradient-to-r from-indigo-500 to-purple-600',
            textPlus: 'text-blue-600',
            textMinus: 'text-indigo-600',
        },
        green: {
            plus: 'bg-gradient-to-r from-emerald-500 to-teal-600',
            minus: 'bg-gradient-to-r from-teal-500 to-cyan-600',
            textPlus: 'text-emerald-600',
            textMinus: 'text-teal-600',
        },
        red: {
            plus: 'bg-gradient-to-r from-rose-500 to-pink-600',
            minus: 'bg-gradient-to-r from-pink-500 to-rose-600',
            textPlus: 'text-rose-600',
            textMinus: 'text-pink-600',
        },
        purple: {
            plus: 'bg-gradient-to-r from-purple-500 to-violet-600',
            minus: 'bg-gradient-to-r from-violet-500 to-fuchsia-600',
            textPlus: 'text-purple-600',
            textMinus: 'text-violet-600',
        },
        indigo: {
            plus: 'bg-gradient-to-r from-indigo-500 to-blue-600',
            minus: 'bg-gradient-to-r from-blue-500 to-indigo-600',
            textPlus: 'text-indigo-600',
            textMinus: 'text-blue-600',
        },
        teal: {
            plus: 'bg-gradient-to-r from-teal-500 to-emerald-600',
            minus: 'bg-gradient-to-r from-emerald-500 to-teal-600',
            textPlus: 'text-teal-600',
            textMinus: 'text-emerald-600',
        },
    };

    const currentSize = sizeOptions[size];
    const currentColor = colorSchemes[color];

    const isPlus = initialState;

    const handleClick = (): void => {
        if (disabled) return;

        // Не меняем внутреннее состояние, просто вызываем onToggle
        if (onToggle) onToggle(!isPlus);
    };

    // Рендеринг иконки в зависимости от варианта
    const renderIcon = (): React.ReactNode => {
        const baseLineClasses = `absolute bg-gray-pantone rounded ${currentSize.lineHeight}`;

        switch (variant) {
            case 'simple':
                return (
                    <div className={`relative ${currentSize.icon}`}>
                        {/* Горизонтальная линия */}
                        <div
                            className={`${baseLineClasses} top-1/2 left-0 w-full transform -translate-y-1/2 transition-all duration-300`}
                        />
                        {/* Вертикальная линия */}
                        <div
                            className={`${baseLineClasses} top-0 left-1/2 ${currentSize.lineVertWidth} h-full transform -translate-x-1/2 transition-all duration-300 ${
                                isPlus ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                            }`}
                        />
                    </div>
                );

            case 'rotate':
                return (
                    <div className={`relative ${currentSize.icon}`}>
                        {/* Горизонтальная линия */}
                        <div
                            className={`${baseLineClasses} top-1/2 left-0 w-full transform -translate-y-1/2 transition-all duration-300`}
                        />
                        {/* Вертикальная линия */}
                        <div
                            className={`${baseLineClasses} top-0 left-1/2 ${currentSize.lineVertWidth} h-full transform -translate-x-1/2 transition-all duration-300 ${
                                isPlus
                                    ? 'opacity-100 scale-y-100 rotate-0'
                                    : 'opacity-0 scale-y-0 rotate-90'
                            }`}
                        />
                    </div>
                );

            case 'cross':
                return (
                    <div className={`relative ${currentSize.icon}`}>
                        {/* Горизонтальная линия */}
                        <div
                            className={`${baseLineClasses} top-1/2 left-0 w-full transform -translate-y-1/2 transition-all duration-300 ${
                                isPlus ? 'rotate-0' : '-rotate-45'
                            }`}
                        />
                        {/* Вертикальная линия */}
                        <div
                            className={`${baseLineClasses} top-0 left-1/2 ${currentSize.lineVertWidth} h-full transform -translate-x-1/2 transition-all duration-300 ${
                                isPlus ? 'rotate-0' : 'rotate-135'
                            }`}
                        />
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className={`flex flex-col items-center ${className}`}>
            <button
                onClick={handleClick}
                disabled={disabled}
                className={`
                    rounded-full flex items-center justify-center  
                    hover:shadow-xl transition-all duration-300 
                    ${currentSize.container} 
                    ${isPlus ? currentColor.plus : currentColor.minus}
                    ${variant === 'rotate' ? (isPlus ? 'rotate-0' : 'rotate-180') : ''}
                    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-105'}
                `}
                style={{
                    transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                }}
                aria-label={ariaLabel}
                aria-pressed={!isPlus}
            >
                {renderIcon()}
            </button>

            {/* <div className="mt-3 text-center">
                <p className="text-gray-700 font-medium">
                    Состояние:{' '}
                    <span className={isPlus ? currentColor.textPlus : currentColor.textMinus}>
                        {isPlus ? 'Плюс' : 'Минус'}
                    </span>
                </p>
                {!disabled && (
                    <p className="text-sm text-gray-500 mt-1">Нажмите для переключения</p>
                )}
            </div> */}
        </div>
    );
};;

export default PlusMinusIcon;
