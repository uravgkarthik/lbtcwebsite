import React from 'react';
import '../HeaderBar/headerbar.min.scss';

function HeaderBar() {
    return (
      <div
        className="tpbr flex"
        style={{
          margin: "0",
          padding: "0",
          width: "100%",
          backgroundColor: "black",
          textAlign: "center",
        }}
      >
        <div className="container">
          <div className="tpbr-inr">
            <div className="row justify-content-center">
              <div className="col-md-6 col-sm-12 col-lg-6">
                <p itemprop="description">
                  <i className="flaticon-error thm-clr"></i>
                  <strong>Crisis Watch:</strong> Covid-19 In India
                </p>
              </div>
              {/* <div className="col-md-6 col-sm-12 col-lg-6 txtrgtx">
                <ul className="tp-lnks">
                  <li>
                    <a href="http://bengaluruveeraru.org/">
                      <i className="fa fa-gear"></i>
                    </a>

                    <a
                      href="http://bengaluruveeraru.org/"
                      title=""
                      itemprop="url"
                    >
                      BV
                    </a>
                  </li>
                  {/* <li>
                    <i className="fa fa-id-card"></i>
                    <a href="#top" title="" itemprop="url">
                      Careers
                    </a>
                  </li> Add Close
                  <li>
                    <a href="https://cdn.jotfor.ms/letsbethechange.india/bv-volunteers">
                      <i className="fa fa-hand-spock-o"></i>
                    </a>
                    <a
                      href="https://cdn.jotfor.ms/letsbethechange.india/bv-volunteers"
                      title="x"
                      itemprop="url"
                    >
                      Volunteer
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
}

export default HeaderBar;