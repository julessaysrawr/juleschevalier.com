import React from 'react'
import { css } from '@emotion/core'
import theme from '../theme'
import Link from '../components/link'

const TopicsNav = () => {
  return (
    <div
      css={css`
        margin: 42px auto 80px;
        text-align: center;
        max-width: 600px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        a {
          margin-right: 12px;
          margin-top: 12px;
          font-size: 16px;
        }
      `}
    >
      <Link hrefLocal="/topics/design/" type="buttonVariableWidth">
        Design
      </Link>
      <Link hrefLocal="/topics/emotional-wellbeing/" type="buttonVariableWidth">
        Emotional Wellbeing
      </Link>
      <Link hrefLocal="/topics/inclusion/" type="buttonVariableWidth">
        Inclusion
      </Link>
      <Link hrefLocal="/topics/intentional-living/" type="buttonVariableWidth">
        Intentional Living
      </Link>
      <Link hrefLocal="/topics/personal-essays/" type="buttonVariableWidth">
        Personal Essays
      </Link>
      <Link hrefLocal="/topics/recipes/" type="buttonVariableWidth">
        Recipes
      </Link>
      <Link hrefLocal="/topics/technology/" type="buttonVariableWidth">
        Technology
      </Link>
      <Link hrefLocal="/articles" type="buttonVariableWidthPrimary">
        All Articles
      </Link>
    </div>
  )
}

export default TopicsNav
