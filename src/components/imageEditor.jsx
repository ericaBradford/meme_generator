import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * ImageEditor Component
 * Holds the image and controls to edit it
 * @param {*} props 
 * @returns html
 */
function ImageEditor(props) {
    const [topText, setTopText] = useState('');
    const [bottomText, setBottomText] = useState('');

    const {
        imgUrl
    } = props;

    const regEx = /^(ftp|http|https):\/\/[^ "]+$/;
    let urlValid = imgUrl !== '' && regEx.test(imgUrl);

    /**
     * If imgUrl is valid, returns the controls to edit the image
     * @returns 
     */
    const getControls = function () {
        return urlValid &&
            <>
                <form>
                    <div className='form-group'>
                        <label for='topText'>Top Text</label>
                        <input
                            type='text'
                            name='topText'
                            onChange={event => setTopText(event.target.value)}
                            value={topText}
                        />
                    </div>
                    <div className='form-group'>
                        <label for='bottom'>Bottom Text</label>
                        <input
                            type='text'
                            name='bottom'
                            onChange={event => setBottomText(event.target.value)}
                            value={bottomText}
                        />
                    </div>
                </form>
            </>;
    }

    /**
     * gets and returns image html, as long as imgUrl is valid
     * 
     * @returns image html
     */
    const getImage = function () {
        return urlValid &&
            <div className='meme-container'>
                <span className='top-meme-text'>{topText}</span>
                <span className='bottom-meme-text'>{bottomText}</span>
                <img src={imgUrl} alt={topText + ' ' + bottomText} />
            </div>;
    };

    return (
        <>
            {getImage()}
            {getControls()}
        </>
    );
}

ImageEditor.propType = {
    imgUrl: PropTypes.string
};

export default ImageEditor;