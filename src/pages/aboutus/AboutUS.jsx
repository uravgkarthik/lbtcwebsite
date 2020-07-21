import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import ResponsiveHeader from "../../components/ResponsiveHeader/ResponsiveHeader";
import StickyHeader from "../../components/StickyHeader/StickyHeader";

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
            <img src={require("../../assets/images/pg-tp-bg1.jpg")} />
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
                        src={require("../../assets/images/sgn.png")}
                        alt="sgn.png"
                        itemprop="image"
                      />
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-12 col-lg-5">
                    <div className="abt-pg-imgs">
                      <img
                        src={require("../../assets/images/resources/abt-pg-img1-1.jpg")}
                        alt="abt-pg-img1-1.jpg"
                        itemprop="image"
                      />
                      <img
                        src={require("../../assets/images/resources/abt-pg-img1-2.jpg")}
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
        <div className="block black-layer opc3">
          <div
            className="fixed-bg"
            style={{ backgroundImage: "url(../../assets/images/prlx-bg7.jpg)" }}
          ></div>
          <div className="container">
            <div className="vdo-wrp text-center">
              <div className="vdo-inr">
                <a
                  href="https://www.youtube.com/embed/5Y0Qrtew4VE"
                  data-fancybox
                  title=""
                  itemprop="url"
                >
                  <i className="fa fa-play thm-bg"></i>
                  <span>1:04</span>
                </a>
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
                <h2 itemprop="headline">Our Team</h2>
                <span>Board Members</span>
                <i className="flaticon-sweat thm-clr"></i>
              </div>
            </div>
            <div className="tem-wrp text-center remove-ext4">
              <div className="row">
                <div className="col-md-3 col-sm-3 col-lg-2">
                  <div className="tem-bx">
                    <div
                      className="tem-thmb"
                      style={{
                        backgroundImage:
                          "url(../../assets/images/resources/tem-img1-1.jpg)",
                      }}
                    >
                      <a href="team-detail.html" title="" itemprop="url">
                        <i className="fa fa-chevron-right"></i>
                      </a>
                      <div className="tem-scl">
                        <a
                          className="facebook"
                          href="#"
                          title="Facebook"
                          itemprop="url"
                          target="_blank"
                        >
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a
                          className="pinterest"
                          href="#"
                          title="Pinterest"
                          itemprop="url"
                          target="_blank"
                        >
                          <i className="fa fa-pinterest-p"></i>
                        </a>
                        <a
                          className="twitter"
                          href="#"
                          title="Twitter"
                          itemprop="url"
                          target="_blank"
                        >
                          <i className="fa fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                    <div className="tem-inf">
                      <h4 itemprop="headline">
                        <a href="team-detail.html" title="" itemprop="url">
                          Anirudh S Dutt
                        </a>
                      </h4>
                      <span>Founder, President</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-3 col-lg-2">
                  <div className="tem-bx">
                    <div
                      className="tem-thmb"
                      style={{
                        backgroundImage:
                          "url(../../assets/images/resources/tem-img1-2.jpg)",
                      }}
                    >
                      <a href="team-detail.html" title="" itemprop="url">
                        <i className="fa fa-chevron-right"></i>
                      </a>
                      <div className="tem-scl">
                        <a
                          className="facebook"
                          href="#"
                          title="Facebook"
                          itemprop="url"
                          target="_blank"
                        >
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a
                          className="pinterest"
                          href="#"
                          title="Pinterest"
                          itemprop="url"
                          target="_blank"
                        >
                          <i className="fa fa-pinterest-p"></i>
                        </a>
                        <a
                          className="twitter"
                          href="#"
                          title="Twitter"
                          itemprop="url"
                          target="_blank"
                        >
                          <i className="fa fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                    <div className="tem-inf">
                      <h4 itemprop="headline">
                        <a href="team-detail.html" title="" itemprop="url">
                          Prajwal G V
                        </a>
                      </h4>
                      <span>Vice President</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-3 col-lg-2">
                  <div className="tem-bx">
                    <div
                      className="tem-thmb"
                      style={{
                        backgroundImage:
                          "url(../../assets/images/resources/tem-img1-3.jpg)",
                      }}
                    >
                      <a href="team-detail.html" title="" itemprop="url">
                        <i className="fa fa-chevron-right"></i>
                      </a>
                      <div className="tem-scl">
                        <a
                          className="facebook"
                          href="#"
                          title="Facebook"
                          itemprop="url"
                          target="_blank"
                        >
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a
                          className="pinterest"
                          href="#"
                          title="Pinterest"
                          itemprop="url"
                          target="_blank"
                        >
                          <i className="fa fa-pinterest-p"></i>
                        </a>
                        <a
                          className="twitter"
                          href="#"
                          title="Twitter"
                          itemprop="url"
                          target="_blank"
                        >
                          <i className="fa fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                    <div className="tem-inf">
                      <h4 itemprop="headline">
                        <a href="team-detail.html" title="" itemprop="url">
                          Srivatsa Gargesh
                        </a>
                      </h4>
                      <span>General Secretary</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-3 col-lg-2">
                  <div className="tem-bx">
                    <div
                      className="tem-thmb"
                      style={{
                        backgroundImage:
                          "url(../../assets/images/resources/tem-img1-4.jpg)",
                      }}
                    >
                      <a href="team-detail.html" title="" itemprop="url">
                        <i className="fa fa-chevron-right"></i>
                      </a>
                      <div className="tem-scl">
                        <a
                          className="facebook"
                          href="#"
                          title="Facebook"
                          itemprop="url"
                          target="_blank"
                        >
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a
                          className="pinterest"
                          href="#"
                          title="Pinterest"
                          itemprop="url"
                          target="_blank"
                        >
                          <i className="fa fa-pinterest-p"></i>
                        </a>
                        <a
                          className="twitter"
                          href="#"
                          title="Twitter"
                          itemprop="url"
                          target="_blank"
                        >
                          <i className="fa fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                    <div className="tem-inf">
                      <h4 itemprop="headline">
                        <a href="team-detail.html" title="" itemprop="url">
                          Gorge James
                        </a>
                      </h4>
                      <span>President & CEO</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-3 col-lg-2">
                  <div className="tem-bx">
                    <div
                      className="tem-thmb"
                      style={{
                        backgroundImage:
                          "url(../../assets/images/resources/tem-img1-4.jpg)",
                      }}
                    >
                      <a href="team-detail.html" title="" itemprop="url">
                        <i className="fa fa-chevron-right"></i>
                      </a>
                      <div className="tem-scl">
                        <a
                          className="facebook"
                          href="#"
                          title="Facebook"
                          itemprop="url"
                          target="_blank"
                        >
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a
                          className="pinterest"
                          href="#"
                          title="Pinterest"
                          itemprop="url"
                          target="_blank"
                        >
                          <i className="fa fa-pinterest-p"></i>
                        </a>
                        <a
                          className="twitter"
                          href="#"
                          title="Twitter"
                          itemprop="url"
                          target="_blank"
                        >
                          <i className="fa fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                    <div className="tem-inf">
                      <h4 itemprop="headline">
                        <a href="team-detail.html" title="" itemprop="url">
                          Gorge James
                        </a>
                      </h4>
                      <span>President & CEO</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-3 col-lg-2">
                  <div className="tem-bx">
                    <div
                      className="tem-thmb"
                      style={{
                        backgroundImage:
                          "url(../../assets/images/resources/tem-img1-4.jpg)",
                      }}
                    >
                      <a href="team-detail.html" title="" itemprop="url">
                        <i className="fa fa-chevron-right"></i>
                      </a>
                      <div className="tem-scl">
                        <a
                          className="facebook"
                          href="#"
                          title="Facebook"
                          itemprop="url"
                          target="_blank"
                        >
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a
                          className="pinterest"
                          href="#"
                          title="Pinterest"
                          itemprop="url"
                          target="_blank"
                        >
                          <i className="fa fa-pinterest-p"></i>
                        </a>
                        <a
                          className="twitter"
                          href="#"
                          title="Twitter"
                          itemprop="url"
                          target="_blank"
                        >
                          <i className="fa fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                    <div className="tem-inf">
                      <h4 itemprop="headline">
                        <a href="team-detail.html" title="" itemprop="url">
                          Gorge James
                        </a>
                      </h4>
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
                    <h2 itemprop="headline">
                      Why Should <strong className="thm-clr">You</strong> Join
                      Us?
                    </h2>
                    <p itemprop="description">
                      We believe cleanliness can be established and issues can
                      be solved when Citizens take up initiatives and work in
                      synergy with the government.
                    </p>
                    <br></br>
                    <p itemprop="description">Join Us #TeamLBTC</p>
                    <a className="thm-btn" href="#" title="" itemprop="url">
                      Become A Volunteer<span></span>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-6">
                  <div className="fndrs-img">
                    <img
                      src={require("../../assets/images/resources/fndrs-img.png")}
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
      <footer>
        <div className="block dark-layer opc3">
          <div
            className="fixed-bg drk-bg back-blend-darken"
            style={{ backgroundImage: "url(../../assets/images/prlx-bg2.jpg)" }}
          ></div>
          <div className="container">
            <div className="ftr-dta-wrp remove-ext10">
              <div className="row">
                <div className="col-md-4 col-sm-6 col-lg-4">
                  <div className="wdgt-bx">
                    <div className="logo">
                      <a href="index.html" title="Home" itemprop="url">
                        <img
                          src={require("../../assets/images/logo.png")}
                          alt="logo.png"
                          itemprop="image"
                        />
                      </a>
                    </div>
                    <p itemprop="description">
                      Lorem ipsum, or lipsum as it is sometimes known, is dummy
                      text used in laying out pri nt, graphic or web designs.
                    </p>
                    <ul className="abt-cnt-lst">
                      <li>
                        <i className="flaticon-telephone thm-clr"></i>(816)
                        932-1000
                      </li>
                      <li>
                        <i className="fa fa-map-marker thm-clr"></i>4801
                        Rockhill Road Kansas City, MO 64110
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-lg-4">
                  <div className="wdgt-bx">
                    <ul>
                      <li>
                        <a href="#" title="" itemprop="url">
                          Our Founder
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" itemprop="url">
                          Education
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" itemprop="url">
                          Enterpreneurship
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" itemprop="url">
                          Child Education
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" itemprop="url">
                          Grants
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="#" title="" itemprop="url">
                          Multimedia
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" itemprop="url">
                          Governance
                        </a>
                      </li>
                      <li>
                        <a href="#" title="" itemprop="url">
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-lg-4">
                  <p className="cpyrgt-p" itemprop="description">
                    &copy; Copyright 2019{" "}
                    <a href="index.html" title="Povert" itemprop="url">
                      Povert.
                    </a>{" "}
                    All rights reserved.
                  </p>
                  <div className="ftr-sbscrb thm-layer opc9">
                    <div
                      className="fixed-bg back-blend-multiply thm-bg patern-bg"
                      style={{
                        backgroundImage:
                          "url(../../assets/images/pattern-bg1.jpg)",
                      }}
                    ></div>
                    <p itemprop="description">
                      Subscribe to our mailing list to get the{" "}
                      <strong>update to you email.</strong>
                    </p>
                    <a href="#" title="" itemprop="url">
                      Sign Up Now
                    </a>
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
