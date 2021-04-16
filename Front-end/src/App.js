import React from "react";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import ToTop from "./Components/Elements/ToTop";
import Footer from "./Components/Footer/Footer";
import Head from "./Components/Head/Head";
import Slide from "./Components/Slide/Slide";

function App() {
  return (
    <div className="App">
      <ToTop></ToTop>
      <Head></Head>
      <About></About>
      <Slide></Slide>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
