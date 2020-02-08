import React from 'react'
// import { Link } from 'gatsby'
import Link from './link'
import { css } from '@emotion/core'
import theme from '../theme'
import '../styles/main.scss'

const PostLink = ({ post }) => (
  <div
    css={css`
      margin: 1rem 0rem;
      font-size: 2rem;
    `}
  >
    <Link type="articles-list" hrefLocal={post.frontmatter.path}>
      <h2
        css={css`
          color: ${theme.color.primary};
          padding: ${theme.space[2]}px 0;

          &:hover {
            color: ${theme.color.primaryLight};
          }
        `}
      >
        {post.frontmatter.title}
      </h2>
    </Link>
  </div>
)

export default PostLink
