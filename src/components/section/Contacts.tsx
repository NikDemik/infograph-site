import ContactForm from '../contact/ContactForm';

export default function Contacts() {
    const contacts = [
        { type: 'site', value: 'okdesign.ru' },
        { type: 'phone', value: '+7 (xxx) xxx-xx-xx' },
        { type: 'mail', value: ' info@okdesign.ru' },
    ];

    return (
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-7.5 relative z-10 mt-[8.5vw] ">
            <div className=" col-span-1 lg:col-span-3">
                <h2>Контакты</h2>
                <div className=" mt-5 lg:mt-36 w-full flex flex-col gap-5 ">
                    {contacts.map((contact, index) => (
                        <div key={index} className="p-5 pl-14 bg-gradient-custom rounded-3xl">
                            <p className=" text-[18px] text-black">{contact.value}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className=" mt-3 col-span-1 lg:col-span-7 lg:col-start-5">
                <ContactForm />
            </div>
        </section>
    );
}
