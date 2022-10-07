import { createSlice } from "@reduxjs/toolkit";

const MILLI_SECONDS = 1000;

const smoochOpen = createSlice({
    name: 'smoochOpen',
    initialState:{
        enable: false,
        seconds: 1000,
        createConversation: true
    },
    reducers: {
        enableSmoochOpen(state, action) {
            state.enable = action.payload;
        },
        setSeconds(state, action) {
            state.seconds = action.payload * MILLI_SECONDS;
        },
        enableConversation(state, action) {
            state.createConversation = action.payload;
        }
    }
});

export const { setSeconds, enableSmoochOpen, enableConversation } = smoochOpen.actions;
export default smoochOpen.reducer;