import React from 'react'
import { Helmet } from 'react-helmet'
import Nav from '../components/nav.js'
import ContainerLightbox from '../components/container-lightbox'
import LayoutMain from '../components/layout-main'

export default props => (
    <LayoutMain
      title={'📸 Photography | Jules Chevalier'}
      description={'Photography by Jules Chevalier'}
    >
      <div className="photo-gallery-wrap">
        <ContainerLightbox />
      </div>
    </LayoutMain>
)
