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
