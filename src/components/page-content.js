import React from 'react'
// import Link from './link'
// import { Link } from 'gatsby'
import { css } from '@emotion/core'
import theme from '../theme'

const PageContent = props => {
  return (
    <div
      css={css`
        background-color: ${theme.color.white};
        max-width: 1083px;
        // margin: -646px auto calc(${theme.space[2]}px*13);  // if height of paper is 860, and the white starts 214px down, need negative margin of 646px
        margin: 0 auto calc(${theme.space[2]}px*13);  // if height of paper is 860, and the white starts 214px down, need negative margin of 646px
        border: 2px solid rgba(136, 128, 113, 0.25);
        padding: 88px 109px;
        // height: 100%;
      `}
    >
      {props.children}
    </div>
  )
}

export default PageContent