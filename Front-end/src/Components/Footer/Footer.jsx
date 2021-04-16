import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  min-height: 15vh;
  background-color: #25323f;
  color: white;
`;

function Footer() {
  return (
    <FooterWrapper id="contact">
      <h1>Footer</h1>
    </FooterWrapper>
  );
}

export default Footer;
