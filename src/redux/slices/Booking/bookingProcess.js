import { createSlice } from "@reduxjs/toolkit";

const bookingProcess = createSlice({
    name:"bookingPrcoess",
    initialState:{stepFirst:{},stepSecond:{}},
    reducers:{
        setStepFirst:(_,{payload}) => {_.stepFirst = payload},
        setStepSecond:(_,{payload}) => {_.stepSecond = payload},
    }
});

export default bookingProcess.reducer;
export const {setStepFirst,setStepSecond} = bookingProcess.actions;