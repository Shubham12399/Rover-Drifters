import { combineReducers } from "@reduxjs/toolkit";
import allCountries from "./slices/allCountries";
const rootReducer = combineReducers({
    allDestinations:allCountries
});

export default rootReducer;