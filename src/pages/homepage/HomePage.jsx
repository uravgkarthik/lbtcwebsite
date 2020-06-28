import React from 'react';
import AboutUs from '../../components/AboutUs/AboutUs';
import Partners from '../../components/Partners/Partners';
import BlogArticles from '../../components/BlogArticles/BlogArticles';
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import MenuBar from '../../components/MenuBar/MenuBar';
import ResponsiveHeader from '../../components/ResponsiveHeader/ResponsiveHeader';


function HomePage() {
  return (
    <div className="App">
		 <main>
            <HeaderBar></HeaderBar>
            
            <MenuBar></MenuBar>

            <div className="sticky-header flex">
                <div className="container">
                    <div className="wb-lgmnu-wrp flex justify-content-between">
                        <div className="logo"><a href="index.html" title="Home" itemprop="url"><img src={require('../../assets/images/logo2.png')} alt="logo2.png" itemprop="image" /></a></div>
                        <nav>
                            <div>
                                <ul>
                                    <li className="menu-item-has-children"><a href="#" title="" itemprop="url">Home</a>
                                        <ul>
                                            <li><a href="index.html" title="" itemprop="url">Homepage 1</a></li>
                                            <li><a href="index2.html" title="" itemprop="url">Homepage 2</a></li>
                                            <li><a href="index3.html" title="" itemprop="url">Homepage 3</a></li>
                                            <li><a href="index4.html" title="" itemprop="url">Homepage 4</a></li>
                                            <li><a href="index5.html" title="" itemprop="url">Homepage 5</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><a href="#" title="" itemprop="url">Pages</a>
                                        <ul>
                                            <li className="menu-item-has-children"><a href="#" title="" itemprop="url">Event</a>
                                                <ul>
                                                    <li><a href="event-style1.html" title="" itemprop="url">Event Style 1</a></li>
                                                    <li><a href="event-style2.html" title="" itemprop="url">Event Style 2</a></li>
                                                    <li><a href="event-detail.html" title="" itemprop="url">Event Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children"><a href="#" title="" itemprop="url">Gallery</a>
                                                <ul>
                                                    <li><a href="gallery-style1.html" title="" itemprop="url">Gallery Style 1</a></li>
                                                    <li><a href="gallery-style2.html" title="" itemprop="url">Gallery Style 2</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children"><a href="#" title="" itemprop="url">Sponsor Child</a>
                                                <ul>
                                                    <li><a href="sponsor-child.html" title="" itemprop="url">Sponsor Child</a></li>
                                                    <li><a href="sponsor-child-detail.html" title="" itemprop="url">Sponsor Child Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children"><a href="#" title="" itemprop="url">Team</a>
                                                <ul>
                                                    <li><a href="team-style1.html" title="" itemprop="url">Team</a></li>
                                                    <li><a href="team-detail.html" title="" itemprop="url">Team Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="donate-now.html" title="" itemprop="url">Donate Now</a></li>
                                            <li><a href="search-found.html" title="" itemprop="url">Search Found</a></li>
                                            <li><a href="search-not-found.html" title="" itemprop="url">Search Not Found</a></li>
                                            <li><a href="coming-soon.html" title="" itemprop="url">Coming Soon</a></li>
                                            <li><a href="404.html" title="" itemprop="url">Error Page</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><a href="#" title="" itemprop="url">Blog</a>
                                        <ul>
                                            <li><a href="blog-style1.html" title="" itemprop="url">Blog Style 1</a></li>
                                            <li><a href="blog-style2.html" title="" itemprop="url">Blog Style 2</a></li>
                                            <li><a href="blog-style3.html" title="" itemprop="url">Blog Style 3</a></li>
                                            <li><a href="blog-style4.html" title="" itemprop="url">Blog Style 4</a></li>
                                            <li><a href="blog-detail.html" title="" itemprop="url">Blog Details</a></li>
                                            <li><a href="blog-detail-no-sidebar.html" title="" itemprop="url">Blog Details No Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><a href="#" title="" itemprop="url">Cause</a>
                                        <ul>
                                            <li><a href="cause-style1.html" title="" itemprop="url">Cause Style 1</a></li>
                                            <li><a href="cause-style2.html" title="" itemprop="url">Cause Style 2</a></li>
                                            <li><a href="cause-style3.html" title="" itemprop="url">Cause Style 3</a></li>
                                            <li><a href="cause-detail.html" title="" itemprop="url">Cause Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="about.html" title="" itemprop="url">About</a></li>
                                    <li><a href="contact.html" title="" itemprop="url">Contact</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            
            <ResponsiveHeader></ResponsiveHeader>

            <section>
                <div className="block remove-bottom">
                    <div className="fixed-bg shp-bg back-post-rgttp" style={{backgroundImage: 'url(../../assets/images/bg-shp3.png)'}}></div>
                    <div className="container">
                        <div className="feat-wrp2">
                            <div className="row align-items-center">
                                <div className="col-md-5 col-sm-6 col-lg-5">
                                    <div className="feat-cap">
                                        <h2 itemprop="headline"><strong>We are The</strong> National Charity For Homeless <strong>Poor People</strong></h2>
                                        <p itemprop="description">Our nonprofit customers raise more money online with less Proven to increase event participation.</p>
                                        <a className="thm-btn" href="donate-now.html" title="" itemprop="url">Start Donation<span></span></a>
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-6 col-lg-7">
                                    <div className="feat-img2 text-right">
                                        <img src={require('../../assets/images/resources/feat-mckp.png')} alt="feat-mckp.png" itemprop="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <AboutUs></AboutUs>  {/* About Us Component */}

            

            <section>
                <div className="block remove-gap">
                    <div className="container">
                        <div className="cus-wrp style3 text-center remove-ext9">
                            <div className="row">
                                <div className="col-md-3 col-sm-6 col-lg-3">
                                    <div className="cus-bx3">
                                        <div className="cus-thmb">
                                            <a href="cause-detail.html" title="" itemprop="url"><img src={require('../../assets/images/resources/cus-img3-1.jpg')} alt="cus-img3-1.jpg" itemprop="image" /></a>
                                        </div>
                                        <div className="cus-inf3">
                                            <h4 itemprop="headline"><a href="cause-detail.html" title="">Southern Poverty Law Center released</a></h4>
                                            <span className="cus-amt"><i className="thm-clr">$120 Raised</i> of $1,000</span>
                                            <div className="progress">
                                                <div className="progress-bar thm-bg wdth20"><span>20%</span></div>
                                            </div>
                                            <a className="thm-btn" href="donate-now.html" title="" itemprop="url">Donate Now<span></span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-lg-3">
                                    <div className="cus-bx3">
                                        <div className="cus-thmb">
                                            <a href="cause-detail.html" title="" itemprop="url"><img src={require('../../assets/images/resources/cus-img3-2.jpg')} alt="cus-img3-2.jpg" itemprop="image" /></a>
                                        </div>
                                        <div className="cus-inf3">
                                            <h4 itemprop="headline"><a href="cause-detail.html" title="">Principles the Charity Stands for, the Aims</a></h4>
                                            <span className="cus-amt"><i className="thm-clr">$120 Raised</i> of $1,000</span>
                                            <div className="progress">
                                                <div className="progress-bar thm-bg wdth45"><span>45%</span></div>
                                            </div>
                                            <a className="thm-btn" href="donate-now.html" title="" itemprop="url">Donate Now<span></span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-lg-3">
                                    <div className="cus-bx3">
                                        <div className="cus-thmb">
                                            <a href="cause-detail.html" title="" itemprop="url"><img src={require('../../assets/images/resources/cus-img3-3.jpg')} alt="cus-img3-3.jpg" itemprop="image" /></a>
                                        </div>
                                        <div className="cus-inf3">
                                            <h4 itemprop="headline"><a href="cause-detail.html" title="">We've found it helpful to Break down</a></h4>
                                            <span className="cus-amt"><i className="thm-clr">$120 Raised</i> of $1,000</span>
                                            <div className="progress">
                                                <div className="progress-bar thm-bg wdth65"><span>65%</span></div>
                                            </div>
                                            <a className="thm-btn" href="donate-now.html" title="" itemprop="url">Donate Now<span></span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-lg-3">
                                    <div className="cus-bx3">
                                        <div className="cus-thmb">
                                            <a href="cause-detail.html" title="" itemprop="url"><img src={require('../../assets/images/resources/cus-img3-4.jpg')} alt="cus-img3-4.jpg" itemprop="image" /></a>
                                        </div>
                                        <div className="cus-inf3">
                                            <h4 itemprop="headline"><a href="cause-detail.html" title="">Give to Charity on a Regular Basis</a></h4>
                                            <span className="cus-amt"><i className="thm-clr">$120 Raised</i> of $1,000</span>
                                            <div className="progress">
                                                <div className="progress-bar thm-bg wdth80"><span>80%</span></div>
                                            </div>
                                            <a className="thm-btn" href="donate-now.html" title="" itemprop="url">Donate Now<span></span></a>
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
                    <div className="fixed-bg shp-bg back-post-lftbtm" style={{backgroundImage: 'url(../../assets/images/bg-shp1.png)'}}></div>
                    <div className="container">
                        <div className="abt-wrp3">
                            <div className="row align-items-center">
                                <div className="col-md-6 col-sm-12 col-lg-6">
                                    <div className="abt-img">
                                        <img src={require('../../assets/images/resources/orgn-mckp1.png')} alt="orgn-mckp1.png" itemprop="image" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 col-lg-6">
                                    <div className="abt-desc3">
                                        <h2 itemprop="headline">Organize charity event like dinners, conserts, and outings</h2>
                                        <p itemprop="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit Aluam, odioserunt provident maiores consectetur adipisicing error inci dunt excepturi doloribus officia</p>
                                        <a className="thm-btn" href="donate-now.html" title="" itemprop="url">Start Donation<span></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
           {/*Owl Carousel Goes Here */}

            <section>
                <div className="block no-padding">
                    <div className="container">
                        <div className="abt-wrp3 rev">
                            <div className="row align-items-center">
                                <div className="col-md-5 col-sm-12 col-lg-5">
                                    <div className="abt-desc3">
                                        <h2 itemprop="headline">Small growing Charity organization wants to raise Money</h2>
                                        <p itemprop="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit Aluam, odioserunt provident maiores consectetur adipisicing error inci dunt excepturi doloribus officia</p>
                                        <a className="thm-btn" href="donate-now.html" title="" itemprop="url">How To Donate<span></span></a>
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-12 col-lg-7">
                                    <div className="abt-img">
                                        <img src={require('../../assets/images/resources/orgn-mckp2.png')} alt="orgn-mckp2.png" itemprop="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="block top-spac100 remove-bottom">
                    <div className="fixed-bg shp-bg back-post-rgtbtm" style={{backgroundImage: 'url(../../assets/images/bg-shp2.png)'}}></div>
                    <div className="container">
                        <div className="fndrs-wrp2">
                            <div className="row align-items-center">
                                <div className="col-md-4 col-sm-12 col-lg-4">
                                    <div className="fndrs-img-wrp">
                                        <img src={require('../../assets/images/resources/fndrs-img1.jpg')} alt="fndrs-img1.jpg" itemprop="image" />
                                        <img src={require('../../assets/images/resources/fndrs-img2.jpg')} alt="fndrs-img2.jpg" itemprop="image" />
                                        <img src={require('../../assets/images/resources/fndrs-img3.jpg')} alt="fndrs-img3.jpg" itemprop="image" />
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12 col-lg-4">
                                    <div className="fndrs-inf text-center thm-layer opc9">
                                        <div className="fixed-bg thm-bg back-blend-multiply" style={{backgroundImage: 'url(../../assets/images/pattern-bg1.jpg)'}}></div>
                                        <img src={require('../../assets/images/resources/fndrs-icn.png')} alt="fndrs-icn.png" itemprop="image" />
                                        <h2 itemprop="headline">Star Your Nonprofit Fundraiser in Minutes</h2>
                                        <p itemprop="description">Lorem ipsum dolor sit amet, consectetur adipisic odioserunt provident maiores consectetur adipis error incidunt excepturi doloribus officia</p>
                                        <a className="thm-btn" href="donate-now.html" title="" itemprop="url">Start Donation<span></span></a>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12 col-sm-4">
                                    <div className="fndrs-img-wrp">
                                        <img src={require('../../assets/images/resources/fndrs-img4.jpg')} alt="fndrs-img4.jpg" itemprop="image" />
                                        <img src={require('../../assets/images/resources/fndrs-img5.jpg')} alt="fndrs-img5.jpg" itemprop="image" />
                                        <img src={require('../../assets/images/resources/fndrs-img6.jpg')} alt="fndrs-img6.jpg" itemprop="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Partners></Partners>  {/* Partners Component */}

            <BlogArticles></BlogArticles>  {/* News Articles Component */}
            
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
        </main>
  </div>

  );
}

export default HomePage;