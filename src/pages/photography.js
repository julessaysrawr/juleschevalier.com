import React from 'react'
import { css } from '@emotion/core'
import theme from '../theme'
import paper from '../images/lightpaperfibers_@2x.png'
import ContainerLightbox from '../components/container-lightbox'
import LayoutMain from '../components/layout-main'
import PageContent from '../components/page-content'

// portrait orientation
import mike from '../images/photography/01.jpg'
import robin from '../images/photography/03.jpg'
// import ash from '../images/photography/05.jpg'
import david from '../images/photography/07.jpg'
import kayt from '../images/portrait/IMG_5784.jpg'
import lighthouse from '../images/portrait/11.jpg'
import honeyBadger from '../images/portrait/13.jpg'
import susana from '../images/portrait/15.jpg'
import timmy from '../images/portrait/21.jpg'
import gizmo from '../images/portrait/23.jpg'
import james from '../images/portrait/27.jpg'

// landscape orientation
import jennaMike from '../images/photography/02.jpg'
import jeanjean from '../images/photography/04.jpg'
import serengeti from '../images/landscape/22.jpg'
import herKids from '../images/landscape/08.jpg'
import metro from '../images/landscape/12.jpg'

import GetInTouch from '../components/get-in-touch'

const Photography = () => (
  <LayoutMain
    title={'📸 Photography | Jules Chevalier'}
    description={'Photography by Jules Chevalier'}
  >
    <div
      css={css`
        background: linear-gradient(0deg, rgba(148, 112, 62, 0.05), rgba(148, 112, 62, 0.05)),
          url(${paper});
        background-repeat: repeat;
        height: ${theme.contentWidths.paperHeight}px;
        max-width: ${theme.contentWidths.maxPaperWidth}px;
        border: 2px solid rgba(136, 128, 113, 0.25);
        border-top: 0;
        margin: 0 auto;

        padding-top: 214px;
      `}
    >
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
          discover. Portraits are my way of showing someone the beauty that lives within them.
          Occasionally I will work with someone to create portraits that show. These days I am
          inspired by the beauty of nature and the spark of life within each of us.
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
          <img
            src={david}
            alt=""
            css={css`
              // width: 424px;
              width: 49%;
              // height: 505px;
              border: 2px solid rgba(136, 128, 113, 0.25);
              margin-bottom: 16px;
              object-fit: cover;
            `}
          />
          <img
            src={kayt}
            alt=""
            css={css`
              // width: 424px;
              width: 49%;
              // height: 505px;
              border: 2px solid rgba(136, 128, 113, 0.25);
              margin-bottom: 16px;
              object-fit: cover;
            `}
          />
          <img
            src={serengeti}
            alt=""
            css={css`
              // width: 864px;
              width: 100%;
              // height: 505px;
              border: 2px solid rgba(136, 128, 113, 0.25);
              margin-bottom: 16px;
              object-fit: cover;
            `}
          />
          <img
            src={honeyBadger}
            alt=""
            css={css`
              // width: 424px;
              width: 49%;
              // height: 505px;
              border: 2px solid rgba(136, 128, 113, 0.25);
              margin-bottom: 16px;
              object-fit: cover;
            `}
          />
          <img
            src={robin}
            alt=""
            css={css`
              // width: 424px;
              width: 49%;
              // height: 505px;
              border: 2px solid rgba(136, 128, 113, 0.25);
              margin-bottom: 16px;
              object-fit: cover;
            `}
          />
          <img
            src={metro}
            alt=""
            css={css`
              // width: 864px;
              width: 100%;
              // height: 505px;
              border: 2px solid rgba(136, 128, 113, 0.25);
              margin-bottom: 16px;
              object-fit: cover;
            `}
          />
          <img
            src={mike}
            alt=""
            css={css`
              // width: 424px;
              width: 49%;
              // height: 505px;
              border: 2px solid rgba(136, 128, 113, 0.25);
              margin-bottom: 16px;
              object-fit: cover;
            `}
          />
          <img
            src={lighthouse}
            alt=""
            css={css`
              // width: 424px;
              width: 49%;
              // height: 505px;
              border: 2px solid rgba(136, 128, 113, 0.25);
              margin-bottom: 16px;
              object-fit: cover;
            `}
          />
          <img
            src={jeanjean}
            alt=""
            css={css`
              // width: 864px;
              width: 100%;
              // height: 505px;
              border: 2px solid rgba(136, 128, 113, 0.25);
              margin-bottom: 16px;
              object-fit: cover;
            `}
          />
          <img
            src={timmy}
            alt=""
            css={css`
              // width: 424px;
              width: 49%;
              // height: 505px;
              border: 2px solid rgba(136, 128, 113, 0.25);
              margin-bottom: 16px;
              object-fit: cover;
            `}
          />
          <img
            src={james}
            alt=""
            css={css`
              // width: 424px;
              width: 49%;
              // height: 505px;
              border: 2px solid rgba(136, 128, 113, 0.25);
              margin-bottom: 16px;
              object-fit: cover;
            `}
          />
          <img
            src={herKids}
            alt=""
            css={css`
              // width: 864px;
              width: 100%;
              // height: 505px;
              border: 2px solid rgba(136, 128, 113, 0.25);
              margin-bottom: 16px;
              object-fit: cover;
            `}
          />
          <img
            src={gizmo}
            alt=""
            css={css`
              // width: 424px;
              width: 49%;
              // height: 505px;
              border: 2px solid rgba(136, 128, 113, 0.25);
              margin-bottom: 16px;
              object-fit: cover;
            `}
          />
          <img
            src={susana}
            alt=""
            css={css`
              // width: 424px;
              width: 49%;
              // height: 505px;
              border: 2px solid rgba(136, 128, 113, 0.25);
              margin-bottom: 16px;
              object-fit: cover;
            `}
          />
          <img
            src={jennaMike}
            alt=""
            css={css`
              // width: 864px;
              width: 100%;
              // height: 505px;
              border: 2px solid rgba(136, 128, 113, 0.25);
              margin-bottom: 16px;
              object-fit: cover;
            `}
          />
        </div>
      </PageContent>
      <GetInTouch />
    </div>
    {/* <div className="photo-gallery-wrap">
      <ContainerLightbox />
    </div> */}
  </LayoutMain>
)

export default Photography
