import React from 'react'
// import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import theme from '../theme'
import paper from '../images/lightpaperfibers_@2x.png'
// import Emoji from '../components/emoji'
import LayoutMain from '../components/layout-main'
import Link from '../components/link'
import PageContent from '../components/page-content'
import aboutImage from '../images/beach-path.jpg'
import GetInTouch from '../components/get-in-touch'

const About = () => (
  <LayoutMain title={'About | Jules Chevalier'} description={'About Jules Chevalier'}>
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

          padding-top: 214px;
        `}
      >
        <PageContent>
          <img
            src={aboutImage}
            alt=""
            css={css`
              width: 865px;
              height: 468px;
              margin: 0 auto;
              border: 2px solid rgba(136, 128, 113, 0.25);
              object-fit: cover;
              margin-bottom: 80px;
            `}
          />
          <div
            css={css`
              width: ${theme.contentWidths.copyWidth}px;
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
              Hello there, My name is Jules. I am a designer and engineer living in western
              Massachusetts. My pronouns are they/them. Creating experiences that humans enjoy and
              learn from is my passion. Lifting up and empowering others is my calling. Being able
              to provide resources to someone who feels stuck or restrained provides me with
              enormous gratification. You can find me talking Star Wars with my clever husband{' '}
              <Link type="inline" href="">
                David
              </Link>
              , being bossed around by our Corgi Lucius, being a human-powered transport for our cat
              General Grievous, or enjoying a quite moment of lap cuddles with our shy cat Mr.
              Gizmo.
            </p>
            <Link type="inline" hrefLocal="/now">
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
              am energized by what I don&apos;t know. Currently I work for{' '}
              <Link type="inline" href="https://be-ingoodcompany.com/">
                In Good Company
              </Link>{' '}
              which is a learning lab for{' '}
              <Link type="inline" href="https://www.massmutual.com/">
                MassMutual
              </Link>
              . Financial education is something I care deeply about and I feel great purpose to
              help build this vision. I have had a previous career in medicine - but that changed
              the moment I learned SQL (my gateway language!).
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
      </div>
      {/* <div className="flex-container space-below-m">
        <div className="flex-column">
          <div className="">
            <h3 className="">About Jules</h3>
            <p>
              I am a lifelong learner with a growth mindset. I’ve been told I’m passionate, curious,
              strategic, and driven. My super power is I am growth catalyst. I want to help others
              do more of what fuels them.
            </p>
            <p>
              I currently work as a software engineer, and I've had a previous career in medicine.
            </p>
            <p>
              I have{' '}
              <Link
                type={'basic'}
                href="https://bobsutton.typepad.com/my_weblog/2006/07/strong_opinions.html"
              >
                strong opinions that are weakly held
              </Link>
              . I will debate the best path forward, and if you convince me I will drop the previous
              approach in an instant.
            </p>
            <p>I am driven by logic, though I value the wisdom in intuition.</p>
            <p>I am observant and hyper self-aware.</p>
            <p>I am highly empathetic, and try to see situations from the other perspectives.</p>
            <p>I am a defender and don&apos;t like to hear you talk down about yourself.</p>
            <p>I am always looking for ways to be more inclusive and be aware of my privileges.</p>
            <p>I think deeply about problems, and often frameworks of problem solving.</p>
            <p>I am outspoken and can raise the engagement of a room.</p>
            <p>
              I am happier in small groups where I already know people. I am comfortable to
              introduce myself in small settings.
            </p>
            <p>I aim to live intentionally, according to my personal values. </p>
            <div className="values">
              <h3 className="center">Values</h3>
              <div className="values-list">
                <p>Growth</p>
                <p>Experiences</p>
                <p>Wellness</p>
                <p>Creative Expression</p>
                <p>Simplicity</p>
              </div>
            </div>
            <div>
              <h3>Personal Philosophy</h3>
              <p>
                I believe that the life you want begins with a vision before you can allign your
                actions.
              </p>
              <p>I believe in progress over perfection.</p>
              <p>
                I believe in solving the pain of the problems you have today, and not giving any
                energy to the challenges you might have ‘some day’.
              </p>
              <p>I believe in turning obstacles into opportunities.</p>
              <p>
                I practice gratitude and try to find the positive, especially when things are hard.
              </p>
              <p>
                I try to focus my efforts on the very limited things that are within my control.
              </p>
              <p>I reject the idea of busy, and deprioritize until things feel more sustainable.</p>
              <p>
                I believe in the practice of removing everything, and choosing only what you want to
                keep. I aspire to non-attachment.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </main>
  </LayoutMain>
)

export default About

export const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "jules2019.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
