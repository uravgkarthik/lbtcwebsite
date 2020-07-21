import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import ResponsiveHeader from "../../components/ResponsiveHeader/ResponsiveHeader";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import Footer from "../../components/Footer/Footer";

function Events() {
  return (
    <div classNameName="App">
      <main>
        <HeaderBar></HeaderBar>
        <MenuBar></MenuBar>
        <section>
          <div className="block no-padding">
            <div class="pg-tp-bg">
              <img src={require("../../assets/images/pg-tp-bg1.jpg")} />
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
                <li className="breadcrumb-item active">Our Events Style 1</li>
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
                    <a href="event-detail.html" title="" itemprop="url">
                      <img
                        src={require("../../assets/images/resources/evnt-img1-1.jpg")}
                        alt="evnt-img1-1.jpg"
                        itemprop="image"
                      />
                    </a>
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
                      <a href="event-detail.html" title="" itemprop="url">
                        Help others through the gift of your time, donations
                      </a>
                    </h4>
                    <p itemprop="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      uam, odioserunt provident maiores consectetur adipisic
                      Aliquam odio dese runtesseu
                    </p>
                    <div className="evnt-inf-btm">
                      <a
                        className="thm-btn2"
                        href="event-detail.html"
                        title=""
                        itemprop="url"
                      >
                        Join The Movement
                      </a>
                      <span className="evnt-loc">
                        <i className="fa fa-map-marker"></i>
                        <span>4801 Rockhill Road Kansas City, 64110</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="evnt-bx rev">
                  <div className="evnt-thmb">
                    <a href="event-detail.html" title="" itemprop="url">
                      <img
                        src={require("../../assets/images/resources/evnt-img1-2.jpg")}
                        alt="evnt-img1-2.jpg"
                        itemprop="image"
                      />
                    </a>
                  </div>
                  <div className="evnt-inf">
                    <div className="evnt-inf-tp">
                      <span className="thm-clr">05.03.2019</span>
                      <div className="evnt-orgn">
                        <img
                          src={require("../../assets/images/resources/evnt-orgn1-2.jpg")}
                          alt="evnt-orgn1-2.jpg"
                          itemprop="image"
                        />
                        <div className="evnt-orgn-inf">
                          <h6 itemprop="headline">Smith Nolim</h6>
                          <span>Organizer</span>
                        </div>
                      </div>
                    </div>
                    <h4 itemprop="headline">
                      <a href="event-detail.html" title="" itemprop="url">
                        Charity Event ideas to Engage Donors, Support
                      </a>
                    </h4>
                    <p itemprop="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      uam, odioserunt provident maiores consectetur adipisic
                      Aliquam odio dese runtesseu
                    </p>
                    <div className="evnt-inf-btm">
                      <a
                        className="thm-btn2"
                        href="event-detail.html"
                        title=""
                        itemprop="url"
                      >
                        Join The Movement
                      </a>
                      <span className="evnt-loc">
                        <i className="fa fa-map-marker"></i>
                        <span>4801 Rockhill Road Kansas City, 64110</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="evnt-bx">
                  <div className="evnt-thmb">
                    <a href="event-detail.html" title="" itemprop="url">
                      <img
                        src={require("../../assets/images/resources/evnt-img1-3.jpg")}
                        alt="evnt-img1-3.jpg"
                        itemprop="image"
                      />
                    </a>
                  </div>
                  <div className="evnt-inf">
                    <div className="evnt-inf-tp">
                      <span className="thm-clr">12.03.2019</span>
                      <div className="evnt-orgn">
                        <img
                          src={require("../../assets/images/resources/evnt-orgn1-3.jpg")}
                          alt="evnt-orgn1-3.jpg"
                          itemprop="image"
                        />
                        <div className="evnt-orgn-inf">
                          <h6 itemprop="headline">Nolim Smith</h6>
                          <span>Organizer</span>
                        </div>
                      </div>
                    </div>
                    <h4 itemprop="headline">
                      <a href="event-detail.html" title="" itemprop="url">
                        Know plenty of people who have skydiving.
                      </a>
                    </h4>
                    <p itemprop="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      uam, odioserunt provident maiores consectetur adipisic
                      Aliquam odio dese runtesseu
                    </p>
                    <div className="evnt-inf-btm">
                      <a
                        className="thm-btn2"
                        href="event-detail.html"
                        title=""
                        itemprop="url"
                      >
                        Join The Movement
                      </a>
                      <span className="evnt-loc">
                        <i className="fa fa-map-marker"></i>
                        <span>4801 Rockhill Road Kansas City, 64110</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="evnt-bx rev">
                  <div className="evnt-thmb">
                    <a href="event-detail.html" title="" itemprop="url">
                      <img
                        src={require("../../assets/images/resources/evnt-img1-4.jpg")}
                        alt="evnt-img1-4.jpg"
                        itemprop="image"
                      />
                    </a>
                  </div>
                  <div className="evnt-inf">
                    <div className="evnt-inf-tp">
                      <span className="thm-clr">05.03.2019</span>
                      <div className="evnt-orgn">
                        <img
                          src={require("../../assets/images/resources/evnt-orgn1-4.jpg")}
                          alt="evnt-orgn1-4.jpg"
                          itemprop="image"
                        />
                        <div className="evnt-orgn-inf">
                          <h6 itemprop="headline">Smith Nolim</h6>
                          <span>Organizer</span>
                        </div>
                      </div>
                    </div>
                    <h4 itemprop="headline">
                      <a href="event-detail.html" title="" itemprop="url">
                        Raise awareness for a cause and raise money
                      </a>
                    </h4>
                    <p itemprop="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      uam, odioserunt provident maiores consectetur adipisic
                      Aliquam odio dese runtesseu
                    </p>
                    <div className="evnt-inf-btm">
                      <a
                        className="thm-btn2"
                        href="event-detail.html"
                        title=""
                        itemprop="url"
                      >
                        Join The Movement
                      </a>
                      <span className="evnt-loc">
                        <i className="fa fa-map-marker"></i>
                        <span>4801 Rockhill Road Kansas City, 64110</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="evnt-bx">
                  <div className="evnt-thmb">
                    <a href="event-detail.html" title="" itemprop="url">
                      <img
                        src={require("../../assets/images/resources/evnt-img1-5.jpg")}
                        alt="evnt-img1-5.jpg"
                        itemprop="image"
                      />
                    </a>
                  </div>
                  <div className="evnt-inf">
                    <div className="evnt-inf-tp">
                      <span className="thm-clr">12.03.2019</span>
                      <div className="evnt-orgn">
                        <img
                          src={require("../../assets/images/resources/evnt-orgn1-5.jpg")}
                          alt="evnt-orgn1-5.jpg"
                          itemprop="image"
                        />
                        <div className="evnt-orgn-inf">
                          <h6 itemprop="headline">Nolim Smith</h6>
                          <span>Organizer</span>
                        </div>
                      </div>
                    </div>
                    <h4 itemprop="headline">
                      <a href="event-detail.html" title="" itemprop="url">
                        Events are a fantastic way to bring in new supporters
                      </a>
                    </h4>
                    <p itemprop="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      uam, odioserunt provident maiores consectetur adipisic
                      Aliquam odio dese runtesseu
                    </p>
                    <div className="evnt-inf-btm">
                      <a
                        className="thm-btn2"
                        href="event-detail.html"
                        title=""
                        itemprop="url"
                      >
                        Join The Movement
                      </a>
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
                    <a
                      className="page-link prev"
                      href="#"
                      title=""
                      itemprop="url"
                    >
                      <i className="fa fa-angle-left"></i>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" title="" itemprop="url">
                      1
                    </a>
                  </li>
                  <li className="page-item active">
                    <span className="page-link">2</span>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" title="" itemprop="url">
                      3
                    </a>
                  </li>
                  <li className="page-item">......</li>
                  <li className="page-item">
                    <a className="page-link" href="#" title="" itemprop="url">
                      12
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link next"
                      href="#"
                      title=""
                      itemprop="url"
                    >
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
export default Events;
