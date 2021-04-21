import React from "react";
import styled from "styled-components";
import { SubHeadingWrapper } from "../../Elements/Elements";

const ProjectCardWrapper = styled.div`
  width: 22%;
  min-width: 300px;
  height: 250px;
  border-radius: 5px;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border: 1px solid white;
  :hover {
    opacity: 0.8;
    background: black;
  }
  /* 
  :hover {
    transition: all 3000ms ease;
    color: #ffffff;
    background: url(${(props) => props.backgroundImg});
  } */
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
  const onHoverHandler = () => {
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
    <ProjectCardWrapper
      onMouseOver={onHoverHandler}
      onClick={onClickHandler}
      backgroundImg={img}
    >
      <SubHeadingWrapper>
        <h1>{title}</h1>
      </SubHeadingWrapper>
    </ProjectCardWrapper>
  );
}

export default ProjectCard;
