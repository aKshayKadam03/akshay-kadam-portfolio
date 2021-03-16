import React from "react";
import "./App.css";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Slide from "./Components/Slide/Slide";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Slide></Slide>
      <Contact></Contact>
    </div>
  );
}

export default App;
