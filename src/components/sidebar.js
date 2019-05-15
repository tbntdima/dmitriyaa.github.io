import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Socials from "./socials"
import logo from "../images/logo.jpg"

const LogoContainer = styled.div`
  transition: 0.3s;
  @media (max-width: 768px) {
    transform: rotate(90deg);
    margin: 0 auto;
    max-width: 200px;
  }
`

const Sidebar = () => {
  return (
    <div>
      <LogoContainer>
        <Link to="/">
          <img src={logo} alt="Dmitriy's Workshop" />
        </Link>
      </LogoContainer>

      <Socials direction="vertical" />
    </div>
  )
}

export default Sidebar
