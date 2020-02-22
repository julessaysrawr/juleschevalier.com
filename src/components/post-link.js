import React from 'react'
import Link from './link'
import { css } from '@emotion/core'
import theme from '../theme'
// import nextIcon from '../images/icons/next.svg'

const PostLink = ({ post }) => (
  <div
    css={css`
      margin-bottom: ${theme.space[4]}px;
    `}
  >
    <Link type={'basic'} hrefLocal={post.frontmatter.path}>
      {/* <Link type={'list'} hrefLocal={props.hrefLocal}> */}
      {post.frontmatter.title}
    </Link>
  </div>
)

export default PostLink
