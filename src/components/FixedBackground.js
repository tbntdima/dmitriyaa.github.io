/**
 * Layout component that creates a fixed block (100vw, 100vh) on the background
 * accepts zIndex prop to control the importance
 */
import React from "react"
import styled from "styled-components"

const FixedBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${props => (props.zIndex ? props.zIndex : -1)};
  display: flex;
  justify-content: stretch;
  align-items: stretch;
`

export default ({ zIndex, children }) => (
  <FixedBackground zIndex={zIndex}>{children}</FixedBackground>
)
