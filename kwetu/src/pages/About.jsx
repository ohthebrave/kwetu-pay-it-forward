import React from "react";
import NavBar from "../components/NavBar";
import "./about.css";
import avatar from "../assets/flip2.avif";

function About() {
  return (
    <>
      <div className="about-us">
        <NavBar />
        <div className="about-content">
          <h2 className="word fst-italic">About Us</h2>
        </div>
      </div>
      <div className="container text-center">
        <div className="row align-items-center para">
          <div className="col">
            <p className="fs-1">Who We Are</p>
          </div>
          <div className="col">
            <p className="about-paragraph">
              The 410 Bridge is a Christ-centered, non-profit organization
              helping to redefine the war on poverty through community
              development in poverty-stricken nations such as Kenya, Guatemala,
              Uganda, and Haiti.
            </p>
          </div>
        </div>
        <div className="row align-items-center para mb-5">
          <div className="col">
            <p className="about-paragraph">
              Economic Development, Education, Health, Spiritual Development, &
              Water are the key areas that make a real and sustainable impact in
              the communities we work in around the world.
            </p>
          </div>
          <div className="col">
            <p className="fs-1">What We Do</p>
          </div>
        </div>
        {/* rows for flip-card  */}
        <div className="row align-items-center">
          <div className="col flip-card m-5">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={avatar} alt="Avatar" />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
          <div className="col flip-card m-5">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={avatar} alt="Avatar" />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
          <div className="col flip-card m-5">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={avatar} alt="Avatar" />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default About;
