import React from "react";
import Nav from '../components/nav.js'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {  
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  console.log('data', data);
  console.log('markdownRemark', markdownRemark);
  console.log('frontmatter', frontmatter);
  console.log('html', html);  
  return (
    <div>
      <Nav />
      <div className="flex-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h4>{frontmatter.date}</h4>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>

  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;