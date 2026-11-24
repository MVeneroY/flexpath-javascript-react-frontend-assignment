// eslint-disable-next-line
import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
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
