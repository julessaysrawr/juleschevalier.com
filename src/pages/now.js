import React from "react"
import '../styles/main.scss'
import Nav from '../components/nav.js'
import Now from '../components/now.js'

export default () => 
<div>
  <header>
    <Nav />
  </header>
  <div className="flex-container">
    <Now />
  </div>
</div>