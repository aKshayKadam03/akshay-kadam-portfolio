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
  button {
    font-size: 14px;
    font-weight: 600;
    border-radius: 5px;
    padding: 5px;
    background-color: ${(props) => props.theme.fontColor};
    border: 1px solid ${(props) => props.theme.fontColor};
    color: ${(props) => props.theme.body};

    :hover {
      background-color: ${(props) => props.theme.body};
      color: ${(props) => props.theme.fontColor};
    }
  }

  i {
  }
`;

function Footer() {
  return (
    <FooterWrapper id="contact">
      <ParagraphWrapper>
        <p>
          © 2021 |
          <a href="https://github.com/therealdrtroll/akshay-kadam-portfolio">
            <button>
              <i class="devicon-github-original"></i> Source Code
            </button>
          </a>
        </p>
      </ParagraphWrapper>
    </FooterWrapper>
  );
}

export default Footer;
