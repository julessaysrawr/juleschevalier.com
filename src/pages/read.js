import React from 'react';
import '../styles/main.css'
import '../styles/queries.css'
import Nav from '../components/nav.js'

export default () => 
<div>
  <header>
    <Nav />
  </header>
  <div className="non-flex-container">
    <ul>
      <li><a href="https://www.theminimalists.com" target="_blank">The Minimalists</a></li>
      <li><a href="https://sivers.org/" target="_blank">Derek Sivers</a></li>
      <li><a href="https://zenhabits.net" target="_blank">Zen Habits</a></li>
      <li><a href="https://seths.blog" target="_blank">Seth's Blog</a></li>
      <li><a href="http://calnewport.com/blog/" target="_blank">Cal Newport</a></li>
    </ul>
    <ul className="space-above-m">
    {/* if on iphone, open app, else open website */}
      <li><a href="https://medium.com/">Medium web</a></li>
      <li><a href="medium://">Medium app</a></li>
      <li><a href="kindle://">Kindle</a></li>
      <li><a href="audible://">Audible</a></li>
    </ul>
  </div>
</div>