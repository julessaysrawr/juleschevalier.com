module.exports = {
  siteMetadata: {
    author: `Jules Chevalier`,
    title: `Jules Chevalier | Designer, Engineer & Growth Catalyst`,
    description: `Jules Chevalier is a designer & engineer who writes about emotional wellness, intentional living and inclusion.`,
    siteUrl: `https://juleschevalier.com/`,
    thumbnail: `https://juleschevalier.com/thumbnail.png`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`, // this sources the files from the filesystem
      options: {
        path: `${__dirname}/content`,
        name: 'content'
      }
    },
    // {
    //   resolve: `gatsby-source-filesystem`, // this sources the files from the filesystem
    //   options: {
    //     name: 'lightbox',
    //     path: `${__dirname}/src/images/photography` //TODO: revist this when reintroducing lightbox
    //   }
    // },
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
            resolve: `gatsby-remark-external-links`
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              isIconAfterHeader: true
            }
          },
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
        policy: [{ userAgent: '*', disallow: ['/topics', '/topics/', '/read', '/read/'] }]
      }
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jules Chevalier`,
        short_name: `julechevalier`,
        description: `Jules Chevalier is a designer & engineer who writes about emotional wellness, intentional living and inclusion.`,
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/images/icon.png' // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        // crossOrigin: `use-credentials`,
      }
    }
  ]
}
