import React from 'react'
import { Helmet } from 'react-helmet'
import Nav from '../components/nav.js'
import ContainerLightbox from '../components/container-lightbox'

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
    <div className="photo-gallery-wrap">
        <ContainerLightbox />
    </div>
  </div>
)
