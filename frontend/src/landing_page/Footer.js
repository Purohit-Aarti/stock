import React from 'react';

function Footer() {
    return ( 
        <footer style={{background:'rgb(250, 250, 250)'}}>
            {/* <div className='container border-top'> */}
                <div className='row mb-2 mt-4 border-top p-3' style={{fontSize:'15px'}}>
                    <div className='col'>
                        <img src="media/images/logo.svg" alt='Logo' style={{width:'65%'}} className='mb-3 mt-1'/>
                        <p className='fs-8 mt-2 text-muted' style={{fontSize:'14px'}}>&copy; 2010 - 2024, Zerodha Broking Ltd. All rights reserved.</p>

                        <div className='row mt-4 text-muted'>
                            <div className='col-2'>
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                            </div>
                            <div className='col-2'>
                                <i class="fa fa-facebook-official" aria-hidden="true"></i>
                            </div>
                            <div className='col-2'>
                                <i class="fa fa-instagram" aria-hidden="true"></i>
                            </div>
                            <div className='col-2'>
                                <i class="fa fa-linkedin" aria-hidden="true"></i>
                            </div>
                            <div className='col-4'></div>
                        </div>

                        <hr></hr>

                        <div className='row mt-4 text-muted'>
                            <div className='col-2'>
                                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                            </div>
                            <div className='col-2'>
                                <i class="fa fa-whatsapp" aria-hidden="true"></i>
                            </div>
                            <div className='col-2'>
                                <i class="fa fa-telegram" aria-hidden="true"></i>
                            </div>
                            <div className='col-6'></div>

                        </div>
                    </div>
                    <div className='col '>
                        <p className='footer-para'>Company</p>
                        <a href='/' alt='' className='text-muted footer-anchor'>About</a> <br/>
                        <a href='/' alt='' className='text-muted footer-anchor'>Products</a> <br/>
                        <a href='/' alt='' className='text-muted footer-anchor'>Pricing</a> <br/>
                        <a href='/' alt='' className='text-muted footer-anchor'>Referral programme</a> <br/>
                        <a href='/' alt='' className='text-muted footer-anchor'>Careers</a> <br/>
                        <a href='/' alt='' className='text-muted footer-anchor'>Zerodha.tech</a> <br/>
                        <a href='/' alt='' className='text-muted footer-anchor'>Press & media</a> <br/>
                        <a href='/' alt='' className='text-muted footer-anchor'>Zerodha Cares (CSR)</a> <br/>
                    </div>
                    <div className='col'>
                        <p className='footer-para'>Support</p>
                        <a href='/' alt='' className='text-muted footer-anchor'>Contact us</a> <br/>
                        <a href='/' alt='' className='text-muted footer-anchor'>Support portal</a> <br/>
                        <a href='/' alt='' className='text-muted footer-anchor' >Z-Connect blog</a> <br/>
                        <a href='/' alt='' className='text-muted footer-anchor'>List of charges</a> <br/>
                        <a href='/' alt='' className='text-muted footer-anchor'>Downloads & resources</a> <br/>
                        <a href='/' alt='' className='text-muted footer-anchor'>Videos</a> <br/>
                        <a href='/' alt='' className='text-muted footer-anchor'>Market overview</a> <br/>
                        <a href='/' alt='' className='text-muted footer-anchor'>How to file a complaint?</a> <br/>
                        <a href='/' alt='' className='text-muted footer-anchor'>Status of your complaints</a> <br/>
                    </div>
                    <div className='col'>
                        <p className='footer-para'>Account</p>
                        <a href='/' alt='' className='text-muted footer-anchor' style={{textDecoration:'none'}}>Open an account</a> <br/>
                        <a href='/' alt='' className='text-muted footer-anchor' style={{textDecoration:'none'}}>Fund transfer</a> <br/>
                    </div>
                </div>

                <div className='mt-5 text-muted p-3' style={{fontSize:'11px', lineHeight:'20px'}} >
                    <p className='mb-2'>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | IC</p>
                    <p className='mb-2'>Procedure to file a complaint on <a href='1' style={{textDecoration:'none'}}>SEBI SCORES</a> : Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                    <p className='mb-2'>
                        <a href='/' style={{textDecoration:'none'}}>Smart Online Dispute Resolution</a> &nbsp;| &nbsp;
                        <a href='/' style={{textDecoration:'none'}}>Grievances Redressal Mechanism</a>
                    </p>

                    <p className='mb-2'>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

                    <p className='mb-2'>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

                    <p className='mb-4'>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>

                    <div className='mb-4'>
                        <a href='/'  className='text-muted footer-endLinks' style={{marginLeft:'200px'}}>NSE</a> 
                        <a href='/'  className='text-muted footer-endLinks'>BSE</a> 
                        <a href='/'  className='text-muted footer-endLinks'>MCX</a> 
                        <a href='/'  className='text-muted footer-endLinks'>Terms & conditions</a> 
                        <a href='/'  className='text-muted footer-endLinks'>Policies & procedures</a> 
                        <a href='/'  className='text-muted footer-endLinks'>Privacy policy</a> 
                        <a href='/'  className='text-muted footer-endLinks'>Disclosure</a> 
                        <a href='/'  className='text-muted footer-endLinks'>For investor's attention</a> <a href='/'  className='text-muted' style={{textDecoration:'none', marginRight:'20px'}}>Investor charter</a>
                    </div>
                    
                </div>
            {/* </div> */}
        </footer>
     );
}

export default Footer;