import React from 'react';

function Hero() {
    return ( 
        <div className='container border-bottom'>
            <div className='row text-center mb-5 mt-5'>
                <h1 className='mt-5' style={{lineHeight:'55px', fontSize:'2.80rem',fontWeight:'500'}}>Pricing</h1>
                <h4 className='mb-5 mt-2' style={{fontWeight:'400', fontSize:'1.30rem'}}>Free equity investments and flat ₹20 intraday and F&O trades</h4>

                <hr className='mt-5 mb-5'></hr>

                <div className='row mt-5'>
                    <div className='col mb-5'> 
                        <img src='media/images/pricing0.svg' className='mb-4' style={{width:'90%'}} alt=''/>
                        <h1 className='fs-3 mb-4'>Free equity delivery</h1>
                        <p style={{lineHeight:'1.8'}} className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    </div>

                    <div className='col mb-5'>
                        <img src='media/images/other-trades.svg' className='mb-4' style={{width:'90%'}} alt=''/>
                        <h1 className='fs-3 mb-4'>Intraday and F&O trades</h1>
                        <p style={{lineHeight:'1.8'}} className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>
                    
                    <div className='col mb-5'>
                        <img src='media/images/pricingMF.svg' className='mb-4' style={{width:'90%'}} alt=''/>
                        <h1 className='fs-3 mb-4'>Free direct MF</h1>
                        <p style={{lineHeight:'1.8'}} className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>
                </div>

            </div>
        </div>
     );
}

export default Hero;