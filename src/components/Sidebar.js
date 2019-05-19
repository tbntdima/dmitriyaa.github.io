import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Flex } from "@rebass/grid"

import Socials from "./Socials"
import logo from "../../content/assets/logo.png"

const Logo = styled.div`
  transition: 0.3s;
  @media (max-width: ${props => props.theme.bp.mobile}) {
    margin: 0 auto;
    max-width: 200px;
  }
`

const Sidebar = () => {
  return (
    <div>
      <Link to="/" style={{ border: "none" }}>
        <Logo>
          <img src={logo} alt="Dmitriy's Workshop" />
        </Logo>
      </Link>

      <Flex justifyContent="flex-end">
        <Socials direction="vertical" />
      </Flex>
    </div>
  )
}

export default Sidebar
