import React from "react";
import Link from "gatsby-link";
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;


{/* <Link to={post.frontmatter.path}>
{post.frontmatter.title} ({post.frontmatter.date})
</Link> */}