import React from 'react'
import { Helmet } from 'react-helmet'
import Nav from '../components/nav.js'

const LayoutMain = props => {
  return (
    <div>
      <Helmet>
        <title> {props.title || 'Jules Chevalier ▲ Progress Not Perfection'}</title>
        <meta
          name="description"
          content={ props.description || "Jules Chevalier is an artist who creates using code, photography, writing, and design."}
        />
        {/* Facebook */}
        <meta property="og:title" content="Jules Chevalier ▲ Progress Not Perfection" />
        <meta property="og:site_name" content="Jules Chevalier ▲ Progress Not Perfection" />
        <meta
          property="og:description"
          content="Jules Chevalier is an artist who creates using code, photography, writing, and design."
        />
        <meta property="og:image" content="https://juleschevalier.com/thumbnail.jpg" />
        <meta property="og:url" content="https://juleschevalier.com/" />
        {/* Twitter */}
        <meta name="twitter:title" content="Jules Chevalier ▲ Progress Not Perfection" />
        <meta
          name="twitter:description"
          content="Jules Chevalier is an artist who creates using code, photography, writing, and design."
        />
        <meta name="twitter:image" content="https://juleschevalier.com/thumbnail.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <html lang="en" />
      </Helmet>
      <Nav />
      {props.children}
    </div>
  )
}

export default LayoutMain
