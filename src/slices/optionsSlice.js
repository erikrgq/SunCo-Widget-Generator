import { createSlice } from "@reduxjs/toolkit";

const optionsSlice = createSlice({
    name: 'options',
    initialState:{
        jwt: '',
        externalId: '',
        customColors: {
            brandColor: '65758e',
            conversationColor: '65758e',
            actionColor: '65758e'
        },
        menuItems: {
            imageUpload: false,
            fileUpload: false,
            shareLocation: false
        },
        prechatCapture: {
            avatarUrl: '',
            enabled: false
        },
        customText: {
            headerText: '',
            prechatCaptureGreetingText: '',
            prechatCaptureNameLabel: '',
            prechatCaptureNamePlaceholder: '',
            prechatCaptureEmailLabel: '',
            prechatCaptureEmailPlaceholder: '',
            prechatCaptureConfirmationText: '',
            introAppText: ''
        },
        backgroundImageUrl: '',
        soundNotificationEnabled: false,
        businessName: '',
        canUserSeeConversationList: false,
        fixedHeader: false,
        buttonIconUrl: '',
        buttonWidth: '58',
        buttonHeight: '58',
        businessIconUrl: ''
    },
    reducers: {
        setValue(state, action) {
            const key = action.payload.key;
            if (action.payload.key.length > 1) {
                state[key[0]][key[1]] = action.payload.value;
                return;
            }
            state[key] = action.payload.value;
        }
    }
});

export const { setValue } = optionsSlice.actions;
export default optionsSlice.reducer;