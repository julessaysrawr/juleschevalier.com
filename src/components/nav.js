import React, { useState } from 'react'
import { css } from '@emotion/core'
import useWindowSize from '../hooks/useWindowSize'
import theme from '../lib/theme'
import { Link } from 'gatsby'
import IconEmail from './social-links/email'
import IconGithub from './social-links/github'
import IconLinkedIn from './social-links/linkedin'
import { bpTabletLG } from '../lib/breakpoints'

const Nav = () => {
  const [open, setOpen] = useState(false)

  const windowSize = useWindowSize()

  const pageLink = css`
    text-decoration: none;
    margin: 0 ${theme.space[4]}px;
    padding-top: 10px;
    font-weight: 400;
    font-size: 20px;

    display: inline-block;
    vertical-align: middle;

    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);

    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${theme.color.black};
      height: 2px;

      -ms-transform: translateY(4px);
      -webkit-transform: translateY(4px);
      -moz-transform: translateY(4px);
      transform: translateY(4px);

      -webkit-transition-property: transform;
      transition-property: transform;

      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;

      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
    }

    &:hover::before {
      -ms-transform: translateY(0);
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      transform: translateY(0);
    }

    ${bpTabletLG} {
      // text-align: center;
      // margin: 0 auto;
      font-size: ${theme.textSizes.h1Mobile};

      ${open === true
        ? 'display: flex; justify-content: center; text-align: center; margin: 0 auto;'
        : ''}
    }
  `

  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        padding: ${theme.space[6]}px;
        padding-top: 48px;
        position: absolute;
        top: 0;

        width: 100%;
        max-width: 1440px;

        ${bpTabletLG} {
          padding: ${theme.space[5]}px ${theme.space[4]}px;
        }
        ${open === true
          ? `position: absolute; top: 0; left: 0; background-color: ${theme.color.paperBeige};
          height: ${windowSize.height}px; width: 100vw; flex-direction: column; z-index: 1; position: fixed;`
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
        <Link to="/articles" css={pageLink} aria-label="Go to all articles">
          Writing
        </Link>
        <Link to="/photography" css={pageLink} aria-label="Go to photography page">
          Photography
        </Link>
        <Link to="/about" css={pageLink} aria-label="Go to about page">
          About
        </Link>
      </nav>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          width: 130px;
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
        <IconGithub />
        <IconLinkedIn url={'https://www.linkedin.com/in/jules-chevalier'} />
      </div>
      <div
        // MOBILE NAV ICON
        css={css`
          display: none;

          ${bpTabletLG} {
            display: block;
            position: absolute;
            padding: 10px;
            padding-top: 9px;
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
