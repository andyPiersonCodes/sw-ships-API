import fetchShips from '../actions/search'

export const filterShips = (list, term) => list.filter(ship => (
  ship.name.toLowerCase().includes(term.toLowerCase())
))

export const retrieveShips = async () => {
  const ships = await fetchShips()

  return ships
}
