import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import LayoutMain from '../components/layout-main'
import { css } from '@emotion/core'
import theme from '../lib/theme'
import Link from '../components/link'
import GetInTouch from '../components/get-in-touch'
import PageContent from '../components/page-content'
import { bpPhone, bpTabletSM, bpTabletLG, bpMonitorSM } from '../lib/breakpoints'
import PaperBackground from '../components/paper-background'

const Now = ({ data }) => (
  <LayoutMain
    title={`What I'm Doing Now | Jules Chevalier`}
    description={`What I'm currently up to. Now page for Jules Chevalier`}
    uri={'/now'}
  >
    <main>
      <PaperBackground>
        <PageContent>
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Jules with their cat General Grievous on their shoulders"
            css={css`
              width: 865px;
              max-width: 865px;
              // height: 468px;  //if we wanted photo heights to be consistent
              margin: 0 auto;
              border: 2px solid rgba(136, 128, 113, 0.25);
              object-fit: cover;
              margin-bottom: 80px;

              ${bpMonitorSM} {
                width: 100%;
                // height: 70%;
                // need width / 1.77
                object-fit: cover;
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
                Updated on: June 7th, 2021
              </p>

              <ul
                css={css`
                  li {
                    margin-left: ${theme.space[3]}px;
                  }
                `}
              >
                <li>Reflecting on how I want to define masculinity for myself</li>
                <li>Leaning into the cycles of nature like seasons and moons</li>
                <li>Beginning to make small plans now that we are vaccinated</li>
                <li>Discovering the depths of self to love and accept. </li>
                <li>🔍 Working on dismantling: ableism</li>
                <li>
                  🎨 Creativity: I started drawing recently, you can{' '}
                  <Link type={'inline'} href={'https://juleschevalier.myportfolio.com/drawings'}>
                    take a look
                  </Link>{' '}
                  at what I&apos;ve been doing
                </li>
                <li>🎮 Playing: Zelda Breath of the Wild</li>
                <li>
                  📝 Learning:{' '}
                  <Link type="inline" href="https://testingjavascript.com/">
                    Testing Javascript
                  </Link>
                </li>
                <li>
                  💼 Working on the design systems at{' '}
                  <Link
                    type={'inline'}
                    href={'https://www.massmutual.com/'}
                    description="massmutual.com"
                  >
                    MassMutual
                  </Link>
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
    file(relativePath: { eq: "now2021.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 865) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
