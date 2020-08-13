import React from 'react'
import { css } from '@emotion/core'
import theme from '../lib/theme'
import paper from '../images/lightpaperfibers_@2x.png'
import IconEmail from './social-links/email'
import IconInstagram from './social-links/instagram'
import IconTwitter from './social-links/twitter'
import IconGithub from './social-links/github'
import IconLinkedIn from './social-links/linkedin'
import { bpPhone, bpTabletSM } from '../lib/breakpoints'

const GetInTouch = () => {
  return (
    <div
      css={css`
        border: 2px solid rgba(136, 128, 113, 0.25);
        max-width: 800px;
        // height: 346px;
        margin: 0 auto calc(${theme.space[2]}px * 18);
        background: linear-gradient(0deg, rgba(148, 112, 62, 0.05), rgba(148, 112, 62, 0.05)),
          url(${paper});

        ${bpTabletSM} {
          border-right: none;
          border-left: none;
          margin-bottom: 0;
        }
      `}
    >
      <h2
        css={css`
          text-align: center;
          // margin: calc(${theme.space[6]}px*1.5) auto ${theme.space[4]}px;
          margin: calc(${theme.space[2]}px*7) auto ${theme.space[4]}px;
          font-size: ${theme.textSizes.h1};
          line-height: 50px;
          font-weight: 400;
          letter-spacing: -1px;
        `}
      >
        Get In Touch
      </h2>
      <p
        css={css`
          max-width: 500px;
          text-align: center;
          margin: 0 auto calc(${theme.space[2]}px*6);

          ${bpPhone} {
            padding: 0 24px;
          }
        `}
      >
        Like something I wrote? Want to create portraits together? Have cat photos you want to
        share? Let&apos;s connect!
      </p>
      <div
        css={css`
          max-width: 246px;
          display: flex;
          justify-content: space-between;
          margin: 0 auto calc(${theme.space[2]}px*7);
        `}
      >
        <IconEmail url={'mailto:hellothere@juleschevalier.com'} />
        <IconInstagram />
        <IconTwitter url={'https://twitter.com/julessaysrawr'} />
        <IconGithub />
        <IconLinkedIn url={'https://www.linkedin.com/in/jules-chevalier-35587337'} />
      </div>
    </div>
  )
}

export default GetInTouch
