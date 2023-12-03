import {useRef} from 'react'
import { NavLink, useNavigate} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa'
// import styles from './Navigation.module.scss';
import '../styles/Navigation.scss'

const Navigation = () => {

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
                            to="/pianist"
                            className={({ isActive }) => isActive ? 'active' : ''}
                            onClick={showNavbar}
                        >PIANIST
                        </NavLink>
                    </li>
                    <li className='nav-list__item'>
                        <NavLink 
                            to="/works"
                            className={({ isActive }) => isActive ? 'active' : ''}
                            onClick={showNavbar}
                        >ARRANGER/COMPOSER
                        </NavLink>
                    </li>
                    <li className='nav-list__item'>
                        <NavLink 
                            to="/dev"
                            className={({ isActive }) => isActive ? 'active' : ''}
                            onClick={showNavbar}
                        >DEV
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
            {/* praise: nice usage of a semantic HTML
            suggestion: there is a lot of duplicated code here. It would be nice to map through it using an array of an objects
            const arr = [
                {
                    title: 'HOME',
                    link: '/'
                },
                {
                    title: 'BIO',
                    link: '/bio'
                }
            ]
            */}
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    )
}

export default Navigation;