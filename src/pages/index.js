import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import '../styles/main.scss'
import LayoutMain from '../components/layout-main'

class Index extends Component {
  render() {
    return (
        <LayoutMain title={'🏡 | Jules Chevalier ▲ Progress Not Perfection'}>
          <main className="flex-container">
            <Img
              fluid={this.props.data.imageOne.childImageSharp.fluid}
              className="cover"
              alt="White peonies flowers in soft light with a quiet mood"
            />
          </main>
        </LayoutMain>
    )
  }
}

export default Index

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
