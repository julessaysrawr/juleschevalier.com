// COLORS
const color = {
  white: '#FFFFFF',
  black: '#000000',
  rawUmber: '#94703E',
  rawUmberLight: '#A98B58',
  border: 'rgba(136, 128, 113, 0.25)',
  paperMixin: 'rgba(148, 112, 62, 0.05)',
  paperBeige: '#F9F6F2',
  transparent: 'transparent'
}

// border is //#888071  @ 25%

const textSizes = {
  h1: '42px',
  h2: '32px',
  h3: '24px',
  h4: '20px',
  h1Mobile: '36px',
  h2Mobile: '30px',
  h3Mobile: '24px',
  h4Mobile: '20px',
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
  pageWidth: 1083,
  maxPaperWidth: 1440,
  paperHeight: 800
}

const iconSizes = {
  small: 24,
  medium: 32
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
  iconSizes,
  characterCodes
}
