import { combineReducers } from "redux";
import WeatherReducer from "./reducers/WeatherReducer";


const root = combineReducers(
     WeatherReducer,
)

export default root;