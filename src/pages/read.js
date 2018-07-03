import React from 'react';
import '../styles/main.css'
import '../styles/queries.css'
import Nav from '../components/nav.js'

function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

function displayWebOrApp() {
  if (!isMobileDevice) {
    return (
      <div>
        <li>Mobile</li>
        <li><a href="medium://">Medium</a></li>
        <li><a href="kindle://">Kindle</a></li>
        <li><a href="audible://">Audible</a></li>
        <li><a href="podcast://">Podcasts</a></li>
      </div>
    );
   } else {
    return (
      <div>
        <li>Web</li>
        <li><a href="https://medium.com/" target="_blank">Medium</a></li>
        <li><a href="https://read.amazon.com/">Kindle</a></li>
        <li><a href="https://www.audible.com">Audible</a></li>
        <li>Podcasts</li>
      </div>
    );
  }
}

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
      {displayWebOrApp()}
    </ul>
  </div>
</div>