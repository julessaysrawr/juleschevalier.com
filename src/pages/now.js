import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import LayoutMain from '../components/layout-main'
import { css } from '@emotion/core'
import theme from '../lib/theme'
// import Emoji from '../components/emoji'
import Link from '../components/link'
import GetInTouch from '../components/get-in-touch'
import nowImage from '../images/Jules-and-Grievy.png'
import PageContent from '../components/page-content'
import { bpPhone, bpTabletSM, bpTabletLG, bpMonitorSM } from '../lib/breakpoints'
import PaperBackground from '../components/paper-background'

const Now = ({ data }) => (
  <LayoutMain
    title={`What I'm Doing Now | Jules Chevalier`}
    description={`What I'm currently up to. Now page for Jules Chevalier`}
  >
    <main>
      <PaperBackground>
        <PageContent>
          {/* <img
            src={nowImage}
            alt=""
            css={css`
              width: 865px;
              height: 468px;
              margin: 0 auto;
              border: 2px solid rgba(136, 128, 113, 0.25);
              object-fit: cover;
              margin-bottom: 80px;

              ${bpMonitorSM} {
                width: 100%;
                height: auto;
              }

              ${bpTabletSM} {
                margin-bottom: 10%;
              }
            `}
          /> */}
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Jules with their cat General Grievious on their shoulders"
            css={css`
              width: 865px;
              max-width: 865px;
              // height: 468px;
              margin: 0 auto;
              border: 2px solid rgba(136, 128, 113, 0.25);
              object-fit: cover;
              margin-bottom: 80px;

              ${bpMonitorSM} {
                width: 100%;
                // height: 70%;
                // need width / 1.77
                object-fit: cover;

                // height: auto;
              }

              ${bpTabletSM} {
                margin-bottom: 10%;
              }
            `}
          />
          <div
            css={css`
              max-width: ${theme.contentWidths.copyWidth}px;
              margin: 0 auto;
            `}
          >
            <div
              css={css`
                margin-bottom: 56px;
              `}
            >
              <h1
                css={css`
                  margin-bottom: ${theme.space[4]}px;
                `}
              >
                What I&apos;m doing now
              </h1>
              <p
                css={css`
                  font-weight: 400;
                `}
              >
                Updated on: July 12th, 2020
              </p>

              <ul
                css={css`
                  li {
                    margin-left: ${theme.space[3]}px;
                  }
                `}
              >
                <li>
                  Refreshing this site thanks to the design effort of this{' '}
                  <Link type="inline" href="https://dchevalier.io">
                    talented human
                  </Link>
                  .
                </li>
                <li>
                  Grateful for purchasing an exercise bike recently. Doing cardio is what is giving
                  me the motivation to strength train (my favorite type of movement that brings me
                  joy).
                </li>
                <li>
                  Black Lives Matter: Learning how to practice allyship. Figuring out what my
                  anti-racism lane looks like.
                </li>
                <li>
                  Bringing in rituals as opportunities for intention setting. New & full moon
                  ceremonies for now.
                </li>
              </ul>
            </div>
            <Link
              type="inline"
              hrefLocal="/about"
              description="Learn more about me by going to the about page"
            >
              Learn More About Me &gt;
            </Link>
          </div>
        </PageContent>
        <GetInTouch />
      </PaperBackground>
    </main>
  </LayoutMain>
)

export default Now

export const query = graphql`
  query {
    file(relativePath: { eq: "now2020.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 865) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
