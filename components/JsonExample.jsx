import React from 'react'
import styled from 'styled-components'

const H3 = styled.div `
    padding-top: 1.5em;
    padding-bottom: .5em;
    font-size: 2em;
`
const JsonExample = styled.div `
    font-style: italic;
    padding-left: 1.5em;
    color: lightblue;
    font-size: 1.2vw;
`

export default () => (
  <>
    <H3>Sample API JSON</H3>
    <JsonExample>
      <p> name: Nebulon B, </p>
      <p>manufacturer: Kuat Drive Yards,</p>
      <p>shipClass: Frigate,</p>
      <p>size: 300,</p>
      <p>weapons: [turbo lasers, laser cannons, tractor beams],</p>
      <p>affiliations: [Imperial, Rebels, New Republic, pirates, civilian],</p>
      <p>isUnique: No,</p>
      <p>slug: nebulon-b,</p>
    </JsonExample>

  </>
)
