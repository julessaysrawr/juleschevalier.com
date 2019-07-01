import React from 'react'
import { Helmet } from 'react-helmet'
import '../styles/main.scss'
import Nav from '../components/nav.js'
import Now from '../components/now.js'
import LayoutMain from '../components/layout-main'

export default () => (
    <LayoutMain
      title={`What I'm Doing Now | Jules Chevalier`}
      description={`What I'm currently up to. Now page for Jules Chevalier`}
    >
      <main className="flex-container">
        <Now />
      </main>
    </LayoutMain>
)
