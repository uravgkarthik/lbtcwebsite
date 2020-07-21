import React from "react";
import { Switch, Route, Link } from "react-router-dom";

function AboutUs() {
  return (
    <section>
      <div className="block">
        <div className="container">
          <div className="abt-wrp2">
            <div className="row align-items-center">
              <div className="col-md-7 col-sm-12 col-lg-7">
                <div className="abt-img-wrp">
                  <img
                    src={require("../../assets/images/resources/abt-img2-1.jpg")}
                    alt="abt-img2-1.jpg"
                    itemprop="image"
                  />
                  <div className="abt-inf text-center">
                    <span className="thm-clr">
                      <i className="counter">100</i>+
                    </span>
                    <p className="thm-clr" itemprop="description">
                      Wards Cleaned Till Date
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-sm-12 col-lg-5">
                <div className="abt-desc">
                  <h2 itemprop="headline">About Us</h2>
                  <p itemprop="description">
                    An NGO run by a group of passionate, energetic and like
                    minded people towards achieving a common objective of
                    eradicating garbage dumps and directing the residents
                    towards achieving a cleaner and greener environment.
                    <br /> <br /> LBTC provides it's volunteers a platform
                    filled with zest to contribute more to the society along
                    with a sense of accomplishment and satisfaction.
                  </p>
                  <br />
                  <Link to="/about">
                    <a className="thm-btn" href="" itemprop="url">
                      Learn More<span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
