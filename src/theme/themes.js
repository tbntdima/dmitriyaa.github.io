const sharedTheme = {
  breakpoints: ["768px", "992px", "1200px"],
}

export const darkTheme = {
  ...sharedTheme,
  colorMain: "#47f4cf",
  colorAccent: "#f2cd5e",
  colorText: "white",
  colorBackground: "black",
}

export const lightTheme = {
  ...sharedTheme,
  colorMain: "red",
  colorAccent: "red",
  colorText: "black",
  colorBackground: "white",
}
