'use client';

import { useState } from 'react';
import ContactFormModal from './ContactFormModal';
import { Button } from '../ui/button';

export default function ContactManager() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            {/* Кнопка 1 - в самой форме */}
            <Button onClick={() => setIsModalOpen(true)}>заказать карточку товара</Button>

            {/* Модальное окно */}
            <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
