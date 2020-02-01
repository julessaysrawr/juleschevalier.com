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

          html,
          body {
            // This defines what 1rem is
            font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%

            @include respond(md) {
              // width < 1200?
              font-size: 56.25%; //1 rem = 9px, 9/16 = 56.25%
            }

            @include respond(sm) {
              // width < 900?
              font-size: 50%; //1 rem = 8px, 8/16 = 50%
            }

            @include respond(xs) {
              font-size: 43.75%; //1 rem = 7px, 7/16 = 43.75%
            }

            @include respond(xl) {
              font-size: 75%; //1rem = 12, 12/16
            }
            -webkit-font-smoothing: antialiased;
            -moz-font-smoothing: antialiased;
            background-color: ${theme.color.white};
          }

          ul {
            list-style-type: none;
          }

          p {
            line-height: 1.75;
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
            'Jules Chevalier is an artist who creates using code, photography, writing, and design.'
          }
        />
        {/* Facebook */}
        <meta property="og:title" content="Jules Chevalier ▲ Progress Not Perfection" />
        <meta property="og:site_name" content="Jules Chevalier ▲ Progress Not Perfection" />
        <meta
          property="og:description"
          content="Jules Chevalier is an artist who creates using code, photography, writing, and design."
        />
        <meta property="og:image" content="https://juleschevalier.com/thumbnail.jpg" />
        <meta property="og:url" content="https://juleschevalier.com/" />
        {/* Twitter */}
        <meta name="twitter:title" content="Jules Chevalier ▲ Progress Not Perfection" />
        <meta
          name="twitter:description"
          content="Jules Chevalier is an artist who creates using code, photography, writing, and design."
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
