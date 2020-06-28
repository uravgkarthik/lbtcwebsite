import React from 'react';

function HeaderBar() {
    return (
        <div className="tpbr flex" style={{margin:'0', padding:'0', width: '100%', backgroundColor:'black', padding: '0', margin:'0'}}>
            <div className="container">
                <div className="tpbr-inr">
                    <div className="row justify-content-between">
                        <div className="col-md-6 col-sm-12 col-lg-6">
                            <p itemprop="description"><i className="flaticon-error thm-clr"></i><strong>Crisis Watch:</strong> Covid-19 In India</p>
                        </div>
                        <div className="col-md-6 col-sm-12 col-lg-6 text-right">
                            <ul className="tp-lnks">
                                <li><i className="fa fa-gear"></i><a href="http://bengaluruveeraru.org/" title="" itemprop="url">BV</a></li>
                                <li><i className="fa fa-id-card"></i><a href="#top" title="" itemprop="url">Careers</a></li>
                                <li><i className="fa fa-hand-spock-o"></i><a href="#top" title="" itemprop="url">Volunteer</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderBar;