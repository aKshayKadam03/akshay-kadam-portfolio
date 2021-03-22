import React from "react";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Head from "./Components/Head/Head";
import Slide from "./Components/Slide/Slide";

function App() {
  return (
    <div className="App">
      <Head></Head>
      <About></About>
      <Slide></Slide>
      <Contact></Contact>
    </div>
  );
}

export default App;
