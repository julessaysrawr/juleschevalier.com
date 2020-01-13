import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import '../styles/main.scss'
import LayoutMain from '../components/layout-main'
import Link from '../components/link'

class Index extends Component {
  render() {
    return (
      <LayoutMain title={'🏡 | Jules Chevalier ▲ Progress Not Perfection'}>
        <main className="non-flex-container">
          <figure>
            <Img
              fluid={this.props.data.beach.childImageSharp.fluid}
              className="cover"
              alt="Jules on a sandy path between dune grass"
            />
            {/* <figcaption>Photo credit: <a href="https:dchevalier.io">David Chevalier</a></figcaption> */}
          </figure>

          <div className="homepage-text">
            <h3>Hi, I&apos;m Jules 🦖</h3>
            <p>
              Here you&apos;ll find information on intentional living, resources to navigate tough
              emotions, and how to get back to flow state. Check out the{' '}
              <Link type={'basic'} hrefLocal={'/blog'}>
                blog
              </Link>
              .
            </p>
            <p className="space-above-m">
              I enjoy creating and capturing the beauty in life, and my favorite way to do that is
              with a camera. If you&apos;re interested to create a portrait together, you can see
              some examples of my{' '}
              <Link type={'basic'} hrefLocal={'/photography'}>
                photography
              </Link>
              .
            </p>
          </div>
          <div />
          {/* <Img
            fluid={this.props.data.peonies.childImageSharp.fluid}
            className="cover"
            alt="White peonies flowers in soft light with a quiet mood"
          /> */}

          <div className="homepage-text">
            <h3>Me in 10 seconds</h3>
            <p>
              I&apos;m a creator: a writer 🖋, photographer 📷, engineer 💻, and designer 📐. My work
              is rooted in empowering others to live according to their values.
            </p>
            <p>
              I&apos;m a philosopher, deep thinker and introvert. Though most would guess I am an
              extrovert because I express myself so easily. I see the big picture 🗺 and then dive
              into the details 🔍.
            </p>
            <p>
              I’ve lived too many places to be &apos;from&apos; anywhere. I&apos;m currently based
              in Massachusetts with my husband 🧔🏻 and three furballs 🐈🐶🐈.
            </p>
          </div>
          {/* </div> */}
        </main>
      </LayoutMain>
    )
  }
}

export default Index

export const query = graphql`
  query {
    peonies: file(relativePath: { eq: "peonies.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    beach: file(relativePath: { eq: "beach-path.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
