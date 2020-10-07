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
                                                    <strong>Novel Corona Virus!! Or Covid 19!! </strong>
                                                    Born in China and roaming the world.! As funny as it may seem, its not.!!
                                                    The world as we know it, is constantly battling the pandemic which has left close to a million people dead already and ten of millions affected directly or indirectly.  
                                                    India as a nation is putting up a brave front against Covid 19. We are doing everything we can to contain the spread of Covid 19 and quite successful in doing so. 
                                                    We at <strong>Let’s Be The Change</strong> are striving hard to make Namma Bengaluru Covid free.
                                                </p>
                                                <br />
                                                <h2 itemprop="headline">Our Target</h2>

                                                <p className="thm-clr blc-wt">
                                                    We have identified 2 slums in South Bangalore: (Total Population of 3000)
                                                    <ul>
                                                    <li>
                                                        Raghavendra Colony
                                                    </li>
                                                    <li>
                                                        A K Colony
                                                    </li>
                                                    </ul>                                                                           
                                                </p>
                                                <p className="thm-clr blc-wt">
                                                    Our target is to provide them with end to end support for the next 4 months:
                                                    <ul>
                                                        <li>
                                                            <strong>Health Support </strong>(Medicine Kits, Ration Kits, Hygiene Kits)
                                                        </li>
                                                        <li>
                                                            <strong>Employment Support </strong>(Finding Jobs / Skill Training / Upskilling)
                                                        </li>
                                                        <li>
                                                            <strong>Awareness </strong> (Street Plays, Wall Painting)
                                                        </li>
                                                        <li>
                                                            <strong>Helpdesk </strong>(For any enquiry or emergency)
                                                        </li>
                                                        <li>
                                                            <strong>Building Community Leaders </strong>(Empowering Youths)
                                                        </li>
                                                    </ul>
                                                </p>
                                                <br />
                                                <h2 itemprop="headline">Our Aim</h2>

                                                <p className="thm-clr blc-wt">
                                                    “To make the community self sustained”
                                                </p>
                                                <br />
                                                <h2 itemprop="headline">Our Mission </h2>

                                                <p className="thm-clr blc-wt">
                                                    “Make Bengaluru Covid free”
                                                </p>
                                                <br />
                                                <h2 itemprop="headline">Our Vision</h2>

                                                <p className="thm-clr blc-wt">
                                                    “Continue to strive hard for the betterment of the society and to make a difference one step at a time”
                                                </p>
                                                <br />
                                                <h2 itemprop="headline">Our Team</h2>
                                                <p className="thm-clr blc-wt">
                                                    <ul>
                                                        <li>
                                                            2 Project Managers
                                                        </li>
                                                        <li>
                                                            3 Health Care Workers
                                                        </li>
                                                        <li>
                                                            10 Interns
                                                        </li>
                                                        <li>
                                                            10 Community leaders
                                                        </li>
                                                        <li>
                                                            1 Doctor on call (24/7)
                                                        </li>
                                                        <li>
                                                            3+ Street Play Trainers & Artists 
                                                        </li>
                                                        <li>
                                                            10+ Weekend Volunteers
                                                        </li>
                                                    </ul>
                                                </p>
                                                <br />
                                                <h2 itemprop="headline">Our Plan</h2>
                                                <p className="thm-clr blc-wt">
                                                    <strong>This is Dummy Text For Now</strong>
                                                    
                                                </p>
                                                {/* <p className="blc-wt">
                                                    Novel Corona Virus!! Or Covid 19!! 
                                                    Born in China and roaming the world.! As funny as it may seem, its not.!!
                                                    The world as we know it, is constantly battling the pandemic which has left close to a million people dead already and ten of millions affected directly or indirectly.  
                                                    India as a nation is putting up a brave front against Covid 19. We are doing everything we can to contain the spread of Covid 19 and quite successful in doing so. 
                                                    We at Let’s Be The Change are striving hard to make Namma Bengaluru Covid free.
                                                    <ul>
                                                        <li>
                                                            2 Project Managers
                                                        </li>
                                                        <li>
                                                            3 Health Care Workers
                                                        </li>
                                                        <li>
                                                            10 Interns
                                                        </li>
                                                        <li>
                                                            10 Community leaders
                                                        </li>
                                                        <li>
                                                            1 Doctor on call (24/7)
                                                        </li>
                                                        <li>
                                                            3+ Street Play Trainers & Artists
                                                        </li>
                                                        <li>
                                                            10+ Weekend Volunteers
                                                        </li>
                                                    </ul>
                                                </p> */}
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
                                                    src={require("../covid19/D5.jpg")}
                                                    alt="WhatDoWeDo.jpg"
                                                    itemprop="image"
                                                />
                                                {/* <img
                                                    src={require("../covid19/D4.jpg")}
                                                    alt="abt-pg-img1-2.jpg"
                                                    itemprop="image"
                                                /> */}
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
                                src={require("../covid19/Team-F.png")}
                                alt="Covid-Team.jpg"
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
