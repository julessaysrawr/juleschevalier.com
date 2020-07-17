import React from 'react'
import { css } from '@emotion/core'
import theme from '../theme'
import { Link } from 'gatsby'
import IconInstagram from './social-links/instagram'
import IconEmail from './social-links/email'
import IconTwitter from './social-links/twitter'
import IconGithub from './social-links/github'
import IconLinkedIn from './social-links/linkedin'

const Nav = () => {
  const pageLink = css`
    text-decoration: none;
    // margin: ${theme.space[2]}px ${theme.space[4]}px 0;
    margin: 0 ${theme.space[4]}px;
    padding-top: calc(${theme.space[2]}px*1.5);
    font-weight: 400;

    // line-height: 2;
    &:hover {
      text-decoration: underline;
    }
  `

  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        padding: ${theme.space[6]}px;
        position: absolute;
        width: 100%;
      `}
    >
      <Link
        to="/"
        css={css`
          text-decoration: none;
        `}
      >
        <header>
          <p
            css={css`
              font-family: 'IBM Plex Serif';
              font-size: 28px;
              font-weight: 700;
              margin-bottom: 0;
            `}
          >
            Jules Chevalier
          </p>
        </header>
      </Link>
      <nav
        css={css`
          display: flex;
        `}
      >
        <Link to="/articles" css={pageLink}>
          Writing
        </Link>
        <Link to="/photography" css={pageLink}>
          Photography
        </Link>
        <Link to="/about" css={pageLink}>
          About
        </Link>
      </nav>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          width: 184px;
          padding-top: calc(${theme.space[2]}px*1.5);
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

export default Nav
