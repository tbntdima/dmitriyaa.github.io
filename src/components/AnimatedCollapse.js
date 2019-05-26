import React from "react"
import styled, { keyframes } from "styled-components"
import { bounceInDown } from "react-animations"
import { Collapse } from "react-collapse"
import { navigate } from "@reach/router"
import { rhythm } from "../theme/typography"

const bounceInDownAnimation = keyframes`${bounceInDown}`
const AnimatedDiv = styled.div`
  overflow: hidden;
  animation-name: ${props => (props.isActive ? bounceInDownAnimation : "")};
  animation-duration: ${props => props.animationDuration}s;
`

const Heading = styled.h2`
  margin-top: ${rhythm(1 / 4)};
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    transform: translateX(${props => (props.active ? 0 : rhythm(1 / 4))});
  }
`

const AnimatedCollapse = ({
  title,
  currentHash,
  animationDuration = 1,
  children,
}) => {
  const id = title.toLowerCase()
  const newHash = `#${id}`

  return (
    <div>
      <Heading
        onClick={() => {
          navigate(currentHash === newHash ? "/" : `/${newHash}`)
        }}
        active={currentHash === newHash}
      >
        {title}
      </Heading>
      <Collapse
        isOpened={currentHash === newHash}
        style={{ overflow: "hidden" }}
      >
        <AnimatedDiv
          isActive={currentHash === newHash}
          animationDuration={animationDuration}
        >
          <div id={id}>{children}</div>
        </AnimatedDiv>
      </Collapse>
    </div>
  )
}

export default AnimatedCollapse
