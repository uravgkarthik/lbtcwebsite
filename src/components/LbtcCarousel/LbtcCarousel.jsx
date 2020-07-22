import React from "react";
import { Switch, Route, Link } from "react-router-dom";

function EventFunding() {
    return (
        <div className="App">
            <section>
                <div className="block remove-bottom">
                    <div
                        className="fixed-bg shp-bg back-post-rgttp"
                        style={{
                            backgroundImage: "url(../../assets/images/bg-shp3.png)",
                        }}
                    ></div>
                    <div className="container">
                        <div className="feat-wrp2">
                            <div className="row align-items-center">
                                <div className="col-md-5 col-sm-6 col-lg-5">
                                    <div className="feat-cap">
                                        <h2 itemprop="headline">
                                            Let's Be The Change{" "}
                                            <strong>One Mission To Clean Bengaluru</strong>
                                        </h2>
                                        <p itemprop="description">
                                            Want to be a part of the change?
                      </p>
                                        <p itemprop="description">
                                            Join LBTC as a volunteer and contribute to the society.
                      </p>
                                        <a
                                            className="thm-btn"
                                            href="donate-now.html"
                                            title=""
                                            itemprop="url"
                                        >
                                            Sign Me Up As a Volunteer<span></span>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-6 col-lg-7">
                                    <div className="feat-img2 text-right">
                                        <img
                                            src={require("../../assets/images/resources/feat-mckp.png")}
                                            alt="feat-mckp.png"
                                            itemprop="image"
                                        />
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