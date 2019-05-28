import React from 'react'
import { graphql } from 'gatsby'
import PostLink from '../components/post-link'
import '../styles/main.scss'
import LayoutMain from '../components/layout-main'

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
      <LayoutMain title={'📝 Blog | Jules Chevalier'} description={'Blog for Jules Chevalier'}>
        <main className="non-flex-container">
          {Posts}
        </main>
      </LayoutMain>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
