import React from 'react'
import LayoutMain from '../components/layout-main'
import { css } from '@emotion/core'
import theme from '../theme'
import paper from '../images/lightpaperfibers_@2x.png'
// import Emoji from '../components/emoji'
import Link from '../components/link'
import GetInTouch from '../components/get-in-touch'
import nowImage from '../images/Jules-and-Grievy.png'
import PageContent from '../components/page-content'

const Now = () => (
  <LayoutMain
    title={`What I'm Doing Now | Jules Chevalier`}
    description={`What I'm currently up to. Now page for Jules Chevalier`}
  >
    <main>
      <div
        css={css`
        // TODO put this in theme?
          background-image: url(${paper});
          background-repeat: repeat;
          // padding-top: ${theme.space[7]}px;
          padding-top: 214px;
          border-bottom: 2px solid rgba(136, 128, 113, 0.25);
          height: 860px;
        `}
      >
        {/* <div
        css={css`
          background-color: ${theme.color.white};
          max-width: 1083px;
          margin: -646px auto calc(${theme.space[2]}px*13);  // if height of paper is 860, and the white starts 214px down, need negative margin of 646px
          // margin-bottom: calc(${theme.space[2]}px*13);
          border: 2px solid rgba(136, 128, 113, 0.25);
          padding: 88px 109px;
        `}
      > */}
        <PageContent>
          <img
            src={nowImage}
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

              <ul>
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

            {/* <p>
          Grateful to be a part of the team behind:{' '}
          <Link type={'basic'} href="https://be-ingoodcompany.com/">
            In Good Company
          </Link>
        </p> */}
            <Link
              type="inline"
              hrefLocal="/about"
              description="Learn more about me by going to the about page"
            >
              Learn More About Me &gt;
            </Link>

            {/* <p>
            Thanks to{' '}
            <Link type={'basic'} href="https://sivers.org/">
              Derek Sivers
            </Link>{' '}
            for the{' '}
            <Link type={'basic'} href="https://nownownow.com/about">
              now page idea
            </Link>
          </p> */}
          </div>
        </PageContent>
        <GetInTouch />
      </div>
    </main>
  </LayoutMain>
)

export default Now
