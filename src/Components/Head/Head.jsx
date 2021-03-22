import React from "react";
import styled, { keyframes } from "styled-components";
import Navigation from "./Navigation";
import Lottie from "react-lottie";
import engineer from "../Animations/working.json";
import programmer from "../Animations/coder.json";
import confused from "../Animations/confused.json";
import scroll from "../Animations/scrollDown.json";
import { MainHeadingWrapper, SubHeadingWrapper } from "../Elements/Elements";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: engineer,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const scrollOptions = {
  loop: true,
  autoplay: true,
  animationData: scroll,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Header = styled.div`
  height: 100vh;
  background-image: linear-gradient(
    -225deg,
    #174cee 0%,
    #1e7aa5 48%,
    #313979 100%
  );
  position: relative;
`;

const Wrapper = styled.div``;

const HeaderContent = styled.div`
  width: 100%;
  max-width: 1600px;
  display: flex;
  margin: 0px auto;
  justify-content: space-between;
  align-items: center;

  > div {
    max-width: 550px;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Heading = styled.div`
  width: 100%;
`;

const Scroller = styled.div`
  margin: 0px auto;
  width: 100px;
`;

function Head() {
  return (
    <Wrapper id="home">
      <Header>
        <Navigation></Navigation>
        <HeaderContent>
          <Heading>
            <MainHeadingWrapper color="white">
              <h1>Hi , it's nice to meet you</h1>
            </MainHeadingWrapper>
            <SubHeadingWrapper color="white">
              <h4>My name is Akshay, I am an aspiring full stack developer.</h4>
            </SubHeadingWrapper>
          </Heading>
          <Lottie options={defaultOptions}></Lottie>
        </HeaderContent>
        <Scroller>
          <Lottie options={scrollOptions}></Lottie>
        </Scroller>
      </Header>
    </Wrapper>
  );
}

export default Head;
