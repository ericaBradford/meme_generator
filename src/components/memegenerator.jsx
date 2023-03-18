import React, { useState } from 'react';
import ImageEditor from './imageEditor';

function MemeGenerator() {
    let [imgUrl, setImgUrl] = useState('');

    const onChangeHandler = event => {
        setImgUrl(event.target.value);
    };

    return (
        <>
            <h1>Welcome to the Meme Generator!</h1>
            <form>
                <label htmlFor='imgUrl'>Please enter the image url below</label>
                <input
                    type='text'
                    name='imgUrl'
                    onChange={onChangeHandler}
                    value={imgUrl}
                />
            </form>
            <ImageEditor imgUrl={imgUrl} />
        </>
    );
}

export default MemeGenerator;