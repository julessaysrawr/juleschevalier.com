// COLORS
const color = {
  white: '#FFFFFF',
  black: '#000000',
  rawUmber: '#94703E',
  rawUmberLight: '#A98B58',
  primary: '#315937',
  primaryMedium: '#69866D',
  primaryLight: '#A1B3A4',
  greyLight: '#E9E9E8',
  greyMedium: '#9A9B94',
  greyDark: '#52524E',
  errorRed: '#8E2800',
  errorRedLight: '#CDA198',
  transparent: 'transparent',
  primaryOpacity50: 'rgba(49,89,55, 0.5)',
  primaryLightOpacity25: 'rgba(161, 179, 164, 0.25)',
  primaryLightOpacity50: 'rgba(161, 179, 164, 0.5)',
  primaryLightOpacity75: 'rgba(161, 179, 164, 0.75)'
}

const textSizes = {
  h1: '42px',
  h2: '32px',
  h3: '24px',
  h4: '20px',
  paragraph: '18px',
  code: '16px'
}

const buttonPadding = {
  default: `${'12px 24px'}`,
  tag: '8px 16px'
}

const space = [0, 4, 8, 16, 24, 32, 64, 128, 256]
/*
[0] = 0
[1] = 4
[2] = 8   // use this for multiples
[3] = 16
[4] = 24
[5] = 32
[6] = 64
[7] = 128
[8] = 256
calc(${theme.space[2]}px*17) = 136
*/

const contentWidths = {
  copyWidth: 646,
  contentWidth: 864,
  contentMasonryWidth: 880,
  pageWidth: 1083
}

const characterCodes = {
  apostrophe: '&apos;',
  caret: '&gt;'
}

export default {
  color,
  textSizes,
  buttonPadding,
  space,
  contentWidths,
  characterCodes
}
