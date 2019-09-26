import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typist from "react-typist";

import Nav from "../HiddenNav/Nav";
// import Portfolio from "../Portfolio/Portfolio";

import "react-typist/dist/Typist.css";

import user from "../../images/edited.png";

function handleClick(e) {
  const slide = document.querySelector(".slider");
  slide.classList.toggle("slide-open");
}

export default function Home(props) {
  const [sideNavOpacity, setSideNavOpacity] = useState(0);
  return (
    <div className="App-box">
        <div className="App">
          <div className="card">
            <section id="slide" className="centered slider">
              <div>
                <Typist>
                  <Typist.Delay ms={3400} />
                  <span>
                    I'm Jide and I love to code
                    <span role="img" aria-label="code">
                      💻
                    </span>
                  </span>
                  <br />
                  <span>
                    when I'm not writing codes, I love playing Jazz Guitar
                    <span role="img" aria-label="guitar">
                      🎸
                    </span>
                  </span>
                </Typist>
              </div>
            </section>
            <section className="center-intro avatar-box flex-col">
              <div id="top" className="flex-row">
                <img src={user} alt="avatar" />
                <div id="logo" className="centered">
                  <FontAwesomeIcon icon="laptop-code" id="code" />
                </div>
              </div>
              <div id="bottom" className="centered">
                <div className="overlay"></div>
                <p>WEB & APPLICATIONS DEVELOPER</p>
              </div>
            </section>
            <section className="center-intro nav-intro">
              <li className="items">
                <div className="icon centered">
                  <FontAwesomeIcon icon="home" />
                </div>
                <div className="nav">
                  <span>HOME</span>
                </div>
              </li>
              <li
                className="items"
                onClick={e => {
                  handleClick();
                  setSideNavOpacity(1);
                }}
              >
                <div className="icon centered">
                  <FontAwesomeIcon icon="user" />
                </div>
                <div className="nav">
                  <span>ABOUT</span>
                </div>
              </li>
              <li
                className="items"
                onClick={() => props.openPortFolio(true)}
              >
                <div className="icon centered">
                  <FontAwesomeIcon icon="suitcase" />
                </div>
                <div className="nav">
                  <span>PORTFOLIO</span>
                </div>
              </li>
              <li className="items">
                <div className="icon centered last-icon">
                  <FontAwesomeIcon icon="home" />
                </div>
                <div className="nav last-nav">
                  <span>JOURNAL</span>
                </div>
              </li>
            </section>
          </div>
          <Nav
            sideNavOpacity={sideNavOpacity}
            passOpacity={() => {
              let slide = document.querySelector(".slider");
              slide.classList.toggle("slide-open");
              setSideNavOpacity(0);
            }}
          />
        </div> 
    </div>
  );
}
