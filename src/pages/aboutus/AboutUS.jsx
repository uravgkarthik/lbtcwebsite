import React from 'react';
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import MenuBar from '../../components/MenuBar/MenuBar';
import ResponsiveHeader from '../../components/ResponsiveHeader/ResponsiveHeader';
import StickyHeader from '../../components/StickyHeader/StickyHeader';

function AboutUS(){
    return(
        <main>
            <HeaderBar></HeaderBar>
            
            <MenuBar></MenuBar>

            <StickyHeader></StickyHeader>
            
            <ResponsiveHeader></ResponsiveHeader>

            <section>
                <div class="block no-padding">
                    <div class="pg-tp-bg"><img src={require('../../assets/images/pg-tp-bg1.jpg')} /></div>
                </div>
            </section>
            <div class="gray-bg3 brdcrmb-wrp">
                <div class="container">
                    <div class="brdcrmb-inr flex justify-content-between">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html" title="" itemprop="url">Home</a></li>
                            <li class="breadcrumb-item active">About Us</li>
                        </ol>
                    </div>
                </div>
            </div>
        <section>
                <div className="block">
                    <div className="container">
                        <div className="abt-pg-wrp">
                            <h2 itemprop="headline">Change The Culture of <strong className="thm-clr">Giving in Affluent Countries</strong> While Dramatically Raising Annual Donations</h2>
                            <div className="abt-pg-inr">
                                <div className="row align-items-center">
                                    <div className="col-md-7 col-sm-12 col-lg-7">
                                        <div className="abt-pg-desc">
                                            <p itemprop="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lor when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ele ctronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply d em Ipsum has been the industry's standard 1960s with the release of Letra set sheets containing</p>
                                            <p itemprop="description">Lorem Ipsum passag It is a long established fact that a reade r will be distracte The point of using Lorem Ipsum is that it has a more-or-less normal distribution eadable English. </p>
                                            <p className="thm-clr blc-wt">“ Raising more money than could otherwise be possible through individual donations. Chances are, many of your family members”</p>
                                            <p itemprop="description">Many desktop publishing packages and web page editors now use Lorem Ipsu web sites still in their infancy. Various versions have evolved over the years, so and a search for 'lorem ipsum' will uncover many web sites still in their infancy arious versions have evolved over the years, soetimes by accident, sometimes on purpose (injected humour and the like).</p>
                                            <img src={require('../../assets/images/sgn.png')} alt="sgn.png" itemprop="image" />
                                        </div>
                                    </div>
                                    <div className="col-md-5 col-sm-12 col-lg-5">
                                        <div className="abt-pg-imgs">
                                            <img src={require('../../assets/images/resources/abt-pg-img1-1.jpg')} alt="abt-pg-img1-1.jpg" itemprop="image" />
                                            <img src={require('../../assets/images/resources/abt-pg-img1-2.jpg')} alt="abt-pg-img1-2.jpg" itemprop="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
         </section>    
            <section>
                <div className="block black-layer opc3">
                    <div className="fixed-bg" style={{backgroundImage: 'url(../../assets/images/prlx-bg7.jpg)'}}></div>
                    <div className="container">
                        <div className="vdo-wrp text-center">
                            <div className="vdo-inr">
                                <a href="https://www.youtube.com/embed/5Y0Qrtew4VE" data-fancybox title="" itemprop="url"><i className="fa fa-play thm-bg"></i><span>1:04</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            
            <section>
                <div className="block">
                    <div className="container">
                        <div className="sec-ttl text-center">
                            <div className="sec-ttl-inr">
                                <h2 itemprop="headline">Healping Experts</h2>
                                <span>adipisicing elit Rem autem voluptatem obcaecati</span>
                                <i className="flaticon-sweat thm-clr"></i>
                            </div>
                        </div>
                        <div className="tem-wrp text-center remove-ext4">
                            <div className="row">
                                <div className="col-md-3 col-sm-3 col-lg-2">
                                    <div className="tem-bx">
                                        <div className="tem-thmb" style={{backgroundImage: 'url(../../assets/images/resources/tem-img1-1.jpg)'}}>
                                            <a href="team-detail.html" title="" itemprop="url"><i className="fa fa-chevron-right"></i></a>
                                            <div className="tem-scl">
                                                <a className="facebook" href="#" title="Facebook" itemprop="url" target="_blank"><i className="fa fa-facebook"></i></a>
                                                <a className="pinterest" href="#" title="Pinterest" itemprop="url" target="_blank"><i className="fa fa-pinterest-p"></i></a>
                                                <a className="twitter" href="#" title="Twitter" itemprop="url" target="_blank"><i className="fa fa-twitter"></i></a>
                                            </div>
                                        </div>
                                        <div className="tem-inf">
                                            <h4 itemprop="headline"><a href="team-detail.html" title="" itemprop="url">Lina Carlos</a></h4>
                                            <span>Helping Volunteer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-3 col-lg-2">
                                    <div className="tem-bx">
                                        <div className="tem-thmb" style={{backgroundImage: 'url(../../assets/images/resources/tem-img1-2.jpg)'}}>
                                            <a href="team-detail.html" title="" itemprop="url"><i className="fa fa-chevron-right"></i></a>
                                            <div className="tem-scl">
                                                <a className="facebook" href="#" title="Facebook" itemprop="url" target="_blank"><i className="fa fa-facebook"></i></a>
                                                <a className="pinterest" href="#" title="Pinterest" itemprop="url" target="_blank"><i className="fa fa-pinterest-p"></i></a>
                                                <a className="twitter" href="#" title="Twitter" itemprop="url" target="_blank"><i className="fa fa-twitter"></i></a>
                                            </div>
                                        </div>
                                        <div className="tem-inf">
                                            <h4 itemprop="headline"><a href="team-detail.html" title="" itemprop="url">Marina Glogovac</a></h4>
                                            <span>CEO, CanadaHelps</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-3 col-lg-2">
                                    <div className="tem-bx">
                                        <div className="tem-thmb" style={{backgroundImage: 'url(../../assets/images/resources/tem-img1-3.jpg)'}}>
                                            <a href="team-detail.html" title="" itemprop="url"><i className="fa fa-chevron-right"></i></a>
                                            <div className="tem-scl">
                                                <a className="facebook" href="#" title="Facebook" itemprop="url" target="_blank"><i className="fa fa-facebook"></i></a>
                                                <a className="pinterest" href="#" title="Pinterest" itemprop="url" target="_blank"><i className="fa fa-pinterest-p"></i></a>
                                                <a className="twitter" href="#" title="Twitter" itemprop="url" target="_blank"><i className="fa fa-twitter"></i></a>
                                            </div>
                                        </div>
                                        <div className="tem-inf">
                                            <h4 itemprop="headline"><a href="team-detail.html" title="" itemprop="url">Maria Walim</a></h4>
                                            <span>Event Speaker</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-3 col-lg-2">
                                    <div className="tem-bx">
                                        <div className="tem-thmb" style={{backgroundImage: 'url(../../assets/images/resources/tem-img1-4.jpg)'}}>
                                            <a href="team-detail.html" title="" itemprop="url"><i className="fa fa-chevron-right"></i></a>
                                            <div className="tem-scl">
                                                <a className="facebook" href="#" title="Facebook" itemprop="url" target="_blank"><i className="fa fa-facebook"></i></a>
                                                <a className="pinterest" href="#" title="Pinterest" itemprop="url" target="_blank"><i className="fa fa-pinterest-p"></i></a>
                                                <a className="twitter" href="#" title="Twitter" itemprop="url" target="_blank"><i className="fa fa-twitter"></i></a>
                                            </div>
                                        </div>
                                        <div className="tem-inf">
                                            <h4 itemprop="headline"><a href="team-detail.html" title="" itemprop="url">Gorge James</a></h4>
                                            <span>President & CEO</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-3 col-lg-2">
                                    <div className="tem-bx">
                                        <div className="tem-thmb" style={{backgroundImage: 'url(../../assets/images/resources/tem-img1-4.jpg)'}}>
                                            <a href="team-detail.html" title="" itemprop="url"><i className="fa fa-chevron-right"></i></a>
                                            <div className="tem-scl">
                                                <a className="facebook" href="#" title="Facebook" itemprop="url" target="_blank"><i className="fa fa-facebook"></i></a>
                                                <a className="pinterest" href="#" title="Pinterest" itemprop="url" target="_blank"><i className="fa fa-pinterest-p"></i></a>
                                                <a className="twitter" href="#" title="Twitter" itemprop="url" target="_blank"><i className="fa fa-twitter"></i></a>
                                            </div>
                                        </div>
                                        <div className="tem-inf">
                                            <h4 itemprop="headline"><a href="team-detail.html" title="" itemprop="url">Gorge James</a></h4>
                                            <span>President & CEO</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-3 col-lg-2">
                                    <div className="tem-bx">
                                        <div className="tem-thmb" style={{backgroundImage: 'url(../../assets/images/resources/tem-img1-4.jpg)'}}>
                                            <a href="team-detail.html" title="" itemprop="url"><i className="fa fa-chevron-right"></i></a>
                                            <div className="tem-scl">
                                                <a className="facebook" href="#" title="Facebook" itemprop="url" target="_blank"><i className="fa fa-facebook"></i></a>
                                                <a className="pinterest" href="#" title="Pinterest" itemprop="url" target="_blank"><i className="fa fa-pinterest-p"></i></a>
                                                <a className="twitter" href="#" title="Twitter" itemprop="url" target="_blank"><i className="fa fa-twitter"></i></a>
                                            </div>
                                        </div>
                                        <div className="tem-inf">
                                            <h4 itemprop="headline"><a href="team-detail.html" title="" itemprop="url">Gorge James</a></h4>
                                            <span>President & CEO</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="block remove-gap">
                    <div className="container">
                        <div className="fndrs-wrp">
                            <div className="row align-items-center">
                                <div className="col-md-6 col-sm-12 col-lg-6">
                                    <div className="fndrs-desc">
                                        <h2 itemprop="headline">12 Fundraising <strong className="thm-clr">Strategies to Boost</strong> Your Nonprofit's End of Year Campaign</h2>
                                        <p itemprop="description">Lorem Ipsum is simply dummy text of the printing and types eing in Lor emy Ipsum has been the industry's</p>
                                        <a className="thm-btn" href="#" title="" itemprop="url">Download The Guide<span></span></a>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 col-lg-6">
                                    <div className="fndrs-img">
                                        <img src={require('../../assets/images/resources/fndrs-img.png')} alt="fndrs-img.png" itemprop="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="block dark-layer opc3">
                    <div className="fixed-bg drk-bg back-blend-darken" style={{backgroundImage: 'url(../../assets/images/prlx-bg2.jpg)'}}></div>
                    <div className="container">
                        <div className="ftr-dta-wrp remove-ext10">
                            <div className="row">
                                <div className="col-md-4 col-sm-6 col-lg-4">
                                    <div className="wdgt-bx">
                                        <div className="logo"><a href="index.html" title="Home" itemprop="url"><img src={require('../../assets/images/logo.png')} alt="logo.png" itemprop="image" /></a></div>
                                        <p itemprop="description">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out pri nt, graphic or web designs.</p>
                                        <ul className="abt-cnt-lst">
                                            <li><i className="flaticon-telephone thm-clr"></i>(816) 932-1000</li>
                                            <li><i className="fa fa-map-marker thm-clr"></i>4801 Rockhill Road Kansas City, MO 64110</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-lg-4">
                                    <div className="wdgt-bx">
                                        <ul>
                                            <li><a href="#" title="" itemprop="url">Our Founder</a></li>
                                            <li><a href="#" title="" itemprop="url">Education</a></li>
                                            <li><a href="#" title="" itemprop="url">Enterpreneurship</a></li>
                                            <li><a href="#" title="" itemprop="url">Child Education</a></li>
                                            <li><a href="#" title="" itemprop="url">Grants</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="#" title="" itemprop="url">Multimedia</a></li>
                                            <li><a href="#" title="" itemprop="url">Governance</a></li>
                                            <li><a href="#" title="" itemprop="url">Privacy Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-lg-4">
                                    <p className="cpyrgt-p" itemprop="description">&copy; Copyright 2019 <a href="index.html" title="Povert" itemprop="url">Povert.</a> All rights reserved.</p>
                                    <div className="ftr-sbscrb thm-layer opc9">
                                        <div className="fixed-bg back-blend-multiply thm-bg patern-bg" style={{backgroundImage: 'url(../../assets/images/pattern-bg1.jpg)'}}></div>
                                        <p itemprop="description">Subscribe to our mailing list to get the <strong>update to you email.</strong></p>
                                        <a href="#" title="" itemprop="url">Sign Up Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}

export default AboutUS;