import React from "react";
import Wrapper from "../wrapper/Wrapper";
import Content from "../content/Content";
import Heading from "../heading/Heading";
import Subheading from '../subheading/Subheading'
import { BsChevronRight } from 'react-icons/bs'
import "./about.scss";
const experience = [
  "Having Total 6.5 Years of experience in Front End Development.",
  "Have hands-on experience in HTML, CSS, SASS, BOOTSTRAP, JAVASCRIPT.",
  "Having 4+ years of experience in REACT v16.0, Redux Thunk, Redux Saga, React Hooks, ES6.",
  "Over 2+ years of experience in Functional Programming in ReactJS.",
  "Having good experience in Micro Front End Architecture using Lerna.",
  "Having hands-on experience in working in the container model of react applications.",
  "Having 2 months of experience in communicating Graph QL APIs from the front-end applications.",
  "Having 1+ years of experience with Typescript.",
  "Experience with common front-end development tools such as Babel, Webpack, NPM.",
  "Worked in Apache Cordova for Mobile Application development.",
  "Proficient understanding of code versioning tools, such as GitHub, BitBucket, GitLab.",
  "Basic working experience with deployment tools like Bamboo and Docker.",
  "Improved application performance using react js webpack techniques.",
  "Having good experience in 508 compliance and fixing issues.",
  "Well versed with popular java IDE’s VS Code, Eclipse, and Android Studio.",
  "Good understanding of the Software Development Life Cycle.",
  "Create applications with Responsive Web Design conforming to multiple screen sizes/devices.",
  "Worked 4 years in Agile framework, and good knowledge in SAFe (Scaled Agile Framework enterprise).",
  "Flexibility and adaptability regarding new technologies and environments."
];
const getItems = (text) => {
  return (
    <li><BsChevronRight className='chevronright'/> {text}</li>
  )
}
const text = 'I am working as Front end developer, I Have around 6.5 years of experience in front-end technologies like react js, HTML, CSS, javascript, sass, Having good understanding about node js, next js and React Native.'
const heading = "About"
const About = () => {
  return (
    <>
      <Wrapper>
        <Heading heading={heading} />
        <Content text={text}/>
        <Subheading text={'Responsibilities'} />
        <ul className="responsibilities">
        {
          experience.map(item=>{
            return getItems(item)
          })
        }
        </ul>
      </Wrapper>
    </>
  );
};

export default About;
