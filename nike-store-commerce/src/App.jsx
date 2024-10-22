import React from "react";
import Hero from "./components/Hero";
import { heroapi,popularsales,toprateslaes,highlight,sneaker, story, footerAPI } from "./data/data.js";
import Sales from "./components/Sales.jsx";
import FlexContent from "./components/FlexContent.jsx";
import Stories from "./components/Stories.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Cart from "./components/Cart.jsx";

const App = () => {
 
  return (
    <div className="flex flex-col gap-16 relative">
      <Navbar/>
      <Cart/>
      <Hero heroapi={heroapi}/>
      <Sales endpoint={popularsales} ifExists />
      <FlexContent endpoint={highlight} ifExists/>
      <Sales endpoint={toprateslaes} ifExists />
      <FlexContent endpoint={sneaker} />
      <Stories story={story}/>
      <Footer footerAPI={footerAPI}/>
    </div>
  );
};

export default App;
