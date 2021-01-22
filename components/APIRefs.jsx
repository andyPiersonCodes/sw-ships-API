import React from 'react'
import styled from 'styled-components'

const Table = styled.table `
    border-collapse: collapse;
    margin: 0 auto;
    padding: 10px;
`

const H3 = styled.div `
    padding-top: 3em;
    padding-bottom: 1em;
    font-size: 2em;
`

export default () => (
  <>
    <H3>API References</H3>
    <Table>
      <tr>
        <th>Method</th>
        <th>Reference</th>
        <th>Purpose</th>
      </tr>
    </Table>
  </>
)
