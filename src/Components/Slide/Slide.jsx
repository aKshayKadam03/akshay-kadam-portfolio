import React from "react";
import styled from "styled-components";

const Slider = styled.div`
  min-height: 100vh;
`;

const First = styled.div`
  height: 2000px;
  position: relative;
  width: 100%;
  border-bottom: 1px solid black;
  z-index: 3;
  background-color: white;
`;

const Second = styled.div`
  height: 2000px;
  position: relative;
  width: 100%;
  margin-top: -450px;
  background-color: white;
  border-bottom: 1px solid black;
  z-index: 2;
`;

const Third = styled.div`
  margin-top: -450px;
  position: relative;
  height: 2000px;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid black;
`;

const StickyOne = styled.div`
  position: sticky;
  top: 30%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 500px;
  height: 60vh;
  background-image: url(${(props) => props.src});
  border-bottom: 1px solid black;
`;

const StickyTwo = styled.div`
  position: sticky;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
  width: 500px;
  height: 60vh;
  background-image: url(${(props) => props.src});
  border-bottom: 1px solid black;
  z-index: 2;
`;

const StickyThree = styled.div`
  position: sticky;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 60vh;
  background-image: url(${(props) => props.src});
  border-bottom: 1px solid black;
  z-index: 1;
  background-size: cover;
`;

const Envelope = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  background-image: url(${(props) => props.src});
  bottom: 250px;
  width: 550px;
  height: 630px;
  z-index: 100;
`;

const EnvelopeBottom = styled.img`
  width: 550px;
  margin: 430px auto 0;
`;

const ChannelBottom = styled.div`
  position: absolute;
  height: 600px;
  width: 100%;
  background-color: grey;
  z-index: 10;
  bottom: 0;
`;

function Slide() {
  return (
    <Slider id="about">
      <First>
        <h1>First</h1>
        <StickyOne src="https://i.postimg.cc/W3GRrTjM/ui.jpg"></StickyOne>
        <ChannelBottom></ChannelBottom>
      </First>
      <Second>
        <h1>Second</h1>
        <StickyTwo src="https://i.postimg.cc/fyDGfpT1/ux.jpg"></StickyTwo>
        <ChannelBottom></ChannelBottom>
      </Second>
      <Third>
        <h1>Third</h1>
        <StickyThree src="https://i.ibb.co/88dj9rj/Black-Professional-Resume.png"></StickyThree>
        <EnvelopeBottom
          src="https://svgshare.com/i/V3_.svg"
          alt="envelopeBottom"
        ></EnvelopeBottom>
        <Envelope src="https://svgshare.com/i/V3n.svg"></Envelope>
      </Third>
    </Slider>
  );
}

export default Slide;
