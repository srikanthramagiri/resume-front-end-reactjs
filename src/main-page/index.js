import React from "react";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";

import Navigationbar from "./components/navigationbar/Navigationbar";
import Facts from "./components/facts/Facts";
import PersonalDetailSection from "./components/personalDetailSection/PersonalDetailSection";
import Skills from "./components/skills/Skills";
import Resume from "./components/resume/Resume";
import Contact from './components/contact/Contact';
import Footer from './components/footer/footer'
import "./index.scss"

const Index = () => {
  return (
    <div>
      <Navigationbar />
      <Hero />
      <main id="main">
        <section id="about" class="">
          <div class="container" data-aos="fade-up">
            <About />
            <PersonalDetailSection />
            <Facts />
            <Skills/>
            <Resume />
            <Contact />
            
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default Index;
