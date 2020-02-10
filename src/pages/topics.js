import React from 'react'
import kebabCase from 'lodash/kebabCase'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import LayoutMain from '../components/layout-main'
import theme from '../theme'
import Link from '../components/link'

const TopicssPage = ({
  data: {
    allMarkdownRemark: { group }
  }
}) => {
  return (
    <LayoutMain>
      <main className="non-flex-container">
        <h1
          css={css`
            padding-bottom: ${theme.space[4]}px;
          `}
        >
          Article Topics
        </h1>
        <ul>
          {group.map(tag => (
            <li
              css={css`
                padding-bottom: ${theme.space[3]}px;
              `}
              key={tag.fieldValue}
            >
              <Link type={'button'} hrefLocal={`/articles/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </LayoutMain>
  )
}

export default TopicssPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___topic) {
        fieldValue
        totalCount
      }
    }
  }
`
