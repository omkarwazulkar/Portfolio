import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">My Portfolio</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects">Project</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">My Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
