import { NavLink } from "react-router-dom";
import '../styles/PianoNav.scss';
import timelapse from '../assets/pianist-img/photo-8.jpg';
import gwo from '../assets/pianist-img/photo-9.png';
import gch from '../assets/pianist-img/photo-10.jpg';
import gant from '../assets/pianist-img/photo-11.jpg';

const Nav = () => {

    const scrollToContent = () => {
        window.scrollBy({ top: 500, behavior: 'smooth' });
      };

    return (
        <>
            <nav className="pianonav-container">
                <ul className="pianonav-nav">
                    <li className="link-container">
                        <NavLink
                            onClick={scrollToContent}
                            to='timelapse'
                            className={({ isActive }) => isActive ? 'active pianonav-nav__item' : 'pianonav-nav__item'}
                        >
                        GCH+
                        </NavLink>
                        <img alt="timelapse" src={timelapse}></img>
                    </li>
                    <li className="link-container">
                        <NavLink
                            onClick={scrollToContent}
                            to='grzecznichlopcy'
                            className={({ isActive }) => isActive ? 'active pianonav-nav__item' : 'pianonav-nav__item'}
                        >
                        GRZECZNI CHLOPCY
                        </NavLink>
                        <img alt="gch" src={gch}></img>
                    </li>
                    <li className="link-container">
                        <NavLink
                            onClick={scrollToContent}
                            to='gwo'
                            className={({ isActive }) => isActive ? 'active pianonav-nav__item' : 'pianonav-nav__item'}
                        >
                        KAROLINA GWOZDZ
                        </NavLink>
                        <img alt="gwo" src={gwo}></img>
                    </li>
                    <li className="link-container">
                        <NavLink
                            onClick={scrollToContent}
                            to='gant&sava'
                            className={({ isActive }) => isActive ? 'active pianonav-nav__item' : 'pianonav-nav__item'}
                        >
                        GANT&SAVA
                        </NavLink>
                        <img alt="gant&sava" src={gant}></img>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;