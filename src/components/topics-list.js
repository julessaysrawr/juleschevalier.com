import React from 'react'
import { css } from '@emotion/core'
import theme from '../theme'
import Link from '../components/link'
import { bpPhone } from '../lib/breakpoints'

const TopicsList = () => {
  return (
    <div
      css={css`
        display: flex;
        // justify-content: space-between;
        // justify-content: center;
        justify-content: space-evenly;
        max-width: 476px; //TODO negative margin to really center this
        // height: 300px;
        flex-wrap: wrap;
        margin: 0 auto;

        ${bpPhone} {
          justify-content: flex-start;
          // align-items: flex-start;
          padding-left: 24px;

          a {
            margin-right: 12px;
          }
        }

        a {
          // margin-right: 12px;
          margin-top: 12px;
        }
      `}
    >
      <Link type="buttonFixedWidth" hrefLocal="/topics/personal-essays/" description="">
        Personal Essays
      </Link>
      <Link type="buttonFixedWidth" hrefLocal="/topics/emotional-wellbeing/" description="">
        Emotional Wellbeing
      </Link>
      <Link type="buttonFixedWidth" hrefLocal="/topics/intentional-living/" description="">
        Intentional Living
      </Link>
      <Link type="buttonFixedWidth" hrefLocal="/topics/recipes/" description="">
        Recipes
      </Link>
      <Link type="buttonFixedWidth" hrefLocal="/topics/design/" description="">
        Design
      </Link>
      <Link type="buttonFixedWidth" hrefLocal="/topics/technology/" description="">
        Technology
      </Link>
      <Link type="buttonFixedWidth" hrefLocal="/topics/inclusion/" description="">
        Inclusion
      </Link>
      <Link type="buttonFixedWidthPrimary" hrefLocal="/articles" description="">
        All Topics
      </Link>
    </div>
  )
}

export default TopicsList
