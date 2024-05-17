import { combineReducers } from "@reduxjs/toolkit";
import allCountries from "./slices/allCountries";
import selectedType from "./slices/tourPage/selectedType";
import isProfileLoading from "./slices/isProfileLoading";
import allTypes from "./slices/allTypes";
import bookingProcess from "./slices/Booking/bookingProcess";
import selectBookingDate from "./slices/Booking/selectBookingDate";
const rootReducer = combineReducers({
    allDestinations:allCountries,
    selectedType:selectedType,
    isProfileLoading:isProfileLoading,
    allTypes:allTypes,
    bookingProcess:bookingProcess,
    selectBookingDate:selectBookingDate
});

export default rootReducer;