import React from "react";
import styled from "styled-components";
import ak from "../Images/ak.png";

import {
  MainHeadingWrapper,
  ParagraphWrapper,
  SubHeadingWrapper,
} from "../Elements/Elements";

const Wrapper = styled.div`
  width: 100%;
  margin: 0px auto;
  min-height: 50vh;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0px auto;
  flex-wrap: wrap;

  > div:nth-child(1) {
    max-width: 900px;
    margin: 0px auto;
  }
`;

const Profile = styled.div`
  background: url(${ak});
  width: 350px;
  height: 350px;
  background-size: cover;
  background-color: #ccc9c9;
  margin: 50px auto;
  clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
`;

const Social = styled.div`
  margin-top: 20px;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.fontColor};
    font-size: 40px;
    margin: 30px;
  }
`;

function About() {
  return (
    <Wrapper id="about">
      <MainHeadingWrapper>
        <h1>About Me</h1>
        <div></div>
      </MainHeadingWrapper>
      <SubHeadingWrapper>
        <h4>
          <q>
            Life always begins with one step outside of your comfort zone.
            <br />
            Shannon L. Alder
          </q>
        </h4>
      </SubHeadingWrapper>
      <Content>
        <ParagraphWrapper>
          <p>
            I was introduced to computers from an early age. By the time I grew
            up, they were a major part of my life. In past few months I have
            invested my time learning technical and soft skills. Have built a
            number of web applications and 3 major projects. Have invested a lot
            of time in data structures and algorithm. Learned a great deal about
            teamwork, leadership, and communication. After months of rigorous
            training, here I am looking for an opportunity as a full stack web
            developer.
          </p>
          <Social>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/therealdrtroll"
            >
              <i className="devicon-github-original"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/akshaykadam7991/"
            >
              <i className="devicon-linkedin-plain"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://ar1pperk.medium.com/"
            >
              <i className="fab fa-medium"></i>
            </a>
          </Social>
        </ParagraphWrapper>
      </Content>
    </Wrapper>
  );
}

export default About;
