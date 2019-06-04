import "./index.css"

import React from "react"
import { withTheme } from "styled-components"

const Toggle = ({ theme, icons, checked, onChange, ...inputProps }) => {
  console.log(checked)
  return (
    <div
      className={`react-toggle ${
        checked
          ? `react-toggle--checked ${checked}`
          : `react-toggle--disabled ${checked}`
      }`}
      onClick={onChange}
    >
      <div className="react-toggle-track">
        <div className="react-toggle-track-check">{icons.checked}</div>
        <div className="react-toggle-track-x">{icons.unchecked}</div>
      </div>
      <div
        className="react-toggle-thumb"
        style={{
          boxShadow: `0px 0px 2px 3px ${theme.colorMain}`,
        }}
      />
      <input
        {...inputProps}
        className="react-toggle-screenreader-only"
        type="checkbox"
        aria-label="Switch between Dark and Light mode"
      />
    </div>
  )
}

export default withTheme(Toggle)
