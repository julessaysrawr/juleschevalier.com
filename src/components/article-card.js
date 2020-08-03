import React from 'react'
// import Link from './link'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import theme from '../theme'
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
          // flex: auto;
          background-color: ${theme.color.white};
          width: 424px;
          // height: 182px;
          height: auto;
          border: 2px solid rgba(136, 128, 113, 0.25);
          margin-bottom: 16px;
          margin-right: 16px;
          transition: 0.3s;
          &:hover {
            // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            box-shadow: 1px 4px 15px rgba(136, 128, 113, 0.25); //todo use border color
          }

          ${bpPhone} {
            width: 100%;
            // min-width: 320px;
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
            }
          `}
        >
          {props.title}
          {/*   TODO: Add link to title */}
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
          {/*   TODO: Add link to topic */}
        </p>
      </div>
    </Link>
  )
}

export default ArticleCard
