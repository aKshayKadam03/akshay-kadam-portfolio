import React from "react";
import styled from "styled-components";
import { ParagraphWrapper, SubHeadingWrapper } from "../../Elements/Elements";
import html from "../../Icons/html.svg";
import css from "../../Icons/css.svg";
import javascript from "../../Icons/javascript.svg";
import react from "../../Icons/react.svg";
import mongodb from "../../Icons/mongodb.svg";
import node from "../../Icons/node.svg";
import express from "../../Icons/express.svg";
import material from "../../Icons/material.svg";

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

const ProjectCardWrapper = styled.div`
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  background-color: #e7e9e9;
  border-radius: 5px;
  color: black;
  margin: 10px auto;
  > div:nth-child(2) {
    padding: 10px 30px;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  border-radius: 10px;
  margin: 0 auto;
  > img {
    width: 100%;
    border-radius: 10px;
  }
`;

const ProjectIcon = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  > img {
    height: 35px;
    width: 40px;
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

function ProjectCard({
  img,
  title,
  description,
  techStack,
  repoLink,
  demoLink,
}) {
  React.useEffect(() => {
    console.log("Gg");
  }, []);
  return (
    <ProjectCardWrapper>
      <ProjectImage>
        <img src={img} alt={title}></img>
      </ProjectImage>
      <div>
        <SubHeadingWrapper>
          <h4>{title}</h4>
        </SubHeadingWrapper>
        <ParagraphWrapper>
          <p>{description}</p>
        </ParagraphWrapper>
        <ProjectIcon>
          {techStack?.map((icon) => (
            <img height="50px" src={techStackIcons[icon]} alt="icons"></img>
          ))}
        </ProjectIcon>
        <div>
          <Button color="#fff" backgroundColor="#28527a">
            Github
            <i className="fab fa-github"></i>
          </Button>
          <Button color="#28527a" backgroundColor="#fff">
            Demo
            <i className="fas fa-chevron-right"> </i>
          </Button>
        </div>
      </div>
    </ProjectCardWrapper>
  );
}

export default ProjectCard;
