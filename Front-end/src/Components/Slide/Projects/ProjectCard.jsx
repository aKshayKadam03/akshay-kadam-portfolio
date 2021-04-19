import React from "react";
import styled from "styled-components";
import { SubHeadingWrapper } from "../../Elements/Elements";

const ProjectCardWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  height: 400px;
  border-radius: 5px;
  color: #ffffff;
  margin: 20px;
  border: 1px solid white;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  display: grid;
  place-content: center;
  :hover {
    transition: all 3000ms ease;
    color: #ffffff;
    background: url(${(props) => props.backgroundImg});
  }
  @media (max-width: 750px) {
    height: 50px;
    max-width: 280px;
    :hover {
      transition: all 500ms ease;
      color: #ffffff;
      background: ${(props) => props.theme.secondary};
    }
  }
`;

function ProjectCard({
  img,
  title,
  description,
  responsibilities,
  type,
  blog,
  techStack,
  repoLink,
  demoLink,
  setCurrentProject,
  setPanel,
}) {
  const onClickHandler = () => {
    setPanel(true);
    setCurrentProject({
      img,
      title,
      description,
      techStack,
      repoLink,
      demoLink,
      responsibilities,
      type,
      blog,
    });
  };

  return (
    <ProjectCardWrapper onClick={onClickHandler} backgroundImg={img}>
      <SubHeadingWrapper>
        <h1>{title}</h1>
      </SubHeadingWrapper>
    </ProjectCardWrapper>
  );
}

export default ProjectCard;
