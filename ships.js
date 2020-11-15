const ships = [{
  id: 1,
  name: 'Nebulon B',
  type: 'Frigate',
  size: 300,
  manufacturer: 'Kuat Drive Yards',
  weapons: ['Turbo Lasers', 'Laser Cannons', 'Tractor Beams'],
  affiliations: ['Imperial', 'Rebels', 'Pirates'],
  isUnique: 'No'
}, {
  id: 2,
  name: 'Star Destroyer',
  type: 'Cruiser',
  size: 1600,
  manufacturer: 'Kuat Drive Yards',
  weapons: ['Turbo Lasers', 'Laser Cannons', 'Tractor Beams'],
  affiliations: ['Imperial'],
  isUnique: 'No'
}, {
  id: 3,
  name: 'TIE Fighter',
  type: 'Starfighter',
  size: 7,
  manufacturer: 'Sienar Fleet Systems',
  weapons: ['Laser Cannons'],
  affiliations: ['Imperial'],
  isUnique: 'No'
}, {
  id: 4,
  name: 'X-Wing',
  type: 'Starfighter',
  size: 13,
  manufacturer: 'Incom Corporation',
  weapons: ['Laser Cannons', 'Proton Torpedoes'],
  affiliations: ['Rebels'],
  isUnique: 'No'
}, {
  id: 5,
  name: 'Millennium Falcon',
  type: 'Freighter',
  size: 34,
  manufacturer: 'Corellian Engineering Corporation',
  weapons: ['Quad Laser Cannons', 'Tractor Beams', 'Concussion Missiles'],
  affiliations: ['Smugglers', 'Rebels', 'Hutt Cartel'],
  isUnique: 'Yes'
}]

module.exports = ships

