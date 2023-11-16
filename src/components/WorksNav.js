import { NavLink } from "react-router-dom";
import '../styles/WorksNav.scss';

const Nav = ({onClick}) => {

    return (
        <>
            <nav className="worksnav-container">
                <ul className="worksnav-nav">
                    <li className="link-container">
                        <NavLink
                            onClick={onClick}
                            to='arranger'
                            className={({ isActive }) => isActive ? 'active worksnav-nav__item' : 'worksnav-nav__item'}
                        >
                        ARRANGER
                        </NavLink>
                    </li>
                    <li className="link-container">
                        <NavLink
                            onClick={onClick}
                            to='composer'
                            className={({ isActive }) => isActive ? 'active worksnav-nav__item' : 'worksnav-nav__item'}
                        >
                        COMPOSER
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;