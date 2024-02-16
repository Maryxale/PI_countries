import {  BY_NAME, BY_ORDER,  GET_COUNTRIES, GET_COUNTRY_DETAIL, LOADING, GET_TOUR_ACTIVITY, BY_ACTIVITY } from "./actionsTypes";
//estado inicial
const initialState = {
    error: "",
    countries: [],
    allactivities: [],
    activity: [],
    details: [],
    loading: false

}

function reducer(state = initialState, {type, payload} ){
    switch(type){
        case GET_COUNTRIES:
            return {...state, countries: payload, activities: payload,details: payload, searchName: payload};

        case GET_COUNTRY_DETAIL:
            return {...state, details: payload, loading: false };

        case GET_TOUR_ACTIVITY:
            return {...state, activity:payload, loading: false };

        case BY_ACTIVITY:
            const activityFilter = state.allactivities.filter(element => element.activities === payload)
            return {...state, 
                activity:payload === 'All' ? state.countries : activityFilter}

        case BY_NAME:
            return {...state, countries: payload, searchName:payload, error: "" };

        case BY_ORDER:
            const orderCountries = state.countries.sort((a, b) => {
                if(payload === 'ascendente') return a.name - b.name;

                return b.name - a.name
            })
            return{
                ...state,
                countries: [...orderCountries]
            }
       
        case LOADING:
            return{
                ...state,
                loading: true
            }
        default: return state;
    }



}

export default reducer;