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
                                                    src={require("../../assets/images/resources/cus-img3-1.jpg")}
                                                    alt="cus-img3-1.jpg"
                                                    itemprop="image"
                                                />
                                            </a>
                                        </div>
                                        <div className="cus-inf3">
                                            <h4 itemprop="headline">
                                                <a href="cause-detail.html" title="">
                                                    Southern Poverty Law Center released
                          </a>
                                            </h4>
                                            <span className="cus-amt">
                                                <i className="thm-clr">$120 Raised</i> of $1,000
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
                                                    src={require("../../assets/images/resources/cus-img3-2.jpg")}
                                                    alt="cus-img3-2.jpg"
                                                    itemprop="image"
                                                />
                                            </a>
                                        </div>
                                        <div className="cus-inf3">
                                            <h4 itemprop="headline">
                                                <a href="cause-detail.html" title="">
                                                    Principles the Charity Stands for, the Aims
                          </a>
                                            </h4>
                                            <span className="cus-amt">
                                                <i className="thm-clr">$120 Raised</i> of $1,000
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
                                                    src={require("../../assets/images/resources/cus-img3-3.jpg")}
                                                    alt="cus-img3-3.jpg"
                                                    itemprop="image"
                                                />
                                            </a>
                                        </div>
                                        <div className="cus-inf3">
                                            <h4 itemprop="headline">
                                                <a href="cause-detail.html" title="">
                                                    We've found it helpful to Break down
                          </a>
                                            </h4>
                                            <span className="cus-amt">
                                                <i className="thm-clr">$120 Raised</i> of $1,000
                        </span>
                                            <div className="progress">
                                                <div className="progress-bar thm-bg wdth65">
                                                    <span>65%</span>
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
                                                    src={require("../../assets/images/resources/cus-img3-4.jpg")}
                                                    alt="cus-img3-4.jpg"
                                                    itemprop="image"
                                                />
                                            </a>
                                        </div>
                                        <div className="cus-inf3">
                                            <h4 itemprop="headline">
                                                <a href="cause-detail.html" title="">
                                                    Give to Charity on a Regular Basis
                          </a>
                                            </h4>
                                            <span className="cus-amt">
                                                <i className="thm-clr">$120 Raised</i> of $1,000
                        </span>
                                            <div className="progress">
                                                <div className="progress-bar thm-bg wdth80">
                                                    <span>80%</span>
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