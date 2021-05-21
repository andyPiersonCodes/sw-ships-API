# sw-ships-API

Database of Star Wars ships.

# Allows you to search by
  - Name
  - Type
  - Uniqueness
    - All uniques
    - By name
  - Size
    - Larger than (in meters)
    - Smaller than (in meters)
  - Manufacturer
  - Weapons
  - Affiliations
    - ID
      - With or without ships attached

  # ROUTES
  ? = variable to enter in route
    http://localhost:${port}/api/ships
    http://localhost:${port}/api/ships/?
    http://localhost:${port}/api/ships/slug/?
    http://localhost:${port}/api/ships/class/?
    http://localhost:${port}/api/ships/special/? (yes/no)
    http://localhost:${port}/api/ships/gte/?
    http://localhost:${port}/api/ships/lte/?
    http://localhost:${port}/api/affiliations
    http://localhost:${port}/api/affiliations/id/?
    http://localhost:${port}/api/affiliations/ships
    

  # To be completed
  - New Tables
    - Manufacturers table
      - shipsManufacturers linking table
    - shipClasses table
      - shipsShipsClasses linkingtable
    - HyperDrive table to ships table
    - Crew Compliment to ships table

  - Routes
    - Add Manufacturers routes
    - Add ShipClasses routes
    - Add HyperDrive routes

  - Controllers
    - Add Manufacturers controllers
    - Add shipClasses controllers
    - Add HyperDrive to ships controllers
    - Add crew to ships controller

  - Models
    - Add Manufacturers model
    - Add shipClasses model
    - Add HyperDrive to ships model
    - Add crew to ships model


