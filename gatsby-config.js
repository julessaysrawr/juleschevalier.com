module.exports = {
  siteMetadata: {
    title: `Jules Chevalier`,
    description: `Jules Chevalier is an artist who creates using design, code, writing, and photography.`,
    siteUrl: `https://juleschevalier.com/`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`, // this sources the files from the filesystem
      options: {
        path: `${__dirname}/content`,
        name: 'content'
      }
    },
    {
      resolve: `gatsby-source-filesystem`, // this sources the files from the filesystem
      options: {
        name: 'lightbox',
        path: `${__dirname}/src/images/photography`
      }
    },
    {
      resolve: `gatsby-source-filesystem`, // this sources the files from the filesystem
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`, // uses sharp image processing library.  node.js build for speed.  converts large images to web-friendly.  you probably won't use this directly,
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-transformer-remark`, // “transform” the markdown to HTML and the YAML frontmatter to JSON
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 700,
              linkImagesToOriginal: true,
              showCaptions: false,
              quality: 85
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-140934886-1`
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://juleschevalier.com',
        policy: [{ userAgent: '*', disallow: ['/habits', '/read'] }]
      }
    },
    `gatsby-plugin-emotion`
  ]
}
