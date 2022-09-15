import { createSlice } from "@reduxjs/toolkit";

const nativeWidget = createSlice({
    name: 'nativeWidget',
    initialState:{
        key: '',
        nativeName: ''
    },
    reducers: {
        setKey(state, action) {
            state.key = action.payload;
        },
        setNativeName(state, action) {
            state.nativeName = action.payload;
        }
    }
});

export const { setKey, setNativeName } = nativeWidget.actions;
export default nativeWidget.reducer;