import React from "react";
import Wrapper from "../wrapper/Wrapper";
import Content from "../content/Content";
import Heading from "../heading/Heading";
import "./about.scss";

const text = 'I am working as Front end developer, I Have around 6 years of experience in front-end technologies like react js, HTML, CSS, javascript, sass, Having good understanding about node js, next js and React Native.'
const heading = "About"
const About = () => {
  return (
    <>
      <Wrapper>
        <Heading heading={heading} />
        <Content text={text}/>
      </Wrapper>
    </>
  );
};

export default About;
