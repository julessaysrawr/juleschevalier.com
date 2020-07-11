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
              font-size: 28px; // TODO: add font size to theme
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
        <Link
          to="/articles"
          css={css`
            text-decoration: none;
          `}
        >
          <p
            css={css`
              margin: ${theme.space[2]}px ${theme.space[4]}px 0;
              text-decoration: none;
            `}
          >
            Writing
          </p>
        </Link>
        <Link
          to="/photography"
          css={css`
            text-decoration: none;
          `}
        >
          <p
            css={css`
              margin: ${theme.space[2]}px ${theme.space[4]}px 0;
              text-decoration: none;
            `}
          >
            Photography
          </p>
        </Link>
        <Link
          to="/about"
          css={css`
            text-decoration: none;
          `}
        >
          <p
            css={css`
              margin: ${theme.space[2]}px ${theme.space[4]}px 0;
              text-decoration: none;
            `}
          >
            About
          </p>
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
