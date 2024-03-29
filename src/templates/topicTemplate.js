import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import LayoutMain from '../components/layout-main'
import theme from '../lib/theme'
import paper from '../images/lightpaperfibers_@2x.png'
import TopicsNav from '../components/topics-nav'
import Masonry from 'react-masonry-component'
import ArticleCard from '../components/article-card'
import GetInTouch from '../components/get-in-touch'
import { bpPhone, bpTabletSM, bpTabletLG } from '../lib/breakpoints'

const Topic = ({ pageContext, data }) => {
  const { topic } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  // const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`
  const pageHeader = `${topic} Articles`

  const Articles = edges.map(edge => (
    <ArticleCard
      key={edge.node.frontmatter.title}
      title={edge.node.frontmatter.title}
      topic={edge.node.frontmatter.topic}
      to={edge.node.frontmatter.path}
    />
  ))

  return (
    <LayoutMain
      title={`${topic} Articles | Jules Chevalier`}
      description={`${topic} Articles Written By Jules Chevalier`}
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
            {pageHeader}
          </h1>
          <TopicsNav />
          <div
            css={css`
              max-width: 880px;
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

export default Topic
export const pageQuery = graphql`
  query($topic: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { topic: { in: [$topic] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
            topic
          }
        }
      }
    }
  }
`
