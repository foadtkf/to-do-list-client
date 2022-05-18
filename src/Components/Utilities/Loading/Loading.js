import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{height: '300px'}} className='w-100 d-flex justify-content-center align-items-center'>
              <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
  </svg>
        </div>
    );
};

export default Loading;