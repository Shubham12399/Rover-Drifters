import { createSlice } from "@reduxjs/toolkit";

const isProfileLoading = createSlice({
    name:"isProfileLoading",
    initialState:true,
    reducers:{
        setIsProfileLoading:(_,{payload}) => payload,
    }
});

export const {setIsProfileLoading} = isProfileLoading.actions;
export default isProfileLoading.reducer;