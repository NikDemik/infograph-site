'use server';

import { revalidatePath } from 'next/cache';

export type ContactFormResult = {
    success: boolean;
    error?: string;
    message?: string;
};

export async function sendToTelegram(formData: FormData) {
    const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        message: formData.get('message') as string,
        agreement: formData.get('agreement') as string,
    };

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    // Отправка на ваш backend/сервис
    const response = await fetch('https://infograph-site.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    // Опционально: очищаем кэш если нужно
    revalidatePath('/contact');

    return response.ok;
}
