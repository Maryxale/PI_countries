import React from "react";
import style from './Pagination.module.css';

const Pagination = ({pageCurrent, pageFinal, onChangePage}) => {
    //con estos handler ordeno las paginas e indico cual es la que sigue
    //onChangePage: Toma el nuevo número de página como argumento.
    const handlePage = () => { 
        if(pageCurrent > 1){
            onChangePage(pageCurrent - 1);
        }
    }

    const handleProxiPage = () => { // Aumenta el número de página actual en 1 si la página actual es menor que la página final
        if(pageCurrent < pageFinal){
            onChangePage(pageCurrent + 1);
        }
    }

    return(
        <div className={style.text}>
            <button className={style.select} onClick={handlePage} disabled={pageCurrent === 1}>Prev</button>
            <span>Page {pageCurrent} of {pageFinal}</span>
            <button  className={style.select} onClick={handleProxiPage} disabled={pageCurrent === pageFinal}>Next</button>
        </div>
    )
}

export default Pagination;