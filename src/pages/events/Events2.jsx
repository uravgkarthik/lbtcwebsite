import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import ResponsiveHeader from "../../components/ResponsiveHeader/ResponsiveHeader";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import Footer from "../../components/Footer/Footer";
import { Switch, Route, Link } from "react-router-dom";

function Events2() {
  return (
    <div classNameName="App">
      <main>
        <HeaderBar></HeaderBar>
        <MenuBar></MenuBar>
        <section>
          <div className="block no-padding">
            <div class="pg-tp-bg">
              <img src={require("../aboutus/AboutUs-Main-3.jpg")} />
            </div>
          </div>
        </section>
        <div className="gray-bg3 brdcrmb-wrp">
          <div className="container">
            <div className="brdcrmb-inr flex justify-content-between">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html" title="" itemprop="url">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active">Our Events</li>
              </ol>
            </div>
          </div>
        </div>
        <section>
          <div className="block">
            <div className="container">
              <div className="evnt-wrp remove-ext8">
                <div className="evnt-bx">
                  <div className="evnt-thmb">
                    <Link to="events/event-6">
                      <img
                        src={require("../../assets/images/resources/evnt-img1-1.jpg")}
                        alt="evnt-img1-1.jpg"
                        itemprop="image"
                      />
                    </Link>
                  </div>
                  <div className="evnt-inf">
                    <div className="evnt-inf-tp">
                      <span className="thm-clr">12.03.2019</span>
                      <div className="evnt-orgn">
                        <img
                          src={require("../../assets/images/resources/evnt-orgn1-1.jpg")}
                          alt="evnt-orgn1-1.jpg"
                          itemprop="image"
                        />
                        <div className="evnt-orgn-inf">
                          <h6 itemprop="headline">Nolim Smith</h6>
                          <span>Organizer</span>
                        </div>
                      </div>
                    </div>
                    <h4 itemprop="headline">
                      <Link to="events/event-6">
                        Help others through the gift of your time, donations
                      </Link>
                    </h4>
                    <p itemprop="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      uam, odioserunt provident maiores consectetur adipisic
                      Aliquam odio dese runtesseu
                    </p>
                    <div className="evnt-inf-btm">
                      <Link to="events/event-6">
                        <a className="thm-btn2" title="" itemprop="url">
                          {" "}
                          <Link to="events/event-6">Join The Movement</Link>
                        </a>
                      </Link>
                      <span className="evnt-loc">
                        <i className="fa fa-map-marker"></i>
                        <span>4801 Rockhill Road Kansas City, 64110</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pgntin-wrp text-center">
                <ul className="pagination">
                  <li className="page-item">
                    <Link to="/events">
                      <a className="page-link prev" title="" itemprop="url">
                        <i className="fa fa-angle-left"></i>
                      </a>
                    </Link>
                  </li>
                  <li className="page-item">
                    {" "}
                    <Link to="/events">
                      <a className="page-link" title="" itemprop="url">
                        1
                      </a>
                    </Link>
                  </li>
                  <li className="page-item active">
                    <span className="page-link">2</span>
                  </li>

                  <li className="page-item">
                    <a className="page-link next" title="" itemprop="url">
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </main>
    </div>
  );
}
export default Events2;
