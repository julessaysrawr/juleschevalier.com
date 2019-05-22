

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,    // this sources the files from the filesystem
      options: {
        path: `${__dirname}/src/pages`,
        name: "markdown-pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,    // this sources the files from the filesystem
      options: {
        name: "lightbox",
        path: `${__dirname}/src/images/photography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,    // this sources the files from the filesystem
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,    // “transform” the markdown to HTML and the YAML frontmatter to JSON    
    `gatsby-plugin-sharp`,    // uses sharp image processing library.  node.js build for speed.  converts large images to web-friendly.  you probably won't use this directly,
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-transformer-remark`,
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
              quality: 85,
            },
          },
        ],
      },
    },  
  ],
}
