import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import database from "../Animations/database.json";
import frontEnd from "../Animations/building.json";
import backEnd from "../Animations/backend.json";
import dataStructure from "../Animations/dataStructure.json";
import { SubHeadingWrapper } from "../Elements/Elements";
import resumePicture from "../Images/resume.jpg";

const databaseOptions = {
  loop: false,
  autoplay: false,
  animationData: database,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const frontEndOptions = {
  loop: false,
  autoplay: false,
  animationData: frontEnd,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const backEndOptions = {
  loop: false,
  autoplay: false,
  animationData: backEnd,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const dataStructureOptions = {
  loop: false,
  autoplay: false,
  animationData: dataStructure,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const SliderWrapper = styled.div`
  background-image: linear-gradient(
    -225deg,
    #174cee 0%,
    #1e7aa5 48%,
    #313979 100%
  );
`;

const SlideStack = styled.div`
  min-height: 40vh;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border-bottom: 1px solid #e4dede;
  > div {
    width: 200px;
    height: 180px;
    margin: 50px;
  }
`;

const SlideMain = styled.div`
  min-height: 100vh;
  height: 2000px;
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const SlideSideCard = styled.div`
  min-width: 30%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Resume = styled.div`
  background: url(${resumePicture});
  background-size: cover;
  position: sticky;
  left: 50%;
  top: 10%;
  height: 600px;
  width: 500px;
  z-index: 10;
  border: 1px solid black;
  transform: translate(-50%, 10%);
`;

function Slide() {
  return (
    <SliderWrapper>
      <SlideStack>
        <div>
          <Lottie options={frontEndOptions}></Lottie>
          <SubHeadingWrapper>
            <h4>Front End</h4>
          </SubHeadingWrapper>
        </div>
        <div>
          <Lottie options={backEndOptions}></Lottie>
          <SubHeadingWrapper>
            <h4>Back End</h4>
          </SubHeadingWrapper>
        </div>
        <div>
          <Lottie options={databaseOptions}></Lottie>
          <SubHeadingWrapper>
            <h4>Database</h4>
          </SubHeadingWrapper>
        </div>
        <div>
          <Lottie options={dataStructureOptions}></Lottie>
          <SubHeadingWrapper>
            <h4>Data Structures</h4>
          </SubHeadingWrapper>
        </div>
      </SlideStack>
      <SlideMain>
        <SlideSideCard>
          <h1>Education</h1>
          <ul>
            <li>School</li>
            <li>College</li>
            <li>Graduation</li>
            <li>Masai School</li>
          </ul>
        </SlideSideCard>
        <Resume></Resume>
        <SlideSideCard>
          <h1>Education</h1>
          <ul>
            <li>School</li>
            <li>College</li>
            <li>Graduation</li>
            <li>Masai School</li>
          </ul>
        </SlideSideCard>
      </SlideMain>
    </SliderWrapper>
  );
}

export default Slide;
