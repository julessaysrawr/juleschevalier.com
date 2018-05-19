import React from "react"
import '../styles/main.css'
import '../styles/queries.css'
import Nav from '../components/nav.js'
import Now from '../components/now.js'

export default () => 
<div>
  <header>
    <Nav />
  </header>
  <main className="flex-container">
    <Now />
  </main>
</div>