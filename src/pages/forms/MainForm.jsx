import React from "react";
import JotformEmbed from "react-jotform-embed";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import ResponsiveHeader from "../../components/ResponsiveHeader/ResponsiveHeader";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import Footer from "../../components/Footer/Footer";
import "../forms/mainform.min.scss";

function EventDetails8() {
  
  return (
    
    <main>
        <HeaderBar></HeaderBar>

        <MenuBar></MenuBar>
      <div className="container">
        <div className="row">

        </div>
      </div>
        {/* <div className="containerx">
            <div className="container">
                <div className="row">
                    
                </div>
            </div>
        </div> */}
        
        <JotformEmbed src="https://form.jotform.com/letsbethechange.india/signup" />

        <Footer></Footer>
      </main>
 
  );
}

export default EventDetails8;
