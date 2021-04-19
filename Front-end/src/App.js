import React from "react";

import "./App.css";
import { ThemeProvider } from "styled-components";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import ToTop from "./Components/Elements/ToTop";
import Footer from "./Components/Footer/Footer";
import Head from "./Components/Head/Head";
import Slide from "./Components/Slide/Slide";

// #03506f

const LightTheme = {
  body: "#0a192f",
  fontColor: "#fff",
  secondary: "#fec107",
};
//#151515
const DarkTheme = {
  body: "#000",
  fontColor: "#fff",
  secondary: "#C50E6A",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

function App() {
  const [currentTheme, setCurrentTheme] = React.useState("light");
  const themeToggler = () => {
    currentTheme === "light"
      ? setCurrentTheme("dark")
      : setCurrentTheme("light");
  };
  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <div className="App">
        <ToTop></ToTop>
        <Head currentTheme={currentTheme} themeToggler={themeToggler}></Head>
        <About></About>
        <Slide></Slide>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
