import { createSlice } from "@reduxjs/toolkit";
import getNextSevenDays from "@/utils/booking/GetNextSevenDays";

const selectBookingDate = createSlice({
    name: "bookingPrcoess",
    initialState: [{
        ...getNextSevenDays[0],
        status: "Today",
        active: true,
    },
    {
        ...getNextSevenDays[1],
        status: "Tomorrow",
    }, ...getNextSevenDays],
    reducers: {
        setStepFirst: (_, { payload }) => { _.stepFirst = payload },
        setStepSecond: (_, { payload }) => { _.stepSecond = payload },
    }
});

export default selectBookingDate.reducer;
export const { setStepFirst, setStepSecond } = selectBookingDate.actions;