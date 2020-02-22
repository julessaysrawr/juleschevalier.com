import React from 'react'
import { css } from '@emotion/core'
import LayoutMain from '../components/layout-main'
import Link from '../components/link'

const Read = () => (
  <LayoutMain>
    <main className="non-flex-container">
      <h3 className="">Currently Reading Fiction: Dune Series</h3>
      <h3 className="space-below-m">Currently Reading: The Design of Everyday Things</h3>

      <h3 className="space-below-m">On Hold: Digital Minimalism</h3>

      <h3 className="space-below-m">Up Next: Stillness is the Key</h3>

      <h2>Blogs</h2>
      <ul
        css={css`
          list-style-type: none;
        `}
      >
        <li>
          <Link type={'basic'} href="https://m.signalvnoise.com">
            signal v noise
          </Link>
        </li>
        <li>
          <Link type={'basic'} href="https://www.freecodecamp.org/news/">
            freeCodeCamp
          </Link>
        </li>
        <li>
          <Link type={'basic'} href="https://www.theminimalists.com">
            The Minimalists
          </Link>
        </li>
        <li>
          <Link type={'basic'} href="https://sivers.org/">
            Derek Sivers
          </Link>
        </li>
        <li>
          <Link type={'basic'} href="https://zenhabits.net">
            Zen Habits
          </Link>
        </li>
        <li>
          <Link type={'basic'} href="https://seths.blog">
            Seth's Blog
          </Link>
        </li>
        <li>
          <Link type={'basic'} href="http://calnewport.com/blog/">
            Cal Newport
          </Link>
        </li>
      </ul>
      <h2 className="space-above-m">Style</h2>
      <ul>
        <li>
          <Link type={'basic'} href="http://www.uselesswardrobe.dk">
            Useless
          </Link>
        </li>
        <li>
          <Link type={'basic'} href="http://www.stylebee.ca">
            Stylebee
          </Link>
        </li>
        <li>
          <Link type={'basic'} href="http://www.un-fancy.com">
            Unfancy
          </Link>
        </li>
      </ul>
      <h2 className="space-above-m">Programming</h2>
      <ul>
        <li>
          <Link type={'basic'} href="https://www.reddit.com/r/reactjs/">
            /r/reactjs
          </Link>
        </li>
        <li>
          <Link type={'basic'} href="https://www.reddit.com/r/javascript/">
            /r/javascript
          </Link>
        </li>
      </ul>
      <h2 className="space-above-m">Longform</h2>
      <ul>
        <li>
          <Link type={'basic'} href="https://medium.com/">
            Medium
          </Link>
        </li>
        <li>
          <Link type={'basic'} href="https://read.amazon.com/">
            Kindle
          </Link>
        </li>
        <li>
          <Link type={'basic'} href="https://read.amazon.com/notebook">
            Kindle Highlights and Notes
          </Link>
        </li>
        <li>
          <Link type={'basic'} href="https://www.audible.com">
            Audible
          </Link>
        </li>
        <li>
          <p>Podcasts</p>
        </li>
      </ul>
    </main>
  </LayoutMain>
)

export default Read
