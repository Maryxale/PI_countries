import axios from "axios";
import { GET_COUNTRIES, GET_COUNTRY_DETAIL, GET_TOUR_ACTIVITY, LOADING, BY_NAME, BY_ORDER, BY_ACTIVITY } from "./actionsTypes";

export const getCountries = (element) => {
    const endpoint = 'http://localhost:3001/countries';
    return async (dispatch) => {
        try{
            const { data } = await axios.get(endpoint, element);
            dispatch({
                type: GET_COUNTRIES,
                payload: data,
            });
        }catch(error){
            alert(error.messaje);
        }
    }
}

export const getDetails = (element) => {
    const endpoint = 'http://localhost:3001/countries/activities';
    return async (dispatch)=> {
        try{
            dispatch({
                type: LOADING
            })
            const { data } = await axios.get(endpoint, element);
            dispatch({
                type: GET_COUNTRY_DETAIL,
                payload: data,
            });
        }catch(error){
            alert(error.messaje);
        }
    }
}

export const addActivities = (payload) => {
    const endpoint = 'http://localhost:3001/countries/activities';
    return async () => {
        try{
            const { data } = await axios.post(endpoint, payload)
            return data;

        }catch(error){
            alert(error.messaje);
        }
    }
}
export const byName = (name) => {
    const endpoint = `http://localhost:3001/countries?name=${name}`;
    return async (dispatch) => {
        try{
            const { data } = await axios.get(endpoint);
            return dispatch({
                type: BY_NAME,
                payload: data
            })
        }catch(error){
            alert(error.messaje);
        }
    } 
}

export const byOrder = (payload) => {
    return{
        type: BY_ORDER,
        payload
    }
}

export const byActivity = () => {
    return {
        type: BY_ACTIVITY,
        payload
    }
}
