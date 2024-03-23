import {useRef} from 'react'
import { NavLink, useNavigate} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa'
// import styles from './Navigation.module.scss';
import '../styles/Navigation.scss'
import { useTranslation } from "react-i18next";

const Navigation = () => {

    const [t, i18n] = useTranslation("global")
    const navRef = useRef();
    const navigate = useNavigate()

    const navigateHandler = () => {
        navigate('./')
    }

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav')
        // Scrolling to top of the page
        window.scrollTo({
            top: 0,
          });
    }

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
    }

    return (
        <header>
            <div>
                <h1 className='nav-title' onClick={navigateHandler}>Piotr Iwański</h1>
            </div>
            <nav className='nav' ref={navRef}>
                <ul className='nav-list'>
                    <li className='nav-list__item'>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => isActive ? 'active' : ''}
                            onClick={showNavbar}
                            end
                        >{t("navbar.home")}
                        </NavLink>
                    </li>
                    <li className='nav-list__item'>
                        <NavLink 
                            to="/bio"
                            className={({ isActive }) => isActive ? 'active' : ''}
                            onClick={showNavbar}
                        >{t("navbar.bio")}
                        </NavLink>
                    </li>
                    <li className='nav-list__item'>
                        <NavLink 
                            to="/pianist"
                            className={({ isActive }) => isActive ? 'active' : ''}
                            onClick={showNavbar}
                        >{t("navbar.pianist")}
                        </NavLink>
                    </li>
                    <li className='nav-list__item'>
                        <NavLink 
                            to="/works"
                            className={({ isActive }) => isActive ? 'active' : ''}
                            onClick={showNavbar}
                        >{t("navbar.arranger/composer")}
                        </NavLink>
                    </li>
                    <li className='nav-list__item'>
                        <NavLink 
                            to="/dev"
                            className={({ isActive }) => isActive ? 'active' : ''}
                            onClick={showNavbar}
                        >{t("navbar.dev")}
                        </NavLink>
                    </li>
                    <li className='nav-list__item'>
                        <NavLink 
                            to="/contact"
                            className={({ isActive }) => isActive ? 'active' : ''}
                            onClick={showNavbar}
                        >{t("navbar.contact")}
                        </NavLink>
                    </li>
                    <div className='nav-lang'>
                        <button onClick={() => handleLanguageChange('en')} className='nav-lang__button'>EN</button>
                        <button onClick={() => handleLanguageChange('pl')} className='nav-lang__button'>PL</button>
                    </div>
                    <button className='nav-btn__close' onClick={showNavbar}>
                        <FaTimes/>
                    </button>
                </ul>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    )
}

export default Navigation;