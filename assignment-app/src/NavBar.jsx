// eslint-disable-next-line
import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        {/* <p> tag is a placeholder, You'll need to change the tag/component type later*/}

        {/* <p className="navbar-brand ms-4 nav-link">User Behavior Data</p>
          <p className="navbar-brand ms-4 nav-link">Search Through Dataset</p> */}
        <Link to="/" className="navbar-brand ms-4 nav-link">
          User Behavior Data
        </Link>
        <Link to="/search" className="navbar-brand ms-4 nav-link ">
          Search Through Dataset
        </Link>
      </nav>
      <hr />
    </>
  );
}
