import React from 'react'
import styled from 'styled-components'

const Title = styled.div `
    text-align: center;
    font-size: 3vw;
    padding-bottom: 1.5em;
`

const Subtitle = styled.div `
    text-align: center;
    font-size: 2vw;
    padding-bottom: 1.5em;
`
const Subsubtitle = styled.div `
    font-size: 1.5vw;
`

export default () => (
  <>
    <Title>THE API</Title>
    <Subtitle>Introduction</Subtitle>
    <Subsubtitle>This API is about helping you find the perfect Star Wars ship for you.</Subsubtitle>
  </>
)
