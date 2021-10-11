import React from "react";
import "./social-links.css";
import { SocialData } from "../../data/social-data";

function SocialLinks() {
  const data = SocialData;
  return (
    <div className="social-links">
      {data.map((item) => {
        return (          
          <a href={item.link}>
            <div className="social-icon-container">
              <img src={item.icon} className="social-icon" alt="social-icon" />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
