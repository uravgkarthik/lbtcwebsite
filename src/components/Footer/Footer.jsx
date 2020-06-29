import React from 'react';

function Footer(){
    return(
        <footer>
                <div className="block remove-gap">
                    <div className="container">
                        <div className="ftr-dta-wrp3 v2 text-center">
                            <div className="ftr-dta-inr">
                                <div className="logo"><a href="index.html" alt="Logo" itemprop="url"><img src={require('../../assets/images/logo3.png')} alt="logo3.png" itemprop="image" /></a></div>
                                <p itemprop="description">&copy; Copyright <span className="thm-clr">2019 <a href="index.html" title="Povert" itemprop="url">Povert</a></span>. All rights reserved.</p>
                                <ul className="btm-lnks">
                                    <li><a href="#" title="" itemprop="url">Site Map</a></li>
                                    <li><a href="#" title="" itemprop="url">Privacy policy</a></li>
                                    <li><a href="#" title="" itemprop="url">Terms & Conditions</a></li>
                                    <li><a href="#" title="" itemprop="url">Contact Us</a></li>
                                </ul>
                                <div className="scl-btns">
                                    <a className="facebook" href="#" title="Facebook" itemprop="url" target="_blank"><i className="fa fa-facebook"></i></a>
                                    <a className="twitter" href="#" title="Twitter" itemprop="url" target="_blank"><i className="fa fa-twitter"></i></a>
                                    <a className="pinterest" href="#" title="Facebook" itemprop="url" target="_blank"><i className="fa fa-pinterest-p"></i></a>
                                    <a className="linkedin" href="#" title="Facebook" itemprop="url" target="_blank"><i className="fa fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    )
}

export default Footer;