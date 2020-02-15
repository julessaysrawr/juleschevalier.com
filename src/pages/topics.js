import React from 'react'
import kebabCase from 'lodash/kebabCase'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import LayoutMain from '../components/layout-main'
import theme from '../theme'
import Link from '../components/link'
import PostLink from '../components/post-link'

const TopicssPage = ({
  data: {
    allMarkdownRemark: { group }
  }
}) => {
  return (
    <LayoutMain>
      <main className="non-flex-container">
        <h2
          css={css`
            padding-bottom: ${theme.space[4]}px;
          `}
        >
          Article Topics
        </h2>
        <ul>
          {group.map(topic => (
            <li
              css={css`
                padding-bottom: ${theme.space[3]}px;
              `}
              key={topic.fieldValue}
            >
              {/* eslint-disable-next-line */}
              {console.log('topic: ', topic)}
              {/* eslint-disable-next-line */}
              {console.log('topic.fieldValue: ', topic.fieldValue)}
              {/* <PostLink
                key={topic.fieldValue}
                hrefLocal={`/articles/${kebabCase(topic.fieldValue)}/`}
                title={topic.fieldValue}
              /> */}
              <Link hrefLocal={`/articles/${kebabCase(topic.fieldValue)}/`}>
                {topic.fieldValue} ({topic.totalCount})
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
