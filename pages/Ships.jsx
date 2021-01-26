import React, { useEffect, useState } from 'react'
import { retrieveShips } from '../utils/ships'
import ManufacturerDetails from '../components/ShipDetails'
import NotFound from '../components/NotFound'
import Page from '../components/Page'

export default ({ location }) => {
  const [shipId, setShipId] = useState(0)
  const [ship, setShip] = useState({})

  useEffect(() => {
    async function pullData() {
      const { id, details } = await retrieveShips(location)

      setShipId(id)
      setShip(details)
    }

    pullData()
  }, [])

  return (
    <Page>

      {
        shipId
          ? (
            <>
              <ManufacturerDetails id={ship.id} name={ship.name} slug={ship.slug} />
            </>
          )
          : (<NotFound message="Sorry, I don't know that manufacturer" />)
      }
    </Page>
  )
}
