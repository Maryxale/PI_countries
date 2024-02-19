import {  FILTER_AND_ORDER,GET_COUNTRY, SEARCH_NAME, ADD_ACTIVITY, GET_ACTIVITY, LOADING, FILTER_CONTINENT, COUNTRY_DETAIL, ORDEN_POBLACION_ASC, ORDEN_POBLACION_DESC } from "./actionsTypes";
//estado inicial
const initialState = {
    error: "",
    countries: [],
    allactivities: [],
    countriesBackup: [],
    activity: [],
    details: [],
    loading: false,
    filterAndorder: false

}

function reducer(state = initialState, {type, payload} ){
    switch(type){
        case FILTER_AND_ORDER:
            return{...state, filterAndorder: payload}
        case GET_COUNTRY:
            return {...state, countries: payload, countriesBackup: payload,details: payload, searchName: payload};

        case COUNTRY_DETAIL:
            return {...state, details: payload, loading: false };

        case ADD_ACTIVITY:
            state.countries = state.countriesBackup;
            
            return {
                ...state,
                loading: false,
                countries: state.countries.filter(el => el.activities.find(e => (e.name).toLowerCase() === (action.payload).toLowerCase()))
            };

        case GET_ACTIVITY:
            const activityFilter = state.allactivities.filter(element => element.activities === payload)
            return {...state, 
                activity:payload === 'All' ? state.countries : activityFilter}

        case SEARCH_NAME:
            return {...state, countries: payload,  error: "", loading: false };
        
        case FILTER_CONTINENT:{
            
                //if(state.countries.length  === 0)state.countries = state.countriesBackup;
                state.countries = state.countriesBackup;
    
                return {
                    ...state,
                    loading: false,
                    countries: state.countries.filter(e => e.continent === action.payload)
                }
            }
            case ORDEN_POBLACION_ASC:{
                return {
                    ...state,
                    loading: true,
                    countries: state.countries.sort((a, b) => {
                        if (a.name < b.name) {
                            return -1;
                        }
                        if (b.name < a.name) {
                            return 1;
                        }
                        return 0;
                    })
                }
            }
            case ORDEN_POBLACION_DESC:{
                return {
                    ...state,
                    loading: true,
                    countries: state.countries.sort((a, b) => {
                        if (a.name > b.name) {
                            return -1;
                        }
                        if (b.name > a.name) {
                            return 1;
                        }
                        return 0;
                    })
                }
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