import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const contactData = {
            name,
            email,
            message,
        };
        console.log(JSON.stringify(contactData));
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <form className="contact-form"onSubmit={handleSubmit}>

            <h1 className="contact-title">Контакты</h1>
            <input
                type="text"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Электронная почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <textarea
                placeholder="Сообщение"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            ></textarea>
            <button type="submit">Отправить</button>
        </form>
    );
};

export default ContactForm;