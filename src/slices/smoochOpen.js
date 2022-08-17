import { createSlice } from "@reduxjs/toolkit";

const MILLI_SECONDS = 1000;

const smoochOpen = createSlice({
    name: 'smoochOpen',
    initialState:{
        enable: false,
        seconds: 1000
    },
    reducers: {
        enableSmoochOpen(state, action) {
            state.enable = action.payload;
        },
        setSeconds(state, action) {
            state.seconds = action.payload * MILLI_SECONDS;
        }
    }
});

export const { setSeconds, enableSmoochOpen } = smoochOpen.actions;
export default smoochOpen.reducer;