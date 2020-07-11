import React from 'react'
import { css } from '@emotion/core'
import theme from '../theme'
import paper from '../images/lightpaperfibers_@2x.png'
import IconEmail from './social-links/email'
import IconInstagram from './social-links/instagram'
import IconTwitter from './social-links/twitter'
import IconGithub from './social-links/github'
import IconLinkedIn from './social-links/linkedin'

const GetInTouch = () => {
  return (
    <div
      css={css`
        border: 2px solid rgba(136, 128, 113, 0.25);
        max-width: 864px;
        // height: 346px;
        margin: 0 auto calc(${theme.space[2]}px * 18);
        background-image: url(${paper});
      `}
    >
      <h2
        css={css`
          text-align: center;
          margin: calc(${theme.space[6]}px*1.5) auto ${theme.space[4]}px;
        `}
      >
        Get In Touch
      </h2>
      <p
        css={css`
          max-width: 500px;
          text-align: center;
          margin: 0 auto calc(${theme.space[2]}px*6);
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
          margin: 0 auto calc(${theme.space[2]}px*9);
        `}
      >
        <IconEmail />
        <IconInstagram />
        <IconTwitter />
        <IconGithub />
        <IconLinkedIn />
      </div>
    </div>
  )
}

export default GetInTouch
