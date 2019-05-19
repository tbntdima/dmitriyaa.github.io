const breakpoints = ["768px", "992px", "1200px"]
const [mobile, tablet, desktop] = breakpoints
const bp = { mobile, tablet, desktop }

const sharedTheme = {
  bp,
  breakpoints,
}

export const darkTheme = {
  ...sharedTheme,
  colorMain: "#47f4cf",
  colorAccent: "#f2cd5e",
  colorText: "rgba(255,255,255,.84)",
  colorBackground: "#14161e",
  colorSpaceBackgroundStar: "154,164,194", // has to be rgb
  colorLayoutSeparator: "rgba(255, 255, 255, 0.5)",
}

export const lightTheme = {
  ...sharedTheme,
  colorMain: "#b80b30",
  colorAccent: "#0d32a1",
  colorText: "rgba(0,0,0,.84)",
  colorBackground: "#ebe9e1",
  colorSpaceBackgroundStar: "101, 91, 61", // has to be rgb
  colorLayoutSeparator: "rgba(0, 0, 0, 0.65)",
}
