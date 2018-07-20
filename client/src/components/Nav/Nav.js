import React from "react";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-info">
    <a className="navbar-brand" href="/">
      Andy Forbes Portfolio
    </a>
        <a className="nav-link text-warning" href="/">About Me</a>
        <a className="nav-link text-warning" href="/projects">My Projects</a>
        <a className="nav-link text-warning" href="/contact-me">Contact Me</a>
  </nav>
);

export default Nav;
