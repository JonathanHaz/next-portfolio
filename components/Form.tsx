import styles from '@/styles/form.module.css'

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
]




const Form: React.FC = () => {
    return(
        <>
            {forms.map((form, index) => (
                <div className={styles.formcol} key={index}>
                    <h5>{form.number}</h5>
                    <label>{form.question}</label>
                    <input type="text" placeholder={form.holder} />
                </div>
            ))}
        </>
    )
};

export default Form;
