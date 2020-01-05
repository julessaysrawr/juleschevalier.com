import React from 'react'
import '../styles/main.scss'
import LayoutMain from '../components/layout-main'
import Emoji from '../components/emoji'

const Now = () => (
  <LayoutMain
    title={`What I'm Doing Now | Jules Chevalier`}
    description={`What I'm currently up to. Now page for Jules Chevalier`}
  >
    <main className="flex-container">
      <div>
        <h3 className="space-below">What I'm doing now</h3>
        <p>
          Beginning to trust my body again by practicing intuitive eating.{' '}
          <Emoji symbol=" 🤔 🍽" label="" />
        </p>
        <p>
          Learning about accessibility <Emoji symbol=" 🔍" label="" />{' '}
          <Emoji symbol="💻" label="" />
        </p>
        <p>
          Reading the sci-fi series Dune <Emoji symbol=" 📖 🤓 📚" label="" />
        </p>
        <p>
          Focusing my creative time on <Emoji symbol=" 🖋 " label="" /> writing
        </p>
        <p>
          Grateful to be a part of the team behind:{' '}
          <a className="show-link" href="https://be-ingoodcompany.com/">
            In Good Company
          </a>
        </p>
        <p className="space-above">Updated on: January 05, 2020</p>

        <p className="space-above-m">
          (thanks to <a href="https://sivers.org/">Derek Sivers</a> for this{' '}
          <a href="https://nownownow.com/about">idea</a>)
        </p>
      </div>
    </main>
  </LayoutMain>
)

export default Now
