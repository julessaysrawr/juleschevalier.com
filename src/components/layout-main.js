import React from 'react'
import { Helmet } from 'react-helmet'
import { Global, css } from '@emotion/core'
import Nav from '../components/nav.js'
import theme from '../theme'

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

          @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans:wght@300;400;500&family=IBM+Plex+Serif:wght@400;700&display=swap');

          h1,
          h2,
          h3,
          h4 {
            font-family: 'IBM Plex Serif', serif; //TODO confirm font-family for h4 - different from design
            color: ${theme.color.black};
          }

          h1 {
            font-size: 42px; // TODO move this to theme.js
            // line-height: 1.2px;
            font-weight: 400;
          }

          h2 {
            font-size: 32px;
            font-weight: 400;
            // line-height: 1.2px;
          }

          h3 {
            font-size: 24px;
            font-weight: 400;
            line-height: 1.25;
          }

          h4 {
            font-size: 20px; // TODO confirm - this is a change from design (18px)
            font-weight: 400;
            line-height: 1.6;
          }

          p,
          a,
          li {
            font-family: 'IBM Plex Sans', sans-serif;
            color: ${theme.color.black};
            font-size: 18px;
            font-weight: 300;
            line-height: 1.6;
          }

          code {
            font-family: 'IBM Plex Mono', monospace;
            color: ${theme.color.black};
          }

          html,
          body {
            // // This defines what 1rem is
            // font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%

            // @include respond(md) {
            //   // width < 1200?
            //   font-size: 56.25%; //1 rem = 9px, 9/16 = 56.25%
            // }

            // @include respond(sm) {
            //   // width < 900?
            //   font-size: 50%; //1 rem = 8px, 8/16 = 50%
            // }

            // @include respond(xs) {
            //   font-size: 43.75%; //1 rem = 7px, 7/16 = 43.75%
            // }

            // @include respond(xl) {
            //   font-size: 75%; //1rem = 12, 12/16
            // }
            -webkit-font-smoothing: antialiased;
            -moz-font-smoothing: antialiased;
            background-color: ${theme.color.white};
          }

          ul {
            //https://css-tricks.com/almanac/properties/l/list-style/
            list-style-type: disc;
            list-style-position: inside;
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
      <Nav />
      {props.children}
    </div>
  )
}

export default LayoutMain
