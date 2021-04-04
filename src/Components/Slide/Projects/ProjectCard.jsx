import React from "react";
import styled from "styled-components";
import { ParagraphWrapper, SubHeadingWrapper } from "../../Elements/Elements";

const ProjectImage = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  > img {
    width: 100%;
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
  console.log(img, title, description);
  React.useEffect(() => {
    console.log("Gg");
  }, []);
  return (
    <div>
      <ProjectImage>
        <img src={img} alt={title}></img>
      </ProjectImage>
      <SubHeadingWrapper>
        <h4>{title}</h4>
      </SubHeadingWrapper>
      <ParagraphWrapper>
        <p>{description}</p>
      </ParagraphWrapper>
      <div>
        <button>Github</button>
        <button>Demo</button>
      </div>
    </div>
  );
}

export default ProjectCard;
