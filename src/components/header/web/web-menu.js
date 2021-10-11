import React from "react";
import "./web-menu.css";

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#projects">
          <i class="fi-rr-edit-alt option-icon" />
          Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <i class="fi-rr-laptop option-icon" />
          Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <i class="fi-rr-user option-icon" />
          Contact
        </a>
      </div>
    </div>
  );
}

export default Web;
