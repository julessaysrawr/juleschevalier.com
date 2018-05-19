import React from "react";
import '../styles/main.css'
import '../styles/queries.css'

const Nav = props => {
  return (
    <nav>
      <div className="center space-above space-below">
        <h1>Jules Chevalier</h1>
      </div>
      <div className="nav">
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>About</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;