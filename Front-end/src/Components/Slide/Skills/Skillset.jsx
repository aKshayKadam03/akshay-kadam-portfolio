import React from "react";
import styled from "styled-components";

import { MainHeadingWrapper, ParagraphWrapper } from "../../Elements/Elements";

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

function Skillset() {
  return (
    <>
      {" "}
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
    </>
  );
}

export default Skillset;
