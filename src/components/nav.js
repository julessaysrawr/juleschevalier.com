import React from 'react'
import Link from './link'
import { css } from '@emotion/core'
import theme from '../theme'
import device from '../device'

const Nav = () => {
  return (
    <div>
      <Link hrefLocal="/">
        <header
          css={css`
            text-align: center;
            margin: ${theme.space[4]}px 0 ${theme.space[5]}px;
          `}
        >
          <p
            css={css`
              font-size: calc(${theme.headingSizes.h4} * 2);
              font-family: ${theme.fontFamily.raleway};
              margin-bottom: 0px;
            `}
          >
            Jules Chevalier
          </p>
          <h3
            css={css`
              color: ${theme.color.greyMedium};
              font-style: italic;
              font-weight: 300;
              margin-top: ${theme.space[0]}px;
            `}
          >
            Progress not perfection
          </h3>
        </header>
      </Link>
      <div style={{ display: 'flex' }}>
        <nav
          css={css`
            display: flex;
            width: 700px;
            border-top: 1px solid ${theme.color.greyMedium};
            border-bottom: 1px solid ${theme.color.greyMedium};
            margin: 2rem auto 3rem auto;
            margin: 0 auto ${theme.space[4]}px auto;}
            padding: 1rem 0;

            ${device.tablet} {
              width: 85%;
            }
          `}
        >
          <ul
            css={css`
              position: relative;
              list-style: none;
              display: flex;
              justify-content: space-around;
              width: 100%;
              flex-wrap: wrap;

              li {
                margin: calc(${theme.space[2]}px * 1.5) ${theme.space[3]}px;
                font-size: ${theme.textSizes.paragraph};
              }
            `}
          >
            {/* <li>
              <Link type={'navigation'} hrefLocal={'/'}>
                Home
              </Link>
            </li> */}
            <li
              css={css`
                postion: relative;
                display: inline-block;
                &:hover ul {
                  display: block;
                }
              `}
            >
              <Link type={'navigation'} hrefLocal={'/blog'}>
                Blog{' '}
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="10px"
                  height="10px"
                  viewBox="0 0 451.847 451.847"
                >
                  <g>
                    <path
                      fill={`${theme.color.greyDark}`}
                      d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
		c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
		c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
                    />
                  </g>
                </svg>
              </Link>
              <ul
                css={css`
                  display: none;
                  position: absolute;
                  z-index: 1;
                  background-color: ${theme.color.white};
                  margin-left: -${theme.space[3]}px;
                  &:hover li {
                    &:hover {
                      // background-color: ${theme.color.errorRedLight};
                    }
                  }
                `}
              >
                <li>
                  <Link type="navigation" hrefLocal={'/tags/intentional-living/'}>
                    Intentional Living
                  </Link>
                </li>
                <li>
                  <Link type="navigation" hrefLocal={'/tags/technology/'}>
                    Technology
                  </Link>
                </li>
                <li>
                  <Link type="navigation" hrefLocal={'/tags/navigating-emotions/'}>
                    Navigating Emotions
                  </Link>
                </li>
                <li>
                  <Link type="navigation" hrefLocal={'/blog'}>
                    All
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link type={'navigation'} hrefLocal={'/photography'}>
                Photography
              </Link>
            </li>
            <li>
              <Link type={'navigation'} hrefLocal={'/about'}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Nav
