import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import Lottie from "react-lottie";
import engineer from "../Animations/working.json";
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

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
`;
const Header = styled.div`
  height: 100vh;
  position: relative;
`;

const HeaderContent = styled.div`
  width: 100%;
  max-width: 1600px;
  display: flex;
  margin: 0px auto;
  justify-content: space-between;
  align-items: center;

  > div {
    max-width: 650px;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    > div {
    }
  }
`;

const Heading = styled.div`
  width: 100%;
`;

const Scroller = styled.div`
  margin: 0px auto;
  width: 100px;
  @media (max-width: 1000px) {
    display: none;
  }
`;

function Head({ currentTheme, themeToggler }) {
  return (
    <Wrapper id="home">
      <Header>
        <Navigation
          currentTheme={currentTheme}
          themeToggler={themeToggler}
        ></Navigation>
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
