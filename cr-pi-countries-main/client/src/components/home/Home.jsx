import Cards from "../cards/Cards";
import style from "./Home.module.css"
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { getCountry, getActivity, filterContinentActivity, orderBy} from "../../redux/actions";
import SearchBar from "../searchBar/SearchBar";
import Pagination from "../pagination/Pagination";


const reiniciar = () => {
  location.reload(false)  //para darle funcionalidad al boton reiniciar
}

function Home(){
  
  const dispatch = useDispatch();
  const Countries = useSelector(state => state.countries)
  const allActivities = useSelector((state) => state.activities);
 
  //paginado del home
  const [pageCurrent, setpageCurrent] = useState(1); //indicamos la pagina actual
  const PorPage = 10; //cantidad por pagina

  const LastElement = pageCurrent * PorPage; // obtenemos el indice del primer elemento y el ultimo de cada pagina.
  const FirstElement = LastElement - PorPage;
  const currentElements = Countries?.slice(FirstElement, LastElement); // como countries es un array, utilizamos el metodo slice para quedarnos con los items desde el primero hasta el ultimo que vamos a presentar en la pagina en la que nos encontramos actualmente. 


  //obtengo info del pais con useEffect 
  useEffect(() => {
    dispatch(getCountry())
  }, [dispatch]) //array
  
  useEffect(() => {
    dispatch(getActivity())
  }, [dispatch]); 

  //estado para FILTRADOS
  const [filterContinent, setfilterContinent] = useState("All")
  const [filterActivity, setfilterActivity] = useState("All")
  const [order, setOrder] = useState("");

 
//filtrado
const handleContinent = (evento) => {
  evento.preventDefault();
  setfilterContinent(evento.target.value)
}

const handleActivity = (evento) => {
  evento.preventDefault();
  setfilterActivity(evento.target.value)
}

//ORDENAR
const handleFilter = () => {
 
  setpageCurrent(1);
  let filters = {
    continent: filterContinent,
    activity: filterActivity,
  };
  dispatch(filterContinentActivity(filters));
  setOrder(""); 
};

const handleOrderBy = (evento) => {
  evento.preventDefault();
  const selectedValue = evento.target.value;
  setOrder(selectedValue); //indico que el estado Order tenga el valor de la option seleccionada
  dispatch(orderBy(selectedValue));
};
 //paginado
 const pageFinal = Math.ceil(Countries?.length / PorPage) //dividimos el total de paises por la cantidad que vamos a colocar.

 const handlePageChange = (pageNumber) => {
   setpageCurrent(pageNumber);
 };//handler para pagina actual 

 return (

<div >
  <div>
    <SearchBar handleFilter={handleFilter} onPageChange={handlePageChange}/>
  
  </div>
    
  <div className={style.home}>
    <div className={style.lado}>
      {/*Filtros*/}
      <div className={style.filtroContainer}>
        <h1 className={style.titulos}>Filtros</h1>
        <div>
          <h3 className={style.subtitulos}>Filtrar Continente</h3>
          <select className={style.select} onChange={handleContinent}>
            <option value='All'>Todos los Continentes</option>
            <option value='Africa'>Africa</option>
            <option value='Antarctica'>Antartica</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='North America'>North America</option>
            <option value='Oceania'>Oceania</option>
            <option value='South America'>South America</option>
          </select>
        </div>
        <div>
          <h3 className={style.subtitulos}>Filtrar Actividad</h3>
          <select className={style.select} onChange={handleActivity}>
            <option value="All">Todas las Actividades</option>
              {allActivities && allActivities.map((activity) => {
              return (
                <option value={activity.name}>{activity.name}</option>
              )
            })}
          </select>
        </div>
        <button className={style.botones} type="submit" onClick={handleFilter}>Aplicar</button>
      </div>
      {/*Ordenamiento por nombre y poblacion*/}
      <div className={style.orderContainer}>
        <h1 className={style.titulos}>Ordenar Por</h1>
        <h3 className={style.subtitulos}>Nombre/Poblacion</h3>
        <select className={style.select} onChange={handleOrderBy} value={order}>
          <option value="" disabled selected>Ordenar</option>
          <option value='NombreAscendente'>Nombre A - Z</option>
          <option value='NombreDescendente'>Nombre Z - A</option>
          <option value='PoblacionAscendente'>Población Baja-Alta</option>
          <option value='PoblacionDescendente'>Población Alta-Baja</option>
        </select>
      </div>
      <button className={style.botones} onClick={() => {reiniciar()}}>Reiniciar</button>
    </div>
    <div className={style.container}>

    {currentElements.length === 0 ? (
    <p className={style.mensaje}>No se encontro Pais!!</p> //validacion para notificar al usuario que el nombre es invalido 
  ) : (
    <Cards countries={currentElements} /> //renderizo mis cards
  )}
  
      <div className={style.espacio}></div>
      <div className={style.paginas}>
        <Pagination
          pageCurrent={pageCurrent}
          pageFinal={pageFinal}
          onChangePage={handlePageChange}
        />
      </div>
    </div>
  </div>
</div>
)
}

export default Home;