import React from 'react';
import img from './image_processing20220608-1532-rzdh4e.gif'
const NotFound = () => {
    return (
        <div >
        <h2 >Oops! you're lost!</h2>
            <img className='w-screen' src={img} alt="" />
        </div>
    );
};

export default NotFound;