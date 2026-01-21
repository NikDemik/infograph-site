'use server';

export async function sendToTelegram(formData: FormData) {
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    };

    const API_URL = process.env.NEXT_PUBLIC_CONTACT_API_URL;

    // Отправка на ваш backend/сервис
    const response = await fetch('https://infograph-site.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    return response.ok;
}
