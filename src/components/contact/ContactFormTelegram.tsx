'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Button } from '../ui/button';

type FormValues = {
    name: string;
    email: string;
    message: string;
    agreement: boolean;
};

export default function ContactFormTelegram() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        watch,
    } = useForm<FormValues>({
        mode: 'onChange', // Валидация при изменении
    });

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Следим за согласием для стилизации кнопки
    const hasAgreement = watch('agreement');

    const onSubmit = async (data: FormValues) => {
        setSuccess(false);
        setError(null);

        try {
            // URL вашего сервера или сервиса
            const API_URL =
                process.env.NEXT_PUBLIC_CONTACT_API_URL ||
                'https://infograph-site.vercel.app/api/contact';

            const res = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ data }),
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.error || `Ошибка ${res.status}`);
            }

            setSuccess(true);
            reset();

            // Автоматически скрыть сообщение об успехе
            setTimeout(() => setSuccess(false), 5000);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Ошибка отправки');
            console.error('Form submission error:', err);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full rounded-3xl bg-gray-light shadow-main px-8 py-5 md:p-14"
        >
            {/* top inputs */}
            <div className="grid grid-cols-1 gap-5 md:gap-8 md:grid-cols-2">
                <div>
                    <label className="mb-2 hidden md:block font-inter text-sm text-gray-pantone">
                        Имя *
                    </label>
                    <input
                        {...register('name', {
                            required: 'Имя обязательно',
                            minLength: {
                                value: 2,
                                message: 'Минимум 2 символа',
                            },
                        })}
                        placeholder="Имя *"
                        className={`h-10 md:h-7 w-full rounded-full bg-bg-input px-4 text-sm outline-none transition placeholder:text-gray-pantone focus:bg-active-light ${
                            errors.name ? 'border border-red-500' : ''
                        }`}
                    />
                    {errors.name && (
                        <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                    )}
                </div>

                <div>
                    <label className="mb-2 hidden md:block font-inter text-sm text-gray-pantone">
                        Email *
                    </label>
                    <input
                        {...register('email', {
                            required: 'Email обязателен',
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: 'Введите корректный email',
                            },
                        })}
                        type="email"
                        placeholder="Email *"
                        className={`h-10 md:h-7 w-full rounded-full bg-bg-input px-4 text-sm outline-none transition placeholder:text-gray-pantone focus:bg-active-light ${
                            errors.email ? 'border border-red-500' : ''
                        }`}
                    />
                    {errors.email && (
                        <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                    )}
                </div>
            </div>

            {/* message */}
            <div className="mt-8 md:mt-5">
                <label className="mb-2 hidden md:block font-inter text-sm text-gray-pantone">
                    Сообщение *
                </label>
                <textarea
                    {...register('message', {
                        required: 'Сообщение обязательно',
                        minLength: {
                            value: 10,
                            message: 'Минимум 10 символов',
                        },
                    })}
                    placeholder="Опишите задачу или задайте вопрос *"
                    className={`min-h-48 w-full resize-none rounded-2xl bg-bg-input px-4 py-2.5 text-sm outline-none transition placeholder:text-gray-pantone focus:bg-active-light ${
                        errors.message ? 'border border-red-500' : ''
                    }`}
                />
                {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                )}
            </div>

            {/* bottom */}
            <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <Button
                    value="default"
                    size="small"
                    type="submit"
                    disabled={isSubmitting || !hasAgreement}
                    className={!hasAgreement ? 'opacity-50 cursor-not-allowed' : ''}
                >
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                </Button>

                <label className="flex cursor-pointer items-start gap-3 text-sm text-muted-foreground">
                    <input
                        type="checkbox"
                        {...register('agreement', {
                            required: 'Необходимо согласие',
                        })}
                        className="mt-1 h-5 w-5 cursor-pointer"
                    />
                    <div>
                        <p className="font-inter text-sm text-gray-pantone leading-4">
                            Нажимая на галочку, вы соглашаетесь с{' '}
                            <a
                                href="/privacy-policy"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                политикой конфиденциальности
                            </a>{' '}
                            и даёте согласие на обработку персональных данных.
                        </p>
                        {errors.agreement && (
                            <p className="mt-1 text-xs text-red-500">{errors.agreement.message}</p>
                        )}
                    </div>
                </label>
            </div>

            {/* Сообщения */}
            {success && (
                <div className="mt-4 p-3 rounded-lg bg-green-100 text-green-800 text-sm">
                    ✓ Заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.
                </div>
            )}

            {error && (
                <div className="mt-4 p-3 rounded-lg bg-red-100 text-red-800 text-sm">
                    ⚠ {error}. Пожалуйста, попробуйте еще раз или свяжитесь другим способом.
                </div>
            )}
        </form>
    );
}
