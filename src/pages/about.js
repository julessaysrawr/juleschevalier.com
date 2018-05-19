import React from "react"
import '../styles/main.css'
import '../styles/queries.css'
import bioPic from '../assets/jules.jpg'
import Nav from '../components/nav.js'

export default () => 
<div>
  <header>
    <Nav/>
  </header>
  <main className="space-below-m">
    <div className="card">
      <div>
        <img className="profile" src={ bioPic } alt="jules" />
      </div>
      <div className="cards">
        <div className="card-content">
          <h3 className="space-below">Me in 10 seconds</h3>
          <p>Native nomad.  I currently live in Western Massachusetts with my handsome husband David and our kids: Mr. Gizmo, Lucius, and General Grievous.</p>
          <p>Prospector of adventure and beauty. Mindfulness.  Food is medicine.  Gymnastic strength training.  On a minimalist journey.</p>
          <p>INTJ, though most would guess I'm an extravert.  Strategic and analytical, which leads to overthinking 😆</p>
          <p>I'm driven to improve through experiments.  My super power is I'm a growth catalyst.</p>
          <p>Interested in helping people.  Creating value that lasts.</p>
        </div>
        <div className="card-content space-above">
          <h3 className="space-below">What I'm doing now</h3>
          <p>Letting go and finding I am happier with less</p>
          <p>Trying to live in the present moment</p>
          <p>Becoming a morning person</p>
          <p>Employed in software engineering</p>
          <p>Experimenting with 75% plant based diet.  Keto-ish.</p>
          <p className="space-above">Updated on: January 27, 2018</p>
        </div>
      </div>
    </div>
  </main>
</div>
