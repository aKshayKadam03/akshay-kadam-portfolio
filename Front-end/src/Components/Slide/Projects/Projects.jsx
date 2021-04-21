import React from "react";
import styled from "styled-components";

import { MainHeadingWrapper } from "../../Elements/Elements";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";

const SlideSectionOne = styled.div`
  min-height: ${(props) => (props.minHeightStatus ? "380vh" : "230vh")};
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};

  flex-wrap: wrap;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    width: 30%;
    flex-wrap: wrap;
  }
  @media (max-width: 1024px) {
    min-height: ${(props) => (props.minHeightStatus ? "230vh" : "80vh")};
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

    @media (max-width: 850px) {
      flex-direction: column;
      flex-wrap: wrap;
    }
  }
  ::after {
    content: "";
    width: 50%;
    border-bottom: 2px solid ${(props) => props.theme.secondary};
    border-radius: 10px;
    margin: 0 auto;
    box-shadow: -8px 8px 22px #b894b9;
  }
`;

let ProjectModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 60%;
  margin: 0 auto;
`;

let projectArray = [
  {
    img:
      "https://user-images.githubusercontent.com/39058941/111019686-ec977e00-83e6-11eb-81e8-84625a9e7576.png",
    title: "Royal Brothers",
    description:
      "A web application to rent two-wheelers on monthly and daily basis.",

    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "MaterialUI",
      "Node",
      "Express",
      "MongoDB",
    ],
    repoLink: "https://github.com/therealdrtroll/royal_brothers",
    demoLink: "#",
    type: "A collaborative project built by a team of 3 executed in 4 days.",
    blogLink:
      "https://ar1pperk.medium.com/building-a-bike-rental-website-from-scratch-28572c5565f7",
    responsibilities: [
      "Built REST API and integrated it with the frontend.",
      "Laid out the database schema and built authentication.",
      "Developed the Home and Tariff page.",
      "Integrated the frontend and backend.",
    ],
  },
  {
    img:
      "https://user-images.githubusercontent.com/39058941/115154017-68e04980-a096-11eb-8c0c-820652ed499e.png",
    title: "Sudoku",
    description:
      "A sudoku challenge for users, where they can solve or submit their own puzzles and get them solved.",
    techStack: ["HTML", "CSS", "JavaScript"],
    repoLink: "https://github.com/therealdrtroll/sudoku",
    demoLink: "https://sudoku-solver-animated.netlify.app/",
    type: "Solo project",
    blogLink: "#",
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
    techStack: ["HTML", "CSS", "JavaScript", "React", "MaterialUI"],
    repoLink: "https://github.com/therealdrtroll/product-hunt",
    type: "A collaborative project built by a team of 4 under 4 days.",
    demoLink: "#",
    blogLink:
      "https://ar1pperk.medium.com/how-can-you-collab-remotely-to-develop-an-effective-product-in-4-days-ff3d2a0168dd",
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
      "A time tracking app which lets users to schedule, track and get insights on tasks",
    techStack: ["HTML", "CSS", "JavaScript"],
    repoLink: "https://github.com/therealdrtroll/clockify-clone",
    demoLink: "#",
    type: "A collaborative project built by a team of 3 under 4 days.",
    blogLink:
      "https://ar1pperk.medium.com/we-were-asked-to-build-a-working-clockify-clone-in-three-days-the-results-may-surprise-you-30eea012e635",
    responsibilities: [
      "Developed the time tracking engine for the application",
      "Built and synchronized time tracker and scheduler",
      "Implemented chart.js to visualize data",
    ],
  },
];

function Projects() {
  let [projects, setProjects] = React.useState(projectArray);
  const [panel, setPanel] = React.useState(false);
  let [currentProject, setCurrentProject] = React.useState({});
  return (
    <div id="projects">
      <BridgeTwo backgroundImg={currentProject.img}>
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
          id="currentProject"
          {...currentProject}
          panel={panel}
          setPanel={setPanel}
        ></ProjectDetail>
      </BridgeTwo>
      <SlideSectionOne minHeightStatus={panel}></SlideSectionOne>
    </div>
  );
}

export default Projects;
