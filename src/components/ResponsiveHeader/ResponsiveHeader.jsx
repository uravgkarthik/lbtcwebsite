import React from 'react';

function ResponsiveHeader(){
    return(
        <div className="App">
        <div className="rspns-hdr">
                <div className="rspns-lg-mnu-br">
                    <div className="container">
                        <div className="logo"><a href="index.html" title="Home" itemprop="url"><img src={require('../../assets/images/logo2.png')} alt="logo2.png" itemprop="image" /></a></div>
                        <span className="rspns-mnu-btn"><i className="fa fa-align-justify"></i></span>
                    </div>
                    <div className="rspns-mnu">
                        <span className="rspns-cls-btn"><i className="fa fa-times"></i></span>
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
                </div>
                <div className="rspns-lnks-br">
                    <div className="rspns-lnks-lst">
                        <a href="#" title="" itemprop="url"><i className="flaticon-user"></i><span>Login</span></a>
                        <a href="#" title="" itemprop="url"><i className="flaticon-portfolio"></i><span>Careers</span></a>
                        <a href="#" title="" itemprop="url"><i className="flaticon-hand"></i><span>Volunteer</span></a>
                    </div>
                    <a className="thm-btn" href="donate-now.html" title="" itemprop="url">Donate<span></span></a>
                </div>
            </div>
            </div>
    )
}

export default ResponsiveHeader;