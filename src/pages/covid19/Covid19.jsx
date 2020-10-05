import React, { Component } from 'react';
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
//import ResponsiveHeader from "../../components/ResponsiveHeader/ResponsiveHeader";
//import StickyHeader from "../../components/StickyHeader/StickyHeader";
import OurTeam from "../../components/OurTeam/OurTeam";
import "../aboutus/aboutus.min.scss";
import { 
    //Switch, 
    //Route, 
    Link } from "react-router-dom";
import MenuBarX from "../../components/MenuBar/MenuBarNav";
// import "../../components/MenuBar/menubarwhitetext.min.scss";

class Covid19 extends Component {
    render() {
        return (
            <main>
                <HeaderBar></HeaderBar>
                <MenuBar></MenuBar>
                {/*<StickyHeader></StickyHeader>
                <ResponsiveHeader></ResponsiveHeader> */}
                <MenuBarX></MenuBarX>
                <section>
                    <div class="block no-padding aboutpaddingnotreqd">
                        <div class="pg-tp-bg">
                            <img
                                src={require("../aboutus/AboutUs-Main-3.jpg")}
                                alt="Main-Background.jpg"
                                itemprop="image"
                            />
                        </div>
                    </div>
                </section>
                <div class="gray-bg3 brdcrmb-wrp">
                    <div class="container">
                        <div class="brdcrmb-inr flex justify-content-between">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <Link to="" title="" itemprop="url">
                                        Home
                </Link>
                                </li>
                                <li class="breadcrumb-item active">Covid-19 Relief Project</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <section>
                    <div
                        className="block blockx"
                        style={{ padding: "1rem" }}
                    >
                        <div className="container">
                            <div className="abt-pg-wrp">
                                <h2 itemprop="headline">Covid-19 Relief Project</h2>
                                <div className="abt-pg-inr">
                                    <div className="row align-items-center">
                                        <div className="col-md-7 col-sm-12 col-lg-7">
                                            <div className="abt-pg-desc">
                                                <p itemprop="description">
                                                    <strong>Let's Be The Change</strong> (#TeamLBTC) is a
                        non-profit organization which aims to build a cleaner,
                        healthier and more sustainable society by working with
                        the people and the Government.
                        <br /> <br /> LBTC provides it's volunteers a platform
                        filled with zest to contribute more to the society along
                        with a sense of accomplishment and satisfaction.
                      </p>
                                                <br />
                                                <h2 itemprop="headline">Our Vision </h2>

                                                <p className="thm-clr blc-wt">
                                                    “ To be an organization of excellence in restoring and
                                                    sustaining cleanliness of the city, dedication, and
                                                    teamwork towards achieving a garbage-free environment”
                      </p>
                                                <br />
                                                <h2 itemprop="headline">Our Mission </h2>

                                                <p className="thm-clr blc-wt">
                                                    “ To establish cleanliness and solve issues by
                                                    motivating citizens to take up initiatives and work in
                                                    synergy with the government”
                      </p>
                                                <br />
                                                <h2 itemprop="headline">Our Achievements </h2>
                                                <p itemprop="description">
                                                    <ul>
                                                        <li>
                                                            <a href="https://www.nammabengaluruawards.org/portfolio/sri-anirudh-s-dutt/">
                                                                Namma Bengaluru Rising Star of the Year Award
                                                                (2015)
                            </a>
                                                        </li>{" "}
                                                        <li>National Yuva Chethana Award (2017)</li>
                                                        <li>
                                                            <a href="https://www.guinnessworldrecords.com/world-records/541225-most-plastic-bottles-collected-for-recycling-in-12-hours">
                                                                Guinness World Record{" "}
                                                            </a>
                            for collecting 33.5 Tonnes of plastic bottles in 12
                            hours (2018)
                          </li>
                                                        <li>
                                                            Featured as one of the “Young Achiever” in{" "}
                                                            <a
                                                                href="https://www.zee5.com/tvshows/details/weekend-with-ramesh-s4-finale-july-14-2019/0-6-1675/weekend-with-ramesh-s4-finale-july-14-2019/0-1-240658"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <strong>Weekend with Ramesh</strong>
                                                            </a>{" "}
                            (2019) (Prime Show in Karnataka)
                          </li>{" "}
                                                    </ul>
                                                </p>

                                                <br />
                                                <h2 itemprop="headline">Our Volunteering Activities </h2>
                                                <p itemprop="description">
                                                    <strong>Musical Cleanathon:</strong>
                                                    <ul>
                                                        <li>
                                                            Beautification of Garbage Dump while a local band
                                                            performs
                          </li>{" "}
                                                        <li>Encourages communities coming together</li>
                                                        <a
                                                            href="https://pages.razorpay.com/cleanathon"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <strong>Donate For Cleanathon</strong>
                                                        </a>
                                                    </ul>
                                                    <strong>Plog Run</strong>
                                                    <ul>
                                                        <li>
                                                            Jogging while collecting Dry waste for recycling
                          </li>{" "}
                                                    </ul>
                                                    <strong>Clay Ganapathi Workshop:</strong>
                                                    <ul>
                                                        <li>
                                                            Flagship activity where we train citizens to build
                                                            idol from scratch
                          </li>{" "}
                                                    </ul>
                        School Beautification, SWM Awareness Drives, Street
                        Plays, and many more
                      </p>
                                                <br />
                                                <h2 itemprop="headline">Incubation</h2>

                                                <p itemprop="description">
                                                    We were incubated in{" "}
                                                    <a
                                                        href="https://www.nsrcel.org/nsrcelsocial/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <strong>NSRCEL Social</strong>
                                                    </a>
                        , IIM Bengaluru - 2019 to 2020
                      </p>

                                                <br />
                                                <h2 itemprop="headline">Our Current Work </h2>
                                                <p itemprop="description">
                                                    <ul>
                                                        <li>
                                                            Building a platform called “Bengaluru Veeraru” where
                                                            like-minded organisations, individuals come together
                                                            under one roof to help solve community problems by
                                                            providing step-by-step solutions and by coordinating
                                                            with the government
                          </li>{" "}
                                                        <li>
                                                            About{" "}
                                                            <a href="https://bengaluruveeraru.org">
                                                                <strong>Bengaluru Veeraru (BV):</strong>
                                                            </a>{" "}
                            BV is a platform to recognize and bring together all
                            the like-minded NGOs, RWAs, and Active Citizens for
                            a collective effort towards the betterment of Namma
                            Bengaluru
                          </li>
                                                        <li>3 key Activities of Bengaluru Veeraru:</li>
                                                        <ul>
                                                            <li>
                                                                <strong>BV Certification Course:</strong>
                                                            </li>
                                                            <ul>
                                                                <li>
                                                                    Any individual can take up a volunteering course
                                                                    for 3 months to become a Bengaluru Veera of
                                                                    their own community
                              </li>
                                                                <li>
                                                                    This will help an ordinary individual who wants
                                                                    to initiate change become a warrior who
                                                                    implements and sustains necessary changes in
                                their communities{" "}
                                                                </li>
                                                            </ul>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <strong>BV Awards:</strong>
                                                            </li>
                                                            <ul>
                                                                <li>
                                                                    Platform recognizes and honours active citizens,
                                                                    community groups, RWAs & NGOs who are
                                                                    contributing for the Better Bengaluru as
                                                                    “Bengaluru Veeraru”
                              </li>
                                                            </ul>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <strong>BV Connect:</strong>
                                                            </li>
                                                            <ul>
                                                                <li>
                                                                    Platform helps citizens to connect with similar
                                                                    vision NGOs, RWAs and individuals to support
                                                                    them in building their organisation and vice
                                                                    versa
                              </li>

                                                                <a href="https://rzp.io/l/BVProject">
                                                                    <strong>Donate Now</strong>
                                                                </a>
                                                            </ul>
                                                        </ul>
                                                    </ul>
                                                </p>

                                                <img
                                                    src={require("../aboutus/TeamLBTC.png")}
                                                    alt="WhoAreWe.jpg"
                                                    itemprop="image"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-5 col-sm-12 col-lg-5">
                                            <div className="abt-pg-imgs">
                                                <img
                                                    src={require("../covid19/D2.jpg")}
                                                    alt="WhatDoWeDo.jpg"
                                                    itemprop="image"
                                                />
                                                <img
                                                    src={require("../covid19/D3.jpg")}
                                                    alt="WhatDoWeDo.jpg"
                                                    itemprop="image"
                                                />
                                                <img
                                                    src={require("../covid19/D1.jpg")}
                                                    alt="WhatDoWeDo.jpg"
                                                    itemprop="image"
                                                />
                                                <img
                                                    src={require("../covid19/D3.jpg")}
                                                    alt="WhatDoWeDo.jpg"
                                                    itemprop="image"
                                                />
                                                <img
                                                    src={require("../covid19/D2.jpg")}
                                                    alt="abt-pg-img1-2.jpg"
                                                    itemprop="image"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="tem-wrp text-center remove-ext4">
                    <div className="row" style={{ marginBottom: "75px" }}>

                        <div className="col-md-12 col-sm-12 col-lg-12">
                            <img
                                src={require("../covid19/Team.jpg")}
                                alt="Core-Team.jpg"
                                itemprop="image"
                                style={{marginBottom:"25px"}}
                            />
                        </div>
                    </div>
                </div>
                <Footer></Footer> {/* Footer Component */}
            </main>
        );
    }
}

export default Covid19;