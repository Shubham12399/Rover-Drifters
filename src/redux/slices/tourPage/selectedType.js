import { createSlice } from "@reduxjs/toolkit";


const selectedType = createSlice({
    name:"selectedTypeInTourPage",
    initialState:{},
    reducers:{
        setSelectedTypeInTourPage: (_,{payload}) => payload,
    }
});

export default selectedType.reducer;
export const {setSelectedTypeInTourPage} = selectedType.actions;