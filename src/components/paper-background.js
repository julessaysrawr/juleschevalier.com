import React from 'react'
import { css } from '@emotion/core'
import theme from '../lib/theme'
import paper from '../images/lightpaperfibers_@2x.png'
import { bpPhone, bpTabletSM, bpTabletLG } from '../lib/breakpoints'

const PaperBackground = props => {
  return (
    <div
      css={css`
        background: linear-gradient(0deg, rgba(148, 112, 62, 0.05), rgba(148, 112, 62, 0.05)),
          url(${paper});
        background-repeat: repeat;
        height: ${theme.contentWidths.paperHeight}px;
        max-width: ${theme.contentWidths.maxPaperWidth}px;
        border: 2px solid rgba(136, 128, 113, 0.25);
        border-top: 0;
        margin: 0 auto;

        padding-top: 214px;

        ${bpTabletLG} {
          padding-top: 15%;
          border-right: none;
          border-left: none;
        }
        ${bpTabletSM} {
          padding-top: 20%;
        }

        ${bpPhone} {
          padding-top: 30%;
        }
      `}
    >
      {props.children}
    </div>
  )
}

export default PaperBackground
