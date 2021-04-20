import React from "react";
import styled from "styled-components";
import Proficiencies from "./Proficiencies";

import {
  MainHeadingWrapper,
  SubHeadingWrapper,
  ParagraphWrapper,
} from "../Elements/Elements";

import envelope from "../Images/envelope.svg";
import envelopeBottom from "../Images/bottom.svg";
//resume images
import resumeOne from "../Images/resumeOne.png";
import resumeTwo from "../Images/resumeTwo.png";
import resumeFinal from "../Images/resumeFinal.png";

//resume pdf
import resumePdf from "../Images/resume.pdf";

import Projects from "./Projects/Projects";
import TimeLine from "./TimeLine/TimeLine";

const SliderWrapper = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
`;

const SlideMain = styled.div`
  min-height: 100vh;
  position: relative;
  width: 100%;
  margin: 0 auto;
  > div {
    min-width: 300px;
  }
`;

const SlideSectionOne = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;

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
    min-width: 500px;
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

const SlideCanal = styled.div`
  position: absolute;
  display: flex;
  left: 50%;
  top: 0;
  transform: translate(-50%, 0);
  width: 40%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1100px) {
    position: relative;
    width: 100%;
    margin: 0 auto;
  }
`;

const Resume = styled.div`
  background: url(${(props) => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  position: sticky;
  top: 10%;
  width: 85%;
  max-width: 500px;
  z-index: 11;
  border-radius: 5px;
  padding-bottom: 50px;
  margin: 40px auto;
  img {
    width: 100%;
    border-radius: 5px;
    max-height: 650px;
  }
  @media (max-width: 1100px) {
    width: 90%;
    margin: 0 auto;
  }
`;

const Envelope = styled.div`
  width: 90%;
  position: relative;
  max-width: 530px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  > div::nth-child(1) {
    z-index: 10;
  }
  > div:nth-child(2) {
    z-index: 12;
    img {
      margin-top: -8%;
      width: 100%;
      z-index: 20;
    }
  }
  @media (max-width: 1100px) {
    width: 95%;
  }
`;

const ResumeAction = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 20;
  min-width: 200px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
  padding: 25px;
  color: black;
  background-color: #f8f8f8;
  border-radius: 5px;
`;

const ResumeButton = styled.button`
  font-size: 21px;
  padding: 15px 35px;
  border: none;
  border-radius: 5px;
  margin: 10px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};

  span {
    font-weight: 600;
    margin: 10px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.fontColor};
  }

  @media (max-width: 500px) {
    font-size: 16px;
    padding: 5px 25px;
  }
`;

const SectionWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const IconHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

  > div {
    width: 50%;
    min-width: 200px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0px auto;
    padding: 5px 15px;
    color: ${(props) => props.theme.fontColor};
    font-size: 18px;

    > div:nth-child(2) {
      min-width: 200px;
      text-align: left;
      margin: 2px 10px;
    }
  }
`;

const Icons = styled.div`
  width: 10%;
  height: 20px;
  filter: invert(0%);
`;

function Slide() {
  const [currentImage, setCurrentImage] = React.useState(resumeOne);

  let resumeRef = React.useRef();

  //changing images with scroll height
  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.pageYOffset < 3000) {
        setCurrentImage(resumeOne);
      } else if (window.pageYOffset < 4400) {
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
        <SectionWrapper>
          <SlideSectionOne>
            <div>
              <div>
                <MainHeadingWrapper size="31px">
                  <h1>Technical Skills</h1>
                </MainHeadingWrapper>
                <IconHolder>
                  <div>
                    <Icons>
                      <i className="devicon-html5-plain colored"></i>
                    </Icons>
                    <ParagraphWrapper color="white">
                      <p>HTML</p>
                    </ParagraphWrapper>
                  </div>
                  <div>
                    <Icons>
                      <i className="devicon-css3-plain colored"></i>
                    </Icons>
                    <ParagraphWrapper color="white">
                      <p>CSS</p>
                    </ParagraphWrapper>
                  </div>
                  <div>
                    <Icons>
                      <i className="devicon-javascript-plain colored"></i>
                    </Icons>
                    <ParagraphWrapper color="white">
                      <p>Javascript</p>
                    </ParagraphWrapper>
                  </div>
                  <div>
                    <Icons>
                      <i className="devicon-react-original colored"></i>
                    </Icons>
                    <ParagraphWrapper color="white">
                      <p>React</p>
                    </ParagraphWrapper>
                  </div>
                  <div>
                    <Icons>
                      <i className="devicon-redux-original"></i>
                    </Icons>
                    <ParagraphWrapper color="white">
                      <p>Redux</p>
                    </ParagraphWrapper>
                  </div>
                  <div>
                    <Icons>
                      <i className="devicon-nodejs-plain"></i>
                    </Icons>
                    <ParagraphWrapper color="white">
                      <p>Node</p>
                    </ParagraphWrapper>
                  </div>
                  <div>
                    <Icons>
                      <i className="devicon-express-original"></i>
                    </Icons>
                    <ParagraphWrapper color="white">
                      <p>Express</p>
                    </ParagraphWrapper>
                  </div>
                  <div>
                    <Icons>
                      <i className="devicon-mongodb-plain colored"></i>
                    </Icons>
                    <ParagraphWrapper color="white">
                      <p>MongoDB</p>
                    </ParagraphWrapper>
                  </div>
                  <div>
                    <Icons>
                      <i className="devicon-redis-plain colored"></i>
                    </Icons>
                    <ParagraphWrapper color="white">
                      <p>Redis</p>
                    </ParagraphWrapper>
                  </div>
                </IconHolder>
              </div>
            </div>

            <div className="gap div"></div>
            <div>
              <div>
                <MainHeadingWrapper size="31px">
                  <h1>Soft skills</h1>
                </MainHeadingWrapper>
                <IconHolder>
                  <div>
                    <Icons>
                      <i className="fas fa-chevron-circle-right"></i>
                    </Icons>
                    <ParagraphWrapper color="white">
                      <p>Problem Solving</p>
                    </ParagraphWrapper>
                  </div>
                  <div>
                    <Icons>
                      <i className="fas fa-chevron-circle-right"></i>
                    </Icons>
                    <ParagraphWrapper color="white">
                      <p>Teamwork</p>
                    </ParagraphWrapper>
                  </div>
                  <div>
                    <Icons>
                      <i className="fas fa-chevron-circle-right"></i>
                    </Icons>
                    <ParagraphWrapper color="white">
                      <p>Communication</p>
                    </ParagraphWrapper>
                  </div>
                  <div>
                    <Icons>
                      <i className="fas fa-chevron-circle-right"></i>
                    </Icons>
                    <ParagraphWrapper color="white">
                      <p>Empathy</p>
                    </ParagraphWrapper>
                  </div>
                  <div>
                    <Icons>
                      <i className="fas fa-chevron-circle-right"></i>
                    </Icons>
                    <ParagraphWrapper color="white">
                      <p>Creativity</p>
                    </ParagraphWrapper>
                  </div>
                  <div>
                    <Icons>
                      <i className="fas fa-chevron-circle-right"></i>
                    </Icons>
                    <ParagraphWrapper color="white">
                      <p>Time Management</p>
                    </ParagraphWrapper>
                  </div>
                </IconHolder>
              </div>
              <div>
                <MainHeadingWrapper size="31px">
                  <h1>Other Tools</h1>
                </MainHeadingWrapper>
                <IconHolder>
                  <div>
                    <Icons>
                      <i className="devicon-git-plain colored"></i>
                    </Icons>
                    <ParagraphWrapper color="white">
                      <p>Git</p>
                    </ParagraphWrapper>
                  </div>
                  <div>
                    <Icons>
                      <i className="devicon-visualstudio-plain colored"></i>
                    </Icons>
                    <ParagraphWrapper color="white">
                      <p>VS Code</p>
                    </ParagraphWrapper>
                  </div>
                  <div>
                    <Icons>
                      <i className="devicon-heroku-original colored"></i>
                    </Icons>
                    <ParagraphWrapper color="white">
                      <p>Heroku</p>
                    </ParagraphWrapper>
                  </div>
                  <div>
                    <Icons>
                      <i className="devicon-slack-plain"></i>
                    </Icons>
                    <ParagraphWrapper color="white">
                      <p>Slack</p>
                    </ParagraphWrapper>
                  </div>
                  <div>
                    <Icons>
                      <i className="devicon-wordpress-plain"></i>
                    </Icons>
                    <ParagraphWrapper color="white">
                      <p>Wordpress</p>
                    </ParagraphWrapper>
                  </div>
                </IconHolder>
              </div>
            </div>
          </SlideSectionOne>
        </SectionWrapper>
        <SectionWrapper>
          <TimeLine></TimeLine>
        </SectionWrapper>
        <SectionWrapper>
          <Projects></Projects>
        </SectionWrapper>
        <SlideCanal>
          <Resume ref={resumeRef}>
            <img src={currentImage} alt="resume" />
          </Resume>
          <div>
            <Envelope>
              <div>
                <img src={envelopeBottom} alt="envelope" />
              </div>
              <div>
                <img src={envelope} alt="envelope" />
              </div>
              <ResumeAction>
                <ParagraphWrapper>
                  <p>Need a copy?</p>
                </ParagraphWrapper>
                <ResumeButton>
                  <i className="fas fa-download">
                    <a href={resumePdf} download>
                      <span> Download</span>
                    </a>
                  </i>
                </ResumeButton>
              </ResumeAction>
            </Envelope>
          </div>
        </SlideCanal>
      </SlideMain>
    </SliderWrapper>
  );
}

export default Slide;
