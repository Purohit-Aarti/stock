// RightSection.js -> image on the right

import React from 'react';

function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore,
}) {
    return (
      <div className="container mb-2">
        <div className="row">
        <div className="col-4 mt-5" style={{lineHeight:'30px'}}>
              <h1 className="mb-3 mt-5">{productName}</h1>
              <p>{productDescription}</p>
              <a href={learnMore} style={{textDecoration:'none'}}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
          
          <div className="col-1"></div>

          <div className="col-6 mb-2">
              <img src={imageURL} alt="" style={{width:'600px'}}/>
          </div>
        </div>
        </div>
    );
}


export default RightSection;