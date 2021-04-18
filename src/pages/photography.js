import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import theme from '../lib/theme'
// import ContainerLightbox from '../components/container-lightbox'
import LayoutMain from '../components/layout-main'
import PageContent from '../components/page-content'

import GetInTouch from '../components/get-in-touch'
import PaperBackground from '../components/paper-background'

const PortraitStyles = css`
  // width: 424px;
  width: 49%;
  // height: 505px;
  border: 2px solid ${theme.color.border};
  margin-bottom: 16px;
  object-fit: cover;
`

const LandscapeStyles = css`
  // width: 864px;
  width: 100%;
  // height: 505px;
  border: 2px solid ${theme.color.border};
  margin-bottom: 16px;
  object-fit: cover;
`

const Photography = ({ data }) => (
  <LayoutMain
    title={'Photography | Jules Chevalier'}
    description={'Photography by Jules Chevalier'}
    uri={'/photography'}
  >
    <PaperBackground>
      <PageContent>
        <h1
          css={css`
            margin: 0 auto;
            text-align: center;
            margin-bottom: ${theme.space[4]}px;
          `}
        >
          Photography Portfolio
        </h1>
        <p
          css={css`
            margin: 0 auto;
            margin-bottom: ${theme.space[6]}px;
            max-width: ${theme.contentWidths.copyWidth}px;
            text-align: center;
          `}
        >
          One of my favorite things to do is just wonder with a camera and see what beauty I can
          discover. Portraits are my way of showing someone the beauty that lives within them. These
          days I am inspired by the beauty of nature and the spark of life within each of us.
        </p>
        {/* <ContainerLightbox /> */}
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            align-items: space-between;
            justify-content: space-between;
          `}
        >
          <Img
            fluid={data.honeyBadger.childImageSharp.fluid}
            alt="Silhouette of a man with beard against an orange backlight stone wall"
            css={PortraitStyles}
          />
          <Img
            fluid={data.robin.childImageSharp.fluid}
            alt="Portrait of woman with lace shadows on her face"
            css={PortraitStyles}
          />
          <Img
            fluid={data.serengeti.childImageSharp.fluid}
            alt="Nantucket Serengeti at sunrise"
            css={LandscapeStyles}
          />
          <Img
            fluid={data.david.childImageSharp.fluid}
            alt="Black and white portrait of man with beard in patterned button down shirt"
            css={PortraitStyles}
          />
          <Img
            fluid={data.kayt.childImageSharp.fluid}
            alt="Woman with pale purple hair in light grey motorcycle jacket standing in front of a green wall of ivy."
            css={PortraitStyles}
          />
          <Img
            fluid={data.metro.childImageSharp.fluid}
            alt="Wide view of Washington DC metro station with an emphasis on the leading lines of the ceiling"
            css={LandscapeStyles}
          />

          <Img
            fluid={data.mike.childImageSharp.fluid}
            alt="Gloomy black and white image of a man standing outside with his hands in his pockets"
            css={PortraitStyles}
          />
          <Img
            fluid={data.lighthouse.childImageSharp.fluid}
            alt="Sankaty Lighthouse at night"
            css={PortraitStyles}
          />
          <Img
            fluid={data.jeanjean.childImageSharp.fluid}
            alt="Man standing on frozen lake with dog on his shoulders"
            css={LandscapeStyles}
          />

          <Img
            fluid={data.timmy.childImageSharp.fluid}
            alt="Man smiling standing in front of nascar car collection"
            css={PortraitStyles}
          />
          <Img
            fluid={data.james.childImageSharp.fluid}
            alt="Silhouette of person in front of a misty lake"
            css={PortraitStyles}
          />
          <Img
            fluid={data.herKids.childImageSharp.fluid}
            alt="Mother and daughter at home in living room, smiling and looking at camera"
            css={LandscapeStyles}
          />

          <Img
            fluid={data.gizmo.childImageSharp.fluid}
            alt="White and orange tabby cat lying on front paws while looking at camera"
            css={PortraitStyles}
          />
          <Img
            fluid={data.susana.childImageSharp.fluid}
            alt="Woman with blue shawl draped over one shoulder who is smiling while standing in front of green plants"
            css={PortraitStyles}
          />
          <Img
            fluid={data.jennaMike.childImageSharp.fluid}
            alt="Couple sitting on low stone wall overlooking peaceful lake with rolling hills in the background"
            css={LandscapeStyles}
          />
          <Img
            fluid={data.ash.childImageSharp.fluid}
            alt="Woman with curly hair sitting in front of red brick wall"
            css={PortraitStyles}
          />
          <Img
            fluid={data.moxie.childImageSharp.fluid}
            alt="Man wearing Orange Moxie t-shirt"
            css={PortraitStyles}
          />
        </div>
      </PageContent>
      <GetInTouch />
    </PaperBackground>
    {/* <div className="photo-gallery-wrap">
      <ContainerLightbox />
    </div> */}
  </LayoutMain>
)

export default Photography

export const query = graphql`
  query {
    david: file(relativePath: { eq: "portrait/07.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    kayt: file(relativePath: { eq: "portrait/kayt.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    serengeti: file(relativePath: { eq: "landscape/22.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mike: file(relativePath: { eq: "portrait/01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lighthouse: file(relativePath: { eq: "portrait/11.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    honeyBadger: file(relativePath: { eq: "portrait/13.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    robin: file(relativePath: { eq: "portrait/03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    metro: file(relativePath: { eq: "landscape/12.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jeanjean: file(relativePath: { eq: "landscape/04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    timmy: file(relativePath: { eq: "portrait/21.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    james: file(relativePath: { eq: "portrait/27.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    herKids: file(relativePath: { eq: "landscape/08.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    gizmo: file(relativePath: { eq: "portrait/23.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    susana: file(relativePath: { eq: "portrait/15.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jennaMike: file(relativePath: { eq: "landscape/02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ash: file(relativePath: { eq: "portrait/05.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    moxie: file(relativePath: { eq: "portrait/17.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
