import { NextRequest, NextResponse } from 'next/server';

// Для Vercel настройки CORS
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS(request: NextRequest) {
    return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(request: NextRequest) {
    try {
        // Получаем данные из формы
        const body = await request.json();
        const { name, email, message, agreement } = body;

        // Безопасно используем переменные окружения
        const BOT_TOKEN = process.env.BOT_TOKEN;
        const CHAT_ID = process.env.CHAT_ID;

        if (!BOT_TOKEN || !CHAT_ID) {
            return NextResponse.json({ error: 'Telegram bot не настроен' }, { status: 500 });
        }

        if (!name || !email || !message || agreement !== true) {
            return NextResponse.json(
                { error: 'Заполните все поля и примите соглашение' },
                { status: 400 },
            );
        }

        /**
         * Здесь можно:
         * - сохранить в БД (Prisma)
         * - отправить в Telegram / Slack
         * - отправить email (Resend, Nodemailer)
         */

        // Формируем сообщение
        const telegramMessage = `
            📨 Новая заявка (old)!
            Имя: ${name}
            Email: ${email}
            Сообщение: ${message}
            `;        

        // Отправляем в Telegram
        const telegramResponse = await fetch(
            `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: telegramMessage,
                    parse_mode: 'Markdown',
                }),
            },
        );

        const data = await telegramResponse.json();

        // ДЕТАЛЬНОЕ ЛОГИРОВАНИЕ ОШИБКИ
        console.log('=== TELEGRAM API RESPONSE ===');
        console.log('Status:', telegramResponse.status);
        console.log('Response data:', JSON.stringify(data, null, 2));
        console.log('BOT_TOKEN exists:', !!BOT_TOKEN);
        console.log('CHAT_ID exists:', !!CHAT_ID);
        console.log('CHAT_ID value:', CHAT_ID?.substring(0, 3) + '...');
        console.log('============================');

        if (data.ok) {
            return NextResponse.json(
                { success: true, message: 'Сообщение отправлено!' },
                { status: 200, headers: corsHeaders }
            );
        } else {
            return NextResponse.json({ error: 'Ошибка отправки в Telegram' }, { status: 500, headers: corsHeaders });
        }
    } catch {
        return NextResponse.json({ error: 'Внутренняя ошибка сервера' }, { status: 500, headers: corsHeaders });
    }
}
