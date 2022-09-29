import React, { useState, useEffect } from 'react';
import { DATA } from '../data/data';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Well } from '@zendeskgarden/react-notifications';
import { Button, Anchor } from '@zendeskgarden/react-buttons';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { Dots } from '@zendeskgarden/react-loaders';
import InputComponent from './InputComponent';
import {
    Notification,
    Close,
    useToast
  } from '@zendeskgarden/react-notifications';
import { useSelector, useDispatch } from 'react-redux';
import { setKey, setNativeName } from '../slices/nativeWdiget';
import Home from './Home';

const ZendeskForm = () => {
    const key = useSelector((state) => state.nativeWidget.key);
    const name = useSelector((state) => state.nativeWidget.nativeName);
    const [isLoading, setIsLoading] = useState(false);
    const [isBookmarkletCreated, setisBookmarkletCreated] = useState(false);
    const [bookmarklet, setBookmarklet] = useState('');
    const dispatch = useDispatch();
    const { addToast } = useToast();

    useEffect(() => {
        setisBookmarkletCreated(false);
    }, [key, name]);

    useEffect(() => {
        const url = new URLSearchParams(window.location.search);
        const WIDGET_KEY = url.get('widgetKey');
        const BOOKMARKLET_NAME = url.get('bookmarkletName');

        dispatch(setKey(WIDGET_KEY));
        dispatch(setNativeName(BOOKMARKLET_NAME));
    }, []);

    const body = `<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=${key}"> </script>`;

    const handleToast = (message, type = "success") => {
        addToast(
          ({ close }) => (
            <Notification type={type} style={{ maxWidth: 450 }}>
                {message}
              <Close aria-label="Close" onClick={close} />
            </Notification>
          ),
          'top'
        );
    };

    const copyShareLink = () => {
        if (!key) return handleToast('Widget Key and Bookmarklet Name is Required', "error");
    
        navigator.clipboard.writeText(`https://luxury-sunflower-809724.netlify.app/native/?widgetKey=${key}&bookmarkletName=${name}`);

        handleToast('Copied');
    };
    
    const copyWidgetCode = () => {
        if (!key) return handleToast('Widget Key is required', "error");

        navigator
        .clipboard
        .writeText(`${body}`);

        handleToast(`🎉 Widget Code Copied to Clipboard! Paste this code snippet into the Javascript of your website.`);
    };

    const createBookmarklet = () => {
        if (!key || !name) return handleToast('Widget Key and Bookmarklet Name is Required', "error");
    
        const specialCharacters = [ '%', '"', '<', '>', '#', '@', ' ', '\\&', '\\?' ];
        const urlencode = code => code.replace( new RegExp( specialCharacters.join( '|' ), 'g' ), encodeURIComponent);
    
        setIsLoading(true);
        setisBookmarkletCreated(true);
    
        setTimeout(() => {
          const codedBody = urlencode(body);
    
          setBookmarklet(codedBody);
          setIsLoading(false);
        }, 2000);

        handleToast(`🎉 Bookmarklet Code Created! Drag the link below to your browser's bookmark bar. Pro Tip: create a Bookmark folder called "Widgets" and start throwing them in there.`)
      };

    return (
        <>
            <Home />
            <form className='form'>
            <Row justifyContent="center">
                <Col sm={6}>
                    <h2>General</h2>
                    <Well>
                        <InputComponent data={DATA.nativeKey} value={key} />
                        <InputComponent data={DATA.nativeName} value={name} />
                    </Well>
                </Col>
            </Row>
            <br></br>
            <footer className='footer'>
            <div className='footer__container'>
                <Button onClick={() => {
                copyWidgetCode()
                }}>
                Copy Widget Code
                </Button>
                {
                isBookmarkletCreated && !isLoading && 
                <Tooltip content="Drag to bookmarks">
                    <Anchor href={`javascript:(function(){function addWidget() {let script = document.createElement('script');script.id="ze-snippet";script.src="https://static.zdassets.com/ekr/snippet.js?key=${key}";document.body.appendChild(script);}localStorage.clear();setTimeout(addWidget(),"5000");})();`} target="_blank">Native - {name} &#128278;</Anchor>
                </Tooltip>
                }
                {
                !isBookmarkletCreated && 
                <Button onClick={() => {
                    createBookmarklet()
                }}>
                    Create Bookmarklet &#128278;
                </Button>
                }
                {
                isLoading && 
                <Dots size={32} />
                }
                <Button onClick={copyShareLink}>Copy Shareable Link</Button>
            </div>
            </footer>
            </form>
        </>
    )
}

export default ZendeskForm;
