import { useState, useRef, useEffect } from 'react';
import '../styles/Contact.scss';
import AdressImg from '../assets/icons/icons8-placeholder-50.png';
import PhoneImg from '../assets/icons/icons8-phone-50.png';
import EmailImg from '../assets/icons/email-icons8-mail-50.png';


const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const textareaRef = useRef();

    // INPUT STATES
    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    };

    const phoneChangeHandler = (event) => {
        setPhone(event.target.value);
    };

    const messageChangeHandler = (event) => {
        setMessage(event.target.value);
    }

    /* 
        Auto Resizing Textarea 
    */
    useEffect(() => {
        const textareaHeight = textareaRef.current;
    
        const adjustHeight = () => {
            /* reset the height to auto*/
            textareaHeight.style.height = 'auto'; 
            /* pass to height property value of scrollHeight with px format */
            textareaHeight.style.height = `${textareaHeight.scrollHeight}px`; 
        }

        // call function
        adjustHeight();

        // this listener is calling adjustHeight everytime its changin 
        textareaHeight.addEventListener('input', adjustHeight);

        // clearing eventlistner when componen is unmounted
        return () => {
            textareaHeight.removeEventListener('input', adjustHeight);
        };
    }, [])

    // HANDLER OF FORM
    const ContactHandler = (event) => {
        event.preventDefault();
        console.log(name, email, phone, message)
        // clear input values
        setName('');
        setEmail('');
        setPhone('');
        setMessage('')
    }

    return (
        <>
            <form className='contact'>
                <div className='contact-box'>
                    <div className='message-column'>
                        <div className='message-element'>
                            <span className='message-element__title'>SEND ME A MESSAGE</span>
                        </div>
                        <div className='message-element'>
                            <input 
                                placeholder='FULL NAME'
                                value={name}
                                onChange={nameChangeHandler}
                            ></input>
                        </div>
                        <div className='message-element'>
                            <input 
                                placeholder='YOUT EMAIL'
                                value={email}
                                onChange={emailChangeHandler}
                            ></input>
                        </div>
                        <div className='message-element'>
                            <input 
                                placeholder='PHONE'
                                value={phone}
                                onChange={phoneChangeHandler}
                            ></input>
                        </div>
                        <div className='message-element'>
                            <textarea 
                                ref={textareaRef}
                                placeholder='YOUR MESSAGE'
                                rows={3}
                                value={message}
                                onChange={messageChangeHandler}    
                            ></textarea>
                        
                        </div>
                        <div className='message-button'>
                            <button  onClick={ContactHandler}>
                                {/* <img></img>     */}
                            SEND
                            </button>
                        </div>
                    </div>
                    <div className='contact-column'>
                        <div className='contact-element'>
                            <span className='contact-element__title'>CONTACT ME</span>
                        </div>
                        <div className='contact-element'>
                            <img alt='adress-icon' src={AdressImg}></img>
                            <span className='contact-element__adress'>WARSAW</span>
                        </div> 
                        <div className='contact-element'>
                            <img alt='adress-icon' src={PhoneImg}></img>
                            <span className='contact-element__phone'>+48 509 618 644</span>
                        </div>   
                        <div className='contact-element'>
                            <img alt='adress-icon' src={EmailImg}></img>
                            <span className='contact-element__email'>iwansky.piano@gmail.com</span>
                        </div>
                    </div>
                </div>
                
            </form>
        </>
    )
}

export default Contact;