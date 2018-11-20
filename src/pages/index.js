import React from "react"
import cover from '../assets/peonies.jpg'
import Nav from '../components/nav.js'
import '../styles/main.scss'

export default () => 
<div>
  <header>
    <Nav />
  </header>
  <div className="flex-container">
  <img src={cover} className="cover" />
  </div>
</div>
