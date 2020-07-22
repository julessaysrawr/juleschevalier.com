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
    // padding-top: calc(${theme.space[2]}px*1.5);
    // padding-top: 13px;
    padding-top: 10px;
    font-weight: 400;
    font-size: 20px;

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
        top: 0;
        // left: 22%;
        // left: 50%;
        // margin-left: 656px;
        // right: 50%;
        width: 900px;
        width: 1440px;

        max-width: 1440px;
        // margin: 0 auto;
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
              font-size: 30px;
              font-weight: 700;
              margin-bottom: 0;
              letter-spacing: -1px;
            `}
          >
            Jules Chevalier
          </p>
        </header>
      </Link>
      <nav
        css={css`
          display: flex;
          // margin: 0 336px;
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
          padding-top: 15px;
          // padding-top: 13px;
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

export default Nav
