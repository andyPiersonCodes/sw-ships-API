/* eslint-disable max-len */
'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable{(}'users', { id: Sequelize.INTEGER });
     */
    await queryInterface.bulkInsert('ships', [
      {
        name: 'A Wing', manufacturer: 'Kuat Systems Engineering', shipClass: 'interceptor', size: 7, isUnique: 'no', slug: 'a-wing'
      },
      {
        name: 'AA-9 Coruscant Freighter', manufacturer: 'Botajef Shipyards', shipClass: 'Freighter', size: 390, isUnique: 'no', slug: 'aa-9-coruscant-freighter'
      },
      {
        name: 'Acclamator Assault Ship', manufacturer: 'Rothana Heavy Engineering', shipClass: 'Cruiser - Heavy', size: 460, isUnique: 'no', slug: 'acclamator-assault-ship'
      },
      {
        name: 'Agressor Assault Bomber', manufacturer: 'Trilon', shipClass: 'Starfighter', size: 20, isUnique: 'no', slug: 'agressor-assault-bomber'
      },
      {
        name: 'Agressor Class Destroyer', manufacturer: 'Galactic Empire', shipClass: 'Destroyer', size: 1500, isUnique: 'no', slug: 'agressor-destroyer'
      },
      {
        name: 'Arquiten', manufacturer: 'Kuat Drive Yards', shipClass: 'Cruiser - Light', size: 325, isUnique: 'no', slug: 'arquiten'
      },
      {
        name: 'Atmostphere Assault Lander', manufacturer: 'Sienar-Jaemus Army Systems', shipClass: 'Transport', size: 17, isUnique: 'no', slug: 'slug:atmostphere-assault-lander'
      },
      {
        name: 'B Wing', manufacturer: 'Slayn & Korpil', shipClass: 'Starfighter', size: 17, isUnique: 'no', slug: 'b-wing'
      },
      {
        name: 'B7', manufacturer: 'Loronar Corporation', shipClass: 'Freighter', size: 19, isUnique: 'no', slug: 'b7'
      },
      {
        name: 'Baleen Heavy Freighter', manufacturer: 'Correllian Engineering Corporation', shipClass: 'Freighter', size: 459, isUnique: 'no', slug: 'baleen-heavy-freighter'
      },
      {
        name: 'Battle Dragon', manufacturer: 'Olanji-Charubah', shipClass: 'Cruiser - Medium', size: 500, isUnique: 'no', slug: 'battle-dragon'
      },
      {
        name: 'Belarus', manufacturer: 'Loronar Corporation', shipClass: 'Cruiser - Medium', size: 400, isUnique: 'No', slug: 'belarus'
      },
      {
        name: 'Bespin Twin Pod Cloud Car', manufacturer: 'Bespin Motors', shipClass: 'Patrol Ship', size: 7, isUnique: 'no', slug: 'bespin-twin-pod-cloud car'
      },
      {
        name: 'Carrack Cruiser', manufacturer: 'Damorian Manufacturing Corporation', shipClass: 'Cruiser - Light', size: 350, isUnique: 'no', slug: 'carrack-cruiser'
      },
      {
        name: 'Centerpoint Station', manufacturer: 'Killik', shipClass: 'Station', size: 350000, isUnique: 'yes', slug: 'centerpoint-station'
      },
      {
        name: 'Chu`unthor', manufacturer: 'Republic Fleet Systems', shipClass: 'Cruiser - Medium', size: 2000, isUnique: 'yes', slug: 'chu-unthor'
      },
      {
        name: 'Cloakshape fighter', manufacturer: 'Kuat Systems Engineering', shipClass: 'Starfighter', size: 15, isUnique: 'no', slug: 'coakshape-fighter'
      },
      {
        name: 'Consular Cruiser', manufacturer: 'Correllian Engineering Corporation', shipClass: 'Transport', size: 115, isUnique: 'no', slug: 'consular-cruiser'
      },
      {
        name: 'Corona Frigate', manufacturer: 'Kuat Drive Yards', shipClass: 'Frigate', size: 275, isUnique: 'No', slug: 'corona-frigate'
      },
      {
        name: 'Coronet', manufacturer: 'Kalevala Spaceworks', shipClass: 'Luxury Space Yacht', size: 216, isUnique: 'yes', slug: 'coronet'
      },
      {
        name: 'CR 90', manufacturer: 'Correllian Engineering Corporation', shipClass: 'Corvette', size: 150, isUnique: 'no', slug: 'cr-90'
      },
      {
        name: 'Crusader', manufacturer: 'Mandal Motors', shipClass: 'Corvette', size: 80, isUnique: 'No', slug: 'crusader'
      },
      {
        name: 'Death Star', manufacturer: 'Galactic Empire', shipClass: 'Super Weapon', size: 160000, isUnique: 'yes', slug: 'death-star'
      },
      {
        name: 'Death Star II', manufacturer: 'Galactic Empire', shipClass: 'Super Weapon', size: 200000, isUnique: 'yes', slug: 'death-star-ii'
      },
      {
        name: 'Delta 7 Starfighter', manufacturer: 'Kuat Systems Engineering', shipClass: 'Starfighter', size: 8, isUnique: 'no', slug: 'delta-7'
      },
      {
        name: 'Dooku Solar Sailer', manufacturer: 'Huppla Pasa Tisc', shipClass: 'Yacht', size: 15, isUnique: 'yes', slug: 'dooku-solar-sailer'
      },
      {
        name: 'Dreadnaught', manufacturer: 'Rendili StarDrive', shipClass: 'Battleship', size: 600, isUnique: 'no', slug: 'dreadnaught'
      },
      {
        name: 'E Wing', manufacturer: 'Freitek', shipClass: 'Starfighter', size: 11, isUnique: 'no', slug: 'e-wing'
      },
      {
        name: 'Ebon Hawk', manufacturer: 'Core Galaxy Systems', shipClass: 'Freighter', size: 24, isUnique: 'yes', slug: 'ebon-hawk'
      },
      {
        name: 'Eclipse Star Destoyer', manufacturer: 'Kuat Drive Yards', shipClass: 'Dreadnaught', size: 17500, isUnique: 'Yes', slug: 'eclipse-star-destoyer'
      },
      {
        name: 'Enforcer One', manufacturer: 'Core Galaxy Systems', shipClass: 'Dreadnaught', size: 900, isUnique: 'yes', slug: 'enforcer-one'
      },
      {
        name: 'Escape Pod', manufacturer: 'Correllian Engineering Corporation', shipClass: 'Transport', size: 10, isUnique: 'no', slug: 'escape-pod'
      },
      {
        name: 'ETA Starfighter', manufacturer: 'Kuat Systems Engineering', shipClass: 'Starfighter', size: 5, isUnique: 'no', slug: 'eta-starfighter'
      },
      {
        name: 'Executor', manufacturer: 'Kuat Drive Yards', shipClass: 'Super Weapon', size: 19000, isUnique: 'yes', slug: 'executor'
      },
      {
        name: 'Fang Fighter', manufacturer: 'Sorosuub', shipClass: 'Starfighter', size: 6, isUnique: 'no', slug: 'fang-fighter'
      },
      {
        name: 'Far*Reach IV PQR', manufacturer: 'Loronar Corporation', shipClass: 'Survey', size: 80, isUnique: 'no', slug: 'far-reach-iv-pqr'
      },
      {
        name: 'Firespray', manufacturer: 'Kuat Systems Engineering', shipClass: 'Patrol Ship', size: 21, isUnique: 'no', slug: 'firespray'
      },
      {
        name: 'Gladiator Destroyer', manufacturer: 'Rendili StarDrive', shipClass: 'Destroyer', size: 600, isUnique: 'no', slug: 'gladiator-destroyer'
      },
      {
        name: 'Ghost', manufacturer: 'Correllian Engineering Corporation', shipClass: 'Freighter', size: 45, isUnique: 'yes', slug: 'ghost'
      },
      {
        name: 'Gozanti Cruiser', manufacturer: 'Correllian Engineering Corporation', shipClass: 'Cruiser - Light', size: 64, isUnique: 'no', slug: 'gozanti-cruiser'
      },
      {
        name: 'GR-45', manufacturer: 'Gallofree Yards', shipClass: 'Transport', size: 60, isUnique: 'no', slug: 'gr-45'
      },
      {
        name: 'GR-75', manufacturer: 'Gallofree Yards', shipClass: 'Transport', size: 90, isUnique: 'no', slug: 'gr-75'
      },
      {
        name: 'Guri`s Stinger', manufacturer: 'Surronian', shipClass: 'Assault Ship', size: 1150, isUnique: 'yes', slug: 'guris-stinger'
      },
      {
        name: 'Hammerhead Cruiser', manufacturer: 'Rendili StarDrive', shipClass: 'Frigate', size: 315, isUnique: 'no', slug: 'hammerhead-cruiser'
      },
      {
        name: 'Home One', manufacturer: 'Mon Calmari Shipyards', shipClass: 'Cruiser - Heavy', size: 1400, isUnique: 'yes', slug: 'home-one'
      },
      {
        name: 'Hornet Interceptor', manufacturer: 'Tenloss Syndicate', shipClass: 'Scout Vessel', size: 14, isUnique: 'no', slug: 'hornet-interceptor'
      },
      {
        name: 'Hosk Station', manufacturer: 'Alderaan Royal Engineering', shipClass: 'Station', size: 200000, isUnique: 'yes', slug: 'hosk-station'
      },
      {
        name: 'Hounds Tooth', manufacturer: 'Correllian Engineering Corporation', shipClass: 'Freighter', size: 47, isUnique: 'yes', slug: 'hounds-tooth'
      },
      {
        name: 'HWK-290', manufacturer: 'Correllian Engineering Corporation', shipClass: 'Freighter', size: 17, isUnique: 'no', slug: 'hwk-290'
      },
      {
        name: 'Hyperspace Marauder', manufacturer: 'TransGalMeg', shipClass: 'Transport', size: 165, isUnique: 'yes', slug: 'hyperspace-marauder'
      },
      {
        name: 'I-7 Howlrunner', manufacturer: 'Incom', shipClass: 'Starfighter', size: 11, isUnique: 'no', slug: 'i-7-howlrunner'
      },
      {
        name: 'IG-2000', manufacturer: 'Trilon', shipClass: 'Starfighter', size: 20, isUnique: 'yes', slug: 'ig-2000'
      },
      {
        name: 'Sith Interdictor Cruiser', manufacturer: 'Republic Sienar Systems', shipClass: 'Destroyer', size: 600, isUnique: 'no', slug: 'sith-interdictor-cruiser'
      },
      {
        name: 'Interdictor Cruiser', manufacturer: 'Sienar Fleet Systems', shipClass: 'Cruiser - Heavy', size: 1129, isUnique: 'no', slug: 'interdictor-cruiser'
      },
      {
        name: 'Invisible Hand', manufacturer: 'Rendili StarDrive', shipClass: 'Dreadnaught', size: 1088, isUnique: 'yes', slug: 'invisible-hand'
      },
      {
        name: 'Ithullian Ore Hauler', manufacturer: 'Ithullian', shipClass: 'Transport', size: 1000, isUnique: 'no', slug: 'ithullian-ore-hauler'
      },
      {
        name: 'Keldabe', manufacturer: 'Mandal Motors', shipClass: 'Battleship', size: 1000, isUnique: 'No', slug: 'keldabe'
      },
      {
        name: 'Lady Luck', manufacturer: 'Sorosuub', shipClass: 'Luxury Space Yacht', size: 50, isUnique: 'yes', slug: 'lady-luck'
      },
      {
        name: 'Lambda Shuttle', manufacturer: 'Sienar Fleet Systems', shipClass: 'Transport', size: 20, isUnique: 'no', slug: 'lambda-shuttle'
      },
      {
        name: 'Lancer Frigate', manufacturer: 'Kuat Drive Yards', shipClass: 'Frigate', size: 250, isUnique: 'no', slug: 'lancer-frigate'
      },
      {
        name: 'Lucrehulk Battleship', manufacturer: 'Hoersch-Kessel', shipClass: 'Battleship', size: 3170, isUnique: 'no', slug: 'lucrehulk-battleship'
      },
      {
        name: 'M22 T Krayt', manufacturer: 'Mandal Motors', shipClass: 'Gunship', size: 50, isUnique: 'no', slug: 'm22-t-krayt'
      },
      {
        name: 'Marauder Corvette', manufacturer: 'Republic Fleet Systems', shipClass: 'Corvette', size: 195, isUnique: 'no', slug: 'marauder-corvette'
      },
      {
        name: 'Marauder Starjacker', manufacturer: 'Byblos Drive Yards', shipClass: 'Miner', size: 110, isUnique: 'no', slug: 'marauder-starjacker'
      },
      {
        name: 'Master Arcas Ship', manufacturer: 'Hoersch-Kessel', shipClass: 'Courier', size: 70, isUnique: 'yes', slug: 'master-arcas-ship'
      },
      {
        name: 'MC 80B', manufacturer: 'Mon Calmari Shipyards', shipClass: 'Cruiser - Heavy', size: 1200, isUnique: 'No', slug: 'mc-80b'
      },
      {
        name: 'MC-75', manufacturer: 'Mon Calmari Shipyards', shipClass: 'Cruiser - Heavy', size: 1200, isUnique: 'no', slug: 'mc75'
      },
      {
        name: 'MC-80', manufacturer: 'Mon Calmari Shipyards', shipClass: 'Cruiser - Heavy', size: 1400, isUnique: 'no', slug: 'mc-80'
      },
      {
        name: 'Millennium Falcon', manufacturer: 'Correllian Engineering Corporation', shipClass: 'Freighter', size: 34, isUnique: 'yes', slug: 'millennium-falcon'
      },
      {
        name: 'Miy`til Starfighter', manufacturer: 'Olanji-Charubah', shipClass: 'Starfighter', size: 8, isUnique: 'no', slug: 'miytil-starfighter'
      },
      {
        name: 'Moldy Crow', manufacturer: 'Correllian Engineering Corporation', shipClass: 'Freighter', size: 17, isUnique: 'yes', slug: 'moldy-crow'
      },
      {
        name: 'Naboo N1 Starfighter', manufacturer: 'Theed Palace Space Vessel Engineering Corps', shipClass: 'Starfighter', size: 11, isUnique: 'no', slug: 'naboo-n1-starfighter'
      },
      {
        name: 'Naboo Royal Cruiser', manufacturer: 'Theed Palace Space Vessel Engineering Corps', shipClass: 'Yacht', size: 39, isUnique: 'no', slug: 'naboo-royal-cruiser'
      },
      {
        name: 'Naboo Royal Starship', manufacturer: 'Theed Palace Space Vessel Engineering Corps', shipClass: 'Yacht', size: 76, isUnique: 'yes', slug: 'naboo-royal-starship'
      },
      {
        name: 'Naboo Star Skiff', manufacturer: 'Theed Palace Space Vessel Engineering Corps', shipClass: 'Transport', size: 30, isUnique: 'yes', slug: 'naboo-star-skiff'
      },
      {
        name: 'Nebula Class Star Destroyer', manufacturer: 'Republic Engineering Corp', shipClass: 'Destroyer', size: 1040, isUnique: 'no', slug: 'nebula-star-destroyer'
      },
      {
        name: 'Nebulon Ranger', manufacturer: 'Corellia StarDrive', shipClass: 'Courier', size: 25, isUnique: 'yes', slug: 'nebulon-ranger'
      },
      {
        name: 'Needle Fighter', manufacturer: 'Loronar Corporation', shipClass: 'Starfighter', size: 2.5, isUnique: 'No', slug: 'needle-fighter'
      },
      {
        name: 'Neimoidian Shuttle', manufacturer: 'Haor Chall Engineering', shipClass: 'Transport', size: 15, isUnique: 'no', slug: 'neimoidian-shuttle'
      },
      {
        name: 'Nova Class battle cruiser', manufacturer: 'Olanji-Charubah', shipClass: 'Frigate', size: 400, isUnique: 'No', slug: 'nova-class-battle-cruiser'
      },
      {
        name: 'Nssis Clawcraft', manufacturer: 'Chiss Ascendancy', shipClass: 'Starfighter', size: 7, isUnique: 'no', slug: 'nssis-clawcraft'
      },
      {
        name: 'Nubian Yacht', manufacturer: 'Theed Palace Space Vessel Engineering Corps', shipClass: 'Yacht', size: 48, isUnique: 'no', slug: 'nubian-yacht'
      },
      {
        name: 'Outrider', manufacturer: 'Correllian Engineering Corporation', shipClass: 'Freighter', size: 21, isUnique: 'yes', slug: 'outrider'
      },
      {
        name: 'Profundity', manufacturer: 'Mon Calmari Shipyards', shipClass: 'Cruiser - Heavy', size: 1200, isUnique: 'yes', slug: 'profundity'
      },
      {
        name: 'Providence Class Star Destroyer', manufacturer: 'Rendili StarDrive', shipClass: 'Dreadnaught', size: 1088, isUnique: 'no', slug: 'providence-class-sd'
      },
      {
        name: 'Quadjumper', manufacturer: 'Subpro Corp', shipClass: 'Tug', size: 8, isUnique: 'no', slug: 'quadjumper'
      },
      {
        name: 'Quasar cruiser', manufacturer: 'Sorosuub', shipClass: 'Carrier', size: 340, isUnique: 'no', slug: 'quasar-cruiser'
      },
      {
        name: 'Razor Crest', manufacturer: 'unknown', shipClass: 'Gunship', size: 30, isUnique: 'yes', slug: 'razor-crest'
      },
      {
        name: 'Regulator X-Q2', manufacturer: 'Loronar Corporation', shipClass: 'Scout Vessel', size: 150, isUnique: 'No', slug: 'regulator-x-q2'
      },
      {
        name: 'Resistance Transport', manufacturer: 'Slayn & Korpil', shipClass: 'Transport', size: 16, isUnique: 'no', slug: 'resistance-transport'
      },
      {
        name: 'Rogue Shadow', manufacturer: 'Sienar Fleet Systems', shipClass: 'Transport', size: 65, isUnique: 'yes', slug: 'rogue shadow'
      },
      {
        name: 'Sabaoth Destroyer', manufacturer: 'unknown', shipClass: 'Destroyer', size: 300, isUnique: 'no', slug: 'sabaoth-destroyer'
      },
      {
        name: 'Sabaoth Starfighter', manufacturer: 'unknown', shipClass: 'Starfighter', size: 8, isUnique: 'no', slug: 'sabaoth-starfighter'
      },
      {
        name: 'Scimitar Assault Bomber', manufacturer: 'Sienar Fleet Systems', shipClass: 'Bomber', size: 14, isUnique: 'no', slug: 'scimitar-assault-bomber'
      },
      {
        name: 'Sentiel Landing Craft', manufacturer: 'Cygnus spaceworks', shipClass: 'Transport', size: 38, isUnique: 'no', slug: 'sentiel-landing-craft'
      },
      {
        name: 'ShieldShip', manufacturer: 'Republic Engineering Corp', shipClass: 'Escort Vehicle', size: 500, isUnique: 'no', slug: 'shieldship'
      },
      {
        name: 'Shree Battle Cruiser', manufacturer: 'Ssi-Ruuvi', shipClass: 'Cruiser - Heavy', size: 900, isUnique: 'no', slug: 'shree-battle-cruiser'
      },
      {
        name: 'Sith Infiltrator', manufacturer: 'Republic Sienar Systems', shipClass: 'Courier', size: 27, isUnique: 'yes', slug: 'sith-infiltrator'
      },
      {
        name: 'Skipray Blastboat', manufacturer: 'Sienar Fleet Systems', shipClass: 'Starfighter', size: 25, isUnique: 'no', slug: 'skipray-blastboat'
      },
      {
        name: 'Slave I', manufacturer: 'Kuat Systems Engineering', shipClass: 'Patrol Ship', size: 21, isUnique: 'yes', slug: 'slave-i'
      },
      {
        name: 'Slave II', manufacturer: 'Mandal Motors', shipClass: 'Patrol Ship', size: 30, isUnique: 'Yes', slug: 'slave-ii'
      },
      {
        name: 'Sorosuub 3000', manufacturer: 'sorosuub', shipClass: 'Yacht', size: 55, isUnique: 'no', slug: 'sorosuub-3000'
      },
      {
        name: 'Soulless One', manufacturer: 'Feethan Ottraw Scalable Assemblies', shipClass: 'Starfighter', size: 7, isUnique: 'yes', slug: 'soulless-one'
      },
      {
        name: 'Ssi-Ruuvi Assault Carrier', manufacturer: 'Ssi-Ruuvi', shipClass: 'Carrier', size: 750, isUnique: 'no', slug: 'ssi-ruuvi-assault-carrier'
      },
      {
        name: 'Ssi-Ruuvi Battle Droid', manufacturer: 'Ssi-Ruuvi', shipClass: 'Starfighter', size: 2, isUnique: 'no', slug: 'ssi-ruuvi-battle-droid'
      },
      {
        name: 'Ssi-Ruuvi Picket Ship', manufacturer: 'Ssi-Ruuvi', shipClass: 'Patrol Ship', size: 45, isUnique: 'no', slug: 'ssi-ruuvi-picket-ship'
      },
      {
        name: 'Star Courier', manufacturer: 'Republic Sienar Systems', shipClass: 'Courier', size: 27, isUnique: 'no', slug: 'star-courier'
      },
      {
        name: 'Star Forge', manufacturer: 'Rakatan Infinite Empire', shipClass: 'Station', size: 3100, isUnique: 'yes', slug: 'star-forge'
      },
      {
        name: 'Star Home', manufacturer: 'Olanji-Charubah', shipClass: 'luxury Space Yacht', size: 2500, isUnique: 'yes', slug: 'star-home'
      },
      {
        name: 'Star Jewel', manufacturer: 'Ubrikkian', shipClass: 'Luxury Space Yacht', size: 160, isUnique: 'yes', slug: 'star-jewel'
      },
      {
        name: 'Starlight Intruder', manufacturer: 'Mobquet', shipClass: 'Transport', size: 113, isUnique: 'yes', slug: 'starlight-intruder'
      },
      {
        name: 'Stinger Mantis', manufacturer: 'Latero Spaceworks', shipClass: 'Yacht', size: 37, isUnique: 'no', slug: 'stinger-mantis'
      },
      {
        name: 'Strike Class Medium Cruiser', manufacturer: 'Loronar Corporation', shipClass: 'Cruiser - Medium', size: 450, isUnique: 'no', slug: 'strike-class-medium-cruiser'
      },
      {
        name: 'Sun Crusher', manufacturer: 'Galactic Empire', shipClass: 'Super Weapon', size: 13, isUnique: 'yes', slug: 'sun-crusher'
      },
      {
        name: 'Super Star Destroyer', manufacturer: 'Kuat Drive Yards', shipClass: 'Super Weapon', size: 19000, isUnique: 'no', slug: 'super-star-destroyer'
      },
      {
        name: 'Tantive IV', manufacturer: 'Correllian Engineering Corporation', shipClass: 'corvette', size: 150, isUnique: 'yes', slug: 'tantive-iv'
      },
      {
        name: 'Tartan Patrol Cruiser', manufacturer: 'Damorian Manufacturing Corp', shipClass: 'Patrol Ship', size: 250, isUnique: 'no', slug: 'tartan-patrol-cruiser'
      },
      {
        name: 'Taylander Shuttle', manufacturer: 'Gallofree Yards', shipClass: 'Transport', size: 43, isUnique: 'no', slug: 'taylander-shuttle'
      },
      {
        name: 'Techno Union Starship', manufacturer: 'Techno Union', shipClass: 'Transport', size: 220, isUnique: 'no', slug: 'techno-union-starship'
      },
      {
        name: 'The Wheel', manufacturer: 'Bolzi Design', shipClass: 'Station', size: 50000, isUnique: 'yes', slug: 'the-wheel'
      },
      {
        name: 'Theta Class Shuttle', manufacturer: 'Cygnus spaceworks', shipClass: 'Transport', size: 19, isUnique: 'no', slug: 'theta-class-shuttle'
      },
      {
        name: 'TIE Advanced', manufacturer: 'Sienar Fleet Systems', shipClass: 'Starfighter', size: 11, isUnique: 'no', slug: 'tie-advanced'
      },
      {
        name: 'TIE Bomber', manufacturer: 'Sienar Fleet Systems', shipClass: 'Bomber', size: 8, isUnique: 'no', slug: 'tie-bomber'
      },
      {
        name: 'TIE Defender', manufacturer: 'Sienar Fleet Systems', shipClass: 'Starfighter', size: 9, isUnique: 'no', slug: 'tie-defender'
      },
      {
        name: 'TIE Fighter', manufacturer: 'Sienar Fleet Systems', shipClass: 'Starfighter', size: 6, isUnique: 'no', slug: 'tie-fighter'
      },
      {
        name: 'TIE Interceptor', manufacturer: 'Sienar Fleet Systems', shipClass: 'Interceptor', size: 11, isUnique: 'no', slug: 'tie-interceptor'
      },
      {
        name: 'Trade Federation Landing ship', manufacturer: 'Haor Chall Engineering', shipClass: 'Transport', size: 210, isUnique: 'no', slug: 'trade-federation-landing-ship'
      },
      {
        name: 'Turbulent Class Star Destroyer', manufacturer: 'Imperial Remnant', shipClass: 'Destroyer', size: 1600, isUnique: 'no', slug: 'turbulent-star-destroyer'
      },
      {
        name: 'U Wing', manufacturer: 'Incom', shipClass: 'Starfighter', size: 24, isUnique: 'no', slug: 'u-wing'
      },
      {
        name: 'Upsilon Class Shuttle', manufacturer: 'Sienar-Jaemus Army Systems', shipClass: 'Transport', size: 19, isUnique: 'no', slug: 'upsilon-class-shuttle'
      },
      {
        name: 'V Wing', manufacturer: 'Kuat Systems Engineering', shipClass: 'Starfighter', size: 8, isUnique: 'no', slug: 'v-wing'
      },
      {
        name: 'VCX 100', manufacturer: 'Correllian Engineering Corporation', shipClass: 'Freighter', size: 44, isUnique: 'no', slug: 'vcx-100'
      },
      {
        name: 'Venator Star Destroyer', manufacturer: 'Kuat Drive Yards', shipClass: 'Destroyer', size: 1137, isUnique: 'no', slug: 'venator-star-destroyer'
      },
      {
        name: 'Victory Star Destroyer', manufacturer: 'Rendili StarDrive', shipClass: 'Cruiser - Medium', size: 900, isUnique: 'no', slug: 'victory-star-destroyer'
      },
      {
        name: 'Virago', manufacturer: 'Mandal Motors', shipClass: 'Starfighter', size: 21, isUnique: 'Yes', slug: 'virago'
      },
      {
        name: 'Vulture droid', manufacturer: 'Haor Chall Engineering', shipClass: 'Starfighter', size: 7, isUnique: 'no', slug: 'vulture-droid'
      },
      {
        name: 'Wild Karrde', manufacturer: 'Correllian Engineering Corporation', shipClass: 'Transport', size: 125, isUnique: 'yes', slug: 'wild-karrde'
      },
      {
        name: 'World Devastator', manufacturer: 'Galactic Empire', shipClass: 'Super Weapon', size: 3200, isUnique: 'no', slug: 'world-devastator'
      },
      {
        name: 'X Wing', manufacturer: 'Incom', shipClass: 'Starfighter', size: 13, isUnique: 'No', slug: 'x-wing'
      },
      {
        name: 'Y Wing', manufacturer: 'Koensayr', shipClass: 'Bomber', size: 23, isUnique: 'no', slug: 'y-wing'
      },
      {
        name: 'Y-4 Raptor', manufacturer: 'Incom', shipClass: 'Transport', size: 28, isUnique: 'no', slug: 'y-4-raptor'
      },
      {
        name: 'YR-2400', manufacturer: 'Correllian Engineering Corporation', shipClass: 'Freighter', size: 21, isUnique: 'no', slug: 'yt-2400'
      },
      {
        name: 'YT 1300', manufacturer: 'Correllian Engineering Corporation', shipClass: 'Freighter', size: 34, isUnique: 'no', slug: 'yt-1300'
      },
      {
        name: 'YV-666', manufacturer: 'Correllian Engineering Corporation', shipClass: 'Freighter', size: 47, isUnique: 'no', slug: 'yv-666'
      },
      {
        name: 'Z95 Headhunter', manufacturer: 'Subpro', shipClass: 'Starfighter', size: 17, isUnique: 'no', slug: 'z95-headhunter'
      },
      {
        name: 'Zeta Class Shuttle', manufacturer: 'Sienar Fleet Systems', shipClass: 'Freighter', size: 31, isUnique: 'no', slug: 'zeta-class-shuttle'
      }
    ])

    await queryInterface.bulkInsert('weapons', [



      

    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable{(}'users');
     */
  }
}
