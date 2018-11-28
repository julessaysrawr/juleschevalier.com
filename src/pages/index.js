import React, { Component } from "react"
import { Helmet } from "react-helmet";
import cover from '../assets/peonies.jpg'
import Nav from '../components/nav.js'
import '../styles/main.scss'

class Index extends Component {
  
  render() {
    return (
      <div>
        <Helmet>
          <title>Home | Jule Chevalier</title>
          <meta name="description" content="Website for Jules Chevalier" />
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
        </Helmet>
        <Nav />
        <main className="flex-container">
          <img src={cover} className="cover" alt="White peonies flowers in soft light with a quiet mood"/>
        </main>
      </div>
    )
  }
}

export default Index;