import React from "react";
import styled, { keyframes } from "styled-components";
import Navigation from "../Navigation/Navigation";
import Lottie from "react-lottie";
import engineer from "../Images/engineer.json";
import programmer from "../Images/coder.json";
import confused from "../Images/confused.json";
import scroll from "../Images/scrollDown.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: programmer,
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

const MainHead = styled.h1`
  font-size: 3rem;
  color: #ffffff;
  font-weight: 600;
`;

const SubHead = styled.h3`
  font-size: 2rem;
  color: #ffffff;
`;

const Scroller = styled.div`
  margin: 0px auto;
  width: 100px;
`;

function Home() {
  return (
    <Wrapper id="home">
      <Header>
        <Navigation></Navigation>
        <HeaderContent>
          <Heading>
            <MainHead>Hi , it's nice to meet you</MainHead>
            <SubHead>
              My name is Akshay, I am an aspiring full stack developer.
            </SubHead>
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

export default Home;
