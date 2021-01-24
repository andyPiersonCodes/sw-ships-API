import React from 'react'
import styled from 'styled-components'

const Subpage = styled.div `
  margin-left: 200px;
  `

export default ({ children }) => (
  <Subpage>
    {children}
  </Subpage>
)
