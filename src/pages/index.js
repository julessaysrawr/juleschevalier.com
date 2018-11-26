import React from "react"
import cover from '../assets/peonies.jpg'
import Nav from '../components/nav.js'
import '../styles/main.scss'

export default () => 
<div>
  <Nav />
  <main className="flex-container">
    <img src={cover} className="cover" alt="White peonies flowers in soft light with a quiet mood"/>
  </main>
</div>
