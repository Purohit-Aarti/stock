import React from 'react';

import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <div className='container p-5 mb-3'>
            <div className='row text-center'>
                <h1 className='mt-2 mb-3 fs-3'>404 Not Found</h1>
                <p>We couldn’t find the page you were looking for. </p>
                <p>Visit <Link to='/' style={{textDecoration:'none'}}>Zerodha’s home page</Link></p>
            </div>
        </div>
     );
}

export default NotFound;