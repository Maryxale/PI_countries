import { NavLink } from "react-router-dom";
import style from './Nav.module.css'
import planetaTierra from '../../assets/planeta-tierra.png';

const Nav = () => {
    return (
    <div className={style.nav}>
        
        <NavLink className={style.mundo} to="/home"><img src={planetaTierra} alt="a home" height='35px' /></NavLink>
        
        <NavLink className={style.select} to="/form">Nueva Actividad</NavLink>
        <NavLink className={style.selects} to="/">Salir</NavLink>    
    </div>
    )
}



export default Nav;