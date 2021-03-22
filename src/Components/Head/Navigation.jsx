import React from "react";

import styled, { ThemeProvider } from "styled-components";

const theme = {
  font: "Segoe UI",
  color: "white",
};

const NavBar = styled.div`
  position: ${(props) => props.position};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8vh;
  margin-bottom: 50px;
  z-index: 1000;
  transition: 500ms ease-out;
  background-color: ${(props) =>
    props.position === "fixed" ? "#1e7aa5" : "none"};
  font-family: ${(props) => props.theme.font};
  color: ${(props) => props.theme.color};
  & :nth-child(${(props) => props.active}) {
    border-bottom: 1px solid white;
  }
`;

const NavItem = styled.div`
  margin: 20px;
  > a {
    text-decoration: none;
    font-size: 17px;
    color: #fffbfb;
    text-transform: uppercase;
    font-family: ${(props) => props.theme.font};
    font-weight: 600;
  }
`;

const Logo = styled.div`
  font-size: 40px;
  padding-left: 30px;
`;

const Grow = styled.div`
  flex-grow: 1;
`;

function Navigation() {
  const [activeLink, setActiveLink] = React.useState(3);
  const [navPosition, setNavPosition] = React.useState("static");

  const handleNavigationPosition = () => {
    if (window.pageYOffset >= 900) {
      setNavPosition("fixed");
    } else {
      setNavPosition("static");
    }
  };

  window.addEventListener("scroll", handleNavigationPosition);

  const activeLinkHandler = (linkNo) => {
    setActiveLink(linkNo);
  };

  return (
    <ThemeProvider theme={theme}>
      <NavBar position={navPosition} active={activeLink}>
        <Logo>{/* <i className="fas fa-code"></i> */}</Logo>
        <Grow></Grow>
        <NavItem onClick={() => activeLinkHandler(3)}>
          <a href="#home">Home</a>
        </NavItem>
        <NavItem onClick={() => activeLinkHandler(4)}>
          <a href="#about">About</a>
        </NavItem>
        <NavItem onClick={() => activeLinkHandler(5)}>
          <a href="#contact">Contact</a>
        </NavItem>
      </NavBar>
    </ThemeProvider>
  );
}

export default Navigation;
