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

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormValues>();

    const [success, setSuccess] = useState(false);

    const onSubmit = async (data: FormValues) => {
        setSuccess(false);

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (res.ok) {
            setSuccess(true);
            reset();
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
                        Имя
                    </label>
                    <input
                        {...register('name', { required: true })}
                        placeholder="Имя"
                        className=" h-10 md:h-7 w-full rounded-full bg-bg-input px-4 text-sm outline-none transition placeholder:text-gray-pantone focus:bg-active-light"
                    />
                </div>

                <div>
                    <label className="mb-2 hidden md:block font-inter text-sm text-gray-pantone">
                        Email
                    </label>
                    <input
                        {...register('email', {
                            required: true,
                            pattern: /^\S+@\S+$/,
                        })}
                        type="email"
                        placeholder="Email"
                        className=" h-10 md:h-7 w-full rounded-full bg-bg-input px-4 text-sm outline-none transition placeholder:text-gray-pantone focus:bg-active-light"
                    />
                </div>
            </div>

            {/* message */}
            <div className=" mt-8 md:mt-5">
                <label className="mb-2 hidden md:block font-inter text-sm text-gray-pantone">
                    Сообщение
                </label>
                <textarea
                    {...register('message', { required: true })}
                    placeholder="Опишите задачу или задайте вопрос"
                    className="min-h-48 w-full resize-none rounded-2xl bg-bg-input px-4 py-2.5 text-sm outline-none transition placeholder:text-gray-pantone focus:bg-active-light"
                />
            </div>

            {/* bottom */}
            <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                {/* <button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-14 rounded-full border-2 border-foreground px-10 text-sm font-medium transition hover:bg-foreground hover:text-background disabled:opacity-50"
                >
                    Отправить заявку
                </button> */}
                <Button value="default" size="small" type="submit" disabled={isSubmitting}>
                    Отправить заявку
                </Button>

                <label className="flex cursor-pointer items-start gap-3 text-sm text-muted-foreground">
                    <input
                        type="checkbox"
                        {...register('agreement', { required: true })}
                        className="mt-1 h-7 w-7"
                    />
                    {/* <Checkbox
                        {...register('agreement', { required: true })}
                        className=" mt-1 w-5 h-5 border-border bg-bg-input"
                    /> */}

                    <p className="font-inter text-sm text-gray-pantone leading-4">
                        Нажимая на галочку, вы соглашаетесь с{' '}
                        <span>политикой конфиденциальности</span> и даёте согласие на обработку
                        персональных данных.
                    </p>
                </label>
            </div>

            {success && <p className="mt-6 text-sm text-active">Заявка успешно отправлена.</p>}
        </form>
    );
}
