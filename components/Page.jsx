import React from 'react'
import styled from 'styled-components'

const Page = styled.div `
  font-family: Arial, Helvetica, sans-serif;
  background-color: black;
  color: #f1f1f1;
  margin: 0;
  text-align: center;
  margin-left: 200px;
  padding: 1px 16px;
  height: 100%;
  `

export default ({ children }) => (
  <Page>
    {children}
  </Page>
)
