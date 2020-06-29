import React from 'react';
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import MenuBar from '../../components/MenuBar/MenuBar';
import Footer from '../../components/Footer/Footer';

function ContactUS(){
    return(
        
        <div classNameName="App">
        <main>
            <HeaderBar></HeaderBar>s
            
            <MenuBar></MenuBar>


           <section>
                <div class="block no-padding">
                    <div class="pg-tp-bg" style={{backgroundImage: 'url(../../assets/images/pg-tp-bg1.jpg)' }}></div>
                </div>
            </section>
            <div class="gray-bg3 brdcrmb-wrp">
                <div class="container">
                    <div class="brdcrmb-inr flex justify-content-between">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html" title="" itemprop="url">Home</a></li>
                            <li class="breadcrumb-item active">Contact Us</li>
                        </ol>
                    </div>
                </div>
            </div>
            
            <section>
                <div class="block">
                    <div class="container">
                        <div class="cnt-wrp">
                            <div class="row">
                                <div class="col-md-8 col-sm-12 col-lg-8">
                                    <div class="cnt-inr" style={{backgroundImage: 'url(../../assets/images/pattern-bg2.png)'}}>
                                        <h2 itemprop="headline">Don't be a stranger <span class="thm-clr">Just Say Hello!</span></h2>
                                        <p itemprop="description">Lorem Ipsum is simply dummy text of the printing and typeseing in Loremy Ipsum has been the industry's standard dummy text ever si 1500s, when a an unknown printer took a galley of type and scrambl make a type specime industry's standard dummy tn book.</p>
                                        <form class="cnt-frm">
                                            <div class="row mrg10">
                                                <div class="col-md-6 col-sm-6 col-lg-6">
                                                    <input type="text" placeholder="First Name" />
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-lg-6">
                                                    <input type="text" placeholder="Last Name" />
                                                </div>
                                                <div class="col-md-12 col-sm-12 col-lg-12">
                                                    <input type="email" placeholder="Email Address" />
                                                </div>
                                                <div class="col-md-12 col-sm-12 col-lg-12">
                                                    <input type="text" placeholder="Subject" />
                                                </div>
                                                <div class="col-md-12 col-sm-12 col-lg-12">
                                                    <textarea placeholder="Message"></textarea>
                                                </div>
                                                <div class="col-md-12 col-sm-12 col-lg-12">
                                                    <button class="thm-btn" type="submit">Send Message<span></span></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-12 col-lg-4">
                                    <div class="cnt-inf thm-layer opc9">
                                        <div class="fixed-bg patern-bg thm-bg back-blend-multiply" style={{backgroundImage: 'url(../../assets/images/pattern-bg1.jpg'}}></div>
                                        <p itemprop="description">Issued In Minnesota (MN) On 12/02/2016, Expires 03/15/2020</p>
                                        <ul class="cnt-inf-lst">
                                            <li><span>E:</span><a href="#" title="" itemprop="url">user@domain.com</a></li>
                                            <li><span>T:</span>(55) 1234-56789</li>
                                            <li><span>F:</span>(55) 1234-56789</li>
                                        </ul>
                                        <div class="cnt-scl">
                                            <a class="facebook" href="#" title="Facebook" itemprop="url" target="_blank"><i class="fa fa-facebook"></i></a>
                                            <a class="pinterest" href="#" title="Pinterest" itemprop="url" target="_blank"><i class="fa fa-pinterest-p"></i></a>
                                            <a class="twitter" href="#" title="Twitter" itemprop="url" target="_blank"><i class="fa fa-twitter"></i></a>
                                            <a class="linkedin" href="#" title="Linkedin" itemprop="url" target="_blank"><i class="fa fa-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div class="cnt-mp" id="cnt-mp"></div>
                                </div>
                            </div>
                        </div>
                        <div class="cnt-fq text-center">
                            <h2 itemprop="headline"><i class="fa fa-cog"></i>Find Your Answer Here<a class="thm-btn" href="#" title="" itemprop="url">Faq's<span></span></a></h2>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </main>
        </div>
 
    );
}
export default ContactUS;