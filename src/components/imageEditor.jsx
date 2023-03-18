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
    const [textColor, setTextColor] = useState('#000');

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
                        <label for='bottomText'>Bottom Text</label>
                        <input
                            type='text'
                            name='bottomText'
                            onChange={event => setBottomText(event.target.value)}
                            value={bottomText}
                        />
                    </div>
                    <div className='form-group'>
                        <label for='textColor'>Text Color</label>
                        <select id="textColor" onChange={event => setTextColor(event.target.value)}
                            value={textColor}>
                            <option value="#000">Black</option>
                            <option value="#fff">White</option>
                            <option value="#808080">Grey</option>
                            <option value="#964B00">Brown</option>
                            <option value="#ff0000">Red</option>
                            <option value="#ffa500">Orange</option>
                            <option value="#ffff00">Yellow</option>
                            <option value="#008000">Green</option>
                            <option value="#0000ff">Blue</option>
                            <option value="#4b0082">Indigo</option>
                            <option value="#ee82ee">Violet</option>
                        </select>
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
                <span className='top-meme-text' style={{ color: textColor }}>{topText}</span>
                <span className='bottom-meme-text' style={{ color: textColor }}>{bottomText}</span>
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