import React from "react";
import styled from "styled-components";
import { ParagraphWrapper, SubHeadingWrapper } from "../Elements/Elements";

const FooterWrapper = styled.div`
  border-top: 1px solid white;
  min-height: 5vh;
  display: grid;
  place-items: center;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
`;

function Footer() {
  return (
    <FooterWrapper id="contact">
      <p> © therealdrtroll</p>
    </FooterWrapper>
  );
}

export default Footer;
