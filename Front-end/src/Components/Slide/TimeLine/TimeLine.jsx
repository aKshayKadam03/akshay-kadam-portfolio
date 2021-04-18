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
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: 100px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    width: 30%;
    min-width: 250px;
  }
  > div:nth-child(2) {
    min-width: 300px;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    padding-top: 100px;
    > div {
      min-width: 300px;
    }
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
    border-bottom: 2px solid #440f52;
    border-radius: 10px;
    margin: 30px auto;
    margin-bottom: -30px;
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
    <>
      <BridgeOne color="white" backgroundColor=" #120218">
        <MainHeadingWrapper>
          <h1>Education</h1>
          <div></div>
        </MainHeadingWrapper>
        <ParagraphWrapper>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            officiis voluptates perferendis incidunt voluptatibus, totam,
            perspiciatis cupiditate et distinctio aliquam excepturi quidem! Vero
            id distinctio, voluptate aperiam dolores quod sequi dicta eos! Iusto
            ut laborum laudantium quod temporibus ducimus sit soluta
            praesentium? Reiciendis odio voluptates cum sequi, minima, alias
            consequuntur fugiat explicabo in temporibus est deserunt velit quasi
            quod quo iure, dolores accusamus. Pariatur dolorem placeat officia
            eum distinctio sit? Velit sit laudantium possimus architecto. Sit
            earum corrupti suscipit inventore voluptas fuga? Tempore alias nam,
            labore temporibus quasi deserunt modi quia veritatis doloremque
            corporis magnam sed iure cumque exercitationem deleniti.
          </p>
        </ParagraphWrapper>
      </BridgeOne>
      <SlideSectionOne paddingTop="500px" backgroundColor=" #120218">
        <div>
          <SubHeadingWrapper fontSize="40px">
            <h4>Time-Line</h4>
          </SubHeadingWrapper>
          <EducationTimeline></EducationTimeline>
        </div>
        <div></div>
        <div>
          <SubHeadingWrapper fontSize="40px">
            <h4>Internships</h4>
          </SubHeadingWrapper>
          <InternshipTimeline></InternshipTimeline>
        </div>
      </SlideSectionOne>
    </>
  );
}

export default TimeLine;
