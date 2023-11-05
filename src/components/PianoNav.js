import { NavLink } from "react-router-dom";
import '../styles/PianoNav.scss';

const Nav = () => {
    return (
        <>
            <nav className="pianonav-container">
                <ul className="pianonav-nav">
                    <li >
                        <NavLink
                            to='timelapse'
                            className="pianonav-nav__item"
                        >
                        TIMELAPSE
                        </NavLink>
                    </li>
                    <li >
                        <NavLink
                            to='grzecznichlopcy'
                            className={({ isActive }) => isActive ? 'active pianonav-nav__item' : 'pianonav-nav__item'}
                        >
                        GRZECZNI CHLOPCY
                        </NavLink>
                    </li>
                    <li >
                        <NavLink
                            to='gwo'
                            className="pianonav-nav__item"
                        >
                        KAROLINA GWOZDZ
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;