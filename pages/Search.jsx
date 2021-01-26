import React, { useEffect, useState } from 'react'
import Ship from '../components/Ships'
import Page from '../components/Page'
import Search from '../components/SearchBox'
import SideBar from '../components/Sidebar'
import { filterShips, retrieveShips } from '../utils/search'

export default () => {
  const [shipList, setShipList] = useState([])
  const [filteredShipList, setFilteredShipList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function pullData() {
      const ships = await retrieveShips()

      setShipList(ships)
      setFilteredShipList(ships)
    }

    pullData()
  }, [])

  useEffect(() => {
    const filtered = filterShips(shipList, searchTerm)

    setFilteredShipList(filtered)
  }, [searchTerm])

  return (
    <Page>
      <SideBar />
      <Search term={searchTerm} setter={setSearchTerm} />
      <p>ID    NAME    SLUG</p>
      {
        filteredShipList.map(ship => (
          <Ship
            key={ship.id}
            id={ship.id}
            name={ship.name}
            slug={ship.slug}
          />
        ))
      }
    </Page>
  )
}
