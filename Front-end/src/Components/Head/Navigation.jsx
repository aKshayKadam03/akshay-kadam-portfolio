import React from "react";

import styled, { ThemeProvider } from "styled-components";

const theme = {
  font: "Segoe UI",
  color: "white",
};

const NavBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7vh;
  margin-bottom: 50px;
  z-index: 1000;
  transition: 500ms ease-out;
  color: white;
  font-family: ${(props) => props.theme.font};
`;

const NavItem = styled.div`
  margin: 20px;

  :hover {
    border-bottom: 1px solid white;
  }
  > a {
    text-decoration: none;
    font-size: 17px;
    color: inherit;
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
  @media (max-width: 600px) {
    display: none;
  }
`;

function Navigation() {
  const [activeLink, setActiveLink] = React.useState(3);

  const activeLinkHandler = (linkNo) => {
    setActiveLink(linkNo);
  };

  return (
    <ThemeProvider theme={theme}>
      <NavBar active={activeLink}>
        <Logo>
          <p></p>
        </Logo>
        <Grow></Grow>
        <NavItem onClick={() => activeLinkHandler(4)}>
          <a href="#about">About</a>
        </NavItem>
        <NavItem onClick={() => activeLinkHandler(3)}>
          <a href="#projects">Projects</a>
        </NavItem>
        <NavItem onClick={() => activeLinkHandler(5)}>
          <a href="#contact">Contact</a>
        </NavItem>
        <NavItem></NavItem>
      </NavBar>
    </ThemeProvider>
  );
}

export default Navigation;
