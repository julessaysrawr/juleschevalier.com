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
        <h3 className="space-below-m">Currently reading: I Will Teach You To Be Rich</h3>
        <h2>Blogs</h2>
        <ul>
          <li><a href="https://www.theminimalists.com" target="_blank" rel="noopener noreferrer">The Minimalists</a></li>
          <li><a href="https://sivers.org/" target="_blank" rel="noopener noreferrer">Derek Sivers</a></li>
          <li><a href="https://zenhabits.net" target="_blank" rel="noopener noreferrer">Zen Habits</a></li>
          <li><a href="https://seths.blog" target="_blank" rel="noopener noreferrer">Seth's Blog</a></li>
          <li><a href="http://calnewport.com/blog/" target="_blank" rel="noopener noreferrer">Cal Newport</a></li>
        </ul>
        <h2 className="space-above-m">Style</h2>
        <ul>
          <li><a href="http://www.uselesswardrobe.dk" target="_blank" rel="noopener noreferrer">Useless</a></li>
          <li><a href="http://www.stylebee.ca" target="_blank" rel="noopener noreferrer">Stylebee</a></li>
          <li><a href="http://www.un-fancy.com" target="_blank" rel="noopener noreferrer">Unfancy</a></li>
        </ul>
        <h2 className="space-above-m">Programming</h2>
        <ul>
          <li><a href="https://www.reddit.com/r/reactjs/" target="_blank" rel="noopener noreferrer">/r/reactjs</a></li>
          <li><a href="https://www.reddit.com/r/javascript/" target="_blank" rel="noopener noreferrer">/r/javascript</a></li>
        </ul>
        <h2 className="space-above-m">Longform</h2>
        <ul>
          <li><a href="https://medium.com/" target="_blank" rel="noopener noreferrer">Medium</a></li>
          <li><a href="https://read.amazon.com/" target="_blank" rel="noopener noreferrer">Kindle</a></li>
          <li><a href="https://read.amazon.com/notebook" target="_blank" rel="noopener noreferrer">Kindle Highlights and Notes</a></li>
          <li><a href="https://www.audible.com" target="_blank" rel="noopener noreferrer">Audible</a></li>
          <li><p>Podcasts</p></li>
        </ul>
      </div>
    </div>

