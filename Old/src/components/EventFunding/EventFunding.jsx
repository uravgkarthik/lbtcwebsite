import React from "react";
import { Switch, Route, Link } from "react-router-dom";

function EventFunding() {
    return (
        <div className="App">
            <section>
                <div className="block remove-gap">
                    <div className="container">
                        <div className="cus-wrp style3 text-center remove-ext9">
                            <div className="row">
                                <div className="col-md-3 col-sm-6 col-lg-3">
                                    <div className="cus-bx3">
                                        <div className="cus-thmb">
                                            <a href="cause-detail.html" title="" itemprop="url">
                                                <img
                                                    src={require("../EventFunding/Fundraising/4.jpg")}
                                                    alt="Fund-1.jpg"
                                                    itemprop="image"
                                                />
                                            </a>
                                        </div>
                                        <div className="cus-inf3">
                                            <h4 itemprop="headline">
                                                <a href="cause-detail.html" title="">
                                                    Donating For Daily Wage/Migrant Workers
                          </a>
                                            </h4>
                                            <span className="cus-amt">
                                                <i className="thm-clr">Rs.2000 Raised</i> of Rs.10,000
                        </span>
                                            <div className="progress">
                                                <div className="progress-bar thm-bg wdth20">
                                                    <span>20%</span>
                                                </div>
                                            </div>
                                            <a
                                                className="thm-btn"
                                                href="donate-now.html"
                                                title=""
                                                itemprop="url"
                                            >
                                                Donate Now<span></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-lg-3">
                                    <div className="cus-bx3">
                                        <div className="cus-thmb">
                                            <a href="cause-detail.html" title="" itemprop="url">
                                                <img
                                                    src={require("../EventFunding/Fundraising/1.jpg")}
                                                    alt="Fund-2.jpg"
                                                    itemprop="image"
                                                />
                                            </a>
                                        </div>
                                        <div className="cus-inf3">
                                            <h4 itemprop="headline">
                                                <a href="cause-detail.html" title="">
                                                    Food For Daily Wage/Migrant Workers
                          </a>
                                            </h4>
                                            <span className="cus-amt">
                                                <i className="thm-clr">Rs.4500 Raised</i> of Rs.10,000
                        </span>
                                            <div className="progress">
                                                <div className="progress-bar thm-bg wdth45">
                                                    <span>45%</span>
                                                </div>
                                            </div>
                                            <a
                                                className="thm-btn"
                                                href="donate-now.html"
                                                title=""
                                                itemprop="url"
                                            >
                                                Donate Now<span></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-lg-3">
                                    <div className="cus-bx3">
                                        <div className="cus-thmb">
                                            <a href="cause-detail.html" title="" itemprop="url">
                                                <img
                                                    src={require("../EventFunding/Fundraising/2.jpg")}
                                                    alt="Fund-3.jpg"
                                                    itemprop="image"
                                                />
                                            </a>
                                        </div>
                                        <div className="cus-inf3">
                                            <h4 itemprop="headline">
                                                <a href="cause-detail.html" title="">
                                                    Ration Donation For Daily Wage/Migrant Workers
                          </a>
                                            </h4>
                                            <span className="cus-amt">
                                                <i className="thm-clr">Rs.2000 Raised</i> of Rs.10,000
                        </span>
                                            <div className="progress">
                                                <div className="progress-bar thm-bg wdth20">
                                                    <span>20%</span>
                                                </div>
                                            </div>
                                            <a
                                                className="thm-btn"
                                                href="donate-now.html"
                                                title=""
                                                itemprop="url"
                                            >
                                                Donate Now<span></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-lg-3">
                                    <div className="cus-bx3">
                                        <div className="cus-thmb">
                                            <a href="cause-detail.html" title="" itemprop="url">
                                                <img
                                                    src={require("../EventFunding/Fundraising/3.jpg")}
                                                    alt="Fund-4.jpg"
                                                    itemprop="image"
                                                />
                                            </a>
                                        </div>
                                        <div className="cus-inf3">
                                            <h4 itemprop="headline">
                                                <a href="cause-detail.html" title="">
                                                    Ration For Daily Wage/Migrant Workers
                          </a>
                                            </h4>
                                            <span className="cus-amt">
                                                <i className="thm-clr">Rs.4000 Raised</i> of Rs.10,000
                        </span>
                                            <div className="progress">
                                                <div className="progress-bar thm-bg wdth40">
                                                    <span>40%</span>
                                                </div>
                                            </div>
                                            <a
                                                className="thm-btn"
                                                href="donate-now.html"
                                                title=""
                                                itemprop="url"
                                            >
                                                Donate Now<span></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
    }
    export default EventFunding;