import React, { useEffect, useState } from 'react';
import InputComponent from './InputComponent';
import { Row, Col, Grid } from '@zendeskgarden/react-grid';
import { Well, Title } from '@zendeskgarden/react-notifications';
import { Button, Anchor } from '@zendeskgarden/react-buttons';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { Dots } from '@zendeskgarden/react-loaders';
import { Alert, Close } from '@zendeskgarden/react-notifications';
import { DATA } from '../data/data';
import ColorPickerComponent from './ColorPickerComponent';
import RangePickerComponent from './RangePickerComponent';
import { useSelector } from 'react-redux';

const Form = () => {
  const integrationID = useSelector((state) => state.integration.integrationId);
  const options = useSelector((state) => state.options);
  const [isBookmarkletCreated, setisBookmarkletCreated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [bookmarklet, setBookmarklet] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setisBookmarkletCreated(false);
    setShowAlert(false);
  }, [options, integrationID]);

  const copyWidgetCode = () => {
    navigator
    .clipboard
    .writeText(`
      <script>${headfunction}</script>

      <script>${body}</script>`
      ).then(() => {
      setShowAlert(true);
    });
  };

  const convertBool = (boolean) => {
    return boolean ? '!0' : '!1';
  };

  const createBookmarklet = () => {
    const specialCharacters = [ '%', '"', '<', '>', '#', '@', ' ', '\\&', '\\?' ];
    const urlencode = code => code.replace( new RegExp( specialCharacters.join( '|' ), 'g' ), encodeURIComponent);

    setIsLoading(true);
    setisBookmarkletCreated(true);

    setTimeout(() => {
      const head = urlencode(headfunction);
      const body = urlencode(bodyFunction);

      setBookmarklet(head+body);
      setIsLoading(false);
    }, 2000)
  };

  const headfunction = `!function(o,p,s,e,c){var i,a,h,u=[],d=[];function t(){var t="You must provide a supported major version.";try{if(!c)throw new Error(t);var e,n="https://cdn.smooch.io/",r="smooch";if((e="string"==typeof this.response?JSON.parse(this.response):this.response).url){var o=p.getElementsByTagName("script")[0],s=p.createElement("script");s.async=!0;var i=c.match(/([0-9]+).?([0-9]+)?.?([0-9]+)?/),a=i&&i[1];if(i&&i[3])s.src=n+r+"."+c+".min.js";else{if(!(4<=a&&e["v"+a]))throw new Error(t);s.src=e["v"+a]}o.parentNode.insertBefore(s,o)}}catch(e){e.message===t&&console.error(e)}}o[s]={init:function(){i=arguments;var t={then:function(e){return d.push({type:"t",next:e}),t},catch:function(e){return d.push({type:"c",next:e}),t}};return t},on:function(){u.push(arguments)},render:function(){a=arguments},destroy:function(){h=arguments}},o.__onWebMessengerHostReady__=function(e){if(delete o.__onWebMessengerHostReady__,o[s]=e,i)for(var t=e.init.apply(e,i),n=0;n<d.length;n++){var r=d[n];t="t"===r.type?t.then(r.next):t.catch(r.next)}a&&e.render.apply(e,a),h&&e.destroy.apply(e,h);for(n=0;n<u.length;n++)e.on.apply(e,u[n])};var n=new XMLHttpRequest;n.addEventListener("load",t),n.open("GET","https://"+e+".webloader.smooch.io/",!0),n.responseType="json",n.send()}(window,document,"Smooch","${integrationID}","5");`;
  const bodyFunction = `Smooch.init({integrationId: "${integrationID}",customColors: {brandColor: "${options.customColors.brandColor}",conversationColor: "${options.customColors.conversationColor}",actionColor: "${options.customColors.actionColor}"},menuItems: {imageUpload:${convertBool(options.menuItems.imageUpload)},fileUpload:${convertBool(options.menuItems.fileUpload)},shareLocation:${convertBool(options.menuItems.shareLocation)}},prechatCapture: {avatarUrl: "${options.prechatCapture.avatarUrl}"},customText: {headerText: "${options.customText.headerText}",prechatCaptureGreetingText: "${options.customText.prechatCaptureGreetingText}",prechatCaptureNameLabel: "${options.customText.prechatCaptureNameLabel}",prechatCaptureNamePlaceholder: "${options.customText.prechatCaptureNamePlaceholder}",prechatCaptureEmailLabel: "${options.customText.prechatCaptureEmailLabel}",prechatCaptureEmailPlaceholder: "${options.customText.prechatCaptureEmailPlaceholder}",prechatCaptureConfirmationText: "${options.customText.prechatCaptureConfirmationText}",introAppText: "${options.customText.introAppText}"},backgroundImageUrl: "${options.backgroundImageUrl}",soundNotificationEnabled:${convertBool(options.soundNotificationEnabled)},businessName: "${options.businessName}",canUserSeeConversationList:${convertBool(options.canUserSeeConversationList)},fixedHeader:${convertBool(options.fixedHeader)},buttonIconUrl: "${options.buttonIconUrl}",buttonWidth: "${options.buttonWidth}px",buttonHeight: "${options.buttonHeight}px",businessIconUrl: "${options.businessIconUrl}"});`;
  const body = `
    Smooch.init({
      integrationId: "${integrationID}",
      customColors: {
        brandColor: "${options.customColors.brandColor}",
        conversationColor: "${options.customColors.conversationColor}",
        actionColor: "${options.customColors.actionColor}"
      },
      menuItems: {
        imageUpload:${options.menuItems.imageUpload},
        fileUpload:${options.menuItems.fileUpload},
        shareLocation:${options.menuItems.shareLocation}
      },
      prechatCapture: {
        avatarUrl: "${options.prechatCapture.avatarUrl}"
      },
      customText: {
        headerText: "${options.customText.headerText}",
        prechatCaptureGreetingText: "${options.customText.prechatCaptureGreetingText}",
        prechatCaptureNameLabel: "${options.customText.prechatCaptureNameLabel}",
        prechatCaptureNamePlaceholder: "${options.customText.prechatCaptureNamePlaceholder}",
        prechatCaptureEmailLabel: "${options.customText.prechatCaptureEmailLabel}",
        prechatCaptureEmailPlaceholder: "${options.customText.prechatCaptureEmailPlaceholder}",
        prechatCaptureConfirmationText: "${options.customText.prechatCaptureConfirmationText}",
        introAppText: "${options.customText.introAppText}"},
        backgroundImageUrl: "${options.backgroundImageUrl}",
        soundNotificationEnabled:${options.soundNotificationEnabled},
        businessName: "${options.businessName}",
        canUserSeeConversationList:${options.canUserSeeConversationList},
        fixedHeader:${options.fixedHeader},
        buttonIconUrl: "${options.buttonIconUrl}",
        buttonWidth: "${options.buttonWidth}px",
        buttonHeight: "${options.buttonHeight}px",
        businessIconUrl: "${options.businessIconUrl}"
      }
    );
    `;

  return (
    <form>
      <Grid>
        {showAlert && 
        <Row justifyContent='center'>
          <Col size={6}>
            <br></br>
            <Alert type='success'>
              <Title>Copied</Title>
              <Close onClick={() => setShowAlert(false)} aria-label="Close Alert" />
            </Alert>
          </Col>
        </Row>
        }
        <Row justifyContent="center">
          <Col sm={6}>
            <h1>Widget Generator</h1>
            <h2>General</h2>
            <Well>
              <InputComponent data={DATA.integrationId} />
              <InputComponent data={DATA.businessName} />
            </Well>
            <h2>Options</h2>
            <Well>
              <Title style={{"textDecoration": "underline"}}>General</Title>
              <br></br>
              <InputComponent data={DATA.soundNotificationEnabled} />
              <InputComponent data={DATA.canUserSeeConversationList} />
              {/* <InputComponent data={DATA.popWidgetAutomatically} /> */}
              <Title style={{"textDecoration": "underline"}}>Menu Items</Title>
              <br></br>
              <InputComponent data={DATA.imageUpload} />
              <InputComponent data={DATA.fileUpload} />
              <InputComponent data={DATA.shareLocation} />
              <Title style={{"textDecoration": "underline"}}>Styling</Title>
              <br></br>
              <InputComponent data={DATA.fixedHeader} />
              <RangePickerComponent data={DATA.buttonWidth} />
              <RangePickerComponent data={DATA.buttonHeight} />
              <ColorPickerComponent data={DATA.brandColor} />
              <ColorPickerComponent data={DATA.conversationColor} />
              <ColorPickerComponent data={DATA.actionColor} />
              <InputComponent data={DATA.businessIconUrl} />
              <InputComponent data={DATA.buttonIconUrl} />
              <InputComponent data={DATA.avatarUrl} />
              <InputComponent data={DATA.backgroundImageUrl} />
              <Title style={{"textDecoration": "underline"}}>Custom Text</Title>
              <br></br>
              <InputComponent data={DATA.headerText} />
              <InputComponent data={DATA.prechatCaptureGreetingText} />
              <InputComponent data={DATA.prechatCaptureNameLabel} />
              <InputComponent data={DATA.prechatCaptureNamePlaceholder} />
              <InputComponent data={DATA.prechatCaptureEmailLabel} />
              <InputComponent data={DATA.prechatCaptureEmailPlaceholder} />
              <InputComponent data={DATA.prechatCaptureConfirmationText} />
              <InputComponent data={DATA.introAppText} />
            </Well>
          </Col>
        </Row>
        <br></br>
        <Row justifyContent='center'>
          <Col size={2}>
            <Button onClick={copyWidgetCode}>Copy Widget Code</Button>
          </Col>
          {isBookmarkletCreated && !isLoading && 
          <Col size={2} alignSelf='center' style={{"textAlign": "center"}}>
            <Tooltip content="Drag to bookmarks">
              <Anchor href={`javascript:(function(){let script = document.createElement('script');script.src=${bookmarklet};document.body.appendChild(script);})();`} target="_blank">{options.businessName}</Anchor>
            </Tooltip>
          </Col>}
          {!isBookmarkletCreated && 
            <Col size={2} alignSelf='center'>
              <Button onClick={createBookmarklet}>Create Bookmarklet</Button>
            </Col>
          }
          {isLoading && 
            <Col size={2} alignSelf='center' textAlign='center'>
              <Dots size={32} />
            </Col>
          }
        </Row>
      </Grid>
    </form>
  );
};

export default Form;
