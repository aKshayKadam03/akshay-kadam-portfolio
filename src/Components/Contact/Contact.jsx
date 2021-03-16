import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: red;
  min-height: 50vh;
`;

function Contact() {
  return (
    <Wrapper id="contact">
      <h1>Contact</h1>
    </Wrapper>
  );
}

export default Contact;
