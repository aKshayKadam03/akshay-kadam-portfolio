import React from "react";
import styled from "styled-components";
import Proficiencies from "./Proficiencies";
import { EducationTimeline, InternshipTimeline } from "./Timeline";
import {
  MainHeadingWrapper,
  SubHeadingWrapper,
  ParagraphWrapper,
} from "../Elements/Elements";

import envelope from "../Images/envelope.svg";
import envelopeBottom from "../Images/bottom.svg";
//resumes
import resumeOne from "../Images/resumeOne.png";
import resumeTwo from "../Images/resumeTwo.png";
import resumeFinal from "../Images/resumeFinal.png";

//icons
import html from "../Icons/html.svg";
import css from "../Icons/css.svg";
import javascript from "../Icons/javascript.svg";
import react from "../Icons/react.svg";
import node from "../Icons/node.svg";
import express from "../Icons/express.svg";
import git from "../Icons/git.svg";
import heroku from "../Icons/heroku.svg";
import mongodb from "../Icons/mongodb.svg";
import redux from "../Icons/redux.svg";
import vscode from "../Icons/vscode.svg";
import redis from "../Icons/redis.svg";
import slack from "../Icons/slack.svg";
import notion from "../Icons/notion.svg";

import Projects from "./Projects/Projects";

const SliderWrapper = styled.div`
  background-image: linear-gradient(
    -225deg,
    #174cee 0%,
    #1e7aa5 48%,
    #313979 100%
  );
  color: #f6eeee;
  padding-bottom: 50px;
`;

const SlideMain = styled.div`
  min-height: 100vh;
  height: 4000px;
  position: relative;
  width: 100%;
  margin: 0 auto;
  > div {
    flex-basis: 30%;
    min-width: 300px;
    padding-top: 100px;
  }
`;

const SlideCanal = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, 0);
  width: 100%;
  max-width: 550px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SlideSectionOne = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.backgroundColor};
  margin-top: ${(props) => props.marginTop};
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0px auto;
    width: 30%;
    min-width: 200px;
  }
`;

const Resume = styled.div`
  background: url(${(props) => props.img});
  background-size: cover;
  position: sticky;
  top: 10%;
  height: 600px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  z-index: 10;
  border-radius: 5px;
`;

const Envelope = styled.div`
  background: url(${envelope});
  background-size: cover;
  height: 600px;
  width: 100%;
  margin: 0px auto;
  max-width: 550px;
  z-index: 10;
  border-radius: 5px;
  display: grid;
  place-content: center;
  position: relative;
`;

const EnvelopeBottom = styled.div`
  background: url(${envelopeBottom});
  width: 100%;
  height: 100px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0px auto;
  margin-bottom: -25px;
  max-width: 550px;
`;

const DownloadButton = styled.button`
  font-size: 30px;
  color: #e6e6e6;
  padding: 5px 25px;
  background-color: #4add10;
  border: 1px solid #83f854;
  border-radius: 5px;
  span {
    font-weight: 600;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;

const SectionWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const BridgeOne = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.backgroundColor};
  min-height: 400px;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    width: 90%;
    max-width: 1200px;
    margin: 30px auto;
  }
`;

const IconHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

  > div {
    width: 50%;
    min-width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2px auto;
    padding: 5px 15px;
    border-radius: 5px;
    color: #f8f8f8;
  }
  > div:hover {
    > img {
      transform: scale(1.4);
      transition: transform 300ms ease;
    }
  }
`;

const Icons = styled.img`
  width: 10%;
  min-width: 60px;
  height: 40px;
  background-color: white;
  padding: 5px;
  border-radius: 5px;
`;

function Slide() {
  const [currentImage, setCurrentImage] = React.useState(resumeOne);
  let resumeRef = React.useRef();

  //changing images with scroll height
  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.pageYOffset < 3000) {
        setCurrentImage(resumeOne);
      } else if (window.pageYOffset < 3700) {
        setCurrentImage(resumeTwo);
      } else {
        setCurrentImage(resumeFinal);
      }
    });
  });

  return (
    <SliderWrapper>
      <Proficiencies></Proficiencies>
      <SlideMain>
        <SlideSectionOne>
          <div>
            <div>
              <MainHeadingWrapper size="31px">
                <h1>Front End</h1>
              </MainHeadingWrapper>
              <IconHolder>
                <div>
                  <Icons alt="icons" src={html}></Icons>
                  <ParagraphWrapper color="white">
                    <p>HTML</p>
                  </ParagraphWrapper>
                </div>
                <div>
                  <Icons alt="icons" src={css}></Icons>
                  <ParagraphWrapper color="white">
                    <p>CSS</p>
                  </ParagraphWrapper>
                </div>
                <div>
                  <Icons alt="icons" src={javascript}></Icons>
                  <ParagraphWrapper color="white">
                    <p>Javascript</p>
                  </ParagraphWrapper>
                </div>
                <div>
                  <Icons alt="icons" src={react}></Icons>
                  <ParagraphWrapper color="white">
                    <p>React</p>
                  </ParagraphWrapper>
                </div>
                <div>
                  <Icons alt="icons" src={redux}></Icons>
                  <ParagraphWrapper color="white">
                    <p>Redux</p>
                  </ParagraphWrapper>
                </div>
              </IconHolder>
            </div>
            <div>
              <div>
                <MainHeadingWrapper size="31px">
                  <h1>Back End</h1>
                </MainHeadingWrapper>
                <IconHolder>
                  <div>
                    <Icons alt="icons" src={node}></Icons>
                    <ParagraphWrapper color="white">
                      <p>Node</p>
                    </ParagraphWrapper>
                  </div>
                  <div>
                    <Icons alt="icons" src={express}></Icons>
                    <ParagraphWrapper color="white">
                      <p>Express</p>
                    </ParagraphWrapper>
                  </div>
                  <div>
                    <Icons alt="icons" src={mongodb}></Icons>
                    <ParagraphWrapper color="white">
                      <p>MongoDB</p>
                    </ParagraphWrapper>
                  </div>
                  <div>
                    <Icons alt="icons" src={redis}></Icons>
                    <ParagraphWrapper color="white">
                      <p>Redis</p>
                    </ParagraphWrapper>
                  </div>
                </IconHolder>
              </div>
            </div>
          </div>

          <div className="gap div"></div>
          <div>
            <div>
              <MainHeadingWrapper size="31px">
                <h1>Other Tools</h1>
              </MainHeadingWrapper>
              <IconHolder>
                <div>
                  <Icons alt="icons" src={git}></Icons>
                  <ParagraphWrapper color="white">
                    <p>Git</p>
                  </ParagraphWrapper>
                </div>
                <div>
                  <Icons alt="icons" src={vscode}></Icons>
                  <ParagraphWrapper color="white">
                    <p>Visual Studio Code</p>
                  </ParagraphWrapper>
                </div>
                <div>
                  <Icons alt="icons" src={heroku}></Icons>
                  <ParagraphWrapper color="white">
                    <p>Heroku</p>
                  </ParagraphWrapper>
                </div>
                <div>
                  <Icons alt="icons" src={slack}></Icons>
                  <ParagraphWrapper color="white">
                    <p>Slack</p>
                  </ParagraphWrapper>
                </div>
                <div>
                  <Icons alt="icons" src={notion}></Icons>
                  <ParagraphWrapper color="white">
                    <p>Notion</p>
                  </ParagraphWrapper>
                </div>
              </IconHolder>
            </div>
          </div>
        </SlideSectionOne>
        <SectionWrapper>
          <BridgeOne backgroundColor="#e9e9e9">
            <MainHeadingWrapper color="black">
              <h1>Education</h1>
              <div></div>
            </MainHeadingWrapper>
            <ParagraphWrapper>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem officiis voluptates perferendis incidunt
                voluptatibus, totam, perspiciatis cupiditate et distinctio
                aliquam excepturi quidem! Vero id distinctio, voluptate aperiam
                dolores quod sequi dicta eos! Iusto ut laborum laudantium quod
                temporibus ducimus sit soluta praesentium? Reiciendis odio
                voluptates cum sequi, minima, alias consequuntur fugiat
                explicabo in temporibus est deserunt velit quasi quod quo iure,
                dolores accusamus. Pariatur dolorem placeat officia eum
                distinctio sit? Velit sit laudantium possimus architecto. Sit
                earum corrupti suscipit inventore voluptas fuga? Tempore alias
                nam, labore temporibus quasi deserunt modi quia veritatis
                doloremque corporis magnam sed iure cumque exercitationem
                deleniti.
              </p>
            </ParagraphWrapper>
          </BridgeOne>
          <SlideSectionOne marginTop="15.3%" backgroundColor="#e9e9e9">
            <div>
              <SubHeadingWrapper color="black">
                <h4>Time-Line</h4>
              </SubHeadingWrapper>
              <EducationTimeline></EducationTimeline>
            </div>
            <div></div>
            <div>
              <SubHeadingWrapper color="black">
                <h4>Internships</h4>
              </SubHeadingWrapper>
              <InternshipTimeline></InternshipTimeline>
            </div>
          </SlideSectionOne>
        </SectionWrapper>
        <SectionWrapper>
          <Projects></Projects>
        </SectionWrapper>
        <SlideCanal>
          <Resume ref={resumeRef} img={currentImage}></Resume>
          <div>
            <EnvelopeBottom></EnvelopeBottom>
            <Envelope>
              <DownloadButton>
                <i className="fas fa-download">
                  <span> Download</span>
                </i>
              </DownloadButton>
            </Envelope>
          </div>
        </SlideCanal>
      </SlideMain>
    </SliderWrapper>
  );
}

export default Slide;
