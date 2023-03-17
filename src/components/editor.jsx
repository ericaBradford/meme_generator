import React, { useEffect, useState } from 'react';
import MemeImage from './image';

function ImageEditor() {
    let [imgUrl, setImgUrl] = useState('');

    const onChangeHandler = event => {
        setImgUrl(event.target.value);
    };


    useEffect(() => {
        console.log(typeof imgUrl);
        console.log(imgUrl);
    }, [imgUrl]);

    return (
        <>
            <form>
                <label htmlFor='imgUrl'>Image URL</label>
                <input
                    type='text'
                    name='imgUrl'
                    onChange={onChangeHandler}
                    value={imgUrl}
                />
            </form>
            {imgUrl !== '' && <MemeImage />}
        </>
    );
}

export default ImageEditor;