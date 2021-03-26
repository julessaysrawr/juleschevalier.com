import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import theme from '../lib/theme'
import LayoutMain from '../components/layout-main'
import PageContent from '../components/page-content'
import GetInTouch from '../components/get-in-touch'
import ArticleShare from '../components/article-share'
import { bpPhone, bpTabletSM, bpTabletLG, bpMonitorSM } from '../lib/breakpoints'
import PaperBackground from '../components/paper-background'

export default function articleTemplate({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { BlogPostByPath } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = BlogPostByPath

  const { featuredImage } = frontmatter
  // const ogImagePath = featuredImage && featuredImage.childImageSharp.fluid.src // this was fixed

  const socialShareImage = data.SocialImage.frontmatter.featuredImage.childImageSharp.fixed.src
  // eslint-disable-next-line
  // console.log('data: ', data.SocialImage.frontmatter.featuredImage.childImageSharp.fixed.src);

  return (
    <LayoutMain
      title={`${frontmatter.title} | By Jules Chevalier`}
      image={socialShareImage}
      description={frontmatter.summary}
    >
      <main>
        <PaperBackground>
          <PageContent>
            <Img
              alt={frontmatter.title}
              fluid={frontmatter.featuredImage.childImageSharp.fluid}
              css={css`
                width: 865px;
                // height: 468px; // If we wanted to have consistent photo heights
                border: 2px solid ${theme.color.border};
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

                h2 {
                  margin: ${theme.space[6]}px 0 ${theme.space[4]}px;
                }

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

                // for nested uls/lis
                li ul {
                  margin-bottom: 0;
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

                // remove underline from autolink headers
                .anchor {
                  border: none;

                  &:hover {
                    border: none;
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
                    background-color: ${theme.color.paperMixin};
                    border: 2px solid ${theme.color.border};
                    padding: ${theme.space[5]}px;
                    display: block;
                    margin-bottom: ${theme.space[4]}px;
                  }
                }

                p {
                  code {
                    background-color: ${theme.color.paperMixin};
                    border: 2px solid ${theme.color.border};
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

                img {
                  ${bpPhone} {
                    width: 100%;
                  }
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
              <div dangerouslySetInnerHTML={{ __html: html }} />
              <ArticleShare
                props={frontmatter}
                title={frontmatter.title}
                slug={frontmatter.path}
                topic={frontmatter.topic}
              />
            </article>
          </PageContent>
          <GetInTouch />
        </PaperBackground>
      </main>
    </LayoutMain>
  )
}

// export const pageQuery = graphql`
//   query BlogPostByPath($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM Do, YYYY")
//         path
//         title
//         topic
//         featuredImage {
//           childImageSharp {
//             fluid(maxWidth: 860, quality: 75) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `

export const pageQuery = graphql`
  query($path: String!) {
    BlogPostByPath: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM Do, YYYY")
        path
        title
        summary
        topic
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 860, quality: 75) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    SocialImage: markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        featuredImage {
          childImageSharp {
            fixed(width: 1200, height: 630, cropFocus: CENTER, quality: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
