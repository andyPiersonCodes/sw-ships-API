import fetchShipDetails from '../actions/Ships'

export const getShipIdFromUrl = location => (location && location.pathname
  ? location.pathname.split('/').pop()
  : 0
)

export const retrieveShips = async (location) => {
  const shipId = getShipIdFromUrl(location)

  if (!Number(shipId)) return { id: 0, name: {}, slug: [] }

  const { id, name, slug } = await fetchShipDetails(shipId)

  if (!id || !name || !slug) return { id: 0, name: {}, slug: [] }

  return { id, name, slug }
}
