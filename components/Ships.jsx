import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Ship = styled.div `
  text-decoration: none;
  font-size: 1.25em;
  padding: 1em;
  color: gold;
`

// eslint-disable-next-line no-unused-vars
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
