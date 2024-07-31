import React from 'react';

function Hero() {
    return ( 
        <section className='container-fuild' id='supportHero'>
            <div className='mb-4 p-3' id='supportHero-wrap'>
                <h4 className='mt-3 fs-5'>Support <br/> Portal</h4>
                <a href='1' style={{color:'#fff'}}>Track tickets</a>
            </div>
            <div className='row mb-5 mt-3 p-3'>
                <div className='col-7'>
                    <h4 className='fs-4 mb-4'>Search for an answer or browse help topics to create a ticket
                    </h4>
                    <input className='' placeholder='Eg: how do i activate F&O, why is my order getting rejected ... ' />
                    <a href='1' style={{color:'#fff', fontSize:'large', lineHeight:'2.5', marginRight:'25px'}}>Track account opening</a>
                    <a href='1' className='support-hero-anchor'>Track segment activation</a>
                    <a href='1' className='support-hero-anchor'>Intraday margins</a>
                    <br/>
                    <a href='1' className='support-hero-anchor'>Kite user manual</a>

                </div>
                <div className='col-5 mt-2'>
                    <h4>Featured</h4>
                    <ol style={{marginBottom: '100px'}}>
                        <li style={{marginLeft:'20px', marginBottom:'20px'}}><a href='1' className='support-hero-anchor'>Surveillance measure on scrips - July 2024</a></li>

                        <li style={{marginLeft:'20px'}}><a href='1' className='support-hero-anchor' style={{lineHeight:'0'}}>Latest Intraday leverages and Square-off timings</a></li>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;