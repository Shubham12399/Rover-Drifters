import { combineReducers } from "@reduxjs/toolkit";
import allCountries from "./slices/allCountries";
import selectedType from "./slices/tourPage/selectedType";
import isProfileLoading from "./slices/isProfileLoading";
import allTypes from "./slices/allTypes";
const rootReducer = combineReducers({
    allDestinations:allCountries,
    selectedType:selectedType,
    isProfileLoading:isProfileLoading,
    allTypes:allTypes
});

export default rootReducer;