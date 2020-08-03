import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import theme from '../lib/theme'
import paper from '../images/lightpaperfibers_@2x.png'
import LayoutMain from '../components/layout-main'
import GetInTouch from '../components/get-in-touch'
import TopicsNav from '../components/topics-nav'
import ArticleCard from '../components/article-card'
import Masonry from 'react-masonry-component'
import { bpPhone, bpTabletLG } from '../lib/breakpoints'

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  // const Posts = edges
  //   .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
  //   .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

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
      title={'All Articles | Jules Chevalier'}
      description={'Articles written by Jules Chevalier'}
    >
      <main>
        <div
          css={css`
            background: linear-gradient(0deg, rgba(148, 112, 62, 0.05), rgba(148, 112, 62, 0.05)),
              url(${paper});
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
            All Articles
          </h1>
          <TopicsNav />
          <div
            css={css`
              width: 880px;
              margin: 0 auto 150px;
              // display: flex;
              // flex-wrap: wrap;
              // justify-content: space-between;

              ${bpTabletLG} {
                width: 424px;
              }

              ${bpPhone} {
                width: 300px;
              }
            `}
          >
            <Masonry
              css={css`
                // background-color: 'tomato';
                // width: 880px;
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
        <GetInTouch />
      </main>
    </LayoutMain>
  )
}

export default BlogPage

// TODO format date to: July 10th, 2020
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            topic
          }
        }
      }
    }
  }
`
