import React from 'react'
import { Helmet } from 'react-helmet'
import { Global, css } from '@emotion/core'
import Nav from '../components/nav.js'
import theme from '../lib/theme'
import { bpPhone } from '../lib/breakpoints'

const LayoutMain = props => {
  return (
    <div>
      <Global
        styles={css`
          *,
          *::after,
          *::before {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300&family=IBM+Plex+Sans:wght@300;400;500&family=IBM+Plex+Serif:wght@400;700&display=swap');

          h1,
          h2,
          h3,
          h4 {
            font-family: 'IBM Plex Serif', serif; //TODO confirm font-family for h4 - different from design
            color: ${theme.color.black};
          }

          h1 {
            font-size: ${theme.textSizes.h1};
            line-height: 50px;
            font-weight: 400;
            letter-spacing: -1px;
            text-transform: capitalize;

            ${bpPhone} {
              font-size: ${theme.textSizes.h1Mobile};
            }
          }

          h2 {
            font-size: ${theme.textSizes.h2};
            font-weight: 400;
            line-height: 38px;
            text-transform: capitalize;
            ${bpPhone} {
              font-size: ${theme.textSizes.h2Mobile};
            }
          }

          h3 {
            font-size: ${theme.textSizes.h3};
            font-weight: 400;
            line-height: 30px;
            text-transform: capitalize;
            ${bpPhone} {
              font-size: ${theme.textSizes.h3Mobile};
            }
          }

          h4 {
            font-size: ${theme.textSizes.h4}; // TODO confirm - this is a change from design (18px)
            font-weight: 400;
            line-height: 1.7;
            text-transform: capitalize;
          }

          p,
          a,
          li {
            font-family: 'IBM Plex Sans', sans-serif;
            color: ${theme.color.black};
            font-size: ${theme.textSizes.paragraph};
            font-weight: 300;
            line-height: 1.7;
          }

          code {
            font-family: 'IBM Plex Mono', monospace;
            font-weight: 300;
            font-size: 16px;
            font-size: ${theme.textSizes.code};
            color: ${theme.color.black};
          }

          html,
          body {
            box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
            -moz-font-smoothing: antialiased;
            background-color: ${theme.color.white};
          }

          ul {
            //https://css-tricks.com/almanac/properties/l/list-style/
            list-style-type: disc;
            padding-left: ${theme.space[3]}px;
          }

          ol {
            padding-left: ${theme.space[3]}px;
          }

          li {
            margin-bottom: ${theme.space[3]}px;
          }

          p {
            line-height: 1.6;
            margin-bottom: ${theme.space[4]}px;
          }
        `}
      />
      <Helmet>
        <title> {props.title || 'Jules Chevalier ▲ Progress Not Perfection'}</title>
        <meta
          name="description"
          content={
            props.description ||
            `Jules Chevalier is an artist who creates using design, code, writing, and photography.`
          }
        />
        {/* Facebook */}
        <meta property="og:title" content="Jules Chevalier ▲ Progress Not Perfection" />
        <meta property="og:site_name" content="Jules Chevalier ▲ Progress Not Perfection" />
        <meta
          property="og:description"
          content="Jules Chevalier is an artist who creates using design, code, writing, and photography."
        />
        <meta property="og:image" content="https://juleschevalier.com/thumbnail.jpg" />
        <meta property="og:url" content="https://juleschevalier.com/" />
        {/* Twitter */}
        <meta name="twitter:title" content="Jules Chevalier ▲ Progress Not Perfection" />
        <meta
          name="twitter:description"
          content="Jules Chevalier is an artist who creates using design, code, writing, and photography."
        />
        <meta name="twitter:image" content="https://juleschevalier.com/thumbnail.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <html lang="en" />
      </Helmet>
      <div
        css={css`
          // margin: 0 auto;
          // display: block;
          // position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <Nav />
      </div>
      {props.children}
    </div>
  )
}

export default LayoutMain
