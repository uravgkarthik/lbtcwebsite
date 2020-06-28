import React from 'react';

function MenuBar(){
    return(
        <header class="style1 v2 stick flex">
                <div class="container">
                    <div class="wb-lgmnu-wrp flex justify-content-between">
                        <div class="logo"><a href="index.html" title="Home" itemprop="url"><img src={require('../../assets/images/logo.png')}alt="logo.png" itemprop="image" /></a></div>
                        <div className="tp-scl">
                            <a href="#" title="Facebook" itemprop="url" target="_blank"><i class="fa fa-facebook"></i></a>
                            <a href="#" title="Twitter" itemprop="url" target="_blank"><i class="fa fa-twitter"></i></a>
                            <a href="#" title="Linkedin" itemprop="url" target="_blank"><i className="fa fa-instagram"></i></a>
                        </div>
                        <nav>
                            <div>
                                <ul>
                                    <li class="menu-item-has-children"><a href="#" title="" itemprop="url">Home</a>
                                        <ul>
                                            <li><a href="index.html" title="" itemprop="url">Homepage 1</a></li>
                                            <li><a href="index2.html" title="" itemprop="url">Homepage 2</a></li>
                                            <li><a href="index3.html" title="" itemprop="url">Homepage 3</a></li>
                                            <li><a href="index4.html" title="" itemprop="url">Homepage 4</a></li>
                                            <li><a href="index5.html" title="" itemprop="url">Homepage 5</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children"><a href="#" title="" itemprop="url">Pages</a>
                                        <ul>
                                            <li class="menu-item-has-children"><a href="#" title="" itemprop="url">Event</a>
                                                <ul>
                                                    <li><a href="event-style1.html" title="" itemprop="url">Event Style 1</a></li>
                                                    <li><a href="event-style2.html" title="" itemprop="url">Event Style 2</a></li>
                                                    <li><a href="event-detail.html" title="" itemprop="url">Event Details</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children"><a href="#" title="" itemprop="url">Gallery</a>
                                                <ul>
                                                    <li><a href="gallery-style1.html" title="" itemprop="url">Gallery Style 1</a></li>
                                                    <li><a href="gallery-style2.html" title="" itemprop="url">Gallery Style 2</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children"><a href="#" title="" itemprop="url">Sponsor Child</a>
                                                <ul>
                                                    <li><a href="sponsor-child.html" title="" itemprop="url">Sponsor Child</a></li>
                                                    <li><a href="sponsor-child-detail.html" title="" itemprop="url">Sponsor Child Details</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children"><a href="#" title="" itemprop="url">Team</a>
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
                                    <li class="menu-item-has-children"><a href="#" title="" itemprop="url">Blog</a>
                                        <ul>
                                            <li><a href="blog-style1.html" title="" itemprop="url">Blog Style 1</a></li>
                                            <li><a href="blog-style2.html" title="" itemprop="url">Blog Style 2</a></li>
                                            <li><a href="blog-style3.html" title="" itemprop="url">Blog Style 3</a></li>
                                            <li><a href="blog-style4.html" title="" itemprop="url">Blog Style 4</a></li>
                                            <li><a href="blog-detail.html" title="" itemprop="url">Blog Details</a></li>
                                            <li><a href="blog-detail-no-sidebar.html" title="" itemprop="url">Blog Details No Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children"><a href="#" title="" itemprop="url">Cause</a>
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
                                <a class="thm-btn" href="donate-now.html" title="" itemprop="url">Donate Now<span></span></a>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
    )
}

export default MenuBar;