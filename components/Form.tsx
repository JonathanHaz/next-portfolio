import React, { useState } from 'react';
import styles from '@/styles/form.module.css';
import Rounded from './Rounded';
import emailjs from 'emailjs-com';

interface FormProps {
    number: string;
    question: string;
    holder: string;
}

const forms: FormProps[] = [
    {
        number: "1",
        question: "What's your name?",
        holder: "Jonathan Hazan",
    },
    {
        number: "2",
        question: "What's your email?",
        holder: "example@gmail.com",
    },
    {
        number: "3",
        question: "Write your message",
        holder: "Hello Jonathan! I am interested in your work...",
    },
];

const Form: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
        const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;

        emailjs.send(serviceID, templateID, formData, userID)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Email sent successfully!');
            }, (error) => {
                console.error('FAILED...', error);
                alert('Failed to send email.');
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {forms.map((form, index) => (
                    <div className={styles.formcol} key={index}>
                        <h5>{form.number}</h5>
                        <label>{form.question}</label>
                        {index < 2 ? (
                            <input 
                                type="text" 
                                name={index === 0 ? 'name' : 'email'} 
                                placeholder={form.holder} 
                                onChange={handleChange} 
                                value={index === 0 ? formData.name : formData.email} 
                            />
                        ) : (
                            <input
                                type='text' 
                                name="message" 
                                placeholder={form.holder} 
                                onChange={handleChange} 
                                value={formData.message} 
                            />
                        )}
                    </div>
                ))}
                <div className={styles.send}>
                <button type='submit'>
                    <Rounded>
                        <p>Send</p>
                    </Rounded>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
