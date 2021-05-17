import React from 'react'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Sidebar = styled.div `
    margin: 1em;
    padding: 1em;
    width: auto;
    background-color: black;
    position: fixed;
    height: auto;
    overflow: auto;
    font-size: 1.2em;
    text-align: left;
`

const StyledLink = styled(Link) `
  &:visited {color: white}
  text-decoration: none;
`

export default () => (
  <Sidebar>
    <ProSidebar>
      <Menu title="LINKS">
        <MenuItem style={{ listStyleType: 'none' }}><StyledLink to="/">HOME</StyledLink></MenuItem>
        <MenuItem style={{ listStyleType: 'none' }}>
          <StyledLink to="/search">SEARCH SHIPS</StyledLink>
        </MenuItem>
        <MenuItem style={{ listStyleType: 'none' }}>IDs / SLUGS</MenuItem>
        <MenuItem style={{ listStyleType: 'none' }}>CLASSES</MenuItem>
        <MenuItem style={{ listStyleType: 'none' }}>AFFILIATIONS</MenuItem>

      </Menu>
    </ProSidebar>
  </Sidebar>
)
