import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import LayoutMain from '../components/layout-main'
import Link from '../components/link'
import theme from '../theme'

const Topic = ({ pageContext, data }) => {
  const { topic } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  // const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`
  const pageHeader = `Articles about ${topic}`

  return (
    <LayoutMain>
      <main className="non-flex-container">
        <h2
          css={css`
            padding-bottom: ${theme.space[4]}px;
          `}
        >
          {pageHeader}
        </h2>
        <ul>
          {edges.map(({ node }) => {
            const { path, title } = node.frontmatter
            return (
              <li
                key={path}
                css={css`
                  padding-bottom: ${theme.space[3]}px;
                `}
              >
                <Link type={'navigation'} hrefLocal={path}>
                  {title}
                </Link>
              </li>
            )
          })}
        </ul>
        <div
          css={css`
            margin-top: ${theme.space[6]}px;
          `}
        >
          <Link type={'navigation'} hrefLocal="/articles">
            All articles
          </Link>
        </div>
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
          }
        }
      }
    }
  }
`
