import React from 'react'
import styled from 'styled-components'

const Table = styled.table `
    border-collapse: collapse;
    margin: 0 auto;
    padding: 10px;
    font-size: 1.5vw;
`
const Cell = styled.th `
font-size: 1vw;
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
      <tr>
        <Cell>GET</Cell>
        <Cell>/api/ships</Cell>
        <Cell>Return JSON of all ships</Cell>
      </tr>
      <tr>
        <Cell>GET</Cell>
        <Cell>/api/ships/id/#</Cell>
        <Cell>Return JSON of a ship by id</Cell>
      </tr>
      <tr>
        <Cell>GET</Cell>
        <Cell>/api/ships/gte/#</Cell>
        <Cell>Return JSON of all ships greater than or equal size requested</Cell>
      </tr>
      <tr>
        <Cell>GET</Cell>
        <Cell>/api/ships/lte/#</Cell>
        <Cell>Return JSON of all ships less than or equal to size requested</Cell>
      </tr>
      <tr>
        <Cell>GET</Cell>
        <Cell>/api/ship/slug</Cell>
        <Cell>Returns a JSON of a fuzzy search of all matching slugs</Cell>
      </tr>
      <tr>
        <Cell>POST</Cell>
        <Cell>/api/ships/</Cell>
        <Cell>Create new ship and add to database</Cell>
      </tr>
      <tr>
        <Cell>DELETE</Cell>
        <Cell>/api/ships/#</Cell>
        <Cell>Delete a ships record</Cell>
      </tr>

    </Table>
  </>
)
