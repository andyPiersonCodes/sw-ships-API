import React from 'react'
import styled from 'styled-components'

const Sidebar = styled.div `
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: #464647;
    position: fixed;
    height: 100%;
    overflow: auto;
    font-size: 1.2em;

`

export default () => {
  <>
    <Sidebar />
  </>
}
