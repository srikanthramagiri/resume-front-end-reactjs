import React from "react";
import Wrapper from "../wrapper/Wrapper";
import Content from "../content/Content";
import Heading from "../heading/Heading";
import "./about.scss";

const text = 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.'
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
