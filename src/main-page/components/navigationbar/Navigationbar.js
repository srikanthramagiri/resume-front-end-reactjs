import React, { useEffect, useState } from "react";
import "./navigationbar.scss";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser, BiFileBlank } from "react-icons/bi";
import { MdWorkOutline, MdOutlineHomeRepairService } from "react-icons/md";
import { LuFileSpreadsheet } from "react-icons/lu";
import { AiOutlineMail, AiOutlineCloseCircle } from "react-icons/ai";
import { PiListLight } from "react-icons/pi";
import { Container, Row, Button } from "react-bootstrap";

const Navigationbar = () => {
  const [listClicked, setListClicked] = useState(true);
  const [showLeftNav, setShowLeftNav] = useState("");
  useEffect(()=>{
    if(!listClicked) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'visible';
    }
  }, [listClicked])
  const onNavClickHandler = () => {
    setShowLeftNav("");
    setListClicked(!listClicked)
  }
  return (
    <div >
      <div className="list-icon-section">
        {listClicked && (
          <PiListLight
            className="list-icon"
            onClick={() => {
              setListClicked(!listClicked);
              setShowLeftNav("showLeftNav");
            
            }}
          />
        )}
        {!listClicked && (
          <AiOutlineCloseCircle
            className="close-icon"
            onClick={() => {
              setListClicked(!listClicked);
              setShowLeftNav("");
          
            }}
          />
        )}
      </div>

      <header
        id="header"
        className={`d-flex flex-column justify-content-center ${showLeftNav}`}
      >
        <nav id="navbar" class="navbar nav-menu">
          <ul>
            <li>
              <a href="#hero" onClick={() => { onNavClickHandler()}} class="nav-link scrollto active">
                <AiOutlineHome /> <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about" class="nav-link scrollto" onClick={() => { onNavClickHandler()}}>
                <BiUser />
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#resume" class="nav-link scrollto" onClick={() => { onNavClickHandler()}}>
                <MdWorkOutline /> <span>Resume</span>
              </a>
            </li>
            <li>
              <a href="#portfolio" class="nav-link scrollto" onClick={() => { onNavClickHandler()}}>
                <LuFileSpreadsheet />
                <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#services" class="nav-link scrollto" onClick={() => { onNavClickHandler()}}>
                <MdOutlineHomeRepairService /> <span>Services</span>
              </a>
            </li>
            <li>
              <a href="#contact" class="nav-link scrollto"  onClick={() => { onNavClickHandler()}}>
                <AiOutlineMail />
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navigationbar;
