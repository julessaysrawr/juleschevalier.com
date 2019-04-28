import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import LightBox from './lightbox.js'


const ContainerLightbox = () => (

  <StaticQuery
    query={graphql`
      query {
        images: allFile(
          filter: { sourceInstanceName: { eq: "photos" } }
          sort: { fields: name, order: ASC }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <LightBox images={data.images.edges} />}
  />
)

export default ContainerLightbox
