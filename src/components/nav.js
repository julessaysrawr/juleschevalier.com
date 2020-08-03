import React, { useState } from 'react'
import { css } from '@emotion/core'
import theme from '../theme'
import { Link } from 'gatsby'
import IconInstagram from './social-links/instagram'
import IconEmail from './social-links/email'
import IconTwitter from './social-links/twitter'
import IconGithub from './social-links/github'
import IconLinkedIn from './social-links/linkedin'
import { bpTabletLG } from '../lib/breakpoints'

const Nav = () => {
  const [open, setOpen] = useState(false)

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

    ${bpTabletLG} {
      // text-align: center;
      // margin: 0 auto;
      font-size: ${theme.textSizes.h1Mobile};

      ${
        open === true
          ? 'display: flex; justify-content: center; text-align: center; margin: 0 auto;'
          : ''
      }
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

        // width: 1440px;
        width: 100%;
        max-width: 1440px;

        ${bpTabletLG} {

          padding: ${theme.space[5]}px ${theme.space[4]}px;
        }

        ${open === true
          ? 'position: absolute; top: 0; left: 0; background-color: white; height: 100vh; width: 100vw; flex-direction: column; z-index: 1;'
          : ''}
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

          ${bpTabletLG} {
            display: none;

            ${open === true
              ? 'display: flex; flex-direction: column; justify-content: center;'
              : ''}
          }
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

          ${bpTabletLG} {
            display: none;

            ${open === true
              ? 'display: flex; justify-content: space-between; margin: 0 auto; align-self: flex-end;'
              : ''}
          }
        `}
      >
        <IconEmail url={'mailto:hellothere@juleschevalier.com'} />
        <IconInstagram />
        <IconTwitter url={'https://twitter.com/julessaysrawr'} />
        <IconGithub />
        <IconLinkedIn url={'https://www.linkedin.com/in/jules-chevalier-35587337'} />
      </div>
      <div
        // MOBILE NAV ICON
        css={css`
          display: none;

          ${bpTabletLG} {
            display: block;
            position: absolute;
            // background: #8e44ad;
            padding: 10px;
            height: 40px;
            cursor: pointer;
            right: 16px;
          }
        `}
        onClick={() => setOpen(!open)}
      >
        <div
          css={css`
            width: 35px;
            height: 3px;
            background-color: ${theme.color.black};
            margin: 6px 0;
            transition: 0.4s;
            border-radius: 5px;

            // if menu is open
            // -webkit-transform: rotate(-45deg) translate(-9px, 5px);
            // transform: rotate(-45deg) translate(-9px, 5px);
            ${open === true
              ? '-webkit-transform: rotate(-45deg) translate(-9px, 5px); transform: rotate(-45deg) translate(-9px, 5px);'
              : ''}
          `}
        />
        <div
          css={css`
            width: 35px;
            height: 3px;
            background-color: ${theme.color.black};
            margin: 6px 0;
            transition: 0.4s;
            border-radius: 5px;

            // if menu is open
            // opacity: 0;
            ${open === true ? 'opacity: 0;' : ''}
          `}
        />
        <div
          css={css`
            width: 35px;
            height: 3px;
            background-color: ${theme.color.black};
            margin: 6px 0;
            transition: 0.4s;
            border-radius: 5px;

            // if menu is open
            // -webkit-transform: rotate(45deg) translate(-8px, -4px);
            // transform: rotate(45deg) translate(-8px, -4px);
            ${open === true
              ? '-webkit-transform: rotate(45deg) translate(-8px, -4px); transform: rotate(45deg) translate(-8px, -4px);'
              : ''}
          `}
        />
      </div>
    </div>
  )
}

export default Nav
