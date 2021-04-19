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

const SlideCanal = styled.div`
  position: absolute;
  display: flex;
  left: 50%;
  top: 0;
  transform: translate(-50%, 0);
  width: 100%;
  max-width: 550px;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1100px) {
    position: relative;
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

const Resume = styled.div`
  background: url(${(props) => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  position: sticky;
  top: 10%;
  height: 70vh;
  width: 100%;
  max-width: 500px;
  z-index: 10;
  border-radius: 5px;
  padding-bottom: 50px;
  margin: 40px auto;

  @media (max-width: 1000px) {
    width: 85%;
    margin: 0 auto;
    padding-bottom: 100px;
  }
`;

const Envelope = styled.div`
  background: url(${envelope});
  background-size: contain;
  background-repeat: no-repeat;
  height: 70vh;
  width: 100%;
  max-width: 550px;
  z-index: 10;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;
  /* margin-bottom: 40px; */
  /* padding-bottom: 100px; */
  @media (max-width: 1000px) {
    width: 93%;
    margin: 0 auto;
  }
`;

const EnvelopeBottom = styled.div`
  /* background: url(${envelopeBottom}); */
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  height: 100px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0px auto;
  margin-bottom: -30px;
  max-width: 550px;
  @media (max-width: 1000px) {
    width: 93%;
    margin: 0 auto;
    margin-bottom: -35px;
  }
`;

const ResumeAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  margin: 0 auto;
  padding: 25px;
  color: black;
  background-color: #f8f8f8;
  border-radius: 5px;
  @media (max-width: 500px) {
    margin-top: -200px;
  }
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
          <Resume ref={resumeRef} img={currentImage}></Resume>
          <div>
            <EnvelopeBottom></EnvelopeBottom>
            <Envelope>
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
