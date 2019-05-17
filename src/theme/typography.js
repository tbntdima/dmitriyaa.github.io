import Typography from "typography"
import fairyGatesTheme from "typography-theme-fairy-gates"

const customizedFairyGatesTheme = {
  ...fairyGatesTheme,
  headerFontFamily: ["Open Sans", "sans-serif"],
  googleFonts: [
    {
      name: "Open Sans",
      styles: ["300"],
    },
    {
      name: "Quattrocento Sans",
      styles: ["400", "400i", "700"],
    },
  ],
  headerWeight: 300,
  baseFontSize: "18px",
}

customizedFairyGatesTheme.overrideThemeStyles = () => {
  return {
    a: {
      backgroundImage: `none`,
      textShadow: `none`,
    },
  }
}

const typography = new Typography(customizedFairyGatesTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
