import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import theme from '../lib/theme'
import { bpPhone } from '../lib/breakpoints'

/** Renders an article card component with link to the article page
 * @param {object} props
 * @param {string} props.to - local url
 * @param {string} props.title - title of article
 * @param {string} props.topic - article topic grouping
 */

const ArticleCard = props => {
  return (
    <Link
      to={props.to}
      css={css`
        text-decoration: none;
      `}
    >
      <div
        css={css`
          background-color: ${theme.color.white};
          width: 424px;
          height: auto;
          border: 2px solid ${theme.color.border};
          margin-bottom: 16px;
          margin-right: 16px;
          transition: 0.3s;
          &:hover {
            box-shadow: 1px 4px 15px ${theme.color.border};
          }

          ${bpPhone} {
            width: 100%;
          }
        `}
      >
        <h3
          css={css`
            text-align: center;
            max-width: 350px;
            margin: 48px auto ${theme.space[4]}px;

            ${bpPhone} {
              width: 300px;
              padding: 0 12px;
            }
          `}
        >
          {props.title}
        </h3>

        <p
          css={css`
            text-align: center;
            color: ${theme.color.rawUmber};
            margin-bottom: 24px;
            font-weight: 500;
          `}
        >
          {props.topic}
        </p>
      </div>
    </Link>
  )
}

export default ArticleCard
