import React from 'react';
import { useSelector } from 'react-redux';
import File from '../assets/file.png';
import Image from '../assets/image.png';
import Local from '../assets/location.png';
import Exit from '../assets/cancel.png';
import Back from '../assets/back.png';

function Attachments({
    local,
    file,
    img
}) {
    if (!local && !file && !img) return;

    return (
        <div className='preview-footer__attach'>
            <img src={Exit} alt='exitd' />
            <div className='attachments'>
                {local && 
                    <div className='attachments__item'>
                        <img src={Local} alt='Location' />
                        <span>
                            Location
                        </span>
                    </div>
                }
                {file && 
                    <div className='attachments__item'>
                        <img src={File} alt='File' />
                        <span>
                            File
                        </span>
                    </div>
                }
                {img && 
                    <div className='attachments__item'>
                        <img src={Image} alt='Image' />
                        <span>Image</span>
                    </div>
                }
            </div>
        </div>
    )
};

export default function Preview() {
  const options = useSelector((state) => state.options);

  return (
    <div className='preview-container'>
        <div className='preview'>
            <div 
                className='preview-header'
                style={{
                    backgroundColor: `#${options.customColors.brandColor}`
                }}
            >
                <div className='preview-header__item'>
                    {options.businessIconUrl && <img className='preview-header__logo' src={options.businessIconUrl} alt="logo" />}
                </div>
                <div className='preview-header__item'>
                    <p>{ options.businessName }</p>
                </div>
                <div className='preview-header__item preview-header__item--end'>
                    <img src={Exit} alt='exit' />
                </div>
            </div>
            <div 
                className='preview-body'
                style={{
                    backgroundImage: `url(${options.backgroundImageUrl})`
                }}
            >
                <div>SEPTEMBER 20 2022, 9:26 AM</div>
                <div className='preview-msgs'>
                    <div className='preview-msg preview-msg--left'>
                        <span>
                            Hello how i can help?
                        </span>
                        <div
                            className='preview-msg preview-msg--btn'
                            style={{
                                backgroundColor: `#${options.customColors.actionColor}`
                            }}
                        >
                            Action One
                        </div>
                    </div>
                    <div
                        className='preview-msg preview-msg--right'
                    >
                        <span
                            style={{
                                backgroundColor: `#${options.customColors.conversationColor}`
                            }}
                        >
                            Hi!
                        </span>
                    </div>
                </div>
            </div>
            <div className='preview-footer'>
                <Attachments local={options.menuItems.shareLocation} file={options.menuItems.fileUpload} img={options.menuItems.imageUpload} />
                <div className='preview-footer__input'>
                    <p>Type a message...</p>
                </div>
            </div>
        </div>
        <div>
            <div 
                className='widget'
                style={{
                    backgroundColor: `#${options.customColors.brandColor}`,
                    height: `${options.buttonHeight}px`,
                    width: `${options.buttonWidth}px`
                }}
            >
                <div className='widget-img'>
                    {options.buttonIconUrl ? 
                        <img src={options.buttonIconUrl} alt='widget'/> : 
                        <svg id="default-button-icon" width="48px" height="48px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="icons" stroke="none" fill="none"><g id="icon/chat" fill="#FFFFFF"><path d="M10 18l-4 4v-4h4zm7-12a5 5 0 010 10H7A5 5 0 017 6z" id="icon"></path></g></g></svg>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}