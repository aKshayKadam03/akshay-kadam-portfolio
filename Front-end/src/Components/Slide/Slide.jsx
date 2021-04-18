import React from "react";
import styled from "styled-components";
import Proficiencies from "./Proficiencies";
import axios from "axios";

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
  background-size: cover;
  position: sticky;
  top: 10%;
  height: 70vh;
  width: 100%;
  max-width: 500px;
  z-index: 10;
  border-radius: 5px;
  padding-bottom: 40px;
  margin: 40px auto;
  filter: opacity(95%);

  @media (max-width: 750px) {
    width: 87%;
  }
`;

const Envelope = styled.div`
  background: url(${envelope});
  background-size: cover;
  height: 600px;
  width: 100%;
  max-width: 550px;
  z-index: 10;
  border-radius: 5px;
  display: grid;
  place-content: center;
  position: relative;
  margin-bottom: 40px;
  padding-bottom: 40px;
  @media (max-width: 750px) {
    width: 90%;
    margin: 0 auto;
  }
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
  @media (max-width: 750px) {
    width: 90%;
    margin: 0 auto;
    margin-bottom: -40px;
  }
`;

const ResumeAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ResumeButton = styled.button`
  font-size: 18px;
  padding: 5px 25px;
  border: none;
  border-radius: 5px;
  margin: 10px;

  span {
    font-weight: 600;
    margin: 10px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  a {
    text-decoration: none;
    color: black;
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

const MailModal = styled.div`
  transform: ${(props) => (props.status ? "scaleY(1)" : "scaleY(0)")};
  transition: all 500ms ease;

  input {
    border: none;
    font-size: 19px;
    outline: none;
    border-bottom: 2px solid black;
    transition: all 500ms ease;
  }
  input:focus {
    border-bottom: 2px solid #d61a1a;
  }

  button {
    cursor: pointer;
    color: white;
    background-color: #d61a1a;
  }
`;

function Slide() {
  const [currentImage, setCurrentImage] = React.useState(resumeOne);
  const [email, setEmail] = React.useState("");
  const [mailModal, setMailModal] = React.useState(false);

  let resumeRef = React.useRef();

  const onSubmitHandler = async (e) => {
    console.log(email);
    e.preventDefault();
    await axios.post("http://localhost:8989/mail", {
      mail: email,
    });
  };

  //changing images with scroll height
  // React.useEffect(() => {
  //   document.addEventListener("scroll", () => {
  //     if (window.pageYOffset < 3000) {
  //       setCurrentImage(resumeOne);
  //     } else if (window.pageYOffset < 3700) {
  //       setCurrentImage(resumeTwo);
  //     } else {
  //       setCurrentImage(resumeFinal);
  //     }
  //   });
  // });

  return (
    <SliderWrapper>
      {/* <Proficiencies></Proficiencies> */}
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
                      <i class="devicon-wordpress-plain"></i>
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
                <ResumeButton>
                  <i className="fas fa-download">
                    <a href={envelope} download>
                      <span> Download</span>
                    </a>
                  </i>
                </ResumeButton>
                <ResumeButton
                  onClick={() => setMailModal((prev) => !prev)}
                  color="white"
                  backgroundColor="#25323F"
                >
                  <i className="fas fa-envelope">
                    <span>Mail to yourself</span>
                  </i>
                </ResumeButton>
              </ResumeAction>
              <MailModal status={mailModal}>
                <form onSubmit={onSubmitHandler}>
                  <input
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                  />
                  <ResumeButton>
                    <i class="fas fa-paper-plane"></i>
                  </ResumeButton>
                </form>
              </MailModal>
            </Envelope>
          </div>
        </SlideCanal>
      </SlideMain>
    </SliderWrapper>
  );
}

export default Slide;
