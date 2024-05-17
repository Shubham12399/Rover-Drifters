import { createSlice } from "@reduxjs/toolkit";

const allTypes = createSlice({
    name:"allTypesApiData",
    initialState:[],
    reducers:{
        setAllTypes:(_,{payload}) => payload
    }
});

export default allTypes.reducer;
export const {setAllTypes} = allTypes.actions;