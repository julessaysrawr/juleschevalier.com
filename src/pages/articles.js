import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import theme from '../lib/theme'
import paper from '../images/lightpaperfibers_@2x.png'
import LayoutMain from '../components/layout-main'
import GetInTouch from '../components/get-in-touch'
import TopicsNav from '../components/topics-nav'
import ArticleCard from '../components/article-card'
import Masonry from 'react-masonry-component'
import { bpPhone, bpTabletLG, bpTabletSM } from '../lib/breakpoints'

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  // const Posts = edges
  //   .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
  //   .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  const Articles = edges.map(edge => (
    <ArticleCard
      key={edge.node.id}
      title={edge.node.frontmatter.title}
      topic={edge.node.frontmatter.topic}
      to={edge.node.frontmatter.path}
    />
  ))

  return (
    <LayoutMain
      title={'All Articles | Jules Chevalier'}
      description={'Read articles written by Jules Chevalier'}
      uri={'/articles'}
    >
      <main>
        <div
          css={css`
            background: linear-gradient(0deg, rgba(148, 112, 62, 0.05), rgba(148, 112, 62, 0.05)),
              url(${paper});
            background-repeat: repeat;
            padding-top: ${theme.space[8]}px;
            border-bottom: 2px solid ${theme.color.border};
            border-right: 2px solid ${theme.color.border};
            border-left: 2px solid ${theme.color.border};
            margin: 0 auto;
            margin-bottom: calc(${theme.space[2]}px*13);
            max-width: ${theme.contentWidths.maxPaperWidth}px;

            ${bpTabletLG} {
              padding-top: 20%;
              border-right: none;
              border-left: none;
            }

            ${bpTabletSM} {
              padding-top: 25%;
            }
            ${bpPhone} {
              padding-top: 156px;
            }
          `}
        >
          <h1
            css={css`
              margin: 0 auto;
              text-align: center;

              ${bpPhone} {
                text-align: left;
                padding-left: 24px;
              }
            `}
          >
            All Articles
          </h1>
          <TopicsNav />
          <div
            css={css`
              width: 880px;
              margin: 0 auto 150px;

              ${bpTabletLG} {
                width: 424px;
              }

              ${bpPhone} {
                width: 300px;
              }
            `}
          >
            <Masonry
              css={css`
                margin-left: -8px; // to center the div, based on added margin to the cards
              `}
            >
              {Articles}
            </Masonry>
          </div>
        </div>
        <GetInTouch />
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
            path
            title
            topic
          }
        }
      }
    }
  }
`
