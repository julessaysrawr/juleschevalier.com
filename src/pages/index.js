import React from "react"
import '../styles/main.css'
import '../styles/queries.css'
import cover from '../assets/peonies.jpg'
import Nav from '../components/nav.js'

export default () => 
<div>
  <header>
    <Nav />
  </header>
  <div className="flex-container">
  <img src={cover} className="cover" alt="White peonies flowers in soft light with a quiet mood"/>
  </div>
  {/* <main className="space-below-m">
    
  </main> */}
</div>
