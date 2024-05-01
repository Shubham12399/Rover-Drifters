// import '../../envConfig.js';
// const BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;

const BASE_URL =
  process.env.NODE_ENV == "development"
    ? "http://127.0.0.1:4000/api/v1"
    : "https://api-roverdrifters.onrender.com/api/v1";

    console.log(BASE_URL)
const tourApi = {
  GET_ALL_TOURS: BASE_URL + "/tours",
  GET_TOUR_BY_ID: BASE_URL + "/tours",
  CREATE_TOUR: BASE_URL + "/tours",
  UPDATE_TOUR: BASE_URL + "/tours",
  UPDATE_ITENRARY: BASE_URL + "/tours/",
  DELETE_ITENRARY: BASE_URL + "/tours/",
  DELETE_TOUR: BASE_URL + "/tours",
  GET_TOURS_COUNT: BASE_URL + "/tours/tourscount",
};

const countryApi = {
  GET_ALL_COUNTRIES: BASE_URL + "/countries",
  GET_COUNTRIES_COUNT: BASE_URL + "/countries/countriescount",
  CREATE_A_COUNTRY: BASE_URL + "/countries",
  UPDATE_A_COUNTRY: BASE_URL + "/countries",
  DELETE_A_COUNTRY: BASE_URL + "/countries",
  GET_CITIES_BY_COUNTRY_ID: BASE_URL + "/countries/cities",
  GET_COUNTRY_BY_ID: BASE_URL + "/countries",
};
const cityApi = {
  CREATE_A_CITY: BASE_URL + "/cities",
  UPDATE_A_CITY: BASE_URL + "/cities",
  DELETE_A_CITY: BASE_URL + "/cities",
  GET_CITY_BY_ID: BASE_URL + "/cities",
};
const typeApi = {
  CREATE_A_TYPE: BASE_URL + "/types",
  UPDATE_A_TYPE: BASE_URL + "/types",
  DELETE_A_TYPE: BASE_URL + "/types",
  GET_Type_BY_ID: BASE_URL + "/types",
  GET_ALL_TYPE: BASE_URL + "/types",
  GET_TYPES_COUNT: BASE_URL + "/types/typescount",
};

const hotelApi = {
  CREATE_A_HOTEL: BASE_URL + "/hotels",
  UPDATE_A_HOTEL: BASE_URL + "/hotels",
  DELETE_A_HOTEL: BASE_URL + "/hotels",
  GET_HOTEL_BY_ID: BASE_URL + "/hotels",
  GET_ALL_HOTELS: BASE_URL + "/hotels",
};
const packageApi = {
  CREATE_A_PACKAGE: BASE_URL + "/packages",
  UPDATE_PACKAGE_BY_ID: BASE_URL + "/packages",
  DELETE_A_PACKAGE: BASE_URL + "/packages",
  GET_PACKAGE_BY_ID: BASE_URL + "/packages",
  GET_ALL_PACKAGES: BASE_URL + "/packages",
};
const bannersApi = {
  CREATE_BANNERS: BASE_URL + "/banners",
  GET_ALL_BANNERS: BASE_URL + "/banners",
  UPDATE_BANNERS: BASE_URL + "/banners",
  DELETE_BANNERS: BASE_URL + "/banners",
};
export {
  tourApi,
  countryApi,
  cityApi,
  typeApi,
  hotelApi,
  packageApi,
  bannersApi,
};
