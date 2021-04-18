import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Global, css } from '@emotion/core'
import Nav from '../components/nav.js'
import theme from '../lib/theme'
import { bpPhone } from '../lib/breakpoints'

const LayoutMain = props => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            thumbnail
            description
          }
        }
      }
    `
  )

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

          @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300&family=IBM+Plex+Sans:wght@300;400;500&family=IBM+Plex+Serif:wght@400;700&display=block');

          h1,
          h2,
          h3,
          h4 {
            font-family: 'IBM Plex Serif', Georgia, serif;
            color: ${theme.color.black};
          }

          h1 {
            font-size: ${theme.textSizes.h1};
            line-height: 1.2;
            font-weight: 400;
            letter-spacing: -1px;
            text-transform: capitalize;

            ${bpPhone} {
              font-size: ${theme.textSizes.h1Mobile};
              line-height: 1.2;
            }
          }

          h2 {
            font-size: ${theme.textSizes.h2};
            font-weight: 400;
            line-height: 1.2;
            text-transform: capitalize;
            ${bpPhone} {
              font-size: ${theme.textSizes.h2Mobile};
            }
          }

          h3 {
            font-size: ${theme.textSizes.h3};
            font-weight: 400;
            line-height: 1.2;
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
            font-family: 'IBM Plex Sans', Helvetica, Arial, sans-serif;
            color: ${theme.color.black};
            font-size: ${theme.textSizes.paragraph};
            font-weight: 300;
            line-height: 1.7;
          }

          code {
            font-family: 'IBM Plex Mono', Monaco, Courier, monospace;
            font-weight: 300;
            font-size: 16px;
            font-size: ${theme.textSizes.code};
            color: ${theme.color.black};
            line-height: 1.5;
          }

          ::selection {
            background: ${theme.color.rawUmberLight};
          }

          html,
          body {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            -moz-font-smoothing: antialiased;
            -font-smoothing: antialiased;
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
        <title> {props.title || data.site.siteMetadata.title}</title>
        <meta
          name="description"
          content={props.description || data.site.siteMetadata.description}
        />
        <meta name="author" content="Jules Chevalier" />
        <html lang="en" />

        {/* ----- Facebook Open Graph ----- */}
        <meta property="og:type" content={props.pageType || 'website'} />
        <meta property="article:author" content="Jules Chevalier" />
        <meta property="og:title" content={props.title || data.site.siteMetadata.title} />
        <meta property="og:site_name" content={data.site.siteMetadata.title} />
        <meta
          property="og:description"
          content={props.description || data.site.siteMetadata.description}
        />
        <meta
          property="og:image"
          content={
            props.image
              ? `https://juleschevalier.com${props.image}`
              : data.site.siteMetadata.thumbnail
          }
        />
        <meta property="og:image:alt" content={props.imageAlt || ''} />
        <meta
          property="og:url"
          content={`https://juleschevalier.com${props.uri}` || data.site.siteMetadata.siteUrl}
        />
        <meta property="og:locale" content="en_US"></meta>

        {/* ----- Twitter ----- */}
        <meta name="twitter:title" content={props.title || data.site.siteMetadata.title} />
        <meta
          name="twitter:description"
          content={props.description || data.site.siteMetadata.description}
        />
        <meta
          name="twitter:url"
          content={`https://juleschevalier.com${props.uri}` || data.site.siteMetadata.siteUrl}
        />
        <meta
          name="twitter:image"
          content={
            props.image
              ? `https://juleschevalier.com${props.image}`
              : data.site.siteMetadata.thumbnail
          }
        />
        <meta name="twitter:image:alt" content={props.imageAlt || ''} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div
        css={css`
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
