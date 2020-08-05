import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import ResponsiveHeader from "../../components/ResponsiveHeader/ResponsiveHeader";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import Footer from "../../components/Footer/Footer";

function EventDetails14() {
  return (
    <div classNameName="App">
      <main>
        <HeaderBar></HeaderBar>

        <MenuBar></MenuBar>

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
                <li class="breadcrumb-item">
                  <a href="event-style1.html" title="" itemprop="url">
                    Event
                  </a>
                </li>
                <li class="breadcrumb-item active">Event Details</li>
              </ol>
            </div>
          </div>
        </div>
        <section>
          <div class="block">
            <div class="container">
              <div class="evnt-dtl-thmb">
                <img
                  src={require("../../assets/images/resources/evnt-dtl-img1-1.jpg")}
                  alt="evnt-dtl-img1-1.jpg"
                  itemprop="image"
                />
              </div>
              <div class="evnt-dtl-wrp">
                <div class="evnt-dtl-inf">
                  <h1 itemprop="headline">
                    Musical Cleanathon in association with Radio City
                  </h1>
                  <div class="evnt-orgn">
                    <img
                      src={require("../../assets/images/resources/evnt-orgn1-1.jpg")}
                      alt="evnt-orgn1-1.jpg"
                      itemprop="image"
                    />
                    <div class="evnt-orgn-inf">
                      <h6 itemprop="headline">LBTC</h6>
                      <span>Organizer</span>
                    </div>
                  </div>

                  <div class="evnt-dtl-inf-inr">
                    <div class="evnt-dtl-dt">
                      <i class="fa fa-calendar"></i>

                      <span>
                        Event Date<i class="thm-clr">16.08.2018</i>
                      </span>
                      <span>
                        Event Time<i class="thm-clr">08:30-11:30</i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="evnt-dtl-desc">
                  <p itemprop="description">
                    Musical Cleanathon! TeamLBTC in association with Radio City
                    and Onthara Bannagalu movie team are beautifying a 50 meters
                    garbage dump near Banashankari Sub Register Office. Join us
                    and experience the joy of Music + Cleaning!
                  </p>
                  <p itemprop="description">#Warriors Assemble</p>
                  <p itemprop="description">
                    {" "}
                    Date : 8/3/2020 Time : 9:00 A.M – 1:30 A.M
                  </p>
                  <p itemprop="description">
                    Location: 1st Cross, Umarbagh Layout, Banashankari Temple
                    Ward, Bengaluru, Karnataka 560078
                  </p>
                  <p itemprop="description">
                    Location Link :{" "}
                    <a href="https://goo.gl/maps/HwaHN4AQ4mG2">
                      https://goo.gl/maps/HwaHN4AQ4mG2
                    </a>
                  </p>
                  <p itemprop="description">#TeamLBTC</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default EventDetails14;
