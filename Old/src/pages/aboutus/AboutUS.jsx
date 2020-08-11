import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";

import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import ResponsiveHeader from "../../components/ResponsiveHeader/ResponsiveHeader";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import OurTeam from "../../components/OurTeam/OurTeam";
import "../aboutus/aboutus.min.scss";
import YoutubeVideo from "../../components/YoutubeVideo/YoutubeVideo";
// import "../../components/MenuBar/menubarwhitetext.min.scss";


function AboutUS() {
  return (
    <main>
      <HeaderBar></HeaderBar>
      <MenuBar></MenuBar>
      <StickyHeader></StickyHeader>
      <ResponsiveHeader></ResponsiveHeader>
      <section>
        <div class="block no-padding">
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
                <a href="index.html" title="" itemprop="url">
                  Home
                </a>
              </li>
              <li class="breadcrumb-item active">About Us</li>
            </ol>
          </div>
        </div>
      </div>
      <section>
        <div className="block">
          <div className="container">
            <div className="abt-pg-wrp">
              <h2 itemprop="headline">Who are We? </h2>
              <div className="abt-pg-inr">
                <div className="row align-items-center">
                  <div className="col-md-7 col-sm-12 col-lg-7">
                    <div className="abt-pg-desc">
                      <p itemprop="description">
                        Let’s Be The Change (LBTC)​ is a non-profit organization
                        which aims to build a cleaner and healthier society by
                        working with the people and the Government. LBTC was
                        started by ​Anirudh S Dutt​ on 5th July 2013. ​ ​We have
                        been growing ever since, with over 250 successful
                        events, including cleanliness drives, awareness
                        programmes, spot fixes, pet adoption drives and so on.
                        We are mainly comprised of energetic youngsters whose
                        only aim is to make Bengaluru a better place for the
                        society. We are a bridge connection between the
                        Municipal Corporation (BBMP) and the Citizens.
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
                      <h2 itemprop="headline">What We Do? </h2>
                      <p itemprop="description">
                        <ul>
                          <li>
                            We host ​“Cleanathon”​ drives (eradication and
                            beautification of garbage dumps) in Bengaluru. We
                            work towards making Bengaluru free from garbage
                            dumps, one stretch at a time.
                          </li>{" "}
                          <li>
                            We conduct free ​Clay Ganapathi Workshops. In the
                            past 2 years, over 3500 people have made their own
                            Ganapathi Idols, for worship during the festival
                            season.
                          </li>
                          <li>
                            We have tied-up with Precious Paws Foundation to
                            organize fundraising events for injured stray dogs,
                            pet adoption (stray, homeless pups).{" "}
                          </li>
                          <li>
                            On Television, Radio, and Social Media, we spread
                            awareness about the importance of waste segregation
                            and things that the average citizen can do to keep
                            their localities clean.
                          </li>{" "}
                          <li>
                            In our YouTube channel, we demonstrate simple steps
                            to keep your surroundings clean, various segregation
                            techniques, and also have videos about traffic
                            rules, common traffic conventions that people should
                            follow, chain-snatching etc.
                          </li>
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
                        src={require("../aboutus/Who-AreWe.jpg")}
                        alt="WhatDoWeDo.jpg"
                        itemprop="image"
                      />
                      <img
                        src={require("../aboutus/What-Do-WeDo.jpg")}
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
      <section>
        <div className="block black-layer opc3 paddingbeda">
          <div
            className="fixed-bg fullcontainerimg">
            <img className="fullcontainerimg"
              src={require("../aboutus/../aboutus/VideoBkgnd.jpg")}
              alt="abt-pg-img1-2.jpg"
              itemprop="image"
            />
          </div>
          <div className="container">
            <div className="vdo-wrp text-center">
              <div className="vdo-inr">
                {/* <a
                  href="https://www.youtube.com/watch?v=P4M4WRtlKPQ&feature=emb_logo"
                  data-fancybox
                  title=""
                  itemprop="url"
                > */}
                  
                  <YoutubeVideo></YoutubeVideo> {/* Youtube Video Component */}

                {/* </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurTeam></OurTeam> {/* Our Team Component */}
      <section>
        <div className="block remove-gap">
          <div className="container">
            <div className="fndrs-wrp">
              <div className="row align-items-center">
                <div className="col-md-6 col-sm-12 col-lg-6">
                  <div className="fndrs-desc">
                    <h2 itemprop="headline">
                      Our<strong className="thm-clr"> Belief</strong>
                    </h2>
                    <p itemprop="description">
                      We believe cleanliness can be established and issues can
                      be solved when Citizens take up initiatives and work in
                      synergy with the government.
                    </p>
                    <br></br>
                    <p itemprop="description">
                      Join Us <span className="bluecolorhashtag">#TeamLBTC</span>
                    </p>
                    <a
                      className="thm-btn"
                      href="https://cdn.jotfor.ms/letsbethechange.india/bv-volunteers"
                      title=""
                      itemprop="url"
                    >
                      Become A Volunteer<span></span>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-6">
                  <div className="fndrs-img">
                    <img
                      src={require("../aboutus/JoinUs.jpg")}
                      alt="fndrs-img.png"
                      itemprop="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer> {/* Footer Component */}
    </main>
  );
}

export default AboutUS;
