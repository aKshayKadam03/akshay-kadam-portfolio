import React from "react";
import styled from "styled-components";
import { MainHeadingWrapper } from "../../Elements/Elements";

//icons import
import html from "../../Icons/html.svg";
import css from "../../Icons/css.svg";
import javascript from "../../Icons/javascript.svg";
import react from "../../Icons/react.svg";
import material from "../../Icons/material.svg";
import redux from "../../Icons/redux.svg";
import node from "../../Icons/node.svg";
import express from "../../Icons/express.svg";
import mongodb from "../../Icons/mongodb.svg";
import redis from "../../Icons/redis.svg";
import git from "../../Icons/git.svg";
import heroku from "../../Icons/heroku.svg";

const skillIcons = [
  { icon: html, caption: "HTML" },
  { icon: css, caption: "CSS" },
  { icon: javascript, caption: "JavaScript" },
  { icon: react, caption: "React" },
  { icon: material, caption: "MaterialUI" },
  { icon: redux, caption: "Redux" },
  { icon: node, caption: "Node" },
  { icon: express, caption: "Express", invert: true },
  { icon: mongodb, caption: "MongoDB" },
  { icon: redis, caption: "Redis" },
  { icon: git, caption: "Git" },
  { icon: heroku, caption: "Heroku" },
];

const SkillWrapper = styled.div`
  padding-top: 150px;
`;

const SlideSectionOne = styled.div`
  > div {
    margin: 0 auto;
  }
`;

const IconHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  > div {
    padding: 50px;
  }
  @media (max-width: 768px) {
    > div {
      padding: 20px;
    }
  }
`;

const Icons = styled.figure`
  width: 100px;
  text-align: center;

  img {
    width: 100%;
    height: 100px;
    /* filter: ${(props) => props.theme.iconFilter}; */
    filter: invert(${(props) => (props.invert ? " 50%" : "0%")});
  }

  @media (max-width: 768px) {
    width: 80px;
    img {
      width: 100%;
      height: 80px;
    }
  }
`;

function Skillset() {
  return (
    <SkillWrapper>
      <MainHeadingWrapper>
        <h1>Skills & Interests</h1>
        <div></div>
      </MainHeadingWrapper>
      <SlideSectionOne>
        <div>
          <IconHolder>
            {skillIcons?.map((item) => (
              <div key={item.caption}>
                <Icons invert={item.invert}>
                  <img src={item.icon} alt={item.caption}></img>
                  <figcaption>{item.caption}</figcaption>
                </Icons>
              </div>
            ))}
          </IconHolder>
        </div>
      </SlideSectionOne>
    </SkillWrapper>
  );
}

export default Skillset;
