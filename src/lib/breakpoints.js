// phone min 360, max 480
// tabletSM min 481, max 768
// tabletLG min 769, max 1024
// monitorSM min 1025, max 1280
// monitorMD min 1281, max 1440
// monitorLG min 1441, max 1920
// monitorXL min 1921, max ????

const maxPhone = 480
const maxTabletSM = 768
const maxTabletLG = 1024
const maxMonitorSM = 1280
const maxMonitorMD = 1440
const maxMonitorLG = 1920
const maxMonitorXL = 2560

// our design approach is desktop-first, so using max-width
export const bpPhone = `@media (max-width: ${maxPhone}px)`
export const bpTabletSM = `@media (max-width: ${maxTabletSM}px)`
export const bpTabletLG = `@media (max-width: ${maxTabletLG}px)`
export const bpMonitorSM = `@media (max-width: ${maxMonitorSM}px)`
export const bpMonitorMD = `@media (max-width: ${maxMonitorMD}px)`
export const bpMonitorLG = `@media (max-width: ${maxMonitorLG}px)`
export const bpMonitorXL = `@media (max-width: ${maxMonitorXL}px)`


// export const bpPhone = `@media (min-width: ${maxPhone}px)`
// export const bpTabletSM = `@media (min-width: ${maxTabletSM}px)`
// export const bpTabletLG = `@media (min-width: ${maxTabletLG}px)`
// export const bpMonitorSM = `@media (min-width: ${maxMonitorSM}px)`
// export const bpMonitorMD = `@media (min-width: ${maxMonitorMD}px)`
// export const bpMonitorLG = `@media (min-width: ${maxMonitorLG}px)`
// export const bpMonitorXL = `@media (min-width: ${maxMonitorXL}px)`

// Joe's approach
// const minSM = 545
// const minMD = 768
// const minLG = 992
// const minXL = 1200
// const minXXL = 1920

// export const bpMinSM = `@media (min-width: ${minSM}px)`
// export const bpMinMD = `@media (min-width: ${minMD}px)`
// export const bpMinLG = `@media (min-width: ${minLG}px)`
// export const bpMinXL = `@media (min-width: ${minXL}px)`
// export const bpMinXXL = `@media (min-width: ${minXXL}px)`

// export const bpMaxXS = `@media (max-width: ${minSM - 1}px)`
// export const bpMaxSM = `@media (max-width: ${minMD - 1}px)`
// export const bpMaxMD = `@media (max-width: ${minLG - 1}px)`
// export const bpMaxLG = `@media (max-width: ${minXL - 1}px)`

//Kent's approach
// const maxXS = 320
// const maxSM = 767
// const maxMD = 1023

// export const bpMaxXS = `@media (max-width: ${maxXS}px)`
// export const bpMaxSM = `@media (max-width: ${maxSM}px)`
// export const bpMaxMD = `@media (max-width: ${maxMD}px)`

// export const bpTabletOnly = `@media (min-width: ${
//   maxSM + 1
// }px) and (max-width: ${maxMD}px)`
// export const bpDesktopOnly = `@media (min-width: ${maxMD + 1}px)`
