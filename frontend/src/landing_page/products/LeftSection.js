// LeftSection.js -> image on the left

import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-6">
            <img src={imageURL} alt="" style={{width:'500px'}}/>
        </div>
        <div className="col-2"></div>
        <div className="col-4 mt-5" style={{lineHeight:'30px'}}>
            <h1 className="mb-3">{productName}</h1>
            <p>{productDescription}</p>
            <div className="mb-4">
                <a href={tryDemo}  style={{textDecoration:'none'}}>Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <a href={learnMore} style={{marginLeft: '50px', textDecoration:'none'}}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div>
                <a href={googlePlay} ><img src="media/images/googlePlayBadge.svg" alt='google'/></a>
                <a href={appStore} style={{marginLeft:'30px'}}><img src="media/images/appstoreBadge.svg" alt='app'/></a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
