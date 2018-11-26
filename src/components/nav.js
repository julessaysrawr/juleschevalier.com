import React from "react";
import { Link } from "gatsby";
import '../styles/main.scss'

const Nav = props => {
  return (
    <div>
      <header className="center space-above space-below">
        <h1 className="name-plate">Jules Chevalier</h1>
        <h3 className="tag-line">Progress not perfection</h3>
      </header>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;