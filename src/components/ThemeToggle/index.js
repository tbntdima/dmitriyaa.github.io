import React from "react"
import { connect } from "react-redux"
import { toggleDarkMode } from "../../state/app"
import Toggle from "../Toggle/"
import sun from "./sun.png"
import moon from "./moon.png"

const ThemeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <Toggle
      icons={{
        checked: (
          <img
            src={moon}
            width="16"
            height="16"
            alt="presentation"
            style={{ pointerEvents: "none" }}
          />
        ),
        unchecked: (
          <img
            src={sun}
            width="16"
            height="16"
            alt="presentation"
            style={{ pointerEvents: "none" }}
          />
        ),
      }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
    />
  )
}

const mapStateToProps = state => ({
  isDarkMode: state.app.isDarkMode,
})

const mapDispatchToProps = dispatch => ({
  toggleDarkMode: () => {
    dispatch(toggleDarkMode())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeToggle)
