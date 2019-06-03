import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Flex } from "@rebass/grid"

import Socials from "./Socials"
import logo from "../../content/assets/logo.png"

const Logo = styled.div`
  max-width: 200px;
  margin: 0 auto;
  transition: 0.3s;
`

const Sidebar = ({ isSingleColLayout }) => {
  return (
    <div>
      <Link to="/" style={{ border: "none" }}>
        <Logo>
          <img src={logo} alt="Dmitriy An" style={{ marginBottom: 0 }} />
        </Logo>
      </Link>

      <Flex
        justifyContent={isSingleColLayout ? ["center"] : ["center", "flex-end"]}
      >
        <Socials direction={isSingleColLayout ? "horizontal" : "vertical"} />
      </Flex>
    </div>
  )
}

export default Sidebar
