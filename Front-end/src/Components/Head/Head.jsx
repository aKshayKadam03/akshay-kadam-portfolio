import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import Lottie from "react-lottie";
import scroll from "../Animations/scrollDown.json";
import ak from "../Images/ak.png";
import github from "../Icons/github.svg";
import linkedin from "../Icons/linkedin.svg";
import medium from "../Icons/medium.svg";

import { MainHeadingWrapper, ParagraphWrapper } from "../Elements/Elements";

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
  padding: 10px;
`;

const Header = styled.div`
  min-height: 100vh;
  position: relative;
`;

const HeaderContent = styled.div`
  width: 100%;
  max-width: 1600px;
  display: flex;
  margin: 0px auto;
  min-height: 80vh;
  justify-content: space-between;
  align-items: center;

  > div {
    max-width: 650px;
  }
  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;

const Heading = styled.div`
  width: 100%;
`;
// #d7d8b6
const Profile = styled.div`
  background: url(${ak});
  width: 320px;
  height: 350px;
  background-size: cover;
  background-color: ${(props) => props.theme.profileBg};
  margin: 50px auto;
  background-repeat: no-repeat;
  background-position: top;
  border-radius: 50%;
  @media (max-width: 770px) {
    width: 250px;
    height: 250px;
  }
`;

const Social = styled.div`
  margin-top: 20px;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.fontColor};
    font-size: 40px;
    margin: 30px;
  }
  img {
    width: 40px;
    filter: ${(props) => props.theme.iconFilter};
    @media (max-width: 770px) {
      width: 30px;
    }
  }
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
            <MainHeadingWrapper>
              <h1>Hi, it's nice to meet you</h1>
            </MainHeadingWrapper>
            <ParagraphWrapper justified={true}>
              <p>
                My name is Akshay Kadam, I am a full stack developer residing in
                Karnataka, India. I am currently learning full stack web
                development at Masai School.
              </p>
              <br />
              <p justified={true}>
                I am passionate about solving real world problems and actively
                looking for opportunities in the field of web development and
                software engineering.
              </p>
            </ParagraphWrapper>
            <Social>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/therealdrtroll"
              >
                <img src={github} alt="github"></img>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/akshaykadam7991/"
              >
                <img src={linkedin} alt="github"></img>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://ar1pperk.medium.com/"
              >
                <img src={medium} alt="github"></img>
              </a>
            </Social>
          </Heading>
          <Profile />
        </HeaderContent>
        <Scroller>
          <Lottie options={scrollOptions}></Lottie>
        </Scroller>
      </Header>
    </Wrapper>
  );
}

export default Head;
