// Note there is scss being used on the site as well

// anything larger than 1440 is our default breakpoint

// const breakpoints = {
//   xs: '32em', // = 512px
//   sm: '48em', // = 768px
//   md: '64em', // = 1024px
//   lg: '90em', // = 1440px
//   xl: '426em' // = 2556px
// }

const sizes = {
  phone: 512,
  tablet: 768,
  tabletPro: 1024,
  laptop: 1280,
  laptopLarge: 1440
}

const device = Object.keys(sizes).reduce((acc, label) => {
  // our design approach is desktop-first, so using max-width
  acc[label] = `@media (max-width: ${sizes[label]}px)`

  return acc
}, {})

export default device

// usage
// ${device.desktop} {
//     padding: 4rem;
//     flex-direction: row;
//  }