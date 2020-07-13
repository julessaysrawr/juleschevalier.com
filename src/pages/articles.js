import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import theme from '../theme'
import paper from '../images/lightpaperfibers_@2x.png'
import PostLink from '../components/post-link'
import LayoutMain from '../components/layout-main'
import GetInTouch from '../components/get-in-touch'
import TopicsNav from '../components/topics-nav'
import ArticleCard from '../components/article-card'

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  const Articles = edges.map(edge => (
    <ArticleCard
      key={edge.node.id}
      title={edge.node.frontmatter.title}
      topic={edge.node.frontmatter.topic}
    />
  ))
  return (
    <LayoutMain
      title={'📝 Articles | Jules Chevalier'}
      description={'Articles written by Jules Chevalier'}
    >
      <main>
        <div
          css={css`
            background-image: url(${paper});
            background-repeat: repeat;
            padding-top: ${theme.space[8]}px;
            border-bottom: 2px solid rgba(136, 128, 113, 0.25);
            margin-bottom: calc(${theme.space[2]}px*13);
          `}
        >
          <h1
            css={css`
              margin: 0 auto;
              text-align: center;
            `}
          >
            All Articles
          </h1>
          <TopicsNav />
          <div
            css={css`
              max-width: 864px;
              margin: 0 auto 150px;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
            `}
          >
            {/* <ArticleCard
              title="This is A Temporary Title For Some Testing"
              topic="This Is A Topic"
            /> */}
            {Articles}
            {/* {Posts} */}
          </div>
        </div>
        <GetInTouch />
      </main>
    </LayoutMain>
  )
}

export default BlogPage

// TODO format date to: July 10th, 2020
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
            topic
          }
        }
      }
    }
  }
`
