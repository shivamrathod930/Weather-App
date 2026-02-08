import {
     FETCH_CURRENT_SUCCESS,
     FETCH_WEATHER_ERROR,
     FETCH_FORCAST_SUCCESS,
     FETCH_WEATHER_PENDING,
     SET_CITY,
} from '../constanc/WeatherConstanc'

const initiolState = {
     city: 'Delhi',
     current: null,
     forcast: null,
     loading: false,
     error: null,
}

const WeatherReducer = (state = initiolState, action) => {
     if (action.type === FETCH_WEATHER_PENDING) {
          return {
               ...state,
               error:null,
               loading:true
          };
     }else if(action.type === FETCH_WEATHER_ERROR){
          return {
               ...state,
               loading:false,
               error:action.payload,
          }
     }else if(action.type === SET_CITY){
          return{ 
               ...state,
               city:action.payload,
          }
     }else if(action.type === FETCH_CURRENT_SUCCESS){
          return {
               ...state,
               loading:false,
               current:action.payload,
          }
     }else  if(action.type === FETCH_FORCAST_SUCCESS){
          return{
               ...state,
               loading:false,
               forcast:action.payload,
          }
     }else{
          return state; 
     }
}

export default WeatherReducer;