import React from "react";
import styled from "styled-components";
import Proficiencies from "./Proficiencies";
import axios from "axios";
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

import Projects from "./Projects/Projects";

const SliderWrapper = styled.div`
  background-image: linear-gradient(
    to left bottom,
    #250730,
    #1e0828,
    #18081f,
    #110716,
    #070509
  );

  color: #f6eeee;
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
  background-color: ${(props) => props.backgroundColor};
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
      min-width: 410px;
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
  @media (max-width: 750px) {
    max-width: 420px;
  }
`;

const Envelope = styled.div`
  background: url(${envelope});
  background-size: cover;
  height: 600px;
  width: 100%;
  //margin: 0px auto;
  max-width: 550px;
  z-index: 10;
  border-radius: 5px;
  display: grid;
  place-content: center;
  position: relative;
  margin-bottom: 40px;
  padding-bottom: 40px;
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

const ResumeAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

const ResumeButton = styled.button`
  font-size: 18px;
  color: #e6e6e6;
  padding: 5px 25px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
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
  min-width: 400px;

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
    color: #f8f8f8;
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
      <Proficiencies></Proficiencies>
      <SlideMain>
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
        <SectionWrapper>
          <BridgeOne color="white" backgroundColor=" #120218">
            <MainHeadingWrapper color="white">
              <h1>Education</h1>
              <div></div>
            </MainHeadingWrapper>
            <ParagraphWrapper color="white">
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
          <SlideSectionOne paddingTop="500px" backgroundColor=" #120218">
            <div>
              <SubHeadingWrapper color="white">
                <h4>Time-Line</h4>
              </SubHeadingWrapper>
              <EducationTimeline></EducationTimeline>
            </div>
            <div></div>
            <div>
              <SubHeadingWrapper color="white">
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
              <ResumeAction>
                <ResumeButton color="#25323F" backgroundColor="white">
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
              {mailModal && (
                <form onSubmit={onSubmitHandler}>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                  />
                  <button>Send</button>
                </form>
              )}
            </Envelope>
          </div>
        </SlideCanal>
      </SlideMain>
    </SliderWrapper>
  );
}

export default Slide;
