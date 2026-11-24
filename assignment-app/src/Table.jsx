/* eslint-disable react/prop-types */
// eslint-disable-next-line
import React from "react";

export default function Table({ data }) {
  function renderRow(row) {
    return (
      <tr key={row["User ID"]}>
        {Object.keys(row).map((key) => (
          <td key={key}>{row[key]}</td>
        ))}
      </tr>
    );
  }

  return (
    <table className="table table-striped text-start">
      <thead>
        <tr>
          <th scope="column">User ID</th>
          <th scope="column">Device Model</th>
          <th scope="column">Operating System</th>
          <th scope="column">App Usage Time (min/day)</th>
          <th scope="column">Screen On Time (hours/day)</th>
          <th scope="column">Battery Drain (mAh/day)</th>
          <th scope="column">Number of Apps Installed</th>
          <th scope="column">Data Usage (MB/day)</th>
          <th scope="column">Age</th>
          <th scope="column">Gender</th>
          <th scope="column">User Behavior Class</th>
        </tr>
      </thead>
      <tbody>{data && data.map(renderRow)}</tbody>
      {/* {console.log(stats)} */}
    </table>
  );
}
