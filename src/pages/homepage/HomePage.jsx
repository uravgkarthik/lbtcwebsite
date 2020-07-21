import React from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import Partners from "../../components/Partners/Partners";
import BlogArticles from "../../components/BlogArticles/BlogArticles";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import ResponsiveHeader from "../../components/ResponsiveHeader/ResponsiveHeader";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import Footer from "../../components/Footer/Footer";
import Testimonials from "../../components/Testimonials/Testimonials";
import { Switch, Route, Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="App">
      <main>
        <HeaderBar></HeaderBar>
        <MenuBar></MenuBar>
        <StickyHeader></StickyHeader>
        <ResponsiveHeader></ResponsiveHeader>
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
        <AboutUs></AboutUs> {/* About Us Component */}
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
        <section>
          <div className="block remove-gap">
            <div
              className="fixed-bg shp-bg back-post-lftbtm"
              style={{
                backgroundImage: "url(../../assets/images/bg-shp1.png)",
              }}
            ></div>
            <div className="container">
              <div className="abt-wrp3">
                <div className="row align-items-center">
                  <div className="col-md-6 col-sm-12 col-lg-6">
                    <div className="abt-img">
                      <img
                        src={require("../../assets/images/resources/orgn-mckp1.png")}
                        alt="orgn-mckp1.png"
                        itemprop="image"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 col-lg-6">
                    <div className="abt-desc3">
                      <h2 itemprop="headline">Come, be a part of our events</h2>
                      <p itemprop="description">
                        Here is a brief view of our upcoming events and the
                        highlights of our previous events
                      </p>
                      <br />
                      <Link to="/events">
                        <a
                          className="thm-btn"
                          href="donate-now.html"
                          title=""
                          itemprop="url"
                        >
                          View All The Events<span></span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Owl Carousel Goes Here */}
        {/*Donate Section */}
        <section>
          <div className="block top-spac100 remove-bottom">
            <div
              className="fixed-bg shp-bg back-post-rgtbtm"
              style={{
                backgroundImage: "url(../../assets/images/bg-shp2.png)",
              }}
            ></div>
            <div className="container">
              <div className="fndrs-wrp2">
                <div className="row align-items-center">
                  <div className="col-md-4 col-sm-12 col-lg-4">
                    <div className="fndrs-img-wrp">
                      <img
                        src={require("../../assets/images/resources/fndrs-img1.jpg")}
                        alt="fndrs-img1.jpg"
                        itemprop="image"
                      />
                      <img
                        src={require("../../assets/images/resources/fndrs-img2.jpg")}
                        alt="fndrs-img2.jpg"
                        itemprop="image"
                      />
                      <img
                        src={require("../../assets/images/resources/fndrs-img3.jpg")}
                        alt="fndrs-img3.jpg"
                        itemprop="image"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12 col-lg-4">
                    <div className="fndrs-inf text-center thm-layer opc9">
                      <div
                        className="fixed-bg thm-bg back-blend-multiply"
                        style={{
                          backgroundImage:
                            "url(../../assets/images/pattern-bg1.jpg)",
                        }}
                      ></div>
                      <img
                        src={require("../../assets/images/resources/fndrs-icn.png")}
                        alt="fndrs-icn.png"
                        itemprop="image"
                      />
                      <h2 itemprop="headline">Our Activities</h2>
                      <p itemprop="description">
                        Here is a peek through the highlights of our activities
                      </p>
                      <br />
                      <Link to="/gallery">
                        <button
                          className="thm-btn thm-btnx"
                          style={{ backgroundColor: "black" }}
                        >
                          Gallery<span></span>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12 col-sm-4">
                    <div className="fndrs-img-wrp">
                      <img
                        src={require("../../assets/images/resources/fndrs-img4.jpg")}
                        alt="fndrs-img4.jpg"
                        itemprop="image"
                      />
                      <img
                        src={require("../../assets/images/resources/fndrs-img5.jpg")}
                        alt="fndrs-img5.jpg"
                        itemprop="image"
                      />
                      <img
                        src={require("../../assets/images/resources/fndrs-img6.jpg")}
                        alt="fndrs-img6.jpg"
                        itemprop="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Partners></Partners> {/* Partners Component */}
        <BlogArticles></BlogArticles> {/* News Articles Component */}
        <Footer></Footer>
      </main>
    </div>
  );
}

export default HomePage;
