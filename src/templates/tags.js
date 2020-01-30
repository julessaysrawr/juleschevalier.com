import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import LayoutMain from '../components/layout-main'
import Link from '../components/link'
import theme from '../theme'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`

  return (
    <LayoutMain>
      <main className="non-flex-container">
        <h1
          css={css`
            padding-bottom: ${theme.space[4]}px;
          `}
        >
          {tagHeader}
        </h1>
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
                <Link type={'button'} hrefLocal={path}>
                  {title}
                </Link>
              </li>
            )
          })}
        </ul>
        <Link type={'basic'} hrefLocal="/tags">
          All tags
        </Link>
      </main>
    </LayoutMain>
  )
}

export default Tags
export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
