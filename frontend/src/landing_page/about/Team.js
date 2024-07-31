import React from 'react';

function Team() {
    return ( 
        <div className='container'>
            <div className='row p-5 border-top'>
                <h1 className='text-center mb-2' style={{lineHeight:'1.5' , fontSize:'2rem'}}>People</h1>
            </div>
            <div className='row mb-5 text-muted' style={{lineHeight:'1.8rem', fontSize:'1.08rem'}}>
                <div className='col-5 text-muted text-center'>
                    <img src='media/images/nithinKamath.jpg' alt='founder' style={{width:'80%', borderRadius:'50%'}}/>
                    <h1 className='fs-5 mt-3 mb-3'>Nithin Kamath</h1>
                    <p>Founder, CEO</p>
                </div>
                <div className='col-7 mt-3'>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p>Playing basketball is his zen.</p>

                    <p>Connect on <a href='1' style={{textDecoration:'none'}}>Homepage</a> / <a href='1' style={{textDecoration:'none'}}>TradingQnA</a> / <a href='1' style={{textDecoration:'none'}}>Twitter</a></p>
                </div>
            </div>
            
        </div>
        
     );
}

export default Team;