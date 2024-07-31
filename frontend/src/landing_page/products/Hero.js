// main part of the page

import React from 'react';

function Hero() {
    return ( 
        <div className='container text-center mt-5 p-5 border-bottom mb-5'>
            <h1 style={{fontSize:'2.80rem', fontWeight:'500'}}>Technology</h1>
            <h5 className='mt-3 mb-4' style={{fontSize:'1.25rem', fontWeight:'400'}}>Sleek, modern, and intuitive trading platforms</h5>
            <p className='mt-3 mb-5'>Check out our <a href='/' style={{textDecoration:'none'}}>investment offerings →</a></p>
        </div>
     );
}

export default Hero;