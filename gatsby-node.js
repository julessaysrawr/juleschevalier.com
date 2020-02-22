const path = require('path')
const _ = require('lodash')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const articleTemplate = path.resolve(`src/templates/articleTemplate.js`)
  const topicTemplate = path.resolve('src/templates/topicTemplate.js')

  return await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
              topic
            }
          }
        }
      }
      topicGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___topic) {
          fieldValue
        }
      }
    }
  `).then(result => {
    // handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }

    const posts = result.data.allMarkdownRemark.edges
    // create blog posts pages
    posts.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: articleTemplate,
        context: {} // additional data can be passed via context
      })
    })

    const topics = result.data.topicGroup.group
    topics.forEach(topic => {
      createPage({
        path: `/topics/${_.kebabCase(topic.fieldValue)}/`,
        component: topicTemplate,
        context: {
          topic: topic.fieldValue
        }
      })
    })
  })
}
