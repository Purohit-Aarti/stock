import React from 'react';

function Universe() {
    return ( 
        <div className='container mt-5'>
            <div className='row text-center'>
                <h1 className='mb-5' style={{fontSize:'1.25rem', fontWeight:'400'}}>Want to know more about our technology stack? Check out the Zerodha.tech blog.</h1>
                <h1 className='mt-5 mb-4' style={{fontSize:'2.05rem', fontWeight:'500'}}>The Zerodha Universe</h1>
                <p className='mb-5'>Extend your trading and investment experience even further with our partner platforms</p>

                <div className='col-4 mb-4 mt-3'>
                        <img src='media/images/smallcaseLogo.png' alt="" style={{width:'80%'}}/>
                        <p classname='text-small text-muted' style={{lineHeight:'50px'}}>
                        Thematic investment platform</p>
                    </div>
                    
                    <div className='col-4 mb-5 mt-3'>
                        <img src='media/images/streakLogo.png' alt="" style={{width:'60%'}}/>    
                        <p classname='' style={{lineHeight:'55px'}}>Algo & strategy platform</p>
                    </div>
                    
                    <div className='col-4 mb-4 mt-4'>
                        <img src='media/images/sensibullLogo.svg' alt="" style={{width:'80%'}}/>
                        <p classname='' style={{lineHeight:'80px'}}>Options trading platform</p>
                    </div>

                    <div className='col-4 mb-4'>
                        <img src='media/images/zerodhaFundhouse.png' alt="" style={{width:'70%'}}/>
                        <p classname='' style={{lineHeight:'55px'}}>
                        Thematic investment platform</p>
                    </div>
                    
                    <div className='col-4 mb-5'>
                        <img src='media/images/tijori.svg' alt="" style={{width:'55%'}}/>    
                        <p classname='mt-5' style={{lineHeight:'50px'}}>
                        Fundamental research platform</p>
                    </div>
                    
                    <div className='col-4 mb-4'>
                        <img src='media/images/dittoLogo.png' alt="" style={{width:'55%'}}/>
                        <p classname='' style={{lineHeight:'50px'}}>Insurance</p>
                    </div>
                <button className='p-1 btn btn-primary fs-5 mb-5 mt-4' style={{width:"20%", margin:'auto'}}>Sign up Now</button>
            </div>
        </div>
     );
}

export default Universe;