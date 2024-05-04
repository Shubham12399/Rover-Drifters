import { createSlice } from "@reduxjs/toolkit";

const {actions , reducer} = createSlice({
    name:"allDestinations",
    initialState:[],
    reducers:{
        setDestinations:(_,{payload}) => {
            return payload;
        }
    }

});

export default reducer;
export const {setDestinations} = actions;