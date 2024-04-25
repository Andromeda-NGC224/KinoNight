import { NavLink } from "react-router-dom"
import css from '../Navigation/Navigation.module.css'
import clsx from "clsx";

const NavLinkStyle = ({ isActive }) => {
    return clsx(css.link, isActive && css.active)
}

export default function Navigation() {
    return (
        <nav className={css.nav}>
            <NavLink className={NavLinkStyle} to="/">Home</NavLink>
            <NavLink className={NavLinkStyle} to="/movies">Movies</NavLink>
        </nav>
    ); 
}
