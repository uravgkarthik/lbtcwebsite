import React from "react";
import JotformEmbed from "react-jotform-embed";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import ResponsiveHeader from "../../components/ResponsiveHeader/ResponsiveHeader";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import Footer from "../../components/Footer/Footer";

function EventDetails8() {
  return (
    <div classNameName="App">
      <main>
        <HeaderBar></HeaderBar>

        <MenuBar></MenuBar>

        <JotformEmbed src="https://form.jotform.com/letsbethechange.india/signup" />

        <Footer></Footer>
      </main>
    </div>
  );
}

export default EventDetails8;
