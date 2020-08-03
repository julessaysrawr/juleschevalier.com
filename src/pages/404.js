import React from 'react'
import { css } from '@emotion/core'
import theme from '../theme'
import paper from '../images/lightpaperfibers_@2x.png'
import LayoutMain from '../components/layout-main'
import Link from '../components/link'
import Emoji from '../components/emoji'
import image404 from '../images/404-Error-Cute.svg'
import { bpTabletSM } from '../lib/breakpoints'

const FourOhFour = () => (
  <LayoutMain>
    <main>
      <div
        css={css`
          background: linear-gradient(0deg, rgba(148, 112, 62, 0.05), rgba(148, 112, 62, 0.05)),
            url(${paper});
          background-repeat: repeat;
          // height: 100%;
          // padding-top: 100px;
          padding-top: ${theme.space[6]}px;
          border-bottom: 2px solid rgba(136, 128, 113, 0.25);

          // ${bpTabletSM} {
          //   height: 100vh;
          // }
        `}
      >
        <div
          css={css`
            max-width: ${theme.contentWidths.copyWidth}px;
            padding-bottom: 100px;
            margin: 0 auto;
            text-align: center;
          `}
        >
          <img
            src={image404}
            alt="Illustration of cat hanging inside the 0 of 404"
            css={css`
              width: ${theme.contentWidths.copyWidth}px;
              margin: 0 auto;
              ${bpTabletSM} {
                width: 90%;
              }
            `}
          />
          <div>
            <Link type="buttonVariableWidth" hrefLocal="/">
              Return To Homepage
            </Link>
          </div>
        </div>
      </div>
    </main>
  </LayoutMain>
)

export default FourOhFour
