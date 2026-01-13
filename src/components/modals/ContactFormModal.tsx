'use client';

import { useRef, useEffect } from 'react';
import ContactForm from '@/components/contact/ContactForm';
import { X } from 'lucide-react';
import { Button } from '../ui/button';
import Portal from './Portal';

interface ContactFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    // Блокировка скролла при открытии модалки
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Закрытие по ESC
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
        }

        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <>
            <Portal>
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div
                        ref={modalRef}
                        className="relative w-full max-w-227.5 rounded-2xl bg-background p-6 shadow-xl"
                    >
                        {/* Кнопка закрытия */}
                        <button
                            onClick={onClose}
                            className="absolute right-4 top-4 rounded-full p-1 hover:bg-gray-100"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        {/* Заголовок */}
                        <h2 className="text-center mb-5">Заполните форму заказа</h2>

                        {/* Форма */}
                        <ContactForm />
                    </div>
                </div>
            </Portal>
        </>
    );
}
