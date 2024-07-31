import React from 'react';

function Stats() {
    return ( 
        <div className='container p-4'>
            <div className='row p-4'>
                <div className='col-6 p-4 mb-5'>
                    <h1 className='fs-3 mb-4'>Trust with confidence</h1>
                    <div classname='mb-5 mt-5'>
                        <h4 className='fs-6'>Customer-first always</h4>
                        <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments</p>
                    </div>
                    <div classname='mb-5 mt-5'>
                        <h4 className='fs-6'>No spam or gimmicks</h4>
                        <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like</p>
                    </div>
                    <div classname='mb-5 mt-5 '>
                        <h4 className='fs-6'>The Zerodha universe</h4>
                        <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                    <div classname='mb-5 mt-5 '>
                        <h4 className='fs-6'>Do better with money</h4>
                        <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>
                <div className='col-6 mt-5'>
                    <img src='media/images/ecosystem.png' alt='' style={{width:"100%"}}/>
                    <div className='text-center'>
                        {/* it is preferred to use 'link' instead of using 'anchor tag' */}
                        <a href='/' className='mx-5' style={{textDecoration:'none'}}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='/' style={{textDecoration:'none'}}>Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;