import React from 'react'
// import { Link } from 'gatsby'
import Link from './link'
import { css } from '@emotion/core'
import theme from '../theme'
import nextIcon from '../images/icons/next.svg'

const PostLink = ({ post }) => (
  <div
    css={css`
      margin: 1rem 0rem;
      font-size: 2rem;
    `}
  >
    <Link type={'list'} hrefLocal={post.frontmatter.path}>
      {/* <Link type={'list'} hrefLocal={props.hrefLocal}> */}
      <h3
        css={css`
          display: inline;
          padding: ${theme.space[2]}px 0;
          color: ${theme.color.greyDark};
          &:hover {
            color: ${theme.color.greyMedium};

            svg {
              transform: translateX(${theme.space[2]}px);
            }

            svg g g {
              fill: ${theme.color.greyMedium};
            }
          }
        `}
      >
        {post.frontmatter.title}
        {/* {props.title} */}

        <svg
          width="17px"
          height="18px"
          viewBox="0 0 17 32"
          version="1.1"
          css={css`
            margin-left: ${theme.space[1]}px;
            margin-bottom: -2px;
            &:hover {
              transform: translateX(20px);
            }
          `}
        >
          <title>Path</title>
          <g id="Page-1" stroke="none" fill="none">
            <g
              id="2020-Mobile-menu-open"
              transform="translate(-225.000000, -184.000000)"
              fill="#52524E"
              css={css`
                fill: ${theme.color.greyDark};
                &:hover {
                  fill: ${theme.color.greyMedium};
                }
              `}
            >
              <g id="Writing-Copy" transform="translate(75.000000, 175.000000)">
                <g
                  id="next-copy"
                  transform="translate(158.500000, 25.000000) rotate(90.000000) translate(-158.500000, -25.000000) translate(142.000000, 16.000000)"
                >
                  <path
                    d="M24.641331,8.12187487 L10.0820984,-6.63813309 C9.6050821,-7.1214438 8.83278175,-7.1206313 8.3565647,-6.6356331 C7.88071653,-6.15069739 7.88194611,-5.36513779 8.35902387,-4.88145208 L22.0516472,9.00005912 L8.35853203,22.8815078 C7.88151576,23.365256 7.88028618,24.1503156 8.35607287,24.6353138 C8.59479618,24.8784379 8.90754032,25 9.22028446,25 C9.53222937,25 9.84374393,24.8792504 10.0820369,24.6378138 L24.641331,9.87818088 C24.8710783,9.64580674 25,9.32955791 25,9.00005912 C25,8.67056034 24.8707095,8.35468651 24.641331,8.12187487 Z"
                    id="Path"
                    transform="translate(16.500000, 9.000000) rotate(-90.000000) translate(-16.500000, -9.000000) "
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
        {/* <span
          css={css`
            // line-height: 1;
            height: 20px;
          `}
        >
          <img
            css={css`
              height: 16px;
              margin-left: 10px;

              &::hover {
                margin-left: 30px;
              }
            `}
            src={nextIcon}
            alt=""
          />
        </span> */}
      </h3>
    </Link>
  </div>
)

export default PostLink
