import React, { Component, Fragment } from 'react'
import Img from 'gatsby-image'
import Lightbox from 'react-images'

export default class LightBox extends Component {
  state = {
    lightboxIsOpen: false,
    currentImage: 0
  }

  openLightbox = (index, event) => {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    })
  }

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    })
  }

  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    })
  }

  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    })
  }

  handleClickImage = () => {
    if (this.state.currentImage === this.props.images.length - 1) return

    this.gotoNext()
  }

  detectOrientation = photo => {
    console.log(photo)

    if (photo.presentationWidth > photo.presentationHeight) {
      return 'photo-orientation-landscape'
    }

    return 'photo-orientation-portrait'
  }

  render() {
    const { images } = this.props

    return (
      <Fragment>
        {images.map((photo, index) => {
          // console.log('photo', photo)
          return (
            <a
              key={index}
              href={photo.node.childImageSharp.fluid.src}
              // style={{ width: '20rem' }}
              onClick={event => this.openLightbox(index, event)}
              className="photo-container"
            >
              <Img
                fluid={photo.node.childImageSharp.fluid}
                style={{ width: '100%', height: '100%' }}
                className={this.detectOrientation(photo.node.childImageSharp.fluid)}
              />
            </a>
          )
        })}
        <Lightbox
          images={images.map(photo => ({
            src: photo.node.childImageSharp.fluid.src,
            srcSet: photo.node.childImageSharp.fluid.srcSet
          }))}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          onClickImage={this.handleClickImage}
          onClose={this.closeLightbox}
          showImageCount={false}
          backdropClosesModal={true}
        />
      </Fragment>
    )
  }
}
