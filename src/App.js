import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Home></Home>
    </div>
  );
}

export default App;
