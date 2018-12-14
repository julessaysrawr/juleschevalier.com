import React from "react";
import { Link } from "gatsby";
import '../styles/main.scss'

const Nav = props => {
  return (
    <div>
      <Link to="/">
        <header className="center space-above space-below">
          <h1 className="name-plate">Jules Chevalier</h1>
          <h3 className="tag-line">Progress not perfection</h3>
        </header>
      </Link>
      <div style={{display: 'flex'}}>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/photography">Photography</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </div>

    </div>
  );
};

export default Nav;