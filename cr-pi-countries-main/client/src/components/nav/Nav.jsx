import { NavLink } from "react-router-dom";
import style from './Nav.module.css'

const Nav = () => {
    return (
    <div className={style.barra}>
        
        <NavLink className={style.countries} to="/home">Countries PI</NavLink>
        <NavLink className={style.select} to="/">Exit</NavLink> 
        <NavLink className={style.select} to="/form">Create Activity</NavLink>
        
    </div>
    )
}

export default Nav;