import React from "react";
import styled from "styled-components";
import {
  MainHeadingWrapper,
  ParagraphWrapper,
  SubHeadingWrapper,
} from "../../Elements/Elements";

const ProjectCardWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  height: 400px;
  border-radius: 5px;
  color: #d3d4d4;
  margin: 20px;

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
    background: url(${(props) => props.backgroundImg});
    background-repeat: no-repeat;
  }
  @media (max-width: 750px) {
    height: 100px;
    min-width: 350px;
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
