import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 50vh;
  background-image: linear-gradient(
    -225deg,
    #174cee 0%,
    #1e7aa5 48%,
    #313979 100%
  );
`;

function Contact() {
  return (
    <Wrapper id="contact">
      <h1>Contact</h1>
    </Wrapper>
  );
}

export default Contact;
