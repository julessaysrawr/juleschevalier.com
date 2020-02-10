import React from 'react'
import { graphql } from 'gatsby'
import '../styles/main.scss'
import LayoutMain from '../components/layout-main'

export default function articleTemplate({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <LayoutMain title={`${frontmatter.title} | By Jules Chevalier`}>
      <main className="flex-container">
        <article className="blog-post">
          <h1 className="blog-title">{frontmatter.title}</h1>
          <p className="blog-date">{frontmatter.date}</p>
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </main>
    </LayoutMain>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
