import { combineReducers } from "@reduxjs/toolkit";
import allCountries from "./slices/allCountries";
import selectedType from "./slices/tourPage/selectedType";
import isProfileLoading from "./slices/tourPage/isProfileLoading";
const rootReducer = combineReducers({
    allDestinations:allCountries,
    selectedType:selectedType,
    isProfileLoading:isProfileLoading
});

export default rootReducer;