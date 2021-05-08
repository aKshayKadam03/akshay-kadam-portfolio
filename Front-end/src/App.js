import React from "react";

import "./App.css";
import { ThemeProvider } from "styled-components";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import ToTop from "./Components/Elements/ToTop";
import Footer from "./Components/Footer/Footer";
import Head from "./Components/Head/Head";
import Slide from "./Components/Slide/Slide";

// body: "#0a192f",

// #f8f5f1
// #f2edd7
const LightTheme = {
  body: "#f3f4ed",
  fontColor: "#000",
  secondary: "#fec107",
  iconFilter: "saturate(5%)  invert(0%)",
  profileBg: "#f8f5f1",
};
//#151515
const DarkTheme = {
  body: "#000",
  fontColor: "#fff",
  secondary: "#C50E6A",
  iconFilter: "saturate(5%)  invert(100%)",
  profileBg: "#151515",
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
        <Slide currentTheme={currentTheme}></Slide>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
