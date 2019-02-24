import React, { Component } from "react"
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Nav from '../components/nav.js'
import '../styles/main.scss'

class Index extends Component {
  
  render() {
    return (
      <div>
        <Helmet>
          <title>Home | Jules Chevalier</title>
          <meta name="description" content="Website for Jules Chevalier" />
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
        </Helmet>
        <Nav />
        <main className="flex-container">
          <Img fluid={this.props.data.imageOne.childImageSharp.fluid} className="cover" alt="White peonies flowers in soft light with a quiet mood" />
        </main>
      </div>
    )
  }
}

export default Index;

export const query = graphql`
query {
  imageOne: file(relativePath: { eq: "peonies.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
