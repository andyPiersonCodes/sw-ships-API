/* eslint-disable max-len */
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

const Span = styled.span `
  color: gold;
`

export default () => (
  <>
    <Title>THE API</Title>
    <Subtitle>Introduction</Subtitle>
    <Subsubtitle>This API is about helping you find the perfect Star Wars ship for you.</Subsubtitle>
    <Subsubtitle>
      Currently serving up
      <Span> 149</Span>
      {' '}
      ships from
      <Span> 52</Span>
      {' '}
      manufacturers, in
      <Span> 27</Span>
      {' '}
      classes, with
      <Span> 26</Span>
      {' '}
      faction affiliations
    </Subsubtitle>
  </>
)
