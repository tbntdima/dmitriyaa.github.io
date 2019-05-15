import Typography from "typography"
import GithubTheme from "typography-theme-github"
import "./global.css"

GithubTheme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    h1: {
      borderBottom: `none`,
    },
  }
}

const typography = new Typography(GithubTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
