import React from "react";
import styled from "styled-components";

const NavBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7vh;
  z-index: 1000;
  transition: all 300ms ease-out;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
`;

const NavItem = styled.div`
  margin: 20px;
  > a {
    text-decoration: none;
    font-size: 17px;
    color: inherit;
    text-transform: uppercase;
    font-family: ${(props) => props.theme.font};
    font-weight: 600;
  }
  @media (max-width: 750px) {
    margin: 9px;
  }
`;

const Logo = styled.div`
  font-size: 40px;
  padding-left: 30px;
  @media (max-width: 600px) {
    display: none;
  }
`;

const Grow = styled.div`
  flex-grow: 1;
  @media (max-width: 600px) {
    display: none;
  }
`;
const ThemeToggleButton = styled.button`
  font-size: 20px;
  border-radius: 5px;
  outline: none;
  padding: 5px 10px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
  border: 2px solid ${(props) => props.theme.secondary};
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

function Navigation({ themeToggler, currentTheme }) {
  const [activeLink, setActiveLink] = React.useState(3);

  const activeLinkHandler = (linkNo) => {
    setActiveLink(linkNo);
  };

  return (
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
      <ThemeToggleButton onClick={themeToggler}>
        {currentTheme === "light" ? (
          <i class="fas fa-moon"> </i>
        ) : (
          <i class="fas fa-sun"> </i>
        )}
      </ThemeToggleButton>
      <NavItem></NavItem>
      {/* <ThemeToggleButton onClick={themeToggler}></ThemeToggleButton> */}
    </NavBar>
  );
}

export default Navigation;
