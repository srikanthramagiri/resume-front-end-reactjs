import React from "react";
import './navigationbar.scss'
import { AiOutlineHome } from "react-icons/ai";
import { BiUser,BiFileBlank } from "react-icons/bi"
import { MdWorkOutline, MdOutlineHomeRepairService } from "react-icons/md"
import { LuFileSpreadsheet } from "react-icons/lu"
import { AiOutlineMail } from "react-icons/ai"

const Navigationbar = () => {
  return (
    <div>
      <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
      <header id="header" className="d-flex flex-column justify-content-center">
        <nav id="navbar" class="navbar nav-menu">
          <ul>
            <li>
              <a href="#hero" class="nav-link scrollto active">
                <AiOutlineHome /> <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about" class="nav-link scrollto">
                <BiUser /><span>About</span>
              </a>
            </li>
            <li>
              <a href="#resume" class="nav-link scrollto">
                <MdWorkOutline /> <span>Resume</span>
              </a>
            </li>
            <li>
              <a href="#portfolio" class="nav-link scrollto">
                <LuFileSpreadsheet /><span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#services" class="nav-link scrollto">
                <MdOutlineHomeRepairService /> <span>Services</span>
              </a>
            </li>
            <li>
              <a href="#contact" class="nav-link scrollto">
                <AiOutlineMail /><span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navigationbar;
