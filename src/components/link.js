import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { css } from '@emotion/core'
import theme from '../theme'

const basic = css`
  border-bottom: 1px solid ${theme.color.greyDark};
  transition: 0.3s ease all;
  &:hover,
  &:focus {
    padding-bottom: 3px;
    transition: 0.3s ease all;
  }
`

const navigation = css`
  border-bottom: 0.1rem solid ${theme.color.transparent};
  transition: border 0.3s ease-in;
  text-decoration: none;
  &:hover {
    border-bottom: 0.1rem solid ${theme.color.greyDark};
    padding-bottom: 3px;
    transition: border 0.3s ease-in;
  }
`

const button = css`
  padding: ${theme.buttonPadding.tag};
  background-color: ${theme.color.primary};
  color: ${theme.color.white} !important;
  border-radius: ${theme.borderRadius.rounded};
`

const list = css`
  text-decoration: none;
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

  // BUTTON
  if (props.type === 'button') {
    return (
      <GatsbyLink
        to={props.hrefLocal}
        css={button}
        aria-label={props.description}
        tabIndex="0"
        onClick={props.onClick}
      >
        {props.children}
      </GatsbyLink>
    )
  }

  // Articles List
  if (props.type === 'list') {
    return (
      <GatsbyLink
        to={props.hrefLocal}
        css={list}
        aria-label={props.description}
        tabIndex="0"
        onClick={props.onClick}
      >
        {props.children}
      </GatsbyLink>
    )
  }

  // Default local
  if (props.hrefLocal) {
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

  // Default external
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

export default CustomLink