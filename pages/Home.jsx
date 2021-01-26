/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Page from '../components/Page'
import Subpage from '../components/Subpage'
import Title from '../components/Title'
import SideBar from '../components/Sidebar'
import JsonExample from '../components/JsonExample'
import Table from '../components/APIRefs'

export default () => (
  <Page>
    <SideBar />
    <Subpage>
      <img src="./images/sw-logo2.png" alt="star wars logo" />
      <Title />
      <Table />
      <JsonExample />
    </Subpage>
  </Page>
)
