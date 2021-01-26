import React from 'react'
import styled from 'styled-components'

const Details = styled.div `
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 1.75em;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 20px;
  color: indianRed;
`

export default ({ id, name, slug }) => (
  <Details>{`${id} ${name} (${slug})`}</Details>
)
