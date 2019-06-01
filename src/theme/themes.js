import chroma from "chroma-js"

const breakpoints = ["768px", "992px", "1200px"]
const [mobile, tablet, desktop] = breakpoints
const bp = { mobile, tablet, desktop }

const sharedTheme = {
  bp,
  breakpoints,
}

export const darkThemeColors = {
  colorMain: "#47f4cf",
  colorAccent: "#3CD1B1",
  colorText: chroma("#fff").alpha(0.84),
  colorTextOnDark: chroma("#000").alpha(0.84),
  colorBackground: "#14161e",
  colorSpaceBackgroundStars: chroma("#47f4cf").brighten(2),
  colorLayoutSeparator: chroma("#47f4cf").alpha(0.5),
  prismjsHighlight: chroma("#FFF8DC").brighten(0.5),
}

export const darkTheme = {
  ...sharedTheme,
  ...darkThemeColors,
}

const lightThemeColors = {
  colorMain: chroma("#47f4cf").darken(2.5),
  colorAccent: chroma("#3CD1B1").darken(2.5),
  colorText: chroma("#000").alpha(0.84),
  colorTextOnDark: chroma("#fff").alpha(0.84),
  colorBackground: chroma("#FFF8DC").brighten(0.5),
  colorSpaceBackgroundStars: chroma("#47f4cf").darken(2.5),
  colorLayoutSeparator: chroma("#47f4cf")
    .darken(2.5)
    .alpha(0.5),
  prismjsHighlight: chroma("#14161e"),
}

export const lightTheme = {
  ...sharedTheme,
  ...lightThemeColors,
}
