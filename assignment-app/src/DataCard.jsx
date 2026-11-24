/* eslint-disable react/prop-types */
// eslint-disable-next-line
import React from "react";

const unitsMap = {
  "App Usage Time (min/day)": "Minutes",
  "Screen On Time (hours/day)": "Hours",
  "Number of Apps Installed": "Apps",
  Age: "Years Old",
};

export default function DataCart({ stats, type }) {
  const stat = stats[type];

  return (
    <div className="card">
      <div className="card-body card-text text-center pb-0">
        <h5 className="fw-bold">{type}</h5>
        {Object.keys(stat).map((key) => (
          <p key={key}>
            {key} - {stat[key]} {unitsMap[type]}
          </p>
        ))}
      </div>
    </div>
  );
}
