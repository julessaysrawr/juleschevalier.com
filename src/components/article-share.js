import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import theme from '../lib/theme'
import IconEmail from './social-links/email'
import IconTwitter from './social-links/twitter'
import IconLinkedIn from './social-links/linkedin'
import IconReddit from './social-links/reddit'
import IconPinterest from './social-links/pinterest'
import _ from 'lodash'

/** Renders a component that allows articles to be shared on various social platforms
 * @param {object} props
 * @param {string} props.title - title of article
 * @param {string} props.slug - slug of article
 * @param {string} props.topic - topic of article
 */

const ArticleShare = props => {
  const baseUrl = 'https://juleschevalier.com'
  const linkedin = `https://www.linkedin.com/shareArticle?mini=true&url=${baseUrl}${props.slug}&summary=${props.title}`
  //eslint-disable-next-line
  const facebook = `https://www.facebook.com/sharer/sharer.php?u=${baseUrl}${props.slug}`
  const twitter = `https://twitter.com/intent/tweet?url=${baseUrl}${props.slug}&text=${props.title}`
  const reddit = `http://www.reddit.com/submit?url=${baseUrl}${props.slug}&title=${props.title}`
  // TODO: test this share in prod release
  const pinterest = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
    baseUrl
  )}${encodeURIComponent(props.slug)}&media=${encodeURIComponent(
    'https://juleschevalier.com/thumbnail.png'
  )}&description=${encodeURIComponent(props.title)}`

  return (
    <div>
      <h3
        css={css`
          margin-top: ${theme.space[6]}px;
          margin-bottom: ${theme.space[4]}px;
        `}
      >
        Share This Article
      </h3>
      <div
        css={css`
          width: 234px;
          display: flex;
          justify-content: space-between;
          margin-bottom: 72px;
        `}
      >
        <IconEmail
          articleSharing={true}
          url={`mailto:?body=I thought you might enjoy this article: ${props.title}, ${baseUrl}${props.slug}`}
        />
        <IconTwitter articleSharing={true} url={twitter} />
        <IconReddit url={reddit} />
        <IconPinterest url={pinterest} />
        <IconLinkedIn articleSharing={true} url={linkedin} />
      </div>
      <Link
        to={`/topics/${_.kebabCase(props.topic)}`}
        css={css`
          background-color: ${theme.color.rawUmber} !important;
          border: none !important;
          font-weight: 500;
          color: ${theme.color.white} !important;
          width: auto;
          height: auto;
          padding: 8px 18px;

          &:hover {
            background-color: ${theme.color.rawUmberLight} !important;
          }
        `}
      >
        All {props.topic} Articles &gt;
      </Link>
    </div>
  )
}

export default ArticleShare
