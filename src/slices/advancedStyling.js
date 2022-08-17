import { createSlice } from "@reduxjs/toolkit";

const advancedStyling = createSlice({
    name: 'advancedStyling',
    initialState:{
        enable: false,
        headerUrl: '',
        headerHeight: 64
    },
    reducers: {
        enableadvancedStyling(state, action) {
            state.enable = action.payload;
        },
        setHeaderUrl(state, action) {
            state.headerUrl = action.payload;
        },
        setHeaderHeight(state, action) {
            state.headerHeight = action.payload;
        }
    }
});

export const { setHeaderUrl, enableadvancedStyling, setHeaderHeight } = advancedStyling.actions;
export default advancedStyling.reducer;