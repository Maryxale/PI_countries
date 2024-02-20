import style from './LandingPage.module.css';
import { Link } from 'react-router-dom';
//import mapa from '../../assets/mapa-mundo.jpg';

// function LandingPage (){
// return (
   
//     <div className={style.landing}> 
//         <div className={style.dark}>
//             <h1>Bienvenidos a la app de countries</h1>
//         <Link to='/home'>
//         <button>Home</button>
//         </Link>
//         </div>
//     </div>
    
// )
//}
const LandingPage = () => {
    return (
        <div className={style.landing}>
            <div className={style.dark}>
                <div className={style.text}>
                    <div className={style.textBig}> 
                        <h1>Bienvenidos a la app Countries</h1>
                    </div>
                    <div>
                        <Link to='/home'> <button>Home</button> </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default LandingPage;