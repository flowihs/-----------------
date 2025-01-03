import React, { useState } from 'react';
import './../styles/ContactForm.css'

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
                onChange={(event) => setName(event.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Электронная почта"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
            />
            <textarea
                placeholder="Сообщение"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
            ></textarea>
            <button type="submit">Отправить</button>
        </form>
    );
};

export default ContactForm;