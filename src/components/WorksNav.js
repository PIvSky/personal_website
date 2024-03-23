import { NavLink } from "react-router-dom";
import '../styles/WorksNav.scss';
import { useTranslation } from "react-i18next";

const Nav = ({onClick}) => {

    const [t] = useTranslation("global");

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
                        {t("works-nav.arranger")}
                        </NavLink>
                    </li>
                    <li className="link-container">
                        <NavLink
                            onClick={onClick}
                            to='composer'
                            className={({ isActive }) => isActive ? 'active worksnav-nav__item' : 'worksnav-nav__item'}
                        >
                        {t("works-nav.composer")}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;