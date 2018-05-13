

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,    // this sources the files from the filesystem
      options: {
        path: `${__dirname}/src/pages`,
        name: "markdown-pages",
      },
    },
  `gatsby-transformer-remark`,    // “transform” the markdown to HTML and the YAML frontmatter to JSON    
  ],
}

// plugins: [
//   {
//     resolve: `gatsby-source-filesystem`,    // this sources the files from the filesystem
//     options: {
//       path: `${__dirname}/src/pages`,
//       name: "markdown-pages",
//     },
//   },
//   `gatsby-transformer-remark`,    // “transform” the markdown to HTML and the YAML frontmatter to JSON
// ];

