import style from './LandingPage.module.css';
import { Link } from 'react-router-dom';


const LandingPage = () => {
    return (
        <div className={style.landing}>
            <div className={style.dark}>
                <div className={style.text}>
                    <div className={style.textGrande}> 
                        <h1>Bienvenidos a la app Countries</h1>
                    </div>
                    <br />
                    <div>
                        <Link to='/home'> <button className={style.botones}>Home</button> </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default LandingPage;