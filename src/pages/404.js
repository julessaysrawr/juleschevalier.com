import React from 'react'
import { Link } from 'gatsby'
import '../styles/main.scss'
import Nav from '../components/nav.js'
import Emoji from '../components/emoji'

export default () => (
  <div>
    <Nav />
    <main>
      <div className="flex-container space-above-m space-below-m">
        <h1>
          Whoops something went wrong <Emoji symbol="😬" label="" />
        </h1>
      </div>
      <div className="flex-container space-above-m">
        <Link to="/" className="show-link">
          Go back
        </Link>
      </div>
    </main>
  </div>
)
