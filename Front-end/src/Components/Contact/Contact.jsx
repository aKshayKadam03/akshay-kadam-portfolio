import React from "react";
import styled from "styled-components";

import { MainHeadingWrapper, SubHeadingWrapper } from "../Elements/Elements";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

const ContactWrapper = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
  padding: 150px 0;
  > div:nth-child(1) {
    padding-bottom: 80px;
  }
`;

const ContactMain = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    width: 45%;
    margin: 0 auto;
  }

  @media (max-width: 1000px) {
    > div {
      width: 100%;
      min-width: 0px;
    }
  }
`;

const Form = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0px auto;
    > div {
      margin-bottom: 20px;
      width: 100%;
      input {
        width: 100%;
        font-size: 19px;
        padding: 10px;
        border-radius: 5px;
        outline: none;
        border: 3px solid white;
        transition: all 500ms ease;
      }
      input:focus {
        border-bottom: 3px solid ${(props) => props.theme.secondary};
      }
    }
    text-align: left;
  }
  @media (max-width: 768px) {
    /* form {
      width: 100%;
    } */
  }
`;

const FindMeElseWhere = styled.div`
  > div {
    display: flex;
    width: 85%;
    align-items: center;

    margin: 0 auto;
    font-size: 18px;
    > div {
      margin: 1.5% 4%;
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const SendButton = styled.button`
  padding: 10px 25px;
  width: 200px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2ch;
  color: ${(props) => props.theme.body};
  background-color: ${(props) => props.theme.secondary};
`;

const intitialData = {
  name: "",
  email: "",
  message: "",
};

function Contact() {
  const [data, setData] = React.useState(intitialData);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const success = () => toast.dark("Successfully Sent");
  const failure = () => toast.error("Something went wrong");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          success();
        },
        (error) => {
          failure();
        }
      );

    setData(intitialData);
  };

  const { name, email, message } = data;

  return (
    <ContactWrapper id="contact">
      <MainHeadingWrapper>
        <h1>Get In Touch</h1>
        <div></div>
      </MainHeadingWrapper>
      <ToastContainer />
      <ContactMain>
        <Form>
          <form onSubmit={onSubmitHandler}>
            <div>
              <input
                required
                value={name}
                name="name"
                onChange={onChangeHandler}
                placeholder="Name"
              />
            </div>
            <div>
              <input
                value={email}
                type="email"
                name="email"
                onChange={onChangeHandler}
                placeholder="Email"
              />
            </div>
            <div>
              <input
                required
                value={message}
                name="message"
                onChange={onChangeHandler}
                placeholder="Message"
              />
            </div>
            <div>
              <SendButton>Send </SendButton>
            </div>
          </form>
        </Form>
        <FindMeElseWhere>
          <div>
            <div>
              <a href="tel:+917975960302">
                <i className="fas fa-phone-alt"></i>
              </a>
            </div>
            <div>
              <a href="tel:+917975960302">
                <p>+91 7975960302</p>
              </a>
            </div>
          </div>
          <div>
            <div>
              <a href="mailto:akshaykadam7991@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            <div>
              <a href="mailto:akshaykadam7991@gmail.com">
                <p>akshaykadam7991@gmail.com</p>
              </a>
            </div>
          </div>
        </FindMeElseWhere>
      </ContactMain>
    </ContactWrapper>
  );
}

export default Contact;
