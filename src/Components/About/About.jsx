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
  margin: 20px auto;
  min-height: 50vh;
`;

function About() {
  return (
    <Wrapper>
      <MainHeadingWrapper>
        <h1>About</h1>
        <div></div>
      </MainHeadingWrapper>
      <SubHeadingWrapper>
        <h4>About me</h4>
      </SubHeadingWrapper>
      <ParagraphWrapper>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          quasi qui tempore fugit tempora. Dolorum dolore nemo sint ipsum,
          beatae nam debitis! Quaerat quam ducimus unde nihil? Natus tempora,
          quas eum rerum aspernatur officiis et ullam minima suscipit quam, iure
          deserunt? Facilis cum perspiciatis autem. Vel eum totam fuga molestiae
          non nesciunt distinctio eaque hic illo sed sequi at modi rem, enim
          voluptatum, alias officia culpa nam asperiores? Vel voluptatum
          voluptatem accusamus, in omnis obcaecati maiores autem officia amet
          rem, recusandae minima impedit error provident minus perferendis
          laborum soluta ex? Enim libero dolores nulla officiis quibusdam
          perferendis, veniam similique eligendi?
        </p>
      </ParagraphWrapper>
    </Wrapper>
  );
}

export default About;
