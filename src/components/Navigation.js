import {useRef} from 'react'
import { NavLink, useNavigate} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa'
// import styles from './Navigation.module.scss';
import './Navigation.scss'

const Navigation = () => {

    const navRef = useRef();
    const navigate = useNavigate()

    const navigateHandler = () => {
        navigate('./')
    }
    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }

    return (
        <header>
            <div>
                <h3 className='nav-title' onClick={navigateHandler}>Piotr Iwański</h3>
            </div>
            <nav className='nav' ref={navRef}>
                <ul className='nav-list'>
                    <li className='nav-list__item'>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => isActive ? 'active' : ''}
                            onClick={showNavbar}
                            end
                        >HOME
                        </NavLink>
                    </li>
                    <li className='nav-list__item'>
                        <NavLink 
                            to="/bio"
                            className={({ isActive }) => isActive ? 'active' : ''}
                            onClick={showNavbar}
                        >BIO
                        </NavLink>
                    </li>
                    <li className='nav-list__item'>
                        <NavLink 
                            to="/contact"
                            className={({ isActive }) => isActive ? 'active' : ''}
                            onClick={showNavbar}
                        >CONTACT
                        </NavLink>
                    </li>
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