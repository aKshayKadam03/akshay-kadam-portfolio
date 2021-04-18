import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import mailAnimation from "../Animations/mail.json";
import { MainHeadingWrapper, SubHeadingWrapper } from "../Elements/Elements";

const mailOptions = {
  loop: true,
  autoplay: true,
  animationData: mailAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const ContactWrapper = styled.div`
  min-height: 50vh;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
`;

const ContactMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }

  > div {
    width: 100%;
    margin: 10px auto;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    > div {
      margin: 10px;
      width: 60%;
    }
    input {
      font-size: 19px;
      width: 100%;
      padding: 5px;
      border-radius: 5px;
      outline: none;
      border: none;
      padding-left: 15px;
    }
  }
`;

const SendButton = styled.button`
  font-size: 18px;
  padding: 5px 25px;
  border: none;
  border-radius: 5px;
  margin: 10px;
`;

function Contact() {
  return (
    <ContactWrapper id="contact">
      <ContactMain>
        <div>
          <MainHeadingWrapper>
            <h1>Get In Touch</h1>
            <div></div>
          </MainHeadingWrapper>
          <form>
            <div>
              <input placeholder="Name" />
            </div>
            <div>
              <input placeholder="Email" />
            </div>
            <div>
              <input placeholder="Message" />
            </div>
            <div>
              <SendButton>Send</SendButton>
            </div>
          </form>
        </div>
        <div>
          <Lottie options={mailOptions}></Lottie>
        </div>
      </ContactMain>
    </ContactWrapper>
  );
}

export default Contact;
