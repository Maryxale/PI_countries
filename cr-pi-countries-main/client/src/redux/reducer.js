import {  GET_ACTIVITY, GET_COUNTRY, COUNTRY_DETAIL, ADD_ACTIVITY, SEARCH_NAME, ORDER_BY, FILTER_CONTINENT_ACTIVITY, DELETE_ACTIVITIES } from "./actionsTypes";
//estado inicial
const initialState = {
    error: "",
    countriesAll: [],
    countries: [],
    details: {},
    activities: [],
    

}

function reducer(state = initialState, {type, payload} ){
    switch(type){
        
        case GET_COUNTRY:
            return {...state, countries: payload, countriesAll: payload};

        case COUNTRY_DETAIL:
            return {...state, details: payload, loading: false };

        case ADD_ACTIVITY:
            return {...state};
            
        case GET_ACTIVITY:
            
            return {...state, activities: payload};
        case DELETE_ACTIVITIES:
            return { ...state};
                
        case SEARCH_NAME:
            
            //metodo some() para comprobar si algun elemento cumple con lo que se requiere
            let AllCountries = payload
            let filterCountries = state.countries
            if(state.countries !== state.countriesAll){
                AllCountries = filterCountries.filter((country) => payload.some((count) => count.id === country.id ))
            }
            return {...state, countries: AllCountries, error: ""};

            //filtrado de continente y actividades
        
        case FILTER_CONTINENT_ACTIVITY:
            //primero traigo todos los paises
            let CountriesFilter = [...state.countriesAll];
                //filtro por continente
            if(payload.continent !== 'All'){
                CountriesFilter = CountriesFilter.filter(element => element.continent === payload.continent)
            }
            //filtro por actividad
            if(payload.activity !== 'All'){
                CountriesFilter = CountriesFilter.filter(country => country.Activities.find(activity => activity.name === payload.activity))
            }
            return{...state, countries: CountriesFilter};
            //Ordenamientos
        case ORDER_BY:
            const orderCountry = [...state.countries]
            
            if(payload === "NombreAscendente")  return {...state,countries: orderCountry.sort((a, b) => a.name.localeCompare(b.name))}
            if(payload === "NombreDescendente")  return {...state,countries: orderCountry.sort((a, b) => b.name.localeCompare(a.name))}
            if(payload === "PoblacionAscendente")  return {...state,countries: orderCountry.sort((a, b) => parseInt(a.population, 10) - parseInt(b.population, 10))}
            if(payload === "PoblacionDescendente")  return {...state,countries: orderCountry.sort((a, b) => parseInt(b.population, 10) - parseInt(a.population, 10))}
            break;
       
        
        default: return {...state};
    }



}

export default reducer;