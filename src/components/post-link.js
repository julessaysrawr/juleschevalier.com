import React from "react";
import { Link } from "gatsby";
import '../styles/main.css'

const PostLink = ({ post }) => (
  <div className="blog-list">
    <Link to={post.frontmatter.path}>
      {post.frontmatter.title}
    </Link>
  </div>
);

export default PostLink;