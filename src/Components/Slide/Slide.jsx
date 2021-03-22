import React from "react";
import styled from "styled-components";

const SliderWrapper = styled.div`
  border: 1px solid red;
  position: relative;
`;

const SlideTop = styled.div`
  height: 100vh;
  background-color: #857f7f;
`;

function Slide() {
  return (
    <SliderWrapper>
      <SlideTop></SlideTop>
    </SliderWrapper>
  );
}

export default Slide;
