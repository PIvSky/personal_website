import '../styles/Contact.scss';
import AdressImg from '../assets/icons/icons8-placeholder-50.png';
import PhoneImg from '../assets/icons/icons8-phone-50.png';
import EmailImg from '../assets/icons/email-icons8-mail-50.png';


const Contact = () => {
    return (
        <>
            <div className='contact'>
                <div className='contact-box'>
                    <div className='message-column'>
                        <div className='message-element'>
                            <span className='message-element__title'>SEND ME A MESSAGE</span>
                        </div>
                        <div className='message-element'>
                            <input placeholder='FULL NAME'></input>
                        </div>
                        <div className='message-element'>
                            <input placeholder='YOUT EMAIL'></input>
                        </div>
                        <div className='message-element'>
                            <input placeholder='PHONE'></input>
                        </div>
                        <div className='message-element'>
                            <textarea placeholder='YOUR MESSAGE'></textarea>
                        
                        </div>
                        <div className='message-button'>
                            <button>
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
                
            </div>
        </>
    )
}

export default Contact;