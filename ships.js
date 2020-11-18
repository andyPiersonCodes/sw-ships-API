const ships = [{
  name: 'Nebulon B',
  type: 'Frigate',
  size: 300,
  manufacturer: 'Kuat Drive Yards',
  weapons: ['Turbo Lasers', 'Laser Cannons', 'Tractor Beams'],
  affiliations: ['Imperial', 'Rebels', 'Pirates'],
  isUnique: 'No',
  slug: 'nebulon-b',
}, {
  name: 'Star Destroyer',
  type: 'Cruiser',
  size: 1600,
  manufacturer: 'Kuat Drive Yards',
  weapons: ['Turbo Lasers', 'Laser Cannons', 'Tractor Beams'],
  affiliations: ['Imperial'],
  isUnique: 'No',
  slug: 'star-destroyer'
}, {
  name: 'TIE Fighter',
  type: 'Starfighter',
  size: 7,
  manufacturer: 'Sienar Fleet Systems',
  weapons: ['Laser Cannons'],
  affiliations: ['Imperial'],
  isUnique: 'No',
  slug: 'tie-fighter'
}, {
  name: 'X-Wing',
  type: 'Starfighter',
  size: 13,
  manufacturer: 'Incom Corporation',
  weapons: ['Laser Cannons', 'Proton Torpedoes'],
  affiliations: ['Rebels'],
  isUnique: 'No',
  slug: 'x-wing'
}, {
  name: 'Millennium Falcon',
  type: 'Freighter',
  size: 34,
  manufacturer: 'Corellian Engineering Corporation',
  weapons: ['Quad Laser Cannons', 'Tractor Beams', 'Concussion Missiles'],
  affiliations: ['Smugglers', 'Rebels', 'Hutt Cartel'],
  isUnique: 'Yes',
  slug: 'millennium-falcon'
}]

module.exports = ships

