import Cards from "../cards/Cards";
import style from "./Home.module.css"
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { getCountry, getActivity, filterContinentActivity, orderName} from "../../redux/actions";
import SearchBar from "../searchBar/SearchBar";
import Pagination from "../pagination/Pagination";


function Home(){
  const dispatch = useDispatch();

  const Countries = useSelector(state => state.countries)
  const allActivity = useSelector((state) => state.activity);

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
  }, [dispatch]); //array

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
  handleButtonClick()
  setpageCurrent(1);
  let filters = {
    continent: continentFilter,
    activity: activityFilter,
  };
  dispatch(filterContinentActivity(filters));
  setOrder(""); // setea el select de ordenamiento, para que cada vez que hago un filtro, vuelva a la option Order by...
};

const handleOrderName = (evento) => {
  evento.preventDefault();
  const Value = evento.target.value;
  setOrder(Value); //indico que el estado Order tenga el valor de la option seleccionada
  dispatch(orderName(Value));
};
 //paginado
 const pageFinal = Math.ceil(Countries?.length / PorPage) //dividimos el total de paises por la cantidad que vamos a colocar en cada pagina para obtener el total de paginas.

 const handlePageChange = (pageNumber) => {
   setpageCurrent(pageNumber);
 };//handler que maneja la pagina en la cual estamos. 

  
    return(
        <div>
          <div>
            <SearchBar handleFilter={handleFilter} onPageChange={handlePageChange}/>
          </div>
          <div>
            <Cards countries={currentElements}  />
            
          </div>
        </div>
        
        
    )
}

export default Home;