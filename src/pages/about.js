import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import theme from '../lib/theme'
import LayoutMain from '../components/layout-main'
import Link from '../components/link'
import PageContent from '../components/page-content'
import GetInTouch from '../components/get-in-touch'
import { bpTabletSM, bpMonitorSM, bpPhone } from '../lib/breakpoints'
import PaperBackground from '../components/paper-background'

const About = ({ data }) => (
  <LayoutMain
    title={'About | Jules Chevalier'}
    description={'About Jules Chevalier'}
    uri={'/about'}
  >
    <main>
      <PaperBackground>
        <PageContent>
          <Img
            fluid={data.file.childImageSharp.fluid}
            css={css`
              width: 865px;
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
          />
          <div
            css={css`
              max-width: ${theme.contentWidths.copyWidth}px;
              margin: 0 auto;
            `}
          >
            <h1
              css={css`
                margin-bottom: ${theme.space[4]}px;
              `}
            >
              A Little About Me
            </h1>
            <p
              css={css`
                margin-bottom: 48px;
              `}
            >
              Hello there, my name is Jules and my pronouns are they/them. I am a Designer and
              Engineer living in Western Massachusetts. Creating experiences that humans enjoy and
              learn from is my passion. Lifting up and empowering others is my calling. Expanding
              the ideas of what&apos;s possible and what you are capable of is what I love my
              calling. Being able to provide resources to someone who feels stuck or restrained
              provides me with enormous gratification. You can find me talking Star Wars with my
              clever husband{' '}
              <Link type="inline" href="https://dchevalier.io/">
                David
              </Link>
              , being bossed around by our Corgi Lucius, being a human-powered transport for our cat
              General Grievous, or enjoying a quite moment of lap cuddles with our shy cat Mr.
              Gizmo.
            </p>
            <Link
              type="inline"
              hrefLocal="/now"
              description="Go to Now page to learn what I'm doing lately"
            >
              What I&apos;m Doing Now &gt;
            </Link>
            <h2
              css={css`
                margin: calc(${theme.space[2]}px*6) 0 ${theme.space[4]}px;
              `}
            >
              My Work
            </h2>
            <p>
              Problem solving is my favorite past time. On paper, I am a designer and full-stack
              developer, but really I am a learner and problem solver. I have a growth mindset and
              am energized by what I don&apos;t know. Currently I work on design systems at{' '}
              <Link type="inline" href="https://be-ingoodcompany.com/">
                MassMutual
              </Link>{' '}
              . I have had a previous career in medicine - but that changed the moment I learned SQL
              (my gateway language!).
            </p>
            <h2
              css={css`
                margin: calc(${theme.space[2]}px*6) 0 ${theme.space[4]}px;
              `}
            >
              Goals For This Site
            </h2>
            <p>
              This site exists because I want to share learnings and resources that have made an
              impact on my life. Often I wasn&apos;t able to find resources for navigating tough
              experiences, so I choose to create what I need. This site is also a place to show the
              non-work aspects of how I spend my time: writing and creating.
            </p>
          </div>
        </PageContent>
        <GetInTouch />
      </PaperBackground>
    </main>
  </LayoutMain>
)

export default About

export const query = graphql`
  query {
    file(relativePath: { eq: "jules2020.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 860, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
