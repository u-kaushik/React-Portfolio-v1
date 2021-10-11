import React from "react";
import "./work.css";
import { WorkData } from "../../data/work-data";
import WorkCard from "./work-card";
import Separator from "../../common/separator/separator";

function Work() {
  const data = WorkData;
  return (
    <div className="work">
      <Separator />
      <label className="section-title">Work</label>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard item={item} />;
        })}
      </div>
    </div>
  );
}

export default Work;
