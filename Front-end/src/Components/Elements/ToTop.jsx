import React from "react";
import styled from "styled-components";

const TopWrapper = styled.a`
  padding: 0;
  background-color: #2373a1;
  font-size: 30px;
  border-radius: 5px;
  padding: 3px 10px;
  position: fixed;
  color: white;
  right: 2%;
  bottom: 2%;
  z-index: 90000000000;
  text-decoration: none;
  transform: scaleX(${(props) => (props.active ? 1 : 0)});
  transition: transform 300ms ease;
`;

function ToTop() {
  const [toTopState, setToTopState] = React.useState(false);

  const handleNavigationPosition = () => {
    if (window.pageYOffset >= 700) {
      setToTopState(true);
    } else {
      setToTopState(false);
    }
  };

  window.addEventListener("scroll", handleNavigationPosition);

  return (
    <TopWrapper active={toTopState} href="#home">
      ^
    </TopWrapper>
  );
}

export default ToTop;
