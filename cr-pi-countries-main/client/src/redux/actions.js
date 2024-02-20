import axios from "axios";
import { GET_ACTIVITY, GET_COUNTRY, COUNTRY_DETAIL, ADD_ACTIVITY, SEARCH_NAME, FILTER_COUNTRY, ORDER_NAME, ORDER_POPULATION, LOADING, FILTER_CONTINENT } from "./actionsTypes";


// export const filterAndOrder = (payload) => {
//     return {
//         type: FILTER_AND_ORDER,
//         payload
//     }
// }

export const getCountries = () => {
    const endpoint = 'http://localhost:3001/countries';  
    return async (dispatch) => {
        try{
            const { data } = await axios.get(endpoint);
            dispatch({
                type: GET_COUNTRY,
                payload: data,
            });
        }catch(error){
            alert(error.messaje);
        }
    }
}

export const getDetails = (id) => {
    const endpoint = `http://localhost:3001/countries/${id}`; 
    return async (dispatch)=> {
        try{
            dispatch({
                type: "LOADING"
                
            })
            const { data } = await axios.get(endpoint);
            dispatch({
                type: COUNTRY_DETAIL,
                payload: data,
            });
        }catch(error){
            alert(error.messaje);
        }
    }
}

export const addActivity = (name,difficulty, duration, season, id) => {
    const endpoint = 'http://localhost:3001/countries/activities';
    return async () => {
        try{
            await axios.post(endpoint, {name,difficulty, duration, season, id})
            alert('Actividad agregada')
            return dispatch({
                type: ADD_ACTIVITY,
                payload: {
                    name,
                    difficulty, 
                    duration, 
                    season, 
                    id
                }
            })
        }catch(error){
            alert(error.messaje);
        }
    }
}
export const searchName = (name) => {
    const endpoint = `http://localhost:3001/countries?name=${name}`;
    return async (dispatch) => {
        try{
            const { data } = await axios.get(endpoint);
            return dispatch({
                type: SEARCH_NAME,
                payload: data
            })
        }catch(error){
            alert('Pais no encontrado');
            console.log(error)
        }
    } 
}

export const filterContinent = () => {
    return{
        type: FILTER_CONTINENT,
        payload: continent
    }
}

export const getActivity = () => {
    return {
        type: GET_ACTIVITY,
        payload: activities
    }
}

export const ordenAlfabetico = () => {
    return {
        type: tipo === 'asc' ? ORDEN_POBLACION_ASC : ORDEN_POBLACION_DESC,
    }
}

export const cantidadPoblacion = () => {
    return {
        type: tipo === 'asc' ? ORDEN_POBLACION_ASC : ORDEN_POBLACION_DESC,
    }
}



export const loading = (payload) => {
    return{
        type: LOADING,
        payload

    }
    }
