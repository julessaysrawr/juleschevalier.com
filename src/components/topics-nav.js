import React from 'react'
import { css } from '@emotion/core'
import Link from '../components/link'
import { bpPhone, bpTabletSM } from '../lib/breakpoints'

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

        ${bpTabletSM} {
          padding-left: 12px;
        }

        ${bpPhone} {
          margin: 24px auto 36px;
          justify-content: flex-start;
          padding-left: 24px;
        }
      `}
    >
      <Link
        hrefLocal="/topics/emotional-wellbeing/"
        type="buttonVariableWidth"
        description="Go to articles about Emotional Wellbeing"
      >
        Emotional Wellbeing
      </Link>
      <Link
        hrefLocal="/topics/technology/"
        type="buttonVariableWidth"
        description="Go to articles about Technology"
      >
        Technology
      </Link>
      <Link
        hrefLocal="/topics/intentional-living/"
        type="buttonVariableWidth"
        description="Go to articles about Intentional Living"
      >
        Intentional Living
      </Link>
      <Link
        hrefLocal="/topics/design/"
        type="buttonVariableWidth"
        description="Go to articles about Design"
      >
        Design
      </Link>
      <Link
        hrefLocal="/topics/inclusion/"
        type="buttonVariableWidth"
        description="Go to articles about Inclusion"
      >
        Inclusion
      </Link>
      <Link
        hrefLocal="/topics/recipes/"
        type="buttonVariableWidth"
        description="Go to articles about Recipes"
      >
        Recipes
      </Link>
      <Link
        hrefLocal="/topics/personal-essays/"
        type="buttonVariableWidth"
        description="o to articles about Personal Essays"
      >
        Personal Essays
      </Link>
      <Link
        hrefLocal="/articles"
        type="buttonVariableWidthPrimary"
        description="Go to all articles"
      >
        All Articles
      </Link>
    </div>
  )
}

export default TopicsNav
