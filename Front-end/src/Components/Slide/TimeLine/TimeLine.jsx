import React from "react";
import styled from "styled-components";
import {
  MainHeadingWrapper,
  SubHeadingWrapper,
  ParagraphWrapper,
} from "../../Elements/Elements";
import { EducationTimeline, InternshipTimeline } from "./TimelineElements";

const SlideSectionOne = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
  padding-top: 600px;
  padding-bottom: 100px;

  > div {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 30%;
    min-width: 250px;
  }
  > div:nth-child(2) {
    min-width: 300px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    padding-top: 300px;
    > div {
      min-width: 300px;
    }
  }
  @media (max-width: 750px) {
    padding-top: 100px;
  }
  @media (max-width: 1100px) {
    > div:nth-child(2) {
      display: none;
    }
    > div {
      width: 45%;
    }
  }
`;

const BridgeOne = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
  min-height: 400px;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  :after {
    content: "";
    width: 50%;
    border-bottom: 2px solid ${(props) => props.theme.secondary};
    border-radius: 10px;
    margin: 30px auto;

    box-shadow: -8px 8px 22px #b894b9;
  }
  p {
    width: 90%;
    max-width: 1200px;
    margin: 30px auto;
  }
  @media (max-width: 750px) {
    position: relative;
  }
`;

function TimeLine() {
  return (
    <div id="education">
      <BridgeOne>
        <MainHeadingWrapper>
          <h1>Education</h1>
          <div></div>
        </MainHeadingWrapper>
        <ParagraphWrapper>
          <p>
            I have done all of my education right from schooling to college in
            the state of Karnataka,India. Since I had interest in computers,
            after passing 12th grade I chose computer science and engineering as
            my branch for my graduation. During my graduation I studied a lot of
            theory but did not gain much of practical knowledge, in the final
            year of my graduation I decided to explore digital marketing. I
            joined as digital marketing and web development intern in a company
            called cubicode situated in belgaum.During my internship was made to
            build websites using WordPress, that is when I discovered my
            interest in building web applications. I wanted to explore more,
            therefore in the month of october 2020 I joined Masai school to
            learn full stack web development.
          </p>
        </ParagraphWrapper>
      </BridgeOne>
      <SlideSectionOne>
        <div>
          <SubHeadingWrapper fontSize="30px">
            <h4>Time-Line</h4>
          </SubHeadingWrapper>
          <EducationTimeline></EducationTimeline>
        </div>
        <div></div>
        <div>
          <SubHeadingWrapper fontSize="30px">
            <h4>Internships</h4>
          </SubHeadingWrapper>
          <InternshipTimeline></InternshipTimeline>
        </div>
      </SlideSectionOne>
    </div>
  );
}

export default TimeLine;
