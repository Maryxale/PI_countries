import axios from "axios";
import { GET_ACTIVITY, GET_COUNTRY, COUNTRY_DETAIL, ADD_ACTIVITY, SEARCH_NAME,  ORDER_BY, FILTER_CONTINENT_ACTIVITY, DELETE_ACTIVITIES } from "./actionsTypes";

export const getCountry = () => {
    const endpoint = 'http://localhost:3001/countries';  
    return async (dispatch) => {
        try{
            const { data } = await axios.get(endpoint);
            dispatch({
                type: GET_COUNTRY,
                payload: data,
            });
        }catch(error){
            alert(error.message);
        }
    }
}

export const countryDetail = (id) => {
    const endpoint = `http://localhost:3001/countries/${id}`; 
    return async (dispatch)=> {
        try{
            const { data } = await axios.get(endpoint);
            return dispatch({
                type: COUNTRY_DETAIL,
                payload: data,
            });
        }catch(error){
            alert(error.messaje);
        }
    }
}

export const addActivity = (payload) => {
    const endpoint = 'http://localhost:3001/activities';
    return async (dispatch) => {
        try{
            const { data } = await axios.post(endpoint, payload);
            alert('Actividad agregada')
            return dispatch({
                type: ADD_ACTIVITY,
                payload: data
            })
        }catch(error){
            alert(error.messaje);
        }
    }

}

export const deleteActivities = (payload) => {
    const endpoint = `http://localhost:3001/activities?name=${payload}`
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(endpoint);
            return dispatch({ type: DELETE_ACTIVITIES, payload: data })
        } catch (error) {
            console.error(`Error al borrar la actividad${payload}`, error);
        }
    }
 }

export const searchName = (payload) => {
    const endpoint = `http://localhost:3001/countries?name=${payload}`;
    return async (dispatch) => {
        try{
            const { data } = await axios.get(endpoint);
            return dispatch({
                type: SEARCH_NAME,
                payload: data
            })
        }catch(error){
            alert('Pais no encontrado',error);
            
        }
    } 
}

//filtrar por continente o activity

export const filterContinentActivity = (payload) => {
    return{
        type: FILTER_CONTINENT_ACTIVITY,
        payload
    }
}

export const getActivity = (payload) => {
    const endpoint = 'http://localhost:3001/activities'
    return async (dispatch) => {
        try{
            const { data } = await axios.get(endpoint,payload);
            return dispatch({
                type: GET_ACTIVITY,
                payload: data
            })
        }catch(error){
            alert(error.messaje);
        }
        }
    }
    
    //ordenamientos asc y desc

export const orderBy = (payload) => {
    return {
        type: ORDER_BY,
        payload
    }
}

