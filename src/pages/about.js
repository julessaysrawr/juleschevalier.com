import React from "react"
import Link from "gatsby-link";
import '../styles/main.css'
import '../styles/queries.css'
import bioPic from '../assets/jules.jpg'
import Nav from '../components/nav.js'
import Now from '../components/now.js'


export default () => 
<div>
  <header>
    <Nav/>
  </header>
  <main className="flex-container space-below-m">
    <div className="flex-column">
      <div className="profile-container">
        <img className="profile" src={ bioPic } alt="jules" />
      </div>
      <div className="">
        <h3 className="">Me in 10 seconds</h3>
        <p>Native nomad.  I currently live in Western Massachusetts with my handsome husband David and our kids: Mr. Gizmo, Lucius, and General Grievous.</p>
        <p>Prospector of adventure and beauty. Mindfulness.  Food is medicine.  Gymnastic strength training.  On a minimalist journey.</p>
        <p>INTJ, though most would guess I'm an extrovert.  Strategic and analytical, which leads to overthinking 😆</p>
        <p>I'm driven to improve through experiments.  My super power is I'm a growth catalyst.</p>
        <p>Interested in helping people.  Creating value that lasts.</p>
      </div>
    </div>
  </main>
    <div className="flex-container space-above space-below-m">
      <p>To find out what I'm currently up to, you can check out my <Link to='/now'>now page</Link>.</p>
    </div>
    <div className="non-flex-container space-above space-below-m">
      <h4>Want to get in touch with me?</h4>
      <p>jules says rawr at gmail dot com</p>
    </div>
</div>