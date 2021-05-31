import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import LayoutMain from '../components/layout-main'
import { css } from '@emotion/core'
// import theme from '../lib/theme'
// import Link from '../components/link'
import GetInTouch from '../components/get-in-touch'
import PageContent from '../components/page-content'
// import { bpPhone, bpTabletSM, bpTabletLG, bpMonitorSM } from '../lib/breakpoints'
import PaperBackground from '../components/paper-background'

const ArticleImages = ({ data }) => {
  const images = data.allMarkdownRemark.edges

  return (
    <LayoutMain
      title={`Article Images`}
      description={`All images used in articles`}
      uri={'/article-images'}
    >
      <main>
        <PaperBackground>
          <PageContent>
            <div
              css={css`
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
              `}
            >
              {images.map((image, i) => (
                <div
                  key={i}
                  css={css`
                    width: 45%;
                  `}
                >
                  <Img fluid={image.node.frontmatter.featuredImage.childImageSharp.fluid} />
                  <h3>{image.node.frontmatter.title}</h3>
                  <p>{image.node.frontmatter.topic}</p>
                </div>
              ))}
            </div>
          </PageContent>
          <GetInTouch />
        </PaperBackground>
      </main>
    </LayoutMain>
  )
}

export default ArticleImages

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___topic, order: ASC }) {
      edges {
        node {
          frontmatter {
            title
            topic
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
