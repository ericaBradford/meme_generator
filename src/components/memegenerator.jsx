import React, { useState } from 'react';
import ImageEditor from './imageEditor';

/**
 * MemeGenerator component
 * Holds the title, image url input, then renders imageEditor component
 * @returns html
 */
function MemeGenerator() {
    const [imgUrl, setImgUrl] = useState('');

    return (
        <>
            <h1>Welcome to the Meme Generator!</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='imgUrl'>Please enter the image url below</label>
                    <input
                        type='text'
                        name='imgUrl'
                        onChange={event => setImgUrl(event.target.value)}
                        value={imgUrl}
                    />
                </div>
            </form>
            <ImageEditor imgUrl={imgUrl} />
        </>
    );
}

export default MemeGenerator;