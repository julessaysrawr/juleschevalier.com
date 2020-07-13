import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { css } from '@emotion/core'
import theme from '../theme'

const basic = css`
  // border-bottom: 1px solid ${theme.color.greyDark};
  transition: 0.3s ease all;
  &:hover,
  &:focus {
    padding-bottom: 3px;
    transition: 0.3s ease all;
  }
`

// TODO  - can be removed once topic template is refactored
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

const buttonFixedWidth = css`
  background-color: ${theme.color.black};
  text-align: center;
  padding: 15px 0;
  color: ${theme.color.white};
  font-weight: 500;
  text-decoration: none;
  width: 214px;
  height: 58px;
  transition: 0.3s ease all;
  &:hover {
    background-color: ${theme.color.rawUmberLight};
    transition: 0.3s ease all;
  }
`
const buttonFixedWidthPrimary = css`
  ${buttonFixedWidth}
  background-color: ${theme.color.rawUmber};
`

const buttonVariableWidth = css`
  ${buttonFixedWidth}
  width: auto;
  height: auto;
  padding: 10px 15px;
`

const buttonVariableWidthPrimary = css`
  ${buttonVariableWidth}
  background-color: ${theme.color.rawUmber};
`

const inline = css`
  background-color: ${theme.color.transparent};
  color: ${theme.color.rawUmber};
  font-weight: 500;
  transition: 0.3s ease all;
  &:hover {
    color: ${theme.color.rawUmberLight};
    transition: 0.3s ease all;
  }
`

const list = css`
  text-decoration: none;
`

/**
 * @param {object} props
 * @param { `basic` | `button` | `navigation` }  props.type - The type of link []  //TODO: Update this list
 * @param {`primary` | `invert` | `ghost` | `white`} props.color - Button color  //TODO: Update this list
 * @param {string} props.href - External site to redirect to
 * @param {string} props.hrefLocal - Page within site to redirect to
 * @param {string} props.description - Detail description of where link takes you
 */

const CustomLink = props => {
  // BASIC LINK  //TODO - does regular inline become the default?
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

  // NAVIGATION - TODO not sure if this is still used?

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

  if (props.type === 'buttonFixedWidth') {
    return (
      <GatsbyLink
        to={props.hrefLocal}
        css={buttonFixedWidth}
        aria-label={props.description}
        tabIndex="0"
        onClick={props.onClick}
      >
        {props.children}
      </GatsbyLink>
    )
  }

  if (props.type === 'buttonFixedWidthPrimary') {
    return (
      <GatsbyLink
        to={props.hrefLocal}
        css={buttonFixedWidthPrimary}
        aria-label={props.description}
        tabIndex="0"
        onClick={props.onClick}
      >
        {props.children}
      </GatsbyLink>
    )
  }

  if (props.type === 'buttonVariableWidth') {
    return (
      <GatsbyLink
        to={props.hrefLocal}
        css={buttonVariableWidth}
        aria-label={props.description}
        tabIndex="0"
        onClick={props.onClick}
      >
        {props.children}
      </GatsbyLink>
    )
  }

  if (props.type === 'buttonVariableWidthPrimary') {
    return (
      <GatsbyLink
        to={props.hrefLocal}
        css={buttonVariableWidthPrimary}
        aria-label={props.description}
        tabIndex="0"
        onClick={props.onClick}
      >
        {props.children}
      </GatsbyLink>
    )
  }

  // Inline
  if (props.type === 'inline') {
    if (props.hrefLocal) {
      return (
        <GatsbyLink
          to={props.hrefLocal}
          css={inline}
          aria-label={props.description}
          tabIndex="0"
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
        css={inline}
        aria-label={props.description}
        tabIndex="0"
        onClick={props.onClick}
      >
        {props.children}
      </a>
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
