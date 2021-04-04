import React from "react";
import styled from "styled-components";
import {
  MainHeadingWrapper,
  SubHeadingWrapper,
  ParagraphWrapper,
} from "../../Elements/Elements";
import ProjectCard from "./ProjectCard";

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

const BridgeTwo = styled.div`
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

  > div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    > div > div:nth-child(1) {
      border: 7px solid white;
      border-radius: 50%;
      height: 100px;
      padding: 15px;
      width: 100px;
      display: grid;
      place-items: center;
      margin: 10px;
    }
    p {
      font-size: 31px;
    }
  }
`;

let projectArray = [
  {
    img: "",
    title: "Royal Brothers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, a nostrum similique possimus tenetur natus. ",
    techStack: [
      "html",
      "css",
      "javascript",
      "react",
      "material",
      "antd",
      "node",
      "express",
      "mongo",
    ],
    repoLink: "#",
    demoLink: "#",
  },
  {
    img: "",
    title: "SmatBot",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, a nostrum similique possimus tenetur natus. ",
    techStack: [
      "html",
      "css",
      "javascript",
      "react",
      "material",
      "antd",
      "node",
      "express",
      "mongo",
    ],
    repoLink: "#",
    demoLink: "#",
  },
  {
    img: "",
    title: "Product Hunt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, a nostrum similique possimus tenetur natus. ",
    techStack: [
      "html",
      "css",
      "javascript",
      "react",
      "material",
      "antd",
      "node",
      "express",
      "mongo",
    ],
    repoLink: "#",
    demoLink: "#",
  },
  {
    img: "",
    title: "Clockify",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, a nostrum similique possimus tenetur natus. ",
    techStack: [
      "html",
      "css",
      "javascript",
      "react",
      "material",
      "antd",
      "node",
      "express",
      "mongo",
    ],
    repoLink: "#",
    demoLink: "#",
  },
  {
    img: "",
    title: "Creative Systems",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, a nostrum similique possimus tenetur natus. ",
    techStack: [
      "html",
      "css",
      "javascript",
      "react",
      "material",
      "antd",
      "node",
      "express",
      "mongo",
    ],
    repoLink: "#",
    demoLink: "#",
  },
];

function Projects() {
  let [projects, setProjects] = React.useState(projectArray);

  return (
    <>
      <BridgeTwo backgroundColor="#3f4d69">
        <MainHeadingWrapper color="white">
          <h1>Stats so far</h1>
          <div></div>
        </MainHeadingWrapper>
        <div>
          <div>
            <div>
              <p>1200+ hrs</p>
            </div>
            <SubHeadingWrapper>
              <h4>Coding</h4>
            </SubHeadingWrapper>
          </div>
          <div>
            <div>
              <p>150+ hrs</p>
            </div>
            <SubHeadingWrapper>
              <h4>Data Structure</h4>
            </SubHeadingWrapper>
          </div>
          <div>
            <div>
              <p>500+</p>
            </div>
            <SubHeadingWrapper>
              <h4>Git Commits</h4>
            </SubHeadingWrapper>
          </div>

          <div>
            <div>
              <p>12+</p>
            </div>
            <SubHeadingWrapper>
              <h4>Projects</h4>
            </SubHeadingWrapper>
          </div>
        </div>
      </BridgeTwo>
      <SlideSectionOne backgroundColor="#3f4d69">
        <div>
          {projects
            ?.filter((_, index) => index <= 5)
            .map((project) => (
              <ProjectCard key={project.title} {...project}></ProjectCard>
            ))}
        </div>
        <div></div>
        <div>
          {projects
            ?.filter((_, index) => index >= 2)
            .map((project) => (
              <ProjectCard key={project.title} {...project}></ProjectCard>
            ))}
        </div>
      </SlideSectionOne>
    </>
  );
}

export default Projects;
