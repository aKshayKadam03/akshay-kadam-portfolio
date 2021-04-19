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
    width: 80%;
    margin: 0 auto;
    > div {
      margin-bottom: 20px;
      width: 100%;
      input {
        width: 95%;
        font-size: 19px;
        padding: 15px;
        border-radius: 5px;
        outline: none;
        border: 3px solid white;
        transition: all 500ms ease;
      }
      input:focus {
        border-bottom: 3px solid ${(props) => props.theme.secondary};
      }
    }
  }
`;

const ContactAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  i {
    margin-right: 25px;
    font-size: 25px;
  }

  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    color: ${(props) => props.theme.secondary};
  }
`;

const SendButton = styled.button`
  padding: 5px 25px;
  border: none;
  border-radius: 5px;
  margin: 10px;
  font-size: 18px;
  font-weight: 700;
  color: ${(props) => props.theme.body};
  background-color: ${(props) => props.theme.secondary};
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
            <ContactAction>
              <div>
                <a href="tel:+917975960302">
                  <i className="fas fa-phone-alt"></i>
                </a>

                <a href="https://api.whatsapp.com/send?phone=919036411285">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
              <SendButton>Send</SendButton>
            </ContactAction>
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
