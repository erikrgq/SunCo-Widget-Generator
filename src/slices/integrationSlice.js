import { createSlice } from "@reduxjs/toolkit";

const integrationSlice = createSlice({
    name: 'integration',
    initialState:{
        integrationId: ''
    },
    reducers: {
        updateIntegrationId(state, action) {
            state.integrationId = action.payload;
        }
    }
});

export const { updateIntegrationId } = integrationSlice.actions;
export default integrationSlice.reducer;