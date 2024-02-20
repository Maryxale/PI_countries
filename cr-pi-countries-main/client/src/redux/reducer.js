import {  GET_ACTIVITY, GET_COUNTRY, COUNTRY_DETAIL, ADD_ACTIVITY, SEARCH_NAME, ORDER_NAME, ORDER_POPULATION, LOADING, FILTER_CONTINENT_ACTIVITY } from "./actionsTypes";
//estado inicial
const initialState = {
    error: "",
    countriesAll: [],
    countries: [],
    activity: [],
    details: [],
    loading: false,
    

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
            return {...state, activity: payload};

        case SEARCH_NAME:
            //!ver si puedo quitar todos los paises
            //metodo some() para comprobar si algun elemento cumple con lo que se requiere
            let AllCountries = payload
            let filterCountries = state.countries
            if(state.countries !== state.countriesAll){
                AllCountries = filterCountries.filter((country) => payload.some((count) => count.id === country.id ))
            }
            return {...state, countries: AllCountries, error: "", loading: false };

            //filtrado de continente y actividades
        
        case FILTER_CONTINENT_ACTIVITY:
            //primero traigo todos los paises
            let CountriesFilter = [...state.countriesAll];
                //filtro por continente
            if(payload.continent !== 'All'){
                CountriesFilter = CountriesFilter.filter(element => element.continent === payload.continent)
            }

            if(payload.Activity !== 'All'){
                CountriesFilter = CountriesFilter.filter(element => element.Activities.find(activities => activities.name === payload.activities))
            }
            return{...state, countries: CountriesFilter};
            //Ordenamientos
        case ORDER_NAME:
            
            //metodo sort para ordenar
            const orderedName = state.countries.sort((a,b) => {
                if(payload === 'ascendente') return a.name - b.name
                return b.name - a.name
            })
            return{
                ...state,
                countries: [...orderedName]
            }
            
        case ORDER_POPULATION:
            const orderedPopulation = state.countries.sort((a,b) => {
                if(payload === 'ascendente') return parseInt(a.population, 10) - parseInt(b.population, 10)
                return parseInt(b.population, 10) - parseInt(a.population, 10)
            })
            return{
                ...state,
                countries: [...orderedPopulation]
            }
       
        case LOADING:
            return{
                ...state,
                loading: true
            }
        default: return {...state};
    }



}

export default reducer;