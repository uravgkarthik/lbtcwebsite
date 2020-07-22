import React from 'react';
import { Switch, Route, Link } from "react-router-dom";

function Partners(){
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
                    <div className="col-md-4 col-sm-4 col-lg-4">
                        <div className="orgn-bx2">
                            <img src={require('../../assets/images/resources/org-img2-1.png')} alt="org-img2-1.png" itemprop="image" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-lg-4">
                        <div className="orgn-bx2">
                            <img src={require('../../assets/images/resources/org-img2-2.png')} alt="org-img2-2.png" itemprop="image" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-lg-4">
                        <div className="orgn-bx2">
                            <img src={require('../../assets/images/resources/org-img2-3.png')} alt="org-img2-3.png" itemprop="image" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-lg-4">
                        <div className="orgn-bx2">
                            <img src={require('../../assets/images/resources/org-img2-4.png')} alt="org-img2-4.png" itemprop="image" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-lg-4">
                        <div className="orgn-bx2">
                            <img src={require('../../assets/images/resources/org-img2-5.png')} alt="org-img2-5.png" itemprop="image" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-lg-4">
                        <div className="orgn-bx2">
                            <img src={require('../../assets/images/resources/org-img2-6.png')} alt="org-img2-6.png" itemprop="image" />
                        </div>
                    </div>
                </div>
            </div>
            <a className="thm-btn" href="donate-now.html" title="" itemprop="url">Become A Partner<span></span></a>
        </div>
    </div>
</section>
    )
}

export default Partners;