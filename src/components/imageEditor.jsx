import React from 'react';
import PropTypes from 'prop-types';

function ImageEditor(props) {

    const {
        imgUrl
    } = props;

    return (
        <>
            {/* <div>{imgUrl}</div> */}
            {imgUrl !== '' && <div><img src={imgUrl} /></div>}
        </>
    );
}

ImageEditor.propType = {
    imgUrl: PropTypes.string
};

export default ImageEditor;