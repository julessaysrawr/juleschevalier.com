import React from 'react'
import { css } from '@emotion/core'
import theme from '../lib/theme'
import Link from '../components/link'
import { bpPhone } from '../lib/breakpoints'

const TopicsList = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-around;
        // justify-content: space-evenly;  // this doesn't work in edge with flexbox, so controlling by width instead

        // max-width: 476px; //TODO negative margin to really center this
        max-width: 452px; //TODO negative margin to really center this

        flex-wrap: wrap;
        margin: 0 auto;

        ${bpPhone} {
          justify-content: flex-start;
          padding-left: 24px;

          a {
            margin-right: 12px;
          }
        }

        a {
          margin-top: 12px;
        }
      `}
    >
      <Link
        type="buttonFixedWidth"
        hrefLocal="/topics/emotional-wellbeing/"
        description="Go to articles about Emotional Wellbeing"
      >
        Emotional Wellbeing
      </Link>
      <Link
        type="buttonFixedWidth"
        hrefLocal="/topics/technology/"
        description="Go to articles about Technology"
      >
        Technology
      </Link>
      <Link
        type="buttonFixedWidth"
        hrefLocal="/topics/intentional-living/"
        description="Go to articles about Intentional Living"
      >
        Intentional Living
      </Link>
      <Link
        type="buttonFixedWidth"
        hrefLocal="/topics/design/"
        description="Go to articles about Design"
      >
        Design
      </Link>
      <Link
        type="buttonFixedWidth"
        hrefLocal="/topics/inclusion/"
        description="Go to articles about Inclusion"
      >
        Inclusion
      </Link>
      <Link
        type="buttonFixedWidth"
        hrefLocal="/topics/recipes/"
        description="Go to articles about Recipes"
      >
        Recipes
      </Link>
      <Link
        type="buttonFixedWidth"
        hrefLocal="/topics/personal-essays/"
        description="o to articles about Personal Essays"
      >
        Personal Essays
      </Link>
      <Link type="buttonFixedWidthPrimary" hrefLocal="/articles" description="Go to all articles">
        All Articles
      </Link>
    </div>
  )
}

export default TopicsList
