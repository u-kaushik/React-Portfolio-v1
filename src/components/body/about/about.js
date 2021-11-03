import React from "react";
import SocialLinks from "../../common/social-links/social-links";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hi, my name's <span className="about-name">Utkarsh</span>.
          <br />
          I'm a front-end developer.

          <div className="about-blurb">
          <p></p>
          </div>
        </div>
        {/* <div className="about-photo">
          <img
            src={require("../../../assets/about-illustration.png").default}
            className="about-illustration"
            alt="illustration"
          />
        </div> */}
      </div>
      <SocialLinks />
    </div>
  );
}

export default About;
