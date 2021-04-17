import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 50vh;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
`;

function Contact() {
  return (
    <Wrapper id="contact">
      <h1>Contact</h1>
    </Wrapper>
  );
}

export default Contact;
