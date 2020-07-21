import React from "react";

function BlogArticles() {
  return (
    <section>
      <div className="block gray-grdnt-bg">
        <div className="container">
          <div className="sec-ttl text-center">
            <div className="sec-ttl-inr">
              <h2 itemprop="headline">Our Blog</h2>
              <span>
                Here we share our stories, event summaries and thoughts.
              </span>
              <i className="flaticon-sweat thm-clr"></i>
            </div>
          </div>
          <div className="blg-wrp style3 remove-ext3">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-lg-4">
                <div className="blg-bx3">
                  <span className="thm-clr">News</span>
                  <h4 itemprop="headline">
                    <a href="blog-detail.html" title="" itemprop="url">
                      Number of People for Trapped in B&B's
                    </a>
                  </h4>
                  <p itemprop="description">
                    Lorem ipsum dolor sit amet, ilmes loribus officia aspernatur
                    quomum error incidunt exceptur.
                  </p>
                  <ul className="pst-mta">
                    <li>
                      <a href="#top" title="" itemprop="url">
                        February 15, 2018
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-comments thm-clr"></i>20
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-lg-4">
                <div className="blg-bx3">
                  <span className="thm-clr">News</span>
                  <h4 itemprop="headline">
                    <a href="blog-detail.html" title="" itemprop="url">
                      32000 Senior Charity Digital Professionals
                    </a>
                  </h4>
                  <p itemprop="description">
                    Lorem ipsum dolor sit amet, ilmes loribus officia aspernatur
                    quomum error incidunt exceptur.
                  </p>
                  <ul className="pst-mta">
                    <li>
                      <a href="#top" title="" itemprop="url">
                        August 18, 2019
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-comments thm-clr"></i>25
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-lg-4">
                <div className="blg-bx3">
                  <span className="thm-clr">News</span>
                  <h4 itemprop="headline">
                    <a href="blog-detail.html" title="" itemprop="url">
                      Membership options and Prices.
                    </a>
                  </h4>
                  <p itemprop="description">
                    Lorem ipsum dolor sit amet, ilmes loribus officia aspernatur
                    quomum error incidunt exceptur.
                  </p>
                  <ul className="pst-mta">
                    <li>
                      <a href="#top" title="" itemprop="url">
                        July 25, 2018
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-comments thm-clr"></i>65
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="vw-mr text-center">
            <a
              className="thm-btn"
              href="blog-style3.html"
              title=""
              itemprop="url"
            >
              View All Posts<span></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogArticles;
