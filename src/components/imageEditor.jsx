import React, { useState, useRef } from 'react';
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
    const [rotateDeg, setRotateDeg] = useState(0);
    const [scalePercent, setScalePercent] = useState('100%');
    const [mirrorImg, setMirrorImg] = useState(false);
    const imgRef = useRef();
    const {
        imgUrl
    } = props;

    const regEx = /^(ftp|http|https):\/\/[^ ']+$/;
    let urlValid = imgUrl !== '' && regEx.test(imgUrl);

    /**
     * If imgUrl is valid, returns the controls to edit the image itself
     * @returns image controls html
     */
    const getImageControls = function () {
        return urlValid &&
            <>
                <form>
                    <div className='form-group'>
                        <label htmlFor='rotate'>Rotate degrees</label>
                        <input type='text' name={'rotate'} onChange={event => setRotateDeg(event.target.value)}
                            value={rotateDeg} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='scale'>Rotate degrees</label>
                        <input type='text' name={'scale'} onChange={event => setScalePercent(event.target.value)}
                            value={scalePercent} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='mirror'>Rotate degrees</label>
                        <input type='checkbox' name={'mirror'} onChange={event => setMirrorImg(event.target.checked)}
                            value={mirrorImg} />
                    </div>
                </form>
            </>;
    }

    /**
     * If imgUrl is valid, returns the controls to edit the text that go onto the meme
     * @returns text controls html
     */
    const getTextControls = function () {
        return urlValid &&
            <>
                <form>
                    <div className='form-group'>
                        <label htmlFor='topText'>Top Text</label>
                        <input
                            type='text'
                            name='topText'
                            onChange={event => setTopText(event.target.value)}
                            value={topText}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='bottomText'>Bottom Text</label>
                        <input
                            type='text'
                            name='bottomText'
                            onChange={event => setBottomText(event.target.value)}
                            value={bottomText}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='textColor'>Text Color</label>
                        <select id='textColor' name='textColor' onChange={event => setTextColor(event.target.value)}
                            value={textColor}>
                            <option value='#000'>Black</option>
                            <option value='#fff'>White</option>
                            <option value='#808080'>Grey</option>
                            <option value='#964B00'>Brown</option>
                            <option value='#ff0000'>Red</option>
                            <option value='#ffa500'>Orange</option>
                            <option value='#ffff00'>Yellow</option>
                            <option value='#008000'>Green</option>
                            <option value='#0000ff'>Blue</option>
                            <option value='#4b0082'>Indigo</option>
                            <option value='#ee82ee'>Violet</option>
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
        let mirrorValue = mirrorImg ? '-1, 1' : '1';

        return urlValid &&
            <div className='meme-container'>
                <span className='top-meme-text' style={{ color: textColor }}>{topText}</span>
                <span className='bottom-meme-text' style={{ color: textColor }}>{bottomText}</span>
                <img src={imgUrl} ref={imgRef} style={{ width: scalePercent, transform: 'rotate(' + rotateDeg + 'deg) scale(' + mirrorValue + ')' }} alt={topText + ' ' + bottomText} />
            </div>;
    };

    return (
        <>
            {getImage()}
            {getTextControls()}
            {getImageControls()}
        </>
    );
}

ImageEditor.propType = {
    imgUrl: PropTypes.string
};

export default ImageEditor;