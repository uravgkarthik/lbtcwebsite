import React from 'react'
import Partners from '../Partners/Partners'
import First from "../PartnersContainer/PartnerImages/lbtc-britannia.png";
import Second from "../PartnersContainer/PartnerImages/lbtc-dell.png";
import Third from "../PartnersContainer/PartnerImages/lbtc-allergan.png";
import Fourth from "../PartnersContainer/PartnerImages/lbtc.cookie-jar.png";
import Fifth from "../PartnersContainer/PartnerImages/lbtc-herman.png";
import Sixth from "../PartnersContainer/PartnerImages/lbtc-bbn.png";
import Seventh from "../PartnersContainer/PartnerImages/lbtc-jyoti.png";
import Eighth from "../PartnersContainer/PartnerImages/lbtc-infosys.png";
import Ninth from "../PartnersContainer/PartnerImages/lbtc-st-jhones.png";

const PartnersContainer = () =>{
    const partners = [
      {
        imgSrc: First,
      },
      {
        imgSrc: Second,
      },
      {
        imgSrc: Third,
      },
      {
        imgSrc: Fourth,
      },
      {
        imgSrc: Fifth,
      },
      {
        imgSrc: Sixth,
      },
      {
        imgSrc: Seventh,
      },
      {
        imgSrc: Eighth,
      },
      {
        imgSrc: Ninth,
      },
    ];
    return(
         <section>
    <div className="block">
        <div className="container">
            <div className="sec-ttl v2 text-center">
                <div className="sec-ttl-inr">
                    <h2 itemprop="headline">Our Partners</h2>
                    <span>Here we present to you all our partners whose contribution has helped us achieve our objectives and mission of enhancing
                    cleanliness.</span>
                </div>
            </div>
            <div className="orgn-wrp2 remove-ext3 text-center">
                <div className="row">
                    {partners.map(partner => {
                        return <Partners imgSrc = { partner.imgSrc }></Partners>
                    })}
                </div>
            </div>
            <a className="thm-btn" href="donate-now.html" title="" itemprop="url">Become A Partner<span></span></a>
        </div>
    </div>
</section>
    )
}

export default PartnersContainer