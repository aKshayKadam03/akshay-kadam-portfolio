import React from "react";
import styled from "styled-components";

const NavBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7vh;
  z-index: 1000;
  transition: all 300ms ease-out;
  color: black;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
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
const ThemeToggleButton = styled.button`
  min-width: 100px;
  font-size: 18px;
  padding: 8px 15px;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.fontColor};
  color: ${(props) => props.theme.body};
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
          <i class="fas fa-moon"> Dark</i>
        ) : (
          <i class="fas fa-sun"> Light</i>
        )}
      </ThemeToggleButton>
      <NavItem></NavItem>
    </NavBar>
  );
}

export default Navigation;
