import { enableadvancedStyling, setHeaderHeight, setHeaderUrl } from "../slices/advancedStyling";
import { updateIntegrationId } from "../slices/integrationSlice";
import { setValue } from "../slices/optionsSlice";
import { enableConversation, enableSmoochOpen, setSeconds } from "../slices/smoochOpen";
import { setKey, setNativeName } from '../slices/nativeWdiget';

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
    jwt: {
        text: 'Enable JWT',
        hint: 'Allows you to preset an already logged in user (i.e. demonstrating SSO)',
        type: 'checkbox-input',
        inputs: [
            {
                text: 'External ID',
                type: 'input',
                key: ['externalId'],
                inputType: 'text',
                placeholder: 'user_external_id',
                toolTip: `
                    <p>Optional. User's external id, which can be passed in init() as an alternative to login()</p>
                `,
                reducer: setValue,
            },
            {
                text: 'JWT',
                type: 'input',
                key: ['jwt'],
                inputType: 'text',
                placeholder: 'your_jwt',
                toolTip: `
                    <p>Optional. User's authentication token, which can be passed in init() as an alternative to login()</p>
                `,
                reducer: setValue,
            },
        ]
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
    disableCreateConversation: {
        text: 'Disable Bot from automatically being Triggered when Widget opens',
        hint: 'Disabling would require user to post message to initiate Bot',
        type: 'checkbox',
        inputType: 'checkbox',
        reducer: enableConversation,
        toolTip: `
            <p>The Generator includes this custom snippet/feature by default. Checking this box removes the snippet and your bot will therefore not be invoked until the user sends their first message.</p>
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
                text: 'Prechat Avatar Url',
                type: 'input',
                inputType: 'URL',
                placeholder: 'JPG, PNG, or GIF format & 200 x 200 pixels.',
                key: ['prechatCapture', 'avatarUrl'],
                reducer: setValue,
                toolTip: `
                    <p>Image in the Prechat Capture (if one is enabled below)</p>
                `
            },
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
    },
    popWidgetAutomatically: {
        text: 'Automatically Open Widget',
        type: 'checkbox-input',
        hint: 'Opens widget after set seconds',
        reducer: enableSmoochOpen,
        inputs: [
            {
                text: 'Seconds',
                type: 'input',
                inputType: 'number',
                placeholder: '1',
                reducer: setSeconds,
                toolTip: `
                    <p>The default value is 1 second. If the input is left blank</p>
                `
            }
        ]
    },
    addCustomStyles: {
        text: "Advanced Styling Options",
        type: "checkbox-input",
        hint: "Adds custom styling to widget chat",
        reducer: enableadvancedStyling,
        inputs: [
            {
                text: 'Header Image',
                type: 'input',
                inputType: 'URL',
                placeholder: 'https://www.some-image.png',
                reducer: setHeaderUrl,
                toolTip: `
                    <p>Add a image URL that ends with .png or .jpg</p>
                `
            },
            {
                text: 'Header Height',
                type: 'input',
                inputType: 'number',
                placeholder: '50',
                reducer: setHeaderHeight,
                toolTip: `
                    <p>The default height will be 64 Pixels if left blank</p>
                `
            }
        ]
    },
    nativeKey : {
        text: 'Native Messaging Widget Key',
        type: 'input',
        toolTip: `
            The Native Messaging Widget Key is unique to each Web Widget that you create and can be found in the Zendesk Admin Center (Channels > Messaging > Installation)

            <img className="tooltip__img" src="https://theme.zdassets.com/theme_assets/10738080/a3d4c220779caa00545a1938100b06ece9eb0f79.png" alt="Native Messaging Widget Key Screenshot">
        `,
        reducer: setKey,
        placeholder: '56431234-adsffeg3-vfre4-asd2',
    },
    nativeName: {
        text: 'Native Messaging Bookmarklet Name',
        type: 'input',
        toolTip: 'This will be used to differentiate from other bookmarklets',
        reducer: setNativeName,
        placeholder: 'ACME'
    }
};
