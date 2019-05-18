import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Socials from "./socials"
import logo from "../images/logo.jpg"

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

      <Socials direction="vertical" />
    </div>
  )
}

export default Sidebar
