import { NavLink, Link } from "react-router-dom"
import css from '../Navigation/Navigation.module.css'
import clsx from "clsx";
import { GiFilmSpool } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";

const NavLinkStyle = ({ isActive }) => {
    return clsx(css.link, isActive && css.active)
}

export default function Navigation() {
    return (
        <nav className={css.nav}>
            <div className={css.navLinks}>
            <Link to="/"><GiFilmSpool className={css.navIcon} /></Link>
            <NavLink className={NavLinkStyle} to="/">Головна</NavLink>
            <NavLink className={NavLinkStyle} to="/novelty">Новинки 
                </NavLink>
            </div>
            <NavLink to="/movies">
                <CiSearch className={css.navIconSearch} /> 
                </NavLink>
            
        </nav>
    ); 
}
