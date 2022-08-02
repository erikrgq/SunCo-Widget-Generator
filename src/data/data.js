import { updateIntegrationId } from "../slices/integrationSlice";
import { setValue } from "../slices/optionsSlice";

export const DATA = {
    integrationId: {
        text: 'Integration ID',
        placeholder: 'Integration ID',
        type: 'input',
        inputType: 'text',
        reducer: updateIntegrationId,
        toolTip: `
            <p>The SunCo Integration ID is what actually connects your widget to your SunCo account/app. You can find your App's Integration ID in 2 locations:<p/>
            <p>-- The URL of the your App in your Smooch Account: https://app.smooch.io/apps/xxxxxxxxxxxxxxxxxxxx<p/>
            <p>-- For new Zendesk Accounts, you can also find this in your Zendesk Admin Center (Support Admin > Integrations > Custom Integrations)</p>
        `
    },
    businessName: {
        text: 'Business Name',
        placeholder: 'Business Name',
        type: 'input',
        inputType: 'text',
        key: ['businessName'],
        reducer: setValue,
        toolTip: `
            <p>A custom business name for the Web Messenger. This will appear in the main/top Header of the widget. (ex: "FloBot" "Nike Support", etc)</p>
        `
    },
    soundNotificationEnabled: {
        text: 'Enable Sound Notifications',
        type: 'checkbox',
        hint: 'Enables the sound notification for new messages',
        key: ['soundNotificationEnabled'],
        reducer: setValue,
        toolTip: `
        <p>Enabling this will play an audible tone for the end user when new messages are sent/received.</p>

        <p>Disabled by default.</p>
    `
    },
    canUserSeeConversationList: {
        text: 'Allow additional conversations',
        type: 'checkbox',
        hint: 'Allows users to view their list of conversations.',
        key: ['canUserSeeConversationList'],
        reducer: setValue,
        toolTip: `
            <p>Enabling this will allow users to create more than one conversation on the Web Messenger integration.</p>

            <p>Disabled by default.</p>
        `
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
        reducer: setValue,
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
        reducer: setValue,
        toolTip: `
            <p>The Sub Header contains a menu to switch to other channels (FB, email, sms, etc). Fixing this keeps it locked at the top of the conversation when scrolled.</p>
        `
    },
    buttonWidth: {
        text: 'Button Width',
        type: 'range-picker',
        placeholder: 'Specify the button width',
        key: ['buttonWidth'],
        reducer: setValue,
        toolTip: `
            <p>The launcher button width.</p>
            <p>Default value is 58px.</p>
        `
    },
    buttonHeight: {
        text: 'Button Height',
        type: 'range-picker',
        placeholder: 'Specify the button height',
        key: ['buttonHeight'],
        reducer: setValue,
        toolTip: `
            <p>The launcher button height.</p>
            <p>Default value is 58px.</p>
        `
    },
    brandColor: {
        text: 'Brand Color',
        type: 'color-picker',
        key: ['customColors', 'brandColor'],
        reducer: setValue,
        toolTip: `
            <p>Messenger header and the button or tab in idle state.</p>

            <img className="tooltip__img" src="https://docs.smooch.io/images/color_customization_web.png" />
        `
    },
    conversationColor: {
        text: 'Conversation Color',
        type: 'color-picker',
        key: ['customColors', 'conversationColor'],
        reducer: setValue,
        toolTip: `
            <p>Customer messages, quick replies and actions in the footer.</p>

            <img className="tooltip__img" src="https://docs.smooch.io/images/color_customization_web.png" />
        `
    },
    actionColor: {
        text: 'Action Color',
        type: 'color-picker',
        key: ['customColors', 'actionColor'],
        reducer: setValue,
        toolTip: `
            <p>Call-to-actions inside your messages (buttons, et al).</p>

            <img className="tooltip__img" src="https://docs.smooch.io/images/color_customization_web.png" />
        `
    },
    businessIconUrl: {
        text: 'Business Icon Url',
        type: 'input',
        inputType: 'URL',
        placeholder: 'JPG, PNG, or GIF format & 200 x 200 pixels.',
        key: ['businessIconUrl'],
        reducer: setValue,
        toolTip: `
            <p>Image in the top Header of the opened widget, next to the Business Name.</p>
        `
    },
    buttonIconUrl: {
        text: 'Button Icon Url',
        type: 'input',
        inputType: 'URL',
        placeholder: 'JPG, PNG, or GIF format & 200 x 200 pixels.',
        key: ['buttonIconUrl'],
        reducer: setValue,
        toolTip: `
            <p>Image in the actual widget button on the website; before it is opened. aka the Launcher.</p>
        `
    },
    avatarUrl: {
        text: 'Avatar Url',
        type: 'input',
        inputType: 'URL',
        placeholder: 'JPG, PNG, or GIF format & 200 x 200 pixels.',
        key: ['prechatCapture', 'avatarUrl'],
        reducer: setValue,
        toolTip: `
            <p>Image in the Prechat Capture (if one is enabled below)</p>
        `
    },
    backgroundImageUrl: {
        text: 'Background Image Url',
        type: 'input',
        inputType: 'URL',
        placeholder: 'JPG, PNG, or GIF format & 200 x 200 pixels.',
        key: ['backgroundImageUrl'],
        reducer: setValue,
        toolTip: `
            <p>Image will cover the entire background of the conversation. Image will be tiled to fit the window.</p>
        `
    },
    enablePrechatCapture: {
        text: 'Enable Prechat Capture Options',
        type: 'checkbox-input',
        inputType: 'checkbox',
        key: ['prechatCapture', 'enabled'],
        reducer: setValue,
        toolTip: `
            <p>Allows you to capture a user’s name and email before the start of a conversation.</p>
        `,
        inputs: [
            {
                text: 'Prechat Capture Greeting',
                type: 'input',
                inputType: 'text',
                placeholder: "Hi there 👋 To start off, we'd like to know a little bit more about you:",
                key: ['customText', 'prechatCaptureGreetingText'],
                reducer: setValue,
                toolTip: `
                    <p>Text for the initial greeting message.</p>
                `
            },
            {
                text: 'Prechat Capture Name Label',
                type: 'input',
                inputType: 'text',
                placeholder: 'Your name',
                key: ['customText', 'prechatCaptureNameLabel'],
                reducer: setValue,
                toolTip: `
                    <p>Label displayed for the default form's first field.</p>
                `
            },
            {
                text: 'Prechat Capture Name Placeholder',
                type: 'input',
                inputType: 'text',
                placeholder: 'Type your name...',
                key: ['customText', 'prechatCaptureNamePlaceholder'],
                reducer: setValue,
                toolTip: `
                    <p>Placeholder for the default form's first field.</p>
                `
            },
            {
                text: 'Prechat Capture Email Label',
                type: 'input',
                inputType: 'text',
                placeholder: 'Email',
                key: ['customText', 'prechatCaptureEmailLabel'],
                reducer: setValue,
                toolTip: `
                    <p>Label displayed for the default form's second field.</p>
                `
            },
            {
                text: 'Prechat Capture Email Placeholder',
                type: 'input',
                inputType: 'text',
                placeholder: 'name@company.com',
                key: ['customText', 'prechatCaptureEmailPlaceholder'],
                reducer: setValue,
                toolTip: `
                    <p>Placeholder for the default form's second field.</p>
                `
            },
            {
                text: 'Prechat Capture Confirmation Text',
                type: 'input',
                inputType: 'text',
                placeholder: 'Thanks for that! What can we help you with?',
                key: ['customText', 'prechatCaptureConfirmationText'],
                reducer: setValue,
                toolTip: `
                    <p>Text for the confirmation message sent when the form is completed.</p>
                `
            },
        ]
    },
    headerText: {
        text: 'Header Text',
        type: 'input',
        inputType: 'text',
        placeholder: 'Welcome to Acme, INC!',
        key: ['customText', 'headerText'],
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
