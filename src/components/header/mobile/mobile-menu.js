import React from "react";
import "./mobile-menu.css";

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i class="fi fi-rr-cross-circle" />
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#projects">
            <i class="fi-rr-edit-alt mobile-option-icon" />
            Projects
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skills">
            <i class="fi-rr-laptop mobile-option-icon" />
            Skills
          </a>
        </div>
        <div className="mobile-option">
          <a href="#contact">
            <i class="fi-rr-user mobile-option-icon" />
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
