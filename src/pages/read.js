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
        <h2>Blogs</h2>
        <ul>
          <li><a href="https://www.theminimalists.com" target="_blank">The Minimalists</a></li>
          <li><a href="https://sivers.org/" target="_blank">Derek Sivers</a></li>
          <li><a href="https://zenhabits.net" target="_blank">Zen Habits</a></li>
          <li><a href="https://seths.blog" target="_blank">Seth's Blog</a></li>
          <li><a href="http://calnewport.com/blog/" target="_blank">Cal Newport</a></li>
        </ul>
        <h2 className="space-above-m">Longform</h2>
        <ul>
          <li><a href="https://medium.com/" target="_blank">Medium</a></li>
          <li><a href="https://read.amazon.com/" target="_blank">Kindle</a></li>
          <li><a href="https://read.amazon.com/notebook" target="_blank">Kindle Highlights and Notes</a></li>
          <li><a href="https://www.audible.com" target="_blank">Audible</a></li>
          <li><p>Podcasts</p></li>
        </ul>
      </div>
    </div>
