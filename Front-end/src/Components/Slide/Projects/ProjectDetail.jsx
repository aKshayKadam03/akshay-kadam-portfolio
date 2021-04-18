import React from "react";
import styled, { keyframes } from "styled-components";
import html from "../../Icons/html.svg";
import css from "../../Icons/css.svg";
import javascript from "../../Icons/javascript.svg";
import react from "../../Icons/react.svg";
import mongodb from "../../Icons/mongodb.svg";
import node from "../../Icons/node.svg";
import express from "../../Icons/express.svg";
import material from "../../Icons/material.svg";
import {
  MainHeadingWrapper,
  ParagraphWrapper,
  SubHeadingWrapper,
} from "../../Elements/Elements";

const techStackIcons = {
  html,
  css,
  javascript,
  react,
  mongodb,
  node,
  express,
  material,
};

const entranceAnimation = keyframes`
 0% {
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
`;

const ProjectDetailWrapper = styled.div`
  width: 80%;
  border-radius: 5px;
  margin: 0 auto;
  min-height: 500px;
  border-top: 1px solid #390e47;
  margin-bottom: 10px;
  display: ${(props) => (props.status ? "inline" : "none")};
  animation: ${entranceAnimation} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
  }
`;

const closeStretch = keyframes`{
    0% {
      -webkit-transform: scaleX(0);
              transform: scaleX(0);
      -webkit-transform-origin: 100% 100%;
              transform-origin: 100% 100%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleX(1);
              transform: scaleX(1);
      -webkit-transform-origin: 100% 100%;
              transform-origin: 100% 100%;
      opacity: 1;
    }
  }`;

const CloseButton = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 26px;
  background-color: ${(props) => props.theme.fontColor};
  padding: 0 5px;
  border-radius: 25px;
  color: ${(props) => props.theme.body};
  font-weight: 600;

  > div {
    margin: 5px;
  }
  > div:nth-child(1) {
    animation: ${closeStretch} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    font-size: 22px;
    display: none;
  }
  :hover {
    > div:nth-child(1) {
      display: inline;
    }
  }
`;

const ProjectSection = styled.div`
  display: flex;
  align-items: flex-start;
  > div {
    padding: 0 30px 30px 30px;
    width: 100%;
  }
  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: space-between;
    > div {
      margin-bottom: 30px;
      h4 {
        margin: 15px;
      }
      p {
        margin: 5px;
      }
    }
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  margin: 0 auto;
  align-items: center;
  box-shadow: 2px 2px 60px #4d2d4d;
  border-radius: 5px;
  > img {
    width: 100%;
    border-radius: 5px;
  }
`;

const ProjectIcon = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  padding: 0 5px;
  text-transform: capitalize;
  font-weight: 500;
  > div {
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  > div > img {
    height: 30px;
    margin: 10px;
  }
`;

const Button = styled.button`
  padding: 5px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  font-size: 18px;
  border-radius: 5px;
  border: 2px solid ${(props) => props.backgroundColor};
  margin: 7px;

  :hover {
    background-color: white;
    color: black;
  }
  > i {
    margin: 0 5px;
  }
`;
const ButtonHolders = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function ProjectDetail({
  img,
  title,
  description,
  responsibilities,
  type,
  blog,
  techStack,
  repoLink,
  demoLink,
  setPanel,
  panel,
}) {
  const onCloseHandler = () => {
    setPanel(false);
  };
  console.log(responsibilities, "responsibilities");
  return (
    <ProjectDetailWrapper status={panel}>
      <div>
        <div>
          <MainHeadingWrapper>
            <h1>{title}</h1>
            <hr></hr>
          </MainHeadingWrapper>
        </div>
        <CloseButton onClick={onCloseHandler}>
          <div>
            <p>Close</p>
          </div>
          <div>
            <i className="far fa-times-circle"></i>
          </div>
        </CloseButton>
      </div>
      <ProjectSection>
        <div>
          <ProjectImage>
            <img src={img} alt={title} />
          </ProjectImage>
        </div>
        <div>
          <SubHeadingWrapper>
            <h4>{description}</h4>
          </SubHeadingWrapper>
          <div>
            <ParagraphWrapper color="yellow">
              <p>Type :</p>
            </ParagraphWrapper>
            <ul>
              <ParagraphWrapper color="white">
                <p>{type}</p>
              </ParagraphWrapper>
            </ul>
          </div>

          <div>
            <ParagraphWrapper color="yellow">
              <p>Tech Stack :</p>
            </ParagraphWrapper>
            <ProjectIcon>
              {techStack?.map((item) => (
                <div>
                  <img src={techStackIcons[item]} alt="icon" />
                  <span>{item}</span>
                </div>
              ))}
            </ProjectIcon>
          </div>
          <div>
            <ParagraphWrapper color="yellow">
              <p>Responsibilities :</p>
            </ParagraphWrapper>
            <ul>
              {responsibilities?.map((item) => (
                <ParagraphWrapper color="white">
                  <p>• {item}</p>
                </ParagraphWrapper>
              ))}
            </ul>
          </div>
          <ButtonHolders>
            <Button>
              <i className="devicon-github-original"> Code</i>
            </Button>
            <Button>
              <i className="far fa-eye"> Demo</i>
            </Button>
            <Button>
              <i className="fab fa-medium"> Blog</i>
            </Button>
          </ButtonHolders>
        </div>
      </ProjectSection>
    </ProjectDetailWrapper>
  );
}

export default ProjectDetail;
