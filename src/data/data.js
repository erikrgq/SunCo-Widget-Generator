import { useSelector } from "react-redux";
import { updateIntegrationId } from "../slices/integrationSlice";
import { setValue } from "../slices/optionsSlice";

export const DATA = {
    integrationId: {
        text: 'Integration ID',
        placeholder: 'Integration ID',
        type: 'input',
        inputType: 'text',
        reducer: updateIntegrationId
    },
    businessName: {
        text: 'Business Name',
        placeholder: 'Business Name',
        type: 'input',
        inputType: 'text',
        key: ['businessName'],
        reducer: setValue
    },
    soundNotificationEnabled: {
        text: 'Enable Sound Notifications',
        type: 'checkbox',
        hint: 'Enables the sound notification for new messages',
        key: ['soundNotificationEnabled'],
        reducer: setValue
    },
    canUserSeeConversationList: {
        text: 'Allow additional conversations',
        type: 'checkbox',
        hint: 'Allows users to view their list of conversations.',
        key: ['canUserSeeConversationList'],
        reducer: setValue
    },
    // TODO add custom Smooch.someFunction({}) slice
    // popWidgetAutomatically: {
    //     text: 'Automatically Open Widget',
    //     placeholder: '10 Seconds',
    //     type: 'checkbox-input',
    //     hint: 'Opens widget after set seconds',
    //     reducer: null
    // },
    imageUpload: {
        text: 'Image Upload',
        type: 'checkbox',
        hint: 'Enables the image upload menu item.',
        key: ['menuItems', 'imageUpload'],
        reducer: setValue
    },
    fileUpload: {
        text: 'File Upload',
        type: 'checkbox',
        hint: 'Enables the file upload menu item.',
        key: ['menuItems', 'fileUpload'],
        reducer: setValue
    },
    shareLocation: {
        text: 'Share Location',
        type: 'checkbox',
        hint: 'Enables the share location menu item.',
        key: ['menuItems', 'shareLocation'],
        reducer: setValue
    },
    fixedHeader: {
        text: 'Fixed Header',
        type: 'checkbox',
        hint: 'When enabled, the introduction pane will be pinned at the top of the conversation instead of scrolling with it.',
        key: ['fixedHeader'],
        reducer: setValue
    },
    buttonWidth: {
        text: 'Button Width',
        type: 'range-picker',
        placeholder: 'Specify the button width',
        key: ['buttonWidth'],
        reducer: setValue
    },
    buttonHeight: {
        text: 'Button Height',
        type: 'range-picker',
        placeholder: 'Specify the button height',
        key: ['buttonHeight'],
        reducer: setValue
    },
    brandColor: {
        text: 'Brand Color',
        type: 'color-picker',
        key: ['customColors', 'brandColor'],
        reducer: setValue
    },
    conversationColor: {
        text: 'Conversation Color',
        type: 'color-picker',
        key: ['customColors', 'conversationColor'],
        reducer: setValue
    },
    actionColor: {
        text: 'Action Color',
        type: 'color-picker',
        key: ['customColors', 'actionColor'],
        reducer: setValue
    },
    businessIconUrl: {
        text: 'Business Icon Url',
        type: 'input',
        inputType: 'URL',
        placeholder: 'JPG, PNG, or GIF format & 200 x 200 pixels.',
        key: ['businessIconUrl'],
        reducer: setValue
    },
    buttonIconUrl: {
        text: 'Button Icon Url',
        type: 'input',
        inputType: 'URL',
        placeholder: 'JPG, PNG, or GIF format & 200 x 200 pixels.',
        key: ['buttonIconUrl'],
        reducer: setValue
    },
    avatarUrl: {
        text: 'Avatar Url',
        type: 'input',
        inputType: 'URL',
        placeholder: 'JPG, PNG, or GIF format & 200 x 200 pixels.',
        key: ['prechatCapture', 'avatarUrl'],
        reducer: setValue
    },
    backgroundImageUrl: {
        text: 'Background Image Url',
        type: 'input',
        inputType: 'URL',
        placeholder: 'JPG, PNG, or GIF format & 200 x 200 pixels.',
        key: ['backgroundImageUrl'],
        reducer: setValue
    },
    headerText: {
        text: 'Header Text',
        type: 'input',
        inputType: 'text',
        placeholder: 'Welcome to Acme, INC!',
        key: ['customText', 'headerText'],
        reducer: setValue
    },
    prechatCaptureGreetingText: {
        text: 'Prechat Capture Greeting',
        type: 'input',
        inputType: 'text',
        placeholder: "Hi there 👋 To start off, we'd like to know a little bit more about you:",
        key: ['customText', 'prechatCaptureGreetingText'],
        reducer: setValue
    },
    prechatCaptureNameLabel: {
        text: 'Prechat Capture Name Label',
        type: 'input',
        inputType: 'text',
        placeholder: 'Your name',
        key: ['customText', 'prechatCaptureNameLabel'],
        reducer: setValue
    },
    prechatCaptureNamePlaceholder: {
        text: 'Prechat Capture Name Placeholder',
        type: 'input',
        inputType: 'text',
        placeholder: 'Type your name...',
        key: ['customText', 'prechatCaptureNamePlaceholder'],
        reducer: setValue
    },
    prechatCaptureEmailLabel: {
        text: 'Prechat Capture Email Label',
        type: 'input',
        inputType: 'text',
        placeholder: 'Email',
        key: ['customText', 'prechatCaptureEmailLabel'],
        reducer: setValue
    },
    prechatCaptureEmailPlaceholder: {
        text: 'Prechat Capture Email Placeholder',
        type: 'input',
        inputType: 'text',
        placeholder: 'name@company.com',
        key: ['customText', 'prechatCaptureEmailPlaceholder'],
        reducer: setValue
    },
    prechatCaptureConfirmationText: {
        text: 'Prechat Capture Confirmation Text',
        type: 'input',
        inputType: 'text',
        placeholder: 'Thanks for that! What can we help you with?',
        key: ['customText', 'prechatCaptureConfirmationText'],
        reducer: setValue
    },
    introAppText: {
        text: 'Intro APP text',
        type: 'input',
        inputType: 'text',
        placeholder: 'Welcome back! How can we help?',
        key: ['customText', 'introAppText'],
        reducer: setValue
    }
};
