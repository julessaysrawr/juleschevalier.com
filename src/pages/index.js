import React, { Component } from 'react'
import { graphql } from 'gatsby'
// import Img from 'gatsby-image'
import { css } from '@emotion/core'
import theme from '../theme'

import LayoutMain from '../components/layout-main'
import Link from '../components/link'
import paper from '../images/lightpaperfibers_@2x.png'
import image1 from '../images/homepage/IMG_6336.png'
import image2 from '../images/homepage/IMG_6182.png'
import image3 from '../images/homepage/IMG_6463.png'
import GetInTouch from '../components/get-in-touch'
import TopicsList from '../components/topics-list'
import { bpPhone, bpTabletSM, bpTabletLG } from '../lib/breakpoints'

class Index extends Component {
  render() {
    const photoStyles = css`
      width: 424px;
      height: 296px;
      border: 2px solid rgba(136, 128, 113, 0.25);
      // margin-right: ${theme.space[3]}px;
      object-fit: cover;

      ${bpTabletLG} {
        width: 80%;
        height: auto;
      }

      ${bpTabletSM} {
        width: 90%;
      }
    `
    return (
      <LayoutMain title={'🏡 | Jules Chevalier ▲ Progress Not Perfection'}>
        {/*TODO: use site query*/}
        <main>
          <div
            css={css`
              background: linear-gradient(0deg, rgba(148, 112, 62, 0.05), rgba(148, 112, 62, 0.05)),
                url(${paper});
              background-repeat: repeat;
              height: ${theme.contentWidths.paperHeight}px;
              max-width: ${theme.contentWidths.maxPaperWidth}px;
              border: 2px solid rgba(136, 128, 113, 0.25);
              border-top: 0;
              margin: 0 auto;

              padding-top: calc(${theme.space[2]}px*29);

              ${bpPhone} {
                height: 900px;
                padding-top: calc(${theme.space[2]}px*20);
              }
            `}
          >
            <div
              css={css`
                // max-width: 1000px;
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

                  ${bpPhone} {
                    text-align: left;
                    padding: 0 ${theme.space[4]}px;
                  }
                `}
              >
                My mission is to energize people&apos;s courage to take action so they can achieve
                their highest vision. By day I am a designer & engineer passionate about creating
                experiences that empower people&apos;s lives. By night I am a writer and
                photographer centered on the navigating the inner world.
              </p>
              <div
                css={css`
                  display: flex;
                  justify-content: space-between;
                  max-width: 450px;
                  margin: 0 auto;

                  ${bpPhone} {
                    text-align: left;
                    padding: 0 ${theme.space[4]}px;
                    flex-direction: column;
                    margin: 0;
                  }
                `}
              >
                <Link type="buttonFixedWidth" hrefLocal="/about" description="Get To Know Me">
                  Get To Know Me
                </Link>
                <div
                  css={css`
                    padding-top: ${theme.space[3]}px;

                    ${bpPhone} {
                      margin-top: calc(${theme.space[2]}px*6);
                    }
                  `}
                >
                  <Link
                    type="inline"
                    hrefLocal="/now"
                    description="What I'm Doing Now"
                    css={css`
                      padding-top: 15px !important;
                    `}
                  >
                    What I&apos;m Doing Now &gt;
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            css={css`
              background-color: ${theme.color.white};
              // height: 800px;
              max-width: 1000px;
              border: 2px solid rgba(136, 128, 113, 0.25);
              margin: -80px auto 0;
              padding: calc(${theme.space[2]}px*13) 0 calc(${theme.space[2]}px*17);
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
              I Write About What Inspires & Interests Me
            </h1>
            <p
              css={css`
                text-align: center;
                max-width: ${theme.contentWidths.copyWidth}px;
                margin: 0 auto calc(${theme.space[5]}px*1.5);

                ${bpPhone} {
                  text-align: left;
                  padding: 0 ${theme.space[4]}px;
                }
              `}
            >
              Phasellus eu dui id ex consectetur volutpat. Donec molestie velit in magna bibendum,
              ut bibendum diam iaculis. Sed sollicitudin purus nulla. Fusce vel aliquet nisl. Nunc
              mattis dignissim diam id rhoncus.
            </p>
            <TopicsList />
            {/* <div
              css={css`
                display: flex;
                justify-content: space-between;
                width: 450px;
                height: 300px;
                flex-wrap: wrap;
                margin: 0 auto;
              `}
            >
              <Link type="buttonFixedWidth" hrefLocal="/topics/personal-essays/" description="">
                Personal Essays
              </Link>
              <Link type="buttonFixedWidth" hrefLocal="/topics/emotional-wellbeing/" description="">
                Emotional Wellbeing
              </Link>
              <Link type="buttonFixedWidth" hrefLocal="/topics/intentional-living/" description="">
                Intentional Living
              </Link>
              <Link type="buttonFixedWidth" hrefLocal="/topics/recipes/" description="">
                Recipes
              </Link>
              <Link type="buttonFixedWidth" hrefLocal="/topics/design/" description="">
                Design
              </Link>
              <Link type="buttonFixedWidth" hrefLocal="/topics/technology/" description="">
                Technology
              </Link>
              <Link type="buttonFixedWidth" hrefLocal="/topics/inclusion/" description="">
                Inclusion
              </Link>
              <Link type="buttonFixedWidthPrimary" hrefLocal="/articles" description="">
                All Topics
              </Link>
            </div> */}
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              padding-top: calc(${theme.space[2]}px*17);
              margin-bottom: 150px;
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
                }
              `}
            >
              One of my favorite things to do is just wonder with a camera and see what beauty I can
              discover. Portraits are my way of showing someone the beauty that lives within them.
              Occasionally I will work with someone to create portraits that show. These days I am
              inspired by the beauty of nature and the spark of life within each of us.
            </p>
            <div
              css={css`
                display: flex;
                flex-direction: column;
                margin: 0 auto;

                ${bpPhone} {
                  margin: 0;
                  padding: 0 ${theme.space[4]}px;
                }
              `}
            >
              <div
                css={css`
                  // width: 300px;
                  // height: auto;
                  a {
                    display: block;

                    ${bpPhone} {
                      display: inline;
                    }
                  }
                `}
              >
                <Link type="buttonFixedWidth" hrefLocal="/" description="">
                  View Portfolio
                </Link>
              </div>
            </div>
            <div
              css={css`
                margin: calc(${theme.space[2]}px*17) auto 0;
                text-align: center;
                max-width: 1304px;
              `}
            >
              {/* TODO: switch to gatsby image? */}
              <img
                src={image1}
                alt=""
                css={css`
                  ${photoStyles}
                  margin-right: ${theme.space[3]}px;
                  // TODO remove this below laptop size or when begins to wrap

                  ${bpTabletLG} {
                    margin: 0;
                  }
                `}
              />
              <img
                src={image2}
                alt=""
                css={css`
                ${photoStyles}
                  margin-right: ${theme.space[3]}px;

                  ${bpTabletLG} {
                    margin: 0;
                  }
                `}
              />
              <img
                src={image3}
                alt=""
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
}

export default Index

export const query = graphql`
  query {
    peonies: file(relativePath: { eq: "peonies.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    beach: file(relativePath: { eq: "beach-path.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
