import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import ResponsiveHeader from "../../components/ResponsiveHeader/ResponsiveHeader";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import Footer from "../../components/Footer/Footer";
import "../gallery/gallery.min.scss";
import "../blog/blog.min.scss";
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <div className="App">
      <main>
        <HeaderBar></HeaderBar>

        <MenuBar></MenuBar>

        <StickyHeader></StickyHeader>

        <ResponsiveHeader></ResponsiveHeader>
        <section>
          <div class="block">
            <div class="container">
              <div class="gal-wrp text-center remove-ext1">
                <div class="row mrg20">
                  <div class="col-md-6 col-sm-12 col-lg-6">
                    <div class="row mrg20">
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="gal-itm">
                          <img
                            src={require("../gallery/1.jpg")}
                            alt="gal-img2-1.jpg"
                            itemprop="image"
                          />
                          <h4 itemprop="headline">Cleanathon</h4>
                          <a
                            href="../gallery/1.jpg"
                            data-fancybox="gallery"
                            title=""
                            itemprop="url"
                          >
                            +
                          </a>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="gal-itm mini-gal">
                          <img
                            src={require("../gallery/8.jpg")}
                            alt="gal-img2-2.jpg"
                            itemprop="image"
                          />
                          <h4 itemprop="headline">Plog Run</h4>
                          <a
                            href="../gallery/8.jpg"
                            data-fancybox="gallery"
                            title=""
                            itemprop="url"
                          >
                            +
                          </a>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="gal-itm mini-gal">
                          <img
                            src={require("../gallery/7.jpg")}
                            alt="gal-img2-3.jpg"
                            itemprop="image"
                          />
                          <h4 itemprop="headline">Our Board</h4>
                          <a
                            href="../gallery/7.jpg"
                            data-fancybox="gallery"
                            title=""
                            itemprop="url"
                          >
                            +
                          </a>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="gal-itm">
                          <img
                            src={require("../gallery/4.jpg")}
                            alt="gal-img2-4.jpg"
                            itemprop="image"
                          />
                          <h4 itemprop="headline">Team LBTC</h4>
                          <a
                            href="../gallery/4.jpg"
                            data-fancybox="gallery"
                            title=""
                            itemprop="url"
                          >
                            +
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12 col-lg-6">
                    <div class="gal-itm">
                      <img
                        src={require("../gallery/1L.jpg")}
                        alt="gal-img2-5.jpg"
                        itemprop="image"
                      />
                      <h4 itemprop="headline">Clay Ganesha Workshop</h4>
                      <a
                        href="../gallery/1L.jpg"
                        data-fancybox="gallery"
                        title=""
                        itemprop="url"
                      >
                        +
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12 col-lg-6">
                    <div class="row mrg20">
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="gal-itm">
                          <img
                            src={require("../gallery/3.jpg")}
                            alt="gal-img2-6.jpg"
                            itemprop="image"
                          />
                          <h4 itemprop="headline">Clay Ganesha Workshop</h4>
                          <a
                            href="../gallery/3.jpg"
                            data-fancybox="gallery"
                            title=""
                            itemprop="url"
                          >
                            +
                          </a>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="gal-itm mini-gal">
                          <img
                            src={require("../gallery/9.jpg")}
                            alt="gal-img2-7.jpg"
                            itemprop="image"
                          />
                          <h4 itemprop="headline">
                            Plog Run With West Block Blues
                          </h4>
                          <a
                            href="../gallery/9.jpg"
                            data-fancybox="gallery"
                            title=""
                            itemprop="url"
                          >
                            +
                          </a>
                        </div>
                      </div>
                      <div class="col-md-12 col-sm-12 col-lg-12">
                        <div class="gal-itm">
                          <img
                            src={require("../gallery/2L.jpg")}
                            alt="gal-img2-8.jpg"
                            itemprop="image"
                          />
                          <h4 itemprop="headline">5 Ways To Fight Poverty</h4>
                          <a
                            href="../gallery/2L.jpg"
                            data-fancybox="gallery"
                            title=""
                            itemprop="url"
                          >
                            +
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12 col-lg-6">
                    <div class="row mrg20">
                      <div class="col-md-12 col-sm-12 col-lg-12">
                        <div class="gal-itm">
                          <img
                            src={require("../gallery/4L.jpg")}
                            alt="gal-img2-9.jpg"
                            itemprop="image"
                          />
                          <h4 itemprop="headline">Plantathon</h4>
                          <a
                            href="../gallery/4L.jpg"
                            data-fancybox="gallery"
                            title=""
                            itemprop="url"
                          >
                            +
                          </a>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="gal-itm">
                          <img
                            src={require("../gallery/10.jpg")}
                            alt="gal-img2-10.jpg"
                            itemprop="image"
                          />
                          <h4 itemprop="headline">
                            Development of Local Schools
                          </h4>
                          <a
                            href="../gallery/10.jpg"
                            data-fancybox="gallery"
                            title=""
                            itemprop="url"
                          >
                            +
                          </a>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="gal-itm mini-gal">
                          <img
                            src={require("../gallery/11.jpg")}
                            alt="gal-img2-11.jpg"
                            itemprop="image"
                          />
                          <h4 itemprop="headline">Muscial Cleanathon</h4>
                          <a
                            href="../gallery/11.jpg"
                            data-fancybox="gallery"
                            title=""
                            itemprop="url"
                          >
                            +
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pgntin-wrp">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link prev" href="#" title="" itemprop="url">
                      <i class="fa fa-angle-left"></i>
                    </a>
                  </li>
                  <li class="page-item">
                    <Link
                      to="/gallery"
                      class="page-link"
                      style={{ color: "#00c674" }}
                    >1</Link>
                  </li>
                  <li class="page-item active">
                    
                    
                    <span class="page-link">2</span>
                  </li>
                  <li class="page-item">
                    <Link
                      to="/gallery-3"
                      class="page-link"
                      style={{ color: "#00c674" }}
                    >
                      3
                    </Link>
                  </li>
                  <li class="page-item">
                    <a class="page-link next" href="#top" title="" itemprop="url">
                      <i class="fa fa-angle-right"></i>
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

export default Gallery;
