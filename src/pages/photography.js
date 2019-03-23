import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import '../styles/main.scss'
import Nav from '../components/nav.js'
import GalleryItem from '../components/galleryItem'
import placekitten from '../images/placekitten230.jpeg'
import placekittenWide from '../images/placekitten300x200.jpeg'
import placekittenTall from '../images/placekitten200x300.jpeg'

import image1 from '../images/photography/portriat-1.jpg'
import image2 from '../images/photography/portriat-2.jpg'
import image3 from '../images/photography/portriat-3.jpg'
import image4 from '../images/photography/portriat-4.jpg'
import image5 from '../images/photography/portriat-5.jpg'
import image6 from '../images/photography/portriat-6.jpg'
import image7 from '../images/photography/portriat-7.jpg'
import image8 from '../images/photography/portriat-8.jpg'
import image9 from '../images/photography/portriat-9.jpg'
import image10 from '../images/photography/portriat-10.jpg'
import image11 from '../images/photography/portriat-11.jpg'
import image12 from '../images/photography/portriat-12.jpg'
import image13 from '../images/photography/portriat-13.jpg'
import image14 from '../images/photography/portriat-14.jpg'
import image15 from '../images/photography/portriat-15.jpg'
import image16 from '../images/photography/portriat-16.jpg'
import image17 from '../images/photography/portriat-17.jpg'
import image18 from '../images/photography/portriat-18.jpg'



export default (props) => 
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
  {/* TO DO try to break up the visual pattern by repeating orientation row every 3 or 4 */}
    <div className="photo-orientation-portrait">
      <Img fluid={props.data.imageOne.childImageSharp.fluid}  alt="mr gizmo" />
    </div>
    <div className="photo-orientation-landscape">
      <Img fluid={props.data.imageTwo.childImageSharp.fluid} className="photo-orientation-landscape" alt="man and his dog" />
    </div>


      <img src={image2} className="photo-orientation-portrait" />
      <img src={image1} className="photo-orientation-landscape" />
      <img src={image3} className="photo-orientation-portrait" />
      <img src={image8} className="photo-orientation-landscape" />
      <img src={image7} className="photo-orientation-portrait" />
      <img src={image9} className="photo-orientation-landscape" />
      <img src={image4} className="photo-orientation-portrait" />
      <img src={image5} className="photo-orientation-landscape" />
      <img src={image6} className="photo-orientation-portrait" />
      <img src={image14} className="photo-orientation-landscape" />
      <img src={image13} className="photo-orientation-portrait" />
      <img src={image15} className="photo-orientation-landscape" />
      <img src={image17} className="photo-orientation-landscape" />
      <img src={image12} className="photo-orientation-portrait" />
      <img src={image18} className="photo-orientation-landscape" />
      <img src={image10} className="photo-orientation-portrait" />
      <img src={image16} className="photo-orientation-landscape" />
      <img src={image11} className="photo-orientation-portrait" />

      {/* <GalleryItem src={placekittenWide} layout={'center'} /> */}
      {/* <GalleryItem src={placekittenTall} layout={'center'} />
      <GalleryItem src={placekittenWide} layout={'center'} />
      <GalleryItem src={placekittenTall} layout={'center'} />
      <GalleryItem src={placekittenWide} layout={'center'} />
      <GalleryItem src={placekittenTall} layout={'center'} />
      <GalleryItem src={placekittenWide} layout={'center'} />
      <GalleryItem src={placekittenTall} layout={'center'} />
      <GalleryItem src={placekittenWide} layout={'center'} />
      <GalleryItem src={placekittenTall} layout={'center'} />
      <GalleryItem src={placekittenWide} layout={'center'} />
      <GalleryItem src={placekittenTall} layout={'center'} /> */}
      {/* <img src={placekitten} />
      <img src={placekitten} />
      <img src={placekitten} />
      <img src={placekitten} />
      <img src={placekitten} />
      <img src={placekitten} />
      <img src={placekitten} />
      <img src={placekitten} />
      <img src={placekitten} />
      <img src={placekitten} />
      <img src={placekitten} />
      <img src={placekitten} /> */}
  </div>
</div>


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
}
`
