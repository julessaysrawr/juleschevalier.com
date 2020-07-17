import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import LayoutMain from '../components/layout-main'
// import Link from '../components/link'
import theme from '../theme'
import paper from '../images/lightpaperfibers_@2x.png'
import TopicsNav from '../components/topics-nav'
import Masonry from 'react-masonry-component'
import ArticleCard from '../components/article-card'
import GetInTouch from '../components/get-in-touch'

const Topic = ({ pageContext, data }) => {
  const { topic } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  // const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`
  const pageHeader = `${topic} Articles`

  const Articles = edges.map(edge => (
    <ArticleCard
      key={edge.node.id}
      title={edge.node.frontmatter.title}
      topic={edge.node.frontmatter.topic}
      to={edge.node.frontmatter.path}
    />
  ))

  return (
    <LayoutMain
      title={`${topic} Articles | Jules Chevalier`}
      description={`${topic} Articles Written By Jules Chevalier`}
    >
      <main>
        <div
          css={css`
            background-image: url(${paper});
            background-repeat: repeat;
            padding-top: ${theme.space[8]}px;
            border-bottom: 2px solid rgba(136, 128, 113, 0.25);
            margin-bottom: calc(${theme.space[2]}px*13);
          `}
        >
          <h1
            css={css`
              margin: 0 auto;
              text-align: center;
            `}
          >
            {pageHeader}
          </h1>
          <TopicsNav />
          <div
            css={css`
              max-width: 880px;
              margin: 0 auto 150px;
              // display: flex;
              // flex-wrap: wrap;
              // justify-content: space-between;
            `}
          >
            <Masonry
              css={css`
                // background-color: 'tomato';
                width: 880px;
                // width: 864px;
                // width: ${theme.contentWidths.contentWidth}px;
                // max-width: ${theme.contentWidths.contentWidth}px;
                // display: flex;
                // justify-content: space-between;
                margin-left: -8px;  // to center the div, based on added margin to the cards
              `}
              // gutter={'50px'}
              // className={'my-gallery-class'} // default ''
              // elementType={'ul'} // default 'div'
              // options={masonryOptions} // default {}
              // disableImagesLoaded={false} // default false
              // updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
              // imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
              {Articles}
            </Masonry>
          </div>
        </div>

        {/* <ul>
          {edges.map(({ node }) => {
            const { path, title } = node.frontmatter
            return (
              <li
                key={path}
                css={css`
                  padding-bottom: ${theme.space[3]}px;
                `}
              >
                <Link type={'navigation'} hrefLocal={path}>
                  {title}
                </Link>
              </li>
            )
          })}
        </ul> */}
        <GetInTouch />
      </main>
    </LayoutMain>
  )
}

export default Topic
export const pageQuery = graphql`
  query($topic: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { topic: { in: [$topic] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
            topic
          }
        }
      }
    }
  }
`
