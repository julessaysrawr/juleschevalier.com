import React from 'react'
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'
import theme from '../theme'
import paper from '../images/lightpaperfibers_@2x.png'
import LayoutMain from '../components/layout-main'
import PageContent from '../components/page-content'
import GetInTouch from '../components/get-in-touch'
import ArticleShare from '../components/article-share'
import { bpPhone, bpTabletSM, bpTabletLG, bpMonitorSM } from '../lib/breakpoints'
import placeholderImage from '../images/Jules-and-Grievy.png'

export default function articleTemplate({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <LayoutMain title={`${frontmatter.title} | By Jules Chevalier`}>
      <main>
        <div
          css={css`
          background: linear-gradient(0deg, rgba(148, 112, 62, 0.05), rgba(148, 112, 62, 0.05)), url(${paper});
          background-repeat: repeat;
          // padding-top: ${theme.space[7]}px;
          background: linear-gradient(0deg, rgba(148, 112, 62, 0.05), rgba(148, 112, 62, 0.05)),
          url(${paper});
        background-repeat: repeat;
        height: ${theme.contentWidths.paperHeight}px;
        max-width: ${theme.contentWidths.maxPaperWidth}px;
        border: 2px solid rgba(136, 128, 113, 0.25);
        border-top: 0;
        margin: 0 auto;

          padding-top: 214px;
          border-bottom: 2px solid rgba(136, 128, 113, 0.25);
          height: 860px;

          ${bpTabletLG} {
            padding-top: 15%;
            border-right: none;
            border-left: none;
          }
          ${bpTabletSM} {
            padding-top: 20%;
          }

          ${bpPhone} {
            padding-top: 30%;
          }
        `}
        >
          <PageContent>
            <img
              src={placeholderImage}
              alt=""
              css={css`
                width: 865px;
                height: 468px;
                border: 2px solid rgba(136, 128, 113, 0.25);
                object-fit: cover;
                margin: 0 auto 80px;

                ${bpMonitorSM} {
                  width: 100%;
                  height: auto;
                }

                ${bpTabletSM} {
                  margin-bottom: 10%;
                }
              `}
            />
            {/* <div
              // this is a placeholder for photos
              css={css`
                width: 865px;
                height: 488px;
                background-color: ${theme.color.rawUmber};
                margin: 0 auto 80px;

                ${bpMonitorSM} {
                  width: 100%;
                  height: auto;
                }

                ${bpTabletSM} {
                  margin-bottom: 10%;
                }
              `}
            /> */}

            <article
              css={css`
                max-width: ${theme.contentWidths.copyWidth}px;
                margin: 0 auto;

                h1,
                h2,
                h3,
                h4 {
                  margin-bottom: ${theme.space[4]}px;
                }

                // li h4 {
                //   display: inline;
                // }

                ol,
                ul {
                  margin-bottom: 20px;
                }
                li {
                  margin-left: ${theme.space[3]}px;
                  margin-bottom: 0;

                  h4 {
                    display: inline;
                  }

                  p {
                    margin-bottom: ${theme.space[3]}px;
                    margin-bottom: 0;
                  }
                }

                //should be kept in sync with inline link.js styles
                a {
                  text-decoration: none;
                  background-color: ${theme.color.transparent};
                  color: ${theme.color.rawUmber};
                  font-weight: 500;
                  transition: 0.3s ease all;
                  border-bottom: 2px solid ${theme.color.rawUmber};
                  &:hover {
                    color: ${theme.color.rawUmberLight};
                    border-bottom: 2px solid ${theme.color.rawUmberLight};
                    transition: 0.3s ease all;
                  }
                }

                .gatsby-resp-image-link {
                  border: 2px solid transparent;
                  transition: 0.3s ease all;

                  &:hover {
                    border: 2px solid ${theme.color.rawUmberLight};
                    transition: 0.3s ease all;
                  }
                }

                blockquote {
                  border-left: 5px solid ${theme.color.border};
                  padding-left: ${theme.space[5]}px;
                  padding-top: 8px;
                  padding-bottom: 8px;
                  margin-bottom: ${theme.space[5]}px;

                  p {
                    margin: 0;
                  }
                }

                pre {
                  // wrap code text
                  white-space: pre-wrap; /* css-3 */
                  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
                  white-space: -pre-wrap; /* Opera 4-6 */
                  white-space: -o-pre-wrap; /* Opera 7 */
                  word-wrap: break-word;

                  code {
                    background-color: rgba(148, 112, 62, 0.05);
                    border: 2px solid rgba(136, 128, 113, 0.25);
                    padding: ${theme.space[5]}px;
                    display: block;
                    margin-bottom: ${theme.space[4]}px;
                  }
                }

                p {
                  code {
                    background-color: rgba(148, 112, 62, 0.05);
                    border: 2px solid rgba(136, 128, 113, 0.25);
                    padding: 4px;
                    word-break: keep-all;
                  }
                }

                strong {
                  font-weight: 500;
                }

                hr {
                  color: ${theme.color.rawUmber};
                  margin-bottom: ${theme.space[5]}px;
                }
              `}
            >
              <h1>{frontmatter.title}</h1>
              <p
                css={css`
                  font-weight: 400;
                `}
              >
                {frontmatter.date}
              </p>
              <div
                // css={css`
                //   max-width: ${theme.contentWidths.copyWidth}px;
                //   margin: 0 auto;
                // `}
                dangerouslySetInnerHTML={{ __html: html }}
              />
              <ArticleShare
                props={frontmatter}
                title={frontmatter.title}
                slug={frontmatter.path}
                topic={frontmatter.topic}
              />
            </article>
          </PageContent>
          <GetInTouch />
        </div>
      </main>
    </LayoutMain>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM Do, YYYY")
        path
        title
        topic
      }
    }
  }
`
