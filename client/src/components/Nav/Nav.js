import React from "react";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-success">
    <a className="navbar-brand" href="/">
      Andy Forbes Portfolio
    </a>
        <a className="nav-link" href="/">About Me</a>
        <a className="nav-link" href="/projects">My Projects</a>
        <a className="nav-link" href="/contact-me">Contact Me</a>
  </nav>
);

export default Nav;
