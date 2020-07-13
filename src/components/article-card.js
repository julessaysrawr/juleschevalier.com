import React from 'react'
// import Link from './link'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import theme from '../theme'

const ArticleCard = props => {
  return (
    <div
      css={css`
        // flex: auto;
        background-color: ${theme.color.white};
        width: 424px;
        // height: 182px;
        height: auto;
        border: 2px solid rgba(136, 128, 113, 0.25);
        margin-bottom: 16px;
        transition: 0.3s;
        &:hover {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
      `}
    >
      <Link
        to="/"
        css={css`
          text-decoration: none;
        `}
      >
        <h3
          css={css`
            text-align: center;
            max-width: 350px;
            margin: 48px auto ${theme.space[4]}px;
          `}
        >
          {props.title}
          {/*   TODO: Add link to title */}
        </h3>
      </Link>

      <p
        css={css`
          text-align: center;
          color: ${theme.color.rawUmber};
          margin-bottom: 24px;
        `}
      >
        {props.topic}
        {/*   TODO: Add link to topic */}
      </p>
    </div>
  )
}

export default ArticleCard
