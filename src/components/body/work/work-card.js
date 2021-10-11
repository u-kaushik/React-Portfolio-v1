import React from "react";
import "./work-card.css";

function WorkCard({ item }) {
  return (
    <div className="work-card">
      <img src={item.companyLogo} className="work-logo" alt="company" />
      <div className="work-info">
        <label className="company-name">{item.company}</label>
        <label className="work-role">{item.role}</label>
        <div className="work-dates">
          <label>{item.dateJoined}</label>-<label>{item.dateEnd}</label>
        </div>
        <div className="work-desc">
          <p>{item.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
