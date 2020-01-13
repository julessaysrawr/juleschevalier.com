// COLORS
const color = {
  primary: '#315937',
  primaryMedium: '#69866D',
  primaryLight: '#A1B3A4',
  greyLight: '#E9E9E8',
  greyMedium: '#9A9B94',
  greyDark: '#52524E',
  white: '#FAFAFA',
  black: '#151514',
  errorRed: '#8E2800',
  errorRedLight: '#CDA198',
  transparent: 'transparent',
  primaryOpacity50: 'rgba(49,89,55, 0.5)',
  primaryLightOpacity25: 'rgba(161, 179, 164, 0.25)',
  primaryLightOpacity50: 'rgba(161, 179, 164, 0.5)',
  primaryLightOpacity75: 'rgba(161, 179, 164, 0.75)'
}

const borderRadius = {
  primary: '3px',
  circle: '50%'
}

// currently 30px, 25px, 20px, and 15px
const headingSizes = {
  h1: '64px',
  h2: '48px',
  h3: '32px',
  h4: '24px'
}

const textSizes = {
  paragraph: '16px',
  description: '12px'
}

const buttonPadding = {
  default: `${'12px 24px'}`
}

const space = [0, 4, 8, 16, 24, 32, 64, 128, 256]

const fontFamily = {
  raleway: `'Raleway', Helvetica, Arial, sans-serif`,
  montserrat: `'Montserrat', Helvetica, Arial, sans-serif`
}

export default {
  color,
  borderRadius,
  headingSizes,
  textSizes,
  buttonPadding,
  space,
  fontFamily
}
