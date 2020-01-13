import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { css } from '@emotion/core'
import theme from '../theme'

const basic = css`
  transition: 0.3s ease-in all;
  // background-color: ${theme.color.greyMedium};
  // color: ${theme.color.white} !important;
  text-decoration: none !important;
  background-image: linear-gradient(120deg, ${theme.color.primaryOpacity50} 0%, ${theme.color.primary} 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.15em;
  background-position: 0 88%;
  // transition: background-size 0.3s ease-in;
  padding-bottom: 0.5rem;
  &:hover,
  &:focus {
    transition: 0.3s ease-in all;
    // background-color: ${theme.color.greyDark};
    background-size: 100% 88%;
    color: ${theme.color.white} !important;
    padding: 0;
    // text-decoration: none !important;
  }
`

// .underline--magical {
//   background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
//   background-repeat: no-repeat;
//   background-size: 100% 0.2em;
//   background-position: 0 88%;
//   transition: background-size 0.25s ease-in;
//   &:hover {
//     background-size: 100% 88%;
//   }
// }

const navigation = css`
  color = ${theme.color.greyDark};
  transition: 0.3s ease all;
  text-decoration: none;
  &:hover {
    border-bottom: 0.1rem solid ${theme.color.greyDark};
    transition: 0.3s ease all;
  }

`

/**
 * @param {object} props
 * @param { `basic` | `button` | `navigation` }  props.type - The type of link []
 * @param {`primary` | `invert` | `ghost` | `white`} props.color - Button color
 * @param {string} props.href - External site to redirect to
 * @param {string} props.hrefLocal - Page within site to redirect to
 * @param {string} props.description - Detail description of where link takes you
 */

const CustomLink = props => {
  // BASIC LINK
  if (props.type === 'basic') {
    if (props.hrefLocal) {
      return (
        <GatsbyLink
          to={props.hrefLocal}
          css={basic}
          aria-label={props.description}
          tab-index="0"
          onClick={props.onClick}
        >
          {props.children}
        </GatsbyLink>
      )
    }
    return (
      <a
        href={props.href}
        target={'_blank'}
        rel="noopener noreferrer"
        css={basic}
        aria-label={props.description}
        tabIndex="0"
        onClick={props.onClick}
      >
        {props.children}
      </a>
    )
  }

  // NAVIGATION

  if (props.type === 'navigation') {
    return (
      <GatsbyLink
        to={props.hrefLocal}
        css={navigation}
        aria-label={props.description}
        tabIndex="0"
        onClick={props.onClick}
      >
        {props.children}
      </GatsbyLink>
    )
  }

  return (
    <GatsbyLink
      to={props.hrefLocal}
      css={basic}
      aria-label={props.description}
      tabIndex="0"
      onClick={props.onClick}
    >
      {props.children}
    </GatsbyLink>
  )
}

export default CustomLink
