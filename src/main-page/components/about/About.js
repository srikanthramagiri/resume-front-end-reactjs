import React from "react";
import Wrapper from "../wrapper/Wrapper";
import Content from "../content/Content";
import Heading from "../heading/Heading";
import "./about.scss";

const About = () => {
  return (
    <>
      <Wrapper>
        <Heading heading={"About"} />
        <Content />
      </Wrapper>
    </>
  );
};

export default About;
