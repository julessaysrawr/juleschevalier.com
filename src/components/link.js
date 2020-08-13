import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { css } from '@emotion/core'
import theme from '../lib/theme'
import { bpPhone } from '../lib/breakpoints'

const buttonFixedWidth = css`
  display: inline-block;
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

  ${bpPhone} {
    ${buttonVariableWidth}
    width: auto;
    // height: auto;
    height: 58px;
    padding: 14px 18px;
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
  padding: 8px 18px;
`

const buttonVariableWidthPrimary = css`
  ${buttonVariableWidth}
  background-color: ${theme.color.rawUmber};
`

const inline = css`
  text-decoration: none;
  background-color: ${theme.color.transparent};
  border-bottom: 1px solid ${theme.color.rawUmber};
  color: ${theme.color.rawUmber};
  font-weight: 500;
  transition: 0.3s ease all;
  &:hover {
    color: ${theme.color.rawUmberLight};
    border-bottom: 1px solid ${theme.color.rawUmberLight};
    transition: 0.3s ease all;
  }
`

/**
 * @param {object} props
 * @param { `inline` | `buttonFixedWidth` | `buttonVariableWidth` }  props.type - The type of link styles
 * @param {string} props.href - External site to redirect to
 * @param {string} props.hrefLocal - Page within site to redirect to
 * @param {string} props.description - Detail description of where link takes you
 */

const CustomLink = props => {

  // BUTTONS
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

  // Default local
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

  // Default external
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

export default CustomLink
