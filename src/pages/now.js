import React from 'react'
import '../styles/main.scss'
import LayoutMain from '../components/layout-main'
import Emoji from '../components/emoji'
import Link from '../components/link'

const Now = () => (
  <LayoutMain
    title={`What I'm Doing Now | Jules Chevalier`}
    description={`What I'm currently up to. Now page for Jules Chevalier`}
  >
    <main className="flex-container">
      <div>
        <h3 className="space-below">What I'm doing now</h3>
        <p>
          Working towards a redesign of this site with this{' '}
          <Link href="dchevalier.io">talented human</Link>.
        </p>
        <p>
          Trying to stay healthy and sane during the pandemic. Grateful for home gym equipment,
          sunshine and video games.
        </p>
        {/* <p>
          Focusing my creative time on <Emoji symbol=" 🖋 " label="" /> writing.
        </p> */}
        <p>Trying to observe my thoughts and detach from them when possible.</p>
        {/* <p>
          Grateful to be a part of the team behind:{' '}
          <Link type={'basic'} href="https://be-ingoodcompany.com/">
            In Good Company
          </Link>
        </p> */}
        <p className="space-above">Updated on: May 9, 2020</p>

        <p className="space-above-m">
          (thanks to{' '}
          <Link type={'basic'} href="https://sivers.org/">
            Derek Sivers
          </Link>{' '}
          for this{' '}
          <Link type={'basic'} href="https://nownownow.com/about">
            idea
          </Link>
          )
        </p>
      </div>
    </main>
  </LayoutMain>
)

export default Now
