import React from "react";
import styled from "styled-components";

import {
  MainHeadingWrapper,
  SubHeadingWrapper,
  ParagraphWrapper,
} from "../../Elements/Elements";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";

const SlideSectionOne = styled.div`
  min-height: 200vh;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
  padding-top: ${(props) => props.paddingTop};

  flex-wrap: wrap;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    width: 30%;
    flex-wrap: wrap;
  }
`;

const BridgeTwo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};

  /* min-height: 400px; */
  z-index: 99;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  > div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 750px) {
      flex-direction: column;
      flex-wrap: wrap;
    }
  }
  ::after {
    content: "";
    width: 50%;
    border-bottom: 2px solid #440f52;
    border-radius: 10px;
    margin: 0 auto;
    box-shadow: -8px 8px 22px #1b0e1b;
  }
`;

let projectArray = [
  {
    img:
      "https://user-images.githubusercontent.com/39058941/111019686-ec977e00-83e6-11eb-81e8-84625a9e7576.png",
    title: "Royal Brothers",
    description:
      "A web application to rent two-wheelers on monthly and daily basis.",

    techStack: [
      "html",
      "css",
      "javascript",
      "react",
      "material",
      "node",
      "express",
      "mongodb",
    ],
    repoLink: "#",
    demoLink: "#",
    type: "A collaborative project built by a team of 3 executed in 4 days.",
    blog: "#",
    responsibilities: [
      "Built REST API and integrated it with the frontend.",
      "Laid out the database schema and built authentication.",
      "Developed the Home and Tariff page.",
      "Integrated the frontend and backend.",
    ],
  },
  {
    img:
      "https://user-images.githubusercontent.com/39058941/100349610-ba683900-300e-11eb-8834-ed549d3ccb56.png",
    title: "SmatBot",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, a nostrum similique possimus tenetur natus. ",
    techStack: ["html", "css", "javascript"],
    repoLink: "#",
    demoLink: "#",
    type: "A collaborative project built by a team of 3 executed in 4 days.",
    blog: "#",
    responsibilities: [
      "Built REST API and integrated it with the frontend.",
      "Laid out the database schema and built authentication.",
      "Developed the Home and Tariff page.",
      "Integrated the frontend and backend.",
    ],
  },
  {
    img: "https://i.ibb.co/dQsgGv8/product-hunt.png",
    title: "Product Hunt",
    description:
      "An online product portal where users can browse, research, and post products. ",
    techStack: ["html", "css", "javascript", "react", "material"],
    repoLink: "#",
    demoLink: "#",
    type: "A collaborative project built by a team of 4 under 4 days.",
    blog: "#",
    responsibilities: [
      "Scraped data from the original product hunt.",
      "Developed pixel-perfect UI of the product page.",
      "Implemented features like up-vote, share, and single product modal.",
    ],
  },
  {
    img:
      "https://user-images.githubusercontent.com/39058941/103478684-652dfd00-4dee-11eb-8fa2-a022a00bdeea.png",
    title: "Clockify",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, a nostrum similique possimus tenetur natus. ",
    techStack: ["html", "css", "javascript"],
    repoLink: "#",
    demoLink: "#",
    type: "A collaborative project built by a team of 4 under 4 days.",
    blog: "#",
    responsibilities: [
      "Scraped data from the original product hunt.",
      "Developed pixel-perfect UI of the product page.",
      "Implemented features like up-vote, share, and single product modal.",
    ],
  },
];

function Projects() {
  let [projects, setProjects] = React.useState(projectArray);
  const [panel, setPanel] = React.useState(false);
  let [currentProject, setCurrentProject] = React.useState({});
  return (
    <>
      <BridgeTwo>
        <MainHeadingWrapper>
          <h1>Projects</h1>
          <div></div>
        </MainHeadingWrapper>
        <div>
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              setCurrentProject={setCurrentProject}
              setPanel={setPanel}
              {...project}
            ></ProjectCard>
          ))}
        </div>
        <ProjectDetail
          {...currentProject}
          panel={panel}
          setPanel={setPanel}
        ></ProjectDetail>
      </BridgeTwo>
      <SlideSectionOne paddingTop="20.3%"></SlideSectionOne>
    </>
  );
}

export default Projects;
