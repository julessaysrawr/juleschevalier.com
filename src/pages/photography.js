import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Nav from '../components/nav.js'

export default props => (
  <div>
    <header>
      <Helmet>
        <title>Photography | Jules Chevalier</title>
        <meta name="description" content="Photography by Jules Chevalier" />
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <Nav />
    </header>
    <div className="flex-container photo-gallery-wrap">
      <Img
        fluid={props.data.imageOne.childImageSharp.fluid}
        className="photo-orientation-portrait"
        alt="mr gizmo"
        style={{ width: '100%', height: '100%' }}
      />
      <Img
        fluid={props.data.imageTwo.childImageSharp.fluid}
        className="photo-orientation-landscape"
        alt="man and his dog"
        style={{ width: '100%', height: '100%' }}
      />
      <Img
        fluid={props.data.imageThree.childImageSharp.fluid}
        className="photo-orientation-portrait"
        alt="girl sitting in front of brick wall"
        style={{ width: '100%', height: '100%' }}
      />
      <Img
        fluid={props.data.imageFour.childImageSharp.fluid}
        className="photo-orientation-landscape"
        alt="man moving his arms up and down"
        style={{ width: '100%', height: '100%' }}
      />
      <Img
        fluid={props.data.imageFive.childImageSharp.fluid}
        className="photo-orientation-portrait"
        alt="man with a beard"
        style={{ width: '100%', height: '100%' }}
      />
      <Img
        fluid={props.data.imageSix.childImageSharp.fluid}
        className="photo-orientation-landscape"
        alt="Pregnant woman's belly and man's head leaning against it"
        style={{ width: '100%', height: '100%' }}
      />
      <Img
        fluid={props.data.imageSeven.childImageSharp.fluid}
        className="photo-orientation-portrait"
        alt="young woman with lace shadows on her face"
        style={{ width: '100%', height: '100%' }}
      />
      <Img
        fluid={props.data.imageEight.childImageSharp.fluid}
        className="photo-orientation-landscape"
        alt="Pregnant woman's belly and man's head leaning against it"
        style={{ width: '100%', height: '100%' }}
      />
      <Img
        fluid={props.data.imageNine.childImageSharp.fluid}
        className="photo-orientation-portrait"
        alt="young woman with lace shadows on her face"
        style={{ width: '100%', height: '100%' }}
      />
      <Img
        fluid={props.data.imageTen.childImageSharp.fluid}
        className="photo-orientation-landscape"
        alt="man with red zip up hoodie looking up"
        style={{ width: '100%', height: '100%' }}
      />
      <Img
        fluid={props.data.imageEleven.childImageSharp.fluid}
        className="photo-orientation-portrait"
        alt="young man with a fauxhawk"
        style={{ width: '100%', height: '100%' }}
      />
      <Img
        fluid={props.data.imageTwelve.childImageSharp.fluid}
        className="photo-orientation-landscape"
        alt="cat lying on wooden stairs"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  </div>
)

// TODO clean up this file

export const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "photography/portriat-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "photography/portriat-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "photography/portriat-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFour: file(relativePath: { eq: "photography/portriat-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFive: file(relativePath: { eq: "photography/portriat-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSix: file(relativePath: { eq: "photography/portriat-8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSeven: file(relativePath: { eq: "photography/portriat-6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageEight: file(relativePath: { eq: "photography/portriat-9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageNine: file(relativePath: { eq: "photography/portriat-7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTen: file(relativePath: { eq: "photography/portriat-15.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageEleven: file(relativePath: { eq: "photography/portriat-10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwelve: file(relativePath: { eq: "photography/portriat-14.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
