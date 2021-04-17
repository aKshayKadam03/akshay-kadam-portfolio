import styled from "styled-components";

export const MainHeadingWrapper = styled.div`
  text-align: center;
  padding: 30px;

  > h1 {
    font-size: ${(props) => (props.size ? props.size : "3rem")};
    width: fit-content;
    margin: 0 auto;
    /* background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor}; */
    font-weight: 600;
  }
  > div {
    border-bottom: 4px solid #c50e6a;
    width: 100px;
    margin: 5px auto;
    border-radius: 10px;
  }
`;

export const SubHeadingWrapper = styled.div`
  > h4 {
    font-size: ${(props) => (props.fontSize ? props.fontSize : "30px")};
    margin: 0 auto;
    width: fit-content;
    font-weight: 600;
  }
`;

export const ParagraphWrapper = styled.div`
  > p {
    font-size: 1.2 rem;
    line-height: 1.3;
    letter-spacing: 0.3ch;
    /* background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor}; */
    font-weight: 400;
  }
`;
