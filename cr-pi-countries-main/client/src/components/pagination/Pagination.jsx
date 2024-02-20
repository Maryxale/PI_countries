import React from "react";

const Pagination = ({pageCurrent, pageFinal, onChangePage}) => {

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
        <div>
            <button onClick={handlePage} disabled={pageCurrent === 1}>Prev</button>
            <span>Page {pageCurrent} of {pageFinal}</span>
            <button  onClick={handleProxiPage} disabled={pageCurrent === pageFinal}>Next</button>
        </div>
    )
}

export default Pagination;