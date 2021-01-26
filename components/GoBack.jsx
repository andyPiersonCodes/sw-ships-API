import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Link = styled(NavLink) `
  text-decoration: none;
  font-size: 1.25em;
  color: white;
`

export default () => (
  <Link to="/search">&lt;&lt; Go Back</Link>
)
