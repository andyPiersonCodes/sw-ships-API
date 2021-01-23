/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Page from '../components/Page'
import Image from '../components/Image'
import Title from '../components/Title'
import SideBar from '../components/Sidebar'
import JsonExample from '../components/JsonExample'
import Table from '../components/APIRefs'

export default () => (
  <Page>
    <img src="./images/sw-logo2.png" alt="star wars logo" />
    <Title />
    <Table />
    <JsonExample />
  </Page>
)
