import { combineReducers } from "@reduxjs/toolkit";
import allCountries from "./slices/allCountries";
import selectedType from "./slices/tourPage/selectedType";
const rootReducer = combineReducers({
    allDestinations:allCountries,
    selectedType:selectedType
});

export default rootReducer;