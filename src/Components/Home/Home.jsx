import React from "react";
import styled, { keyframes } from "styled-components";
import Navigation from "../Navigation/Navigation";

const Header = styled.div`
  height: 100vh;
  background-color: #d8d8ca;
  background: linear-gradient(to right, #5e7feb, #2289f1);
  background-image: url("https://wallpaperaccess.com/full/314799.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const entrance = keyframes`
  0% {
    letter-spacing: 1em;
    -webkit-transform: translateZ(400px);
            transform: translateZ(400px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
`;

const HeaderContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid white;
  background-color: #0e0d0d;
  opacity: 0.8;
`;

const Heading = styled.div`
  font-size: 80px;
  animation: ${entrance} 2s linear;
  color: white;
  letter-spacing: 1ch;
  font-weight: 600;
  text-transform: uppercase;
`;

function Home() {
  return (
    <Header>
      <Navigation></Navigation>
      <HeaderContent>
        <Heading>Welcome</Heading>
      </HeaderContent>
    </Header>
  );
}

export default Home;
