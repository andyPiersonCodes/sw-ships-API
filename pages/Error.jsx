import React from 'react'
import NotFound from '../components/NotFound'
import Page from '../components/Page'
import GoBack from '../components/GoBack'

export default () => (
  <Page>
    <NotFound message="These are not the ships you are looking for" />
    <GoBack />
  </Page>
)
