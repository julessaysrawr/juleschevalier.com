import React from 'react'
import { css } from '@emotion/core'
import theme from '../lib/theme'
import LayoutMain from '../components/layout-main'
import Link from '../components/link'
import PageContent from '../components/page-content'
import PaperBackground from '../components/paper-background'

const Read = () => (
  <LayoutMain>
    <main>
      <PaperBackground>
        <PageContent>
          <h1
            css={css`
              margin-bottom: ${theme.space[5]}px;
            `}
          >
            Read
          </h1>
          {/* <h3
            css={css`
              margin-bottom: ${theme.space[4]}px;
            `}
          >
            Currently reading: The Power Of Now
          </h3>
          <h3
            css={css`
              margin-bottom: ${theme.space[4]}px;
            `}
          >
            Up Next: Stillness is the Key
          </h3> */}

          <div>
            <h2
              css={css`
                margin: ${theme.space[6]}px 0 ${theme.space[5]}px;
              `}
            >
              Blogs
            </h2>
            <ul
              css={css`
                list-style-type: none;
              `}
            >
              <li>
                <Link href="https://m.signalvnoise.com">signal v noise</Link>
              </li>
              <li>
                <Link href="https://www.freecodecamp.org/news/">freeCodeCamp</Link>
              </li>
              <li>
                <Link href="https://www.theminimalists.com">The Minimalists</Link>
              </li>
              <li>
                <Link href="https://sivers.org/">Derek Sivers</Link>
              </li>
              <li>
                <Link href="https://zenhabits.net">Zen Habits</Link>
              </li>
              <li>
                <Link href="https://seths.blog">Seth&apos;s Blog</Link>
              </li>
              <li>
                <Link href="http://calnewport.com/blog/">Cal Newport</Link>
              </li>
              <li>
                <Link href="https://www.swyx.io">swyx</Link>
              </li>
              <li>
                <Link href="https://www.joshwcomeau.com">Josh Comeau</Link>
              </li>
              <li>
                <Link href="https://www.ladybug.dev">Ladybug Podcast</Link>
              </li>
              <li>
                <Link href="https://inquisitivehuman.com/blogs">Inquisitive Human</Link>
              </li>
            </ul>
            <h2
              css={css`
                margin: ${theme.space[6]}px 0 ${theme.space[5]}px;
              `}
            >
              Web Comics
            </h2>
            <ul
              css={css`
                list-style-type: none;
              `}
            >
              <li>
                <Link href="http://www.lunarbaboon.com">LUNARBABOON</Link>
              </li>
              <li>
                <Link href="https://www.nathanwpyle.art">Strange Planet (go to instagram)</Link>
              </li>
            </ul>
            {/* <h2
              css={css`
                margin: ${theme.space[6]}px 0 ${theme.space[5]}px;
              `}
            >
              Style
            </h2>
            <ul
              css={css`
                list-style-type: none;
              `}
            >
              <li>
                <Link href="http://www.uselesswardrobe.dk">Useless</Link>
              </li>
              <li>
                <Link href="http://www.stylebee.ca">Stylebee</Link>
              </li>
              <li>
                <Link href="http://www.un-fancy.com">Unfancy</Link>
              </li>
            </ul> */}
          </div>
        </PageContent>
      </PaperBackground>
    </main>
  </LayoutMain>
)

export default Read
