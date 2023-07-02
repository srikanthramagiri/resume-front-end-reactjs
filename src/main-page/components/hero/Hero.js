import React from "react"; 
import './hero.scss';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <div>
             <section id="hero" class="d-flex flex-column justify-content-center">
              <div className="whiteoverlay">
        <div class="container name-section" data-aos="zoom-in" data-aos-delay="100">
          <span className="name">Srikanth Ramagiri</span>
          <p>
            I'm{" "}
            <TypeAnimation
      sequence={[
        'Front End Developer',
        1000,
        'Software Engineer',
        1000,
        'React js Developer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
          </p>
          {/* <div class="social-links">
            <a href="#" class="twitter">
              <i class="bx bxl-twitter"></i>
            </a>
            <a href="#" class="facebook">
              <i class="bx bxl-facebook"></i>
            </a>
            <a href="#" class="instagram">
              <i class="bx bxl-instagram"></i>
            </a>
            <a href="#" class="google-plus">
              <i class="bx bxl-skype"></i>
            </a>
            <a href="#" class="linkedin">
              <i class="bx bxl-linkedin"></i>
            </a>
          </div> */}
        </div>
        </div>
      </section>
        </div>
    )
}

export default Hero;