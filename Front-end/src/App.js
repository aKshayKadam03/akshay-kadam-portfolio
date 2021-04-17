import React from "react";

import "./App.css";
import { ThemeProvider } from "styled-components";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import ToTop from "./Components/Elements/ToTop";
import Footer from "./Components/Footer/Footer";
import Head from "./Components/Head/Head";
import Slide from "./Components/Slide/Slide";

// #d8e3e7

const LightTheme = {
  body: "#f4f6ff",
  fontColor: "#000",
  secondary: "#e1f4f3",
};

const DarkTheme = {
  body: "#151515",
  fontColor: "#fff",
  secondary: "#0c0b0b",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

function App() {
  const [currentTheme, setCurrentTheme] = React.useState("dark");
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

{
  /* <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
<GlobalStyles>
  <div className="App">
    <ToTop></ToTop>
    <Navigation themeToggler={themeToggler}></Navigation>
    <Head></Head>
    <About></About>
    <Slide></Slide>
    <Contact></Contact>
    <Footer></Footer>
  </div>
</GlobalStyles>
</ThemeProvider> */
}
