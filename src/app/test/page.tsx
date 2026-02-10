'use client';

import { useState } from 'react';
import PlusMinusIcon, {
    PlusMinusIconSize,
    PlusMinusIconVariant,
    PlusMinusIconColor,
} from '@/components/ui/plusMinusIcon';

// Типы для демонстрационных опций
interface DemoOption {
    label: string;
    size: PlusMinusIconSize;
    variant: PlusMinusIconVariant;
    color: PlusMinusIconColor;
    description: string;
}

const App: React.FC = () => {
    const [activeAccordion, setActiveAccordion] = useState<string>('usage');
    const [selectedSize, setSelectedSize] = useState<PlusMinusIconSize>('medium');
    const [selectedVariant, setSelectedVariant] = useState<PlusMinusIconVariant>('simple');
    const [selectedColor, setSelectedColor] = useState<PlusMinusIconColor>('blue');

    // Демонстрационные опции
    const demoOptions: DemoOption[] = [
        {
            label: 'Простая',
            size: 'medium',
            variant: 'simple',
            color: 'blue',
            description: 'Базовая анимация превращения плюса в минус',
        },
        {
            label: 'С вращением',
            size: 'medium',
            variant: 'rotate',
            color: 'green',
            description: 'Иконка вращается при переключении',
        },
        {
            label: 'Крестик',
            size: 'medium',
            variant: 'cross',
            color: 'red',
            description: 'Плавное превращение плюса в крестик',
        },
    ];

    // Опции для селекторов
    const sizeOptions: { value: PlusMinusIconSize; label: string }[] = [
        { value: 'small', label: 'Маленький' },
        { value: 'medium', label: 'Средний' },
        { value: 'large', label: 'Большой' },
    ];

    const variantOptions: { value: PlusMinusIconVariant; label: string }[] = [
        { value: 'simple', label: 'Простая' },
        { value: 'rotate', label: 'С вращением' },
        { value: 'cross', label: 'Крестик' },
    ];

    const colorOptions: { value: PlusMinusIconColor; label: string }[] = [
        { value: 'blue', label: 'Синий' },
        { value: 'green', label: 'Зеленый' },
        { value: 'red', label: 'Красный' },
        { value: 'purple', label: 'Фиолетовый' },
        { value: 'indigo', label: 'Индиго' },
        { value: 'teal', label: 'Бирюзовый' },
    ];

    const handleIconToggle = (isPlus: boolean, label: string): void => {
        console.log(`Иконка "${label}" переключена в состояние: ${isPlus ? 'Плюс' : 'Минус'}`);
    };

    const handleAccordionToggle = (id: string): void => {
        setActiveAccordion(activeAccordion === id ? '' : id);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                {/* Заголовок */}
                <header className="text-center mb-10 md:mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                        Интерактивная иконка Плюс/Минус
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
                        TypeScript компонент React с Tailwind CSS
                    </p>
                </header>

                {/* Демонстрация компонентов */}
                <main>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
                        {demoOptions.map((option, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center"
                            >
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                    {option.label}
                                </h2>
                                <p className="text-gray-600 mb-6 text-center">
                                    {option.description}
                                </p>
                                <PlusMinusIcon
                                    size={option.size}
                                    variant={option.variant}
                                    color={option.color}
                                    onToggle={(isPlus) => handleIconToggle(isPlus, option.label)}
                                />
                                <div className="mt-6 text-gray-700">
                                    <p className="text-sm text-center">
                                        {option.variant === 'simple' && 'Идеально для аккордеонов'}
                                        {option.variant === 'rotate' &&
                                            'Для интерактивных элементов'}
                                        {option.variant === 'cross' && 'Для модальных окон'}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Кастомизация */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-12">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                            Кастомизация
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            {/* Выбор размера */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-3">
                                    Размер иконки
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {sizeOptions.map((option) => (
                                        <button
                                            key={option.value}
                                            onClick={() => setSelectedSize(option.value)}
                                            className={`px-4 py-2 rounded-lg transition-colors ${
                                                selectedSize === option.value
                                                    ? 'bg-blue-500 text-white'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Выбор варианта */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-3">
                                    Вариант анимации
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {variantOptions.map((option) => (
                                        <button
                                            key={option.value}
                                            onClick={() => setSelectedVariant(option.value)}
                                            className={`px-4 py-2 rounded-lg transition-colors ${
                                                selectedVariant === option.value
                                                    ? 'bg-green-500 text-white'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Выбор цвета */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-3">
                                    Цветовая схема
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {colorOptions.map((option) => (
                                        <button
                                            key={option.value}
                                            onClick={() => setSelectedColor(option.value)}
                                            className={`px-4 py-2 rounded-lg transition-colors ${
                                                selectedColor === option.value
                                                    ? `bg-${option.value}-500 text-white`
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Предпросмотр кастомизированной иконки */}
                        <div className="flex flex-col items-center p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                Предпросмотр
                            </h3>
                            <PlusMinusIcon
                                size={selectedSize}
                                variant={selectedVariant}
                                color={selectedColor}
                                onToggle={(isPlus) =>
                                    console.log(`Кастомная иконка: ${isPlus ? 'Плюс' : 'Минус'}`)
                                }
                            />
                            <div className="mt-6 text-center text-gray-600">
                                <p>
                                    Текущие настройки:{' '}
                                    {sizeOptions.find((o) => o.value === selectedSize)?.label},{' '}
                                    {variantOptions.find((o) => o.value === selectedVariant)?.label}
                                    , {colorOptions.find((o) => o.value === selectedColor)?.label}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Аккордеон с информацией */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            Информация о компоненте
                        </h2>

                        <div className="space-y-4 max-w-3xl mx-auto">
                            {/* Элемент аккордеона 1 */}
                            <div className="border border-gray-200 rounded-xl overflow-hidden">
                                <button
                                    className="w-full p-4 md:p-5 flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-200"
                                    onClick={() => handleAccordionToggle('usage')}
                                >
                                    <span className="font-semibold text-gray-800 text-left">
                                        Как использовать компонент?
                                    </span>
                                    <div className="flex-shrink-0 ml-4">
                                        <PlusMinusIcon
                                            size="small"
                                            variant="simple"
                                            color="blue"
                                            initialState={activeAccordion !== 'usage'}
                                            onToggle={() => handleAccordionToggle('usage')}
                                            ariaLabel="Переключить информацию об использовании"
                                        />
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${
                                        activeAccordion === 'usage'
                                            ? 'max-h-96 opacity-100'
                                            : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="p-4 md:p-5 text-gray-700">
                                        <h4 className="font-semibold text-gray-800 mb-2">
                                            Базовое использование:
                                        </h4>
                                        <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm mb-4">
                                            {`import PlusMinusIcon from './components/PlusMinusIcon';

// Простое использование с параметрами по умолчанию
<PlusMinusIcon />

// С кастомными настройками
<PlusMinusIcon 
  size="large"
  variant="rotate"
  color="green"
  onToggle={(isPlus) => console.log(isPlus ? 'Плюс' : 'Минус')}
/>`}
                                        </pre>

                                        <h4 className="font-semibold text-gray-800 mb-2">
                                            Типы TypeScript:
                                        </h4>
                                        <ul className="list-disc pl-5 space-y-1 text-sm">
                                            <li>
                                                <code>
                                                    PlusMinusIconSize: 'small' | 'medium' | 'large'
                                                </code>
                                            </li>
                                            <li>
                                                <code>
                                                    PlusMinusIconVariant: 'simple' | 'rotate' |
                                                    'cross'
                                                </code>
                                            </li>
                                            <li>
                                                <code>
                                                    PlusMinusIconColor: 'blue' | 'green' | 'red' |
                                                    'purple' | 'indigo' | 'teal'
                                                </code>
                                            </li>
                                            <li>
                                                <code>PlusMinusIconProps</code> - интерфейс всех
                                                пропсов
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Элемент аккордеона 2 */}
                            <div className="border border-gray-200 rounded-xl overflow-hidden">
                                <button
                                    className="w-full p-4 md:p-5 flex items-center justify-between bg-gradient-to-r from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 transition-all duration-200"
                                    onClick={() => handleAccordionToggle('props')}
                                >
                                    <span className="font-semibold text-gray-800 text-left">
                                        Доступные пропсы
                                    </span>
                                    <div className="flex-shrink-0 ml-4">
                                        <PlusMinusIcon
                                            size="small"
                                            variant="rotate"
                                            color="green"
                                            initialState={activeAccordion !== 'props'}
                                            onToggle={() => handleAccordionToggle('props')}
                                            ariaLabel="Переключить информацию о пропсах"
                                        />
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${
                                        activeAccordion === 'props'
                                            ? 'max-h-96 opacity-100'
                                            : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="p-4 md:p-5 text-gray-700">
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead>
                                                    <tr className="bg-gray-50">
                                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Пропс
                                                        </th>
                                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Тип
                                                        </th>
                                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            По умолчанию
                                                        </th>
                                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Описание
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                    <tr>
                                                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                                                            size
                                                        </td>
                                                        <td className="px-4 py-3 text-sm text-gray-700">
                                                            PlusMinusIconSize
                                                        </td>
                                                        <td className="px-4 py-3 text-sm text-gray-700">
                                                            'medium'
                                                        </td>
                                                        <td className="px-4 py-3 text-sm text-gray-700">
                                                            Размер иконки
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                                                            variant
                                                        </td>
                                                        <td className="px-4 py-3 text-sm text-gray-700">
                                                            PlusMinusIconVariant
                                                        </td>
                                                        <td className="px-4 py-3 text-sm text-gray-700">
                                                            'simple'
                                                        </td>
                                                        <td className="px-4 py-3 text-sm text-gray-700">
                                                            Тип анимации
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                                                            color
                                                        </td>
                                                        <td className="px-4 py-3 text-sm text-gray-700">
                                                            PlusMinusIconColor
                                                        </td>
                                                        <td className="px-4 py-3 text-sm text-gray-700">
                                                            'blue'
                                                        </td>
                                                        <td className="px-4 py-3 text-sm text-gray-700">
                                                            Цветовая схема
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                                                            onToggle
                                                        </td>
                                                        <td className="px-4 py-3 text-sm text-gray-700">
                                                            (isPlus: boolean) =&gt; void
                                                        </td>
                                                        <td className="px-4 py-3 text-sm text-gray-700">
                                                            undefined
                                                        </td>
                                                        <td className="px-4 py-3 text-sm text-gray-700">
                                                            Callback при переключении
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                                                            initialState
                                                        </td>
                                                        <td className="px-4 py-3 text-sm text-gray-700">
                                                            boolean
                                                        </td>
                                                        <td className="px-4 py-3 text-sm text-gray-700">
                                                            true
                                                        </td>
                                                        <td className="px-4 py-3 text-sm text-gray-700">
                                                            Начальное состояние
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                                                            disabled
                                                        </td>
                                                        <td className="px-4 py-3 text-sm text-gray-700">
                                                            boolean
                                                        </td>
                                                        <td className="px-4 py-3 text-sm text-gray-700">
                                                            false
                                                        </td>
                                                        <td className="px-4 py-3 text-sm text-gray-700">
                                                            Отключение интерактивности
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <footer className="mt-12 text-center text-gray-600">
                    <p>TypeScript компонент React с полной типизацией и настройкой через пропсы</p>
                    <p className="text-sm mt-1">
                        Размеры: small | medium | large • Варианты: simple | rotate | cross • Цвета:
                        blue | green | red | purple | indigo | teal
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default App;
