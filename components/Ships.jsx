import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Ship = styled.div `
`

const Link = styled(NavLink) `
  text-decoration: none;
  font-size: 1.25em;
  color: darkcyan;
`

export default ({ id, name, slug }) => (
  <Ship key={id}>
    {`${id} ${name} ${slug}`}
  </Ship>
)
