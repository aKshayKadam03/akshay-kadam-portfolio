import React from "react";
import styled from "styled-components";
import Switch from "react-switch";

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
    a {
      font-size: 14px;
    }
  }
`;

const Grow = styled.div`
  flex-grow: 1;
  @media (max-width: 600px) {
    display: none;
  }
`;

function Navigation({ themeToggler, currentTheme }) {
  const [activeLink, setActiveLink] = React.useState(3);
  const [toggle, setToggle] = React.useState(false);
  const activeLinkHandler = (linkNo) => {
    setActiveLink(linkNo);
  };

  const switchHandler = () => {
    setToggle((prev) => !prev);
    themeToggler();
  };

  return (
    <NavBar active={activeLink}>
      <NavItem></NavItem>
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

      <Switch
        onChange={switchHandler}
        checkedIcon={false}
        uncheckedIcon={false}
        handleDiameter={20}
        checked={toggle}
        onColor="#fff"
        offColor="#fff"
        offHandleColor="#0A192F"
        onHandleColor="#000000"
      />
      <NavItem></NavItem>
    </NavBar>
  );
}

export default Navigation;
