import React from "react"
import { Helmet } from 'react-helmet'
import '../styles/main.scss'
import Nav from '../components/nav.js'
import Now from '../components/now.js'

export default () => 
<div>
  <Helmet>
    <title>Now | Jules Chevalier</title>
    <meta name="description" content="What I'm currently up to. Now page for Jules Chevalier" />
  </Helmet>
  <Nav />
  <main className="flex-container">
    <Now />
  </main>
</div>