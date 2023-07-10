import React from "react";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Navigationbar from "./components/navigationbar/Navigationbar";
import Facts from "./components/facts/Facts";
import PersonalDetailSection from "./components/personalDetailSection/PersonalDetailSection";
import Skills from "./components/skills/Skills";

const Index = () => {
  return (
    <div>
      <Navigationbar />
      <Hero />
      <main id="main">
        <section id="about" class="about">
          <div class="container" data-aos="fade-up">
            <About />
            <PersonalDetailSection />
            <Facts />
            <Skills/>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Index;
