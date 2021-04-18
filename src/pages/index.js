import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import theme from '../lib/theme'
import LayoutMain from '../components/layout-main'
import Link from '../components/link'
import paper from '../images/lightpaperfibers_@2x.png'
import Img from 'gatsby-image'
import GetInTouch from '../components/get-in-touch'
import TopicsList from '../components/topics-list'
import { bpPhone, bpTabletSM, bpTabletLG, bpMonitorMD } from '../lib/breakpoints'

const Index = ({ data }) => {
  const photoStyles = css`
    width: 424px;
    height: 296px;
    border: 2px solid ${theme.color.border};
    object-fit: cover;

    ${bpMonitorMD} {
      margin-bottom: ${theme.space[3]}px;
    }
  `
  return (
    <LayoutMain uri={''}>
      <main>
        <div
          css={css`
            background: linear-gradient(0deg, rgba(148, 112, 62, 0.05), rgba(148, 112, 62, 0.05)),
              url(${paper});
            background-repeat: repeat;
            height: ${theme.contentWidths.paperHeight}px;
            max-width: ${theme.contentWidths.maxPaperWidth}px;
            border: 2px solid ${theme.color.border};
            border-top: 0;
            margin: 0 auto;

            padding-top: calc(${theme.space[2]}px*29);

            ${bpPhone} {
              background-size: 100%; // this fixes the background image being pixelated on mobile
              padding-top: calc(${theme.space[2]}px*20);
              border-left: none;
              border-right: none;
            }
          `}
        >
          <div
            css={css`
              margin: 0 auto;
            `}
          >
            <h1
              css={css`
                max-width: 500px;
                text-align: center;
                margin: 0 auto ${theme.space[4]}px;

                ${bpPhone} {
                  text-align: left;
                  padding: 0 ${theme.space[4]}px;
                }
              `}
            >
              Designer, Engineer & Growth Catalyst
            </h1>
            <p
              css={css`
                max-width: ${theme.contentWidths.copyWidth}px;
                text-align: center;
                margin: 0 auto ${theme.space[6]}px;

                ${bpTabletSM} {
                  padding: 0 ${theme.space[4]}px;
                }
                ${bpPhone} {
                  text-align: left;
                  padding: 0 ${theme.space[4]}px;
                  margin-bottom: calc(${theme.space[2]}px*6);
                }
              `}
            >
              My mission is to energize people&apos;s courage to take action so they can achieve
              their highest vision. By day I am a designer & engineer passionate about creating
              experiences that empower people&apos;s lives. By night I am a writer and photographer
              centered on the navigating the inner world.
            </p>
            <div
              css={css`
                display: flex;
                justify-content: space-between;
                max-width: 441px;
                margin: 0 auto;

                ${bpPhone} {
                  max-width: 300px;
                  text-align: left;
                  padding: 0 ${theme.space[4]}px;
                  flex-wrap: wrap;
                  margin: 0;
                }
              `}
            >
              <Link type="buttonFixedWidth" hrefLocal="/about" description="Get To Know Me">
                Get To Know Me
              </Link>
              <div
                css={css`
                  padding-top: 14px; //this was used for inline link styling
                `}
              >
                <Link type="buttonInline" hrefLocal="/now" description="What I'm Doing Now">
                  What I&apos;m Doing Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          css={css`
            background-color: ${theme.color.white};
            max-width: 1000px;
            border: 2px solid ${theme.color.border};
            margin: -80px auto 0;
            padding: calc(${theme.space[2]}px*13) 0 calc(${theme.space[2]}px*13);

            ${bpPhone} {
              border-left: none;
              border-right: none;
              border-bottom: none;
              padding: calc(${theme.space[2]}px*12) 0 calc(${theme.space[2]}px*13);
            }
          `}
        >
          <h1
            css={css`
              text-align: center;
              margin: 0 auto ${theme.space[4]}px;
              max-width: 500px;

              ${bpPhone} {
                text-align: left;
                padding: 0 ${theme.space[4]}px;
              }
            `}
          >
            I Write About What Interests & Inspires Me
          </h1>
          <p
            css={css`
              text-align: center;
              max-width: ${theme.contentWidths.copyWidth}px;
              margin: 0 auto calc(${theme.space[5]}px*1.5);

              ${bpTabletSM} {
                padding: 0 ${theme.space[4]}px;
              }

              ${bpPhone} {
                text-align: left;
                padding: 0 ${theme.space[4]}px;
                margin-bottom: ${theme.space[4]}px;
              }
            `}
          >
            I am fascinated by the inner world and the profound power it has over our day-to-day
            experience. I write about having strategies to navigate life; whether it is your
            experience, the experience of others, or creative pursuits.
          </p>
          <TopicsList />
        </div>
        <hr
          css={css`
            display: none;

            ${bpPhone} {
              display: block;
              border-top: 2px solid ${theme.color.border};
              border-left: none;
              border-right: none;
              border-bottom: none;
              max-width: 85%;
              margin: 0 auto;
            }
          `}
        />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            padding-top: calc(${theme.space[2]}px*17);
            margin-bottom: 150px;

            ${bpPhone} {
              margin-bottom: 80px;
              padding-top: 80px;
            }
          `}
        >
          <h1
            css={css`
              text-align: center;
              margin: 0 auto ${theme.space[4]}px;
              max-width: 500px;

              ${bpPhone} {
                text-align: left;
                padding: 0 ${theme.space[4]}px;
                margin: 0 0 ${theme.space[4]}px;
              }
            `}
          >
            Explore What I See
          </h1>
          <p
            css={css`
                max-width: ${theme.contentWidths.copyWidth}px;
                margin: 0 auto ${theme.space[6]}px;
                text-align: center;

                ${bpTabletSM} {
                  padding: 0 ${theme.space[4]}px;
                }

                ${bpPhone} {
                  text-align: left;
                  padding: 0 ${theme.space[4]}px;
                  margin-bottom 56px;
                }
              `}
          >
            One of my favorite things to do is just wonder with a camera and see what beauty I can
            discover. Portraits are my way of showing someone the beauty that lives within them.
            These days I am inspired by the beauty of nature and the spark of life within each of
            us.
          </p>
          <div
            css={css`
              display: flex;
              margin: 0 auto;

              ${bpPhone} {
                justify-content: flex-start;
                margin: 0;
                padding: 0 ${theme.space[4]}px;
              }
            `}
          >
            <Link
              type="buttonFixedWidth"
              hrefLocal="/photography"
              description="View Photography Portfolio"
            >
              View Portfolio
            </Link>
          </div>
          <div
            css={css`
              margin: calc(${theme.space[2]}px*17) auto 0;
              text-align: center;
              display: flex;
              flex-wrap: wrap;
              justify-content: center;

              ${bpPhone} {
                margin-top: 72px;
                width: 100%;
              }
            `}
          >
            <Img
              fluid={data.dv.childImageSharp.fluid}
              alt="Death Valley"
              css={css`
                  ${photoStyles}
                  margin-right: ${theme.space[3]}px;

                  ${bpTabletSM} {
                    margin-right: 0;
                  }
                `}
            />
            <Img
              fluid={data.jt.childImageSharp.fluid}
              alt="Joshua Trees"
              css={css`
                  ${photoStyles}
                  margin-right: ${theme.space[3]}px;

                  ${bpTabletSM} {
                    margin-right: 0;
                  }
                `}
            />
            <Img
              fluid={data.dune.childImageSharp.fluid}
              alt="Sand dune with small green bush growing out the slope"
              css={css`
                ${photoStyles}
              `}
            />
          </div>
        </div>
        <GetInTouch />
      </main>
    </LayoutMain>
  )
}

export default Index

export const query = graphql`
  query {
    dv: file(relativePath: { eq: "homepage/IMG_6336.png" }) {
      childImageSharp {
        fluid(maxWidth: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jt: file(relativePath: { eq: "homepage/IMG_6182.png" }) {
      childImageSharp {
        fluid(maxWidth: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dune: file(relativePath: { eq: "homepage/IMG_6463.png" }) {
      childImageSharp {
        fluid(maxWidth: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
