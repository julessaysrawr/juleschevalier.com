import React from 'react'
import Link from './link'
import { Link as GatsbyLink } from 'gatsby'
import { css } from '@emotion/core'
import nameplate from '../images/juleschevalier.svg'
import theme from '../theme'
import device from '../device'

const Nav = () => {
  return (
    <div>
      <div
        css={css`
          display: flex;
          margin: ${theme.space[3]}px auto ${theme.space[5]}px;
          width: 900px;
          justify-content: space-between;

          ${device.tabletPro} {
            width: 90%;
          }

          ${device.phone} {
            flex-direction: column;
          }
        `}
      >
        <GatsbyLink to={'/'}>
          <p
            css={css`
              font-size: ${theme.headingSizes.h3};
              font-family: ${theme.fontFamily.raleway};
              padding: 0;
              margin: 0;
            `}
          >
            Jules Chevalier
          </p>
        </GatsbyLink>
        <nav
          css={css`
            display: flex;
            width: 400px;

            ${device.tabletPro} {
              width: 55%;
            }

            ${device.phone} {
              width: 100%;
            }
          `}
        >
          <ul
            css={css`
              position: relative;
              list-style: none;
              display: flex;
              justify-content: space-between;
              width: 100%;
              flex-wrap: wrap;

              li {
                font-size: ${theme.textSizes.paragraph};
                padding-top: calc(${theme.space[2]}px * 1.8);
              }
            `}
          >
            <li
              css={css`
                postion: relative;
                display: inline-block;
                &:hover ul {
                  display: block;
                }
              `}
            >
              <Link type={'navigation'} hrefLocal={'/topics'}>
                Articles{' '}
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
                  // opacity: 0.9;
                  // margin-left: -${theme.space[3]}px;
                  // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.19);

                  padding: 0 ${theme.space[3]}px ${theme.space[3]}px;
                `}
              >
                <li>
                  <Link type="navigation" hrefLocal={'/articles/intentional-living/'}>
                    Intentional Living
                  </Link>
                </li>
                <li>
                  <Link type="navigation" hrefLocal={'/articles/design/'}>
                    Design
                  </Link>
                </li>
                <li>
                  <Link type="navigation" hrefLocal={'/articles/technology/'}>
                    Technology
                  </Link>
                </li>
                <li>
                  <Link type="navigation" hrefLocal={'/articles/emotional-wellbeing/'}>
                    Emotional Wellbeing
                  </Link>
                </li>
                <li>
                  <Link type="navigation" hrefLocal={'/articles/personal-essays/'}>
                    Personal Essays
                  </Link>
                </li>
                <li>
                  <Link type="navigation" hrefLocal={'/articles'}>
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
