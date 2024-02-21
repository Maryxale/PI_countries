import React from "react";
import style from './Pagination.module.css';

const Pagination = ({pageCurrent, pageFinal, onChangePage}) => {
    //con estos handler ordeno las paginas e indico cual es la que sigue
    const handlePage = () => {
        if(pageCurrent > 1){
            onChangePage(pageCurrent - 1);
        }
    }

    const handleProxiPage = () => {
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