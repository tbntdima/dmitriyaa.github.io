import React from "react"
import styled from "styled-components"
import { Box } from "@rebass/grid"

import { rhythm } from "../theme/typography"
import Sidebar from "./Sidebar"
import ThemeToggle from "./ThemeToggle"
import FixedBackground from "./FixedBackground"
import SpaceBackground from "./SpaceBackground"

const PageWrapper = styled.main`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 100vh;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: ${props => (props.isSingleColLayout ? "700px" : "880px")};
  margin: ${rhythm(2)} auto;
  @media (max-width: ${props => props.theme.bp.mobile}) {
    max-width: 540px;
    margin: ${rhythm(2)} auto;
  }
`

const SidebarBox = styled(Box)`
  border-right: 2px solid ${props => props.theme.colorLayoutSeparator};
  ${props => (props.isSingleColLayout ? "border-right: none" : "")};
  @media (max-width: ${props => props.theme.bp.mobile}) {
    border-right: none;
  }
`

const ThemeToggleContainer = styled.div`
  position: absolute;
  top: ${rhythm(1)};
  right: ${rhythm(1)};
`

const Layout = ({ isSingleColLayout = false, children }) => {
  return (
    <PageWrapper>
      <ContentWrapper isSingleColLayout={isSingleColLayout}>
        <SidebarBox
          isSingleColLayout={isSingleColLayout}
          width={isSingleColLayout ? [1] : [1, 22 / 100]}
          p={rhythm(1 / 2)}
        >
          <Sidebar isSingleColLayout={isSingleColLayout} />
        </SidebarBox>
        <Box width={isSingleColLayout ? [1] : [1, 78 / 100]} p={rhythm(0.75)}>
          {children}
        </Box>
      </ContentWrapper>
      {/* Absolutely and fixed positioned blocks */}
      <ThemeToggleContainer>
        <ThemeToggle />
      </ThemeToggleContainer>
      <FixedBackground>
        <SpaceBackground />
      </FixedBackground>
    </PageWrapper>
  )
}

export default Layout
