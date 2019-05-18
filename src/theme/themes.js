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
  colorText: "#f2f2f2",
  colorBackground: "#14161e",
}

export const lightTheme = {
  ...sharedTheme,
  colorMain: "red",
  colorAccent: "red",
  colorText: "black",
  colorBackground: "white",
}
