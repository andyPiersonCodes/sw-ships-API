/* eslint-disable max-len */
'use strict'

module.exports = {
  up: async (queryInterface) => {
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
        name: 'AA-9 Coruscant Freighter', manufacturer: 'Botajef Shipyards', shipClass: 'freighter', size: 390, isUnique: 'no', slug: 'aa-9-coruscant-freighter'
      },
      {
        name: 'Acclamator Assault Ship', manufacturer: 'Rothana Heavy Engineering', shipClass: 'cruiser-heavy', size: 460, isUnique: 'no', slug: 'acclamator-assault-ship'
      },
      {
        name: 'Agressor Assault Bomber', manufacturer: 'Trilon', shipClass: 'starfighter', size: 20, isUnique: 'no', slug: 'agressor-assault-bomber'
      },
      {
        name: 'Agressor Class Destroyer', manufacturer: 'Galactic Empire', shipClass: 'destroyer', size: 1500, isUnique: 'no', slug: 'agressor-destroyer'
      },
      {
        name: 'Arquiten', manufacturer: 'Kuat Drive Yards', shipClass: 'cruiser-light', size: 325, isUnique: 'no', slug: 'arquiten'
      },
      {
        name: 'Atmostphere Assault Lander', manufacturer: 'Sienar-Jaemus Army Systems', shipClass: 'transport', size: 17, isUnique: 'no', slug: 'slug:atmostphere-assault-lander'
      },
      {
        name: 'B Wing', manufacturer: 'Slayn & Korpil', shipClass: 'starfighter', size: 17, isUnique: 'no', slug: 'b-wing'
      },
      {
        name: 'B7', manufacturer: 'Loronar Corporation', shipClass: 'freighter', size: 19, isUnique: 'no', slug: 'b7'
      },
      {
        name: 'Baleen Heavy Freighter', manufacturer: 'Correllian Engineering Corporation', shipClass: 'freighter', size: 459, isUnique: 'no', slug: 'baleen-heavy-freighter'
      },
      {
        name: 'Battle Dragon', manufacturer: 'Olanji-Charubah', shipClass: 'cruiser-medium', size: 500, isUnique: 'no', slug: 'battle-dragon'
      },
      {
        name: 'Belarus', manufacturer: 'Loronar Corporation', shipClass: 'cruiser-medium', size: 400, isUnique: 'No', slug: 'belarus'
      },
      {
        name: 'Bespin Twin Pod Cloud Car', manufacturer: 'Bespin Motors', shipClass: 'patrol-ship', size: 7, isUnique: 'no', slug: 'bespin-twin-pod-cloud car'
      },
      {
        name: 'Carrack Cruiser', manufacturer: 'Damorian Manufacturing Corporation', shipClass: 'cruiser-light', size: 350, isUnique: 'no', slug: 'carrack-cruiser'
      },
      {
        name: 'Centerpoint Station', manufacturer: 'Killik', shipClass: 'station', size: 350000, isUnique: 'yes', slug: 'centerpoint-station'
      },
      {
        name: 'Chu`unthor', manufacturer: 'Republic Fleet Systems', shipClass: 'cruiser-medium', size: 2000, isUnique: 'yes', slug: 'chu-unthor'
      },
      {
        name: 'Cloakshape fighter', manufacturer: 'Kuat Systems Engineering', shipClass: 'starfighter', size: 15, isUnique: 'no', slug: 'coakshape-fighter'
      },
      {
        name: 'Consular Cruiser', manufacturer: 'Correllian Engineering Corporation', shipClass: 'transport', size: 115, isUnique: 'no', slug: 'consular-cruiser'
      },
      {
        name: 'Corona Frigate', manufacturer: 'Kuat Drive Yards', shipClass: 'frigate', size: 275, isUnique: 'No', slug: 'corona-frigate'
      },
      {
        name: 'Coronet', manufacturer: 'Kalevala Spaceworks', shipClass: 'luxury-space-yacht', size: 216, isUnique: 'yes', slug: 'coronet'
      },
      {
        name: 'CR 90', manufacturer: 'Correllian Engineering Corporation', shipClass: 'corvette', size: 150, isUnique: 'no', slug: 'cr-90'
      },
      {
        name: 'Crusader', manufacturer: 'Mandal Motors', shipClass: 'corvette', size: 80, isUnique: 'No', slug: 'crusader'
      },
      {
        name: 'Death Star', manufacturer: 'Galactic Empire', shipClass: 'super-weapon', size: 160000, isUnique: 'yes', slug: 'death-star'
      },
      {
        name: 'Death Star II', manufacturer: 'Galactic Empire', shipClass: 'super-weapon', size: 200000, isUnique: 'yes', slug: 'death-star-ii'
      },
      {
        name: 'Delta 7 Starfighter', manufacturer: 'Kuat Systems Engineering', shipClass: 'starfighter', size: 8, isUnique: 'no', slug: 'delta-7'
      },
      {
        name: 'Dooku Solar Sailer', manufacturer: 'Huppla Pasa Tisc', shipClass: 'yacht', size: 15, isUnique: 'yes', slug: 'dooku-solar-sailer'
      },
      {
        name: 'Dreadnaught', manufacturer: 'Rendili StarDrive', shipClass: 'battleship', size: 600, isUnique: 'no', slug: 'dreadnaught'
      },
      {
        name: 'E Wing', manufacturer: 'Freitek', shipClass: 'starfighter', size: 11, isUnique: 'no', slug: 'e-wing'
      },
      {
        name: 'Ebon Hawk', manufacturer: 'Core Galaxy Systems', shipClass: 'freighter', size: 24, isUnique: 'yes', slug: 'ebon-hawk'
      },
      {
        name: 'Eclipse Star Destoyer', manufacturer: 'Kuat Drive Yards', shipClass: 'dreadnaught', size: 17500, isUnique: 'Yes', slug: 'eclipse-star-destoyer'
      },
      {
        name: 'Enforcer One', manufacturer: 'Core Galaxy Systems', shipClass: 'dreadnaught', size: 900, isUnique: 'yes', slug: 'enforcer-one'
      },
      {
        name: 'Escape Pod', manufacturer: 'Correllian Engineering Corporation', shipClass: 'transport', size: 10, isUnique: 'no', slug: 'escape-pod'
      },
      {
        name: 'ETA Starfighter', manufacturer: 'Kuat Systems Engineering', shipClass: 'starfighter', size: 5, isUnique: 'no', slug: 'eta-starfighter'
      },
      {
        name: 'Executor', manufacturer: 'Kuat Drive Yards', shipClass: 'super-weapon', size: 19000, isUnique: 'yes', slug: 'executor'
      },
      {
        name: 'Fang Fighter', manufacturer: 'Sorosuub', shipClass: 'starfighter', size: 6, isUnique: 'no', slug: 'fang-fighter'
      },
      {
        name: 'Far*Reach IV PQR', manufacturer: 'Loronar Corporation', shipClass: 'survey', size: 80, isUnique: 'no', slug: 'far-reach-iv-pqr'
      },
      {
        name: 'Firespray', manufacturer: 'Kuat Systems Engineering', shipClass: 'patrol-ship', size: 21, isUnique: 'no', slug: 'firespray'
      },
      {
        name: 'Gladiator Destroyer', manufacturer: 'Rendili StarDrive', shipClass: 'destroyer', size: 600, isUnique: 'no', slug: 'gladiator-destroyer'
      },
      {
        name: 'Ghost', manufacturer: 'Correllian Engineering Corporation', shipClass: 'freighter', size: 45, isUnique: 'yes', slug: 'ghost'
      },
      {
        name: 'Gozanti Cruiser', manufacturer: 'Correllian Engineering Corporation', shipClass: 'cruiser-light', size: 64, isUnique: 'no', slug: 'gozanti-cruiser'
      },
      {
        name: 'GR-45', manufacturer: 'Gallofree Yards', shipClass: 'transport', size: 60, isUnique: 'no', slug: 'gr-45'
      },
      {
        name: 'GR-75', manufacturer: 'Gallofree Yards', shipClass: 'transport', size: 90, isUnique: 'no', slug: 'gr-75'
      },
      {
        name: 'Guri`s Stinger', manufacturer: 'Surronian', shipClass: 'assault-ship', size: 1150, isUnique: 'yes', slug: 'guris-stinger'
      },
      {
        name: 'Hammerhead Cruiser', manufacturer: 'Rendili StarDrive', shipClass: 'frigate', size: 315, isUnique: 'no', slug: 'hammerhead-cruiser'
      },
      {
        name: 'Home One', manufacturer: 'Mon Calmari Shipyards', shipClass: 'cruiser-heavy', size: 1400, isUnique: 'yes', slug: 'home-one'
      },
      {
        name: 'Hornet Interceptor', manufacturer: 'Tenloss Syndicate', shipClass: 'scout-vessel', size: 14, isUnique: 'no', slug: 'hornet-interceptor'
      },
      {
        name: 'Hosk Station', manufacturer: 'Alderaan Royal Engineering', shipClass: 'station', size: 200000, isUnique: 'yes', slug: 'hosk-station'
      },
      {
        name: 'Hounds Tooth', manufacturer: 'Correllian Engineering Corporation', shipClass: 'freighter', size: 47, isUnique: 'yes', slug: 'hounds-tooth'
      },
      {
        name: 'HWK-290', manufacturer: 'Correllian Engineering Corporation', shipClass: 'freighter', size: 17, isUnique: 'no', slug: 'hwk-290'
      },
      {
        name: 'Hyperspace Marauder', manufacturer: 'TransGalMeg', shipClass: 'transport', size: 165, isUnique: 'yes', slug: 'hyperspace-marauder'
      },
      {
        name: 'I-7 Howlrunner', manufacturer: 'Incom Corporation', shipClass: 'starfighter', size: 11, isUnique: 'no', slug: 'i-7-howlrunner'
      },
      {
        name: 'IG-2000', manufacturer: 'Trilon', shipClass: 'starfighter', size: 20, isUnique: 'yes', slug: 'ig-2000'
      },
      {
        name: 'Sith Interdictor Cruiser', manufacturer: 'Republic Sienar Systems', shipClass: 'destroyer', size: 600, isUnique: 'no', slug: 'sith-interdictor-cruiser'
      },
      {
        name: 'Interdictor Cruiser', manufacturer: 'Sienar Fleet Systems', shipClass: 'cruiser-heavy', size: 1129, isUnique: 'no', slug: 'interdictor-cruiser'
      },
      {
        name: 'Invisible Hand', manufacturer: 'Rendili StarDrive', shipClass: 'dreadnaught', size: 1088, isUnique: 'yes', slug: 'invisible-hand'
      },
      {
        name: 'Ithullian Ore Hauler', manufacturer: 'Ithullian', shipClass: 'transport', size: 1000, isUnique: 'no', slug: 'ithullian-ore-hauler'
      },
      {
        name: 'Keldabe', manufacturer: 'Mandal Motors', shipClass: 'battleship', size: 1000, isUnique: 'No', slug: 'keldabe'
      },
      {
        name: 'Lady Luck', manufacturer: 'Sorosuub', shipClass: 'luxury-space-yacht', size: 50, isUnique: 'yes', slug: 'lady-luck'
      },
      {
        name: 'Lambda Shuttle', manufacturer: 'Sienar Fleet Systems', shipClass: 'transport', size: 20, isUnique: 'no', slug: 'lambda-shuttle'
      },
      {
        name: 'Lancer Frigate', manufacturer: 'Kuat Drive Yards', shipClass: 'frigate', size: 250, isUnique: 'no', slug: 'lancer-frigate'
      },
      {
        name: 'Lucrehulk Battleship', manufacturer: 'Hoersch-Kessel', shipClass: 'battleship', size: 3170, isUnique: 'no', slug: 'lucrehulk-battleship'
      },
      {
        name: 'M22 T Krayt', manufacturer: 'Mandal Motors', shipClass: 'gunship', size: 50, isUnique: 'no', slug: 'm22-t-krayt'
      },
      {
        name: 'Marauder Corvette', manufacturer: 'Republic Fleet Systems', shipClass: 'corvette', size: 195, isUnique: 'no', slug: 'marauder-corvette'
      },
      {
        name: 'Marauder Starjacker', manufacturer: 'Byblos Drive Yards', shipClass: 'miner', size: 110, isUnique: 'no', slug: 'marauder-starjacker'
      },
      {
        name: 'Master Arcas Ship', manufacturer: 'Hoersch-Kessel', shipClass: 'courier', size: 70, isUnique: 'yes', slug: 'master-arcas-ship'
      },
      {
        name: 'MC 80B', manufacturer: 'Mon Calmari Shipyards', shipClass: 'cruiser-heavy', size: 1200, isUnique: 'No', slug: 'mc-80b'
      },
      {
        name: 'MC-75', manufacturer: 'Mon Calmari Shipyards', shipClass: 'cruiser-heavy', size: 1200, isUnique: 'no', slug: 'mc75'
      },
      {
        name: 'MC-80', manufacturer: 'Mon Calmari Shipyards', shipClass: 'cruiser-heavy', size: 1400, isUnique: 'no', slug: 'mc-80'
      },
      {
        name: 'Millennium Falcon', manufacturer: 'Correllian Engineering Corporation', shipClass: 'freighter', size: 34, isUnique: 'yes', slug: 'millennium-falcon'
      },
      {
        name: 'Miy`til Starfighter', manufacturer: 'Olanji-Charubah', shipClass: 'starfighter', size: 8, isUnique: 'no', slug: 'miytil-starfighter'
      },
      {
        name: 'Moldy Crow', manufacturer: 'Correllian Engineering Corporation', shipClass: 'freighter', size: 17, isUnique: 'yes', slug: 'moldy-crow'
      },
      {
        name: 'Naboo N1 Starfighter', manufacturer: 'Theed Palace Space Vessel Engineering Corps', shipClass: 'starfighter', size: 11, isUnique: 'no', slug: 'naboo-n1-starfighter'
      },
      {
        name: 'Naboo Royal Cruiser', manufacturer: 'Theed Palace Space Vessel Engineering Corps', shipClass: 'yacht', size: 39, isUnique: 'no', slug: 'naboo-royal-cruiser'
      },
      {
        name: 'Naboo Royal Starship', manufacturer: 'Theed Palace Space Vessel Engineering Corps', shipClass: 'yacht', size: 76, isUnique: 'yes', slug: 'naboo-royal-starship'
      },
      {
        name: 'Naboo Star Skiff', manufacturer: 'Theed Palace Space Vessel Engineering Corps', shipClass: 'transport', size: 30, isUnique: 'yes', slug: 'naboo-star-skiff'
      },
      {
        name: 'Nebula Class Star Destroyer', manufacturer: 'Republic Engineering Corp', shipClass: 'destroyer', size: 1040, isUnique: 'no', slug: 'nebula-star-destroyer'
      },
      {
        name: 'Nebulon Ranger', manufacturer: 'Corellia StarDrive', shipClass: 'courier', size: 25, isUnique: 'yes', slug: 'nebulon-ranger'
      },
      {
        name: 'Needle Fighter', manufacturer: 'Loronar Corporation', shipClass: 'starfighter', size: 2.5, isUnique: 'No', slug: 'needle-fighter'
      },
      {
        name: 'Neimoidian Shuttle', manufacturer: 'Haor Chall Engineering', shipClass: 'transport', size: 15, isUnique: 'no', slug: 'neimoidian-shuttle'
      },
      {
        name: 'Nova Class battle cruiser', manufacturer: 'Olanji-Charubah', shipClass: 'frigate', size: 400, isUnique: 'No', slug: 'nova-class-battle-cruiser'
      },
      {
        name: 'Nssis Clawcraft', manufacturer: 'Chiss Ascendancy', shipClass: 'starfighter', size: 7, isUnique: 'no', slug: 'nssis-clawcraft'
      },
      {
        name: 'Nubian Yacht', manufacturer: 'Theed Palace Space Vessel Engineering Corps', shipClass: 'yacht', size: 48, isUnique: 'no', slug: 'nubian-yacht'
      },
      {
        name: 'Outrider', manufacturer: 'Correllian Engineering Corporation', shipClass: 'freighter', size: 21, isUnique: 'yes', slug: 'outrider'
      },
      {
        name: 'Profundity', manufacturer: 'Mon Calmari Shipyards', shipClass: 'cruiser-heavy', size: 1200, isUnique: 'yes', slug: 'profundity'
      },
      {
        name: 'Providence Class Star Destroyer', manufacturer: 'Rendili StarDrive', shipClass: 'dreadnaught', size: 1088, isUnique: 'no', slug: 'providence-class-sd'
      },
      {
        name: 'Quadjumper', manufacturer: 'Subpro Corporation', shipClass: 'tug', size: 8, isUnique: 'no', slug: 'quadjumper'
      },
      {
        name: 'Quasar cruiser', manufacturer: 'Sorosuub', shipClass: 'carrier', size: 340, isUnique: 'no', slug: 'quasar-cruiser'
      },
      {
        name: 'Razor Crest', manufacturer: 'unknown', shipClass: 'gunship', size: 30, isUnique: 'yes', slug: 'razor-crest'
      },
      {
        name: 'Regulator X-Q2', manufacturer: 'Loronar Corporation', shipClass: 'scout Vessel', size: 150, isUnique: 'No', slug: 'regulator-x-q2'
      },
      {
        name: 'Resistance Transport', manufacturer: 'Slayn & Korpil', shipClass: 'transport', size: 16, isUnique: 'no', slug: 'resistance-transport'
      },
      {
        name: 'Rogue Shadow', manufacturer: 'Sienar Fleet Systems', shipClass: 'transport', size: 65, isUnique: 'yes', slug: 'rogue shadow'
      },
      {
        name: 'Sabaoth Destroyer', manufacturer: 'unknown', shipClass: 'destroyer', size: 300, isUnique: 'no', slug: 'sabaoth-destroyer'
      },
      {
        name: 'Sabaoth Starfighter', manufacturer: 'unknown', shipClass: 'starfighter', size: 8, isUnique: 'no', slug: 'sabaoth-starfighter'
      },
      {
        name: 'Scimitar Assault Bomber', manufacturer: 'Sienar Fleet Systems', shipClass: 'bomber', size: 14, isUnique: 'no', slug: 'scimitar-assault-bomber'
      },
      {
        name: 'Sentiel Landing Craft', manufacturer: 'Cygnus spaceworks', shipClass: 'transport', size: 38, isUnique: 'no', slug: 'sentiel-landing-craft'
      },
      {
        name: 'ShieldShip', manufacturer: 'Republic Engineering Corp', shipClass: 'escort-vehicle', size: 500, isUnique: 'no', slug: 'shieldship'
      },
      {
        name: 'Shree Battle Cruiser', manufacturer: 'Ssi-Ruuvi', shipClass: 'cruiser-heavy', size: 900, isUnique: 'no', slug: 'shree-battle-cruiser'
      },
      {
        name: 'Sith Infiltrator', manufacturer: 'Republic Sienar Systems', shipClass: 'courier', size: 27, isUnique: 'yes', slug: 'sith-infiltrator'
      },
      {
        name: 'Skipray Blastboat', manufacturer: 'Sienar Fleet Systems', shipClass: 'starfighter', size: 25, isUnique: 'no', slug: 'skipray-blastboat'
      },
      {
        name: 'Slave I', manufacturer: 'Kuat Systems Engineering', shipClass: 'patrol-ship', size: 21, isUnique: 'yes', slug: 'slave-i'
      },
      {
        name: 'Slave II', manufacturer: 'Mandal Motors', shipClass: 'patrol-ship', size: 30, isUnique: 'Yes', slug: 'slave-ii'
      },
      {
        name: 'Sorosuub 3000', manufacturer: 'Sorosuub', shipClass: 'yacht', size: 55, isUnique: 'no', slug: 'sorosuub-3000'
      },
      {
        name: 'Soulless One', manufacturer: 'Feethan Ottraw Scalable Assemblies', shipClass: 'starfighter', size: 7, isUnique: 'yes', slug: 'soulless-one'
      },
      {
        name: 'Ssi-Ruuvi Assault Carrier', manufacturer: 'Ssi-Ruuvi', shipClass: 'carrier', size: 750, isUnique: 'no', slug: 'ssi-ruuvi-assault-carrier'
      },
      {
        name: 'Ssi-Ruuvi Battle Droid', manufacturer: 'Ssi-Ruuvi', shipClass: 'starfighter', size: 2, isUnique: 'no', slug: 'ssi-ruuvi-battle-droid'
      },
      {
        name: 'Ssi-Ruuvi Picket Ship', manufacturer: 'Ssi-Ruuvi', shipClass: 'patrol-ship', size: 45, isUnique: 'no', slug: 'ssi-ruuvi-picket-ship'
      },
      {
        name: 'Star Courier', manufacturer: 'Republic Sienar Systems', shipClass: 'courier', size: 27, isUnique: 'no', slug: 'star-courier'
      },
      {
        name: 'Star Forge', manufacturer: 'Rakatan Infinite Empire', shipClass: 'station', size: 3100, isUnique: 'yes', slug: 'star-forge'
      },
      {
        name: 'Star Home', manufacturer: 'Olanji-Charubah', shipClass: 'luxury-space-yacht', size: 2500, isUnique: 'yes', slug: 'star-home'
      },
      {
        name: 'Star Jewel', manufacturer: 'Ubrikkian', shipClass: 'luxury-space-yacht', size: 160, isUnique: 'yes', slug: 'star-jewel'
      },
      {
        name: 'Starlight Intruder', manufacturer: 'Mobquet', shipClass: 'transport', size: 113, isUnique: 'yes', slug: 'starlight-intruder'
      },
      {
        name: 'Stinger Mantis', manufacturer: 'Latero Spaceworks', shipClass: 'yacht', size: 37, isUnique: 'no', slug: 'stinger-mantis'
      },
      {
        name: 'Strike Class Medium Cruiser', manufacturer: 'Loronar Corporation', shipClass: 'cruiser-medium', size: 450, isUnique: 'no', slug: 'strike-class-medium-cruiser'
      },
      {
        name: 'Sun Crusher', manufacturer: 'Galactic Empire', shipClass: 'super-weapon', size: 13, isUnique: 'yes', slug: 'sun-crusher'
      },
      {
        name: 'Super Star Destroyer', manufacturer: 'Kuat Drive Yards', shipClass: 'super-weapon', size: 19000, isUnique: 'no', slug: 'super-star-destroyer'
      },
      {
        name: 'Tantive IV', manufacturer: 'Correllian Engineering Corporation', shipClass: 'corvette', size: 150, isUnique: 'yes', slug: 'tantive-iv'
      },
      {
        name: 'Tartan Patrol Cruiser', manufacturer: 'Damorian Manufacturing Corporation', shipClass: 'patrol-ship', size: 250, isUnique: 'no', slug: 'tartan-patrol-cruiser'
      },
      {
        name: 'Taylander Shuttle', manufacturer: 'Gallofree Yards', shipClass: 'transport', size: 43, isUnique: 'no', slug: 'taylander-shuttle'
      },
      {
        name: 'Techno Union Starship', manufacturer: 'Techno Union', shipClass: 'transport', size: 220, isUnique: 'no', slug: 'techno-union-starship'
      },
      {
        name: 'The Wheel', manufacturer: 'Bolzi Design', shipClass: 'station', size: 50000, isUnique: 'yes', slug: 'the-wheel'
      },
      {
        name: 'Theta Class Shuttle', manufacturer: 'Cygnus spaceworks', shipClass: 'transport', size: 19, isUnique: 'no', slug: 'theta-class-shuttle'
      },
      {
        name: 'TIE Advanced', manufacturer: 'Sienar Fleet Systems', shipClass: 'starfighter', size: 11, isUnique: 'no', slug: 'tie-advanced'
      },
      {
        name: 'TIE Bomber', manufacturer: 'Sienar Fleet Systems', shipClass: 'bomber', size: 8, isUnique: 'no', slug: 'tie-bomber'
      },
      {
        name: 'TIE Defender', manufacturer: 'Sienar Fleet Systems', shipClass: 'starfighter', size: 9, isUnique: 'no', slug: 'tie-defender'
      },
      {
        name: 'TIE Fighter', manufacturer: 'Sienar Fleet Systems', shipClass: 'starfighter', size: 6, isUnique: 'no', slug: 'tie-fighter'
      },
      {
        name: 'TIE Interceptor', manufacturer: 'Sienar Fleet Systems', shipClass: 'interceptor', size: 11, isUnique: 'no', slug: 'tie-interceptor'
      },
      {
        name: 'Trade Federation Landing ship', manufacturer: 'Haor Chall Engineering', shipClass: 'transport', size: 210, isUnique: 'no', slug: 'trade-federation-landing-ship'
      },
      {
        name: 'Turbulent Class Star Destroyer', manufacturer: 'Imperial Remnant', shipClass: 'destroyer', size: 1600, isUnique: 'no', slug: 'turbulent-star-destroyer'
      },
      {
        name: 'U Wing', manufacturer: 'Incom Corporation', shipClass: 'starfighter', size: 24, isUnique: 'no', slug: 'u-wing'
      },
      {
        name: 'Upsilon Class Shuttle', manufacturer: 'Sienar-Jaemus Army Systems', shipClass: 'transport', size: 19, isUnique: 'no', slug: 'upsilon-class-shuttle'
      },
      {
        name: 'V Wing', manufacturer: 'Kuat Systems Engineering', shipClass: 'starfighter', size: 8, isUnique: 'no', slug: 'v-wing'
      },
      {
        name: 'VCX 100', manufacturer: 'Correllian Engineering Corporation', shipClass: 'freighter', size: 44, isUnique: 'no', slug: 'vcx-100'
      },
      {
        name: 'Venator Star Destroyer', manufacturer: 'Kuat Drive Yards', shipClass: 'destroyer', size: 1137, isUnique: 'no', slug: 'venator-star-destroyer'
      },
      {
        name: 'Victory Star Destroyer', manufacturer: 'Rendili StarDrive', shipClass: 'cruiser-medium', size: 900, isUnique: 'no', slug: 'victory-star-destroyer'
      },
      {
        name: 'Virago', manufacturer: 'Mandal Motors', shipClass: 'starfighter', size: 21, isUnique: 'Yes', slug: 'virago'
      },
      {
        name: 'Vulture droid', manufacturer: 'Haor Chall Engineering', shipClass: 'starfighter', size: 7, isUnique: 'no', slug: 'vulture-droid'
      },
      {
        name: 'Wild Karrde', manufacturer: 'Correllian Engineering Corporation', shipClass: 'transport', size: 125, isUnique: 'yes', slug: 'wild-karrde'
      },
      {
        name: 'World Devastator', manufacturer: 'Galactic Empire', shipClass: 'super-weapon', size: 3200, isUnique: 'no', slug: 'world-devastator'
      },
      {
        name: 'X Wing', manufacturer: 'Incom Corporation', shipClass: 'starfighter', size: 13, isUnique: 'No', slug: 'x-wing'
      },
      {
        name: 'Y Wing', manufacturer: 'Koensayr', shipClass: 'bomber', size: 23, isUnique: 'no', slug: 'y-wing'
      },
      {
        name: 'Y-4 Raptor', manufacturer: 'Incom Corporation', shipClass: 'transport', size: 28, isUnique: 'no', slug: 'y-4-raptor'
      },
      {
        name: 'YR-2400', manufacturer: 'Correllian Engineering Corporation', shipClass: 'freighter', size: 21, isUnique: 'no', slug: 'yt-2400'
      },
      {
        name: 'YT 1300', manufacturer: 'Correllian Engineering Corporation', shipClass: 'freighter', size: 34, isUnique: 'no', slug: 'yt-1300'
      },
      {
        name: 'YV-666', manufacturer: 'Correllian Engineering Corporation', shipClass: 'freighter', size: 47, isUnique: 'no', slug: 'yv-666'
      },
      {
        name: 'Z95 Headhunter', manufacturer: 'Subpro Corporation', shipClass: 'starfighter', size: 17, isUnique: 'no', slug: 'z95-headhunter'
      },
      {
        name: 'Zeta Class Shuttle', manufacturer: 'Sienar Fleet Systems', shipClass: 'freighter', size: 31, isUnique: 'no', slug: 'zeta-class-shuttle'
      },
      {
        name: 'Nebulon B', manufacturer: 'Sienar Fleet Systems', shipClass: 'frigate', size: 300, isUnique: 'no', slug: 'nebulon-b'
      },
      {
        name: 'Imperial Star Destroyer', manufacturer: 'Kuat Drive Yards', shipClass: 'destroyer', size: 1600, isUnique: 'no', slug: 'imperial-star-destroyer'
      },
      {
        name: 'Devastator', manufacturer: 'Kuat Drive Yards', shipClass: 'destroyer', size: 1600, isUnique: 'yes', slug: 'devastator'
      }
    ])

    await queryInterface.bulkInsert('weapons', [
      { name: 'laser cannons', shipId: 1 },
      { name: 'concussion missiles', shipId: 1 },
      { name: 'none', shipId: 2 },
      { name: 'turbo lasers', shipId: 3 },
      { name: 'laser cannons', shipId: 3 },
      { name: 'ion cannons', shipId: 3 },
      { name: 'concussion missiles', shipId: 3 },
      { name: 'proton torpedoes', shipId: 3 },
      { name: 'laser cannons', shipId: 4 },
      { name: 'concussion missiles', shipId: 4 },
      { name: 'turbo lasers', shipId: 5 },
      { name: 'laser cannons', shipId: 5 },
      { name: 'ion cannons', shipId: 5 },
      { name: 'tractor beams', shipId: 5 },
      { name: 'mass drivers', shipId: 5 },
      { name: 'turbo lasers', shipId: 6 },
      { name: 'ion cannons', shipId: 6 },
      { name: 'tractor beams', shipId: 6 },
      { name: 'concussion missiles', shipId: 6 },
      { name: 'none', shipId: 7 },
      { name: 'laser cannons', shipId: 8 },
      { name: 'ion cannons', shipId: 8 },
      { name: 'proton torpedos', shipId: 8 },
      { name: 'laser cannons', shipId: 9 },
      { name: 'tractor beams', shipId: 10 },
      { name: 'turbo lasers', shipId: 11 },
      { name: 'laser cannons', shipId: 11 },
      { name: 'ion cannons', shipId: 11 },
      { name: 'tractor beams', shipId: 11 },
      { name: 'proton torpedoes', shipId: 11 },
      { name: 'turbo lasers', shipId: 12 },
      { name: 'ion cannons', shipId: 12 },
      { name: 'tractor beams', shipId: 12 },
      { name: 'laser cannons', shipId: 13 },
      { name: 'turbo lasers', shipId: 14 },
      { name: 'laser cannons', shipId: 14 },
      { name: 'ion cannons', shipId: 14 },
      { name: 'tractor beams', shipId: 14 },
      { name: 'tractor beams', shipId: 15 },
      { name: 'tractor beams', shipId: 16 },
      { name: 'laser cannons', shipId: 17 },
      { name: 'concussion missiles', shipId: 17 },
      { name: 'none', shipId: 18 },
      { name: 'turbo lasers', shipId: 19 },
      { name: 'laser cannons', shipId: 19 },
      { name: 'ion cannons', shipId: 19 },
      { name: 'tractor beams', shipId: 19 },
      { name: 'laser cannons', shipId: 20 },
      { name: 'ion cannons', shipId: 20 },
      { name: 'turbo lasers', shipId: 21 },
      { name: 'laser cannons', shipId: 21 },
      { name: 'laser cannons', shipId: 22 },
      { name: 'Super laser', shipId: 23 },
      { name: 'turbo lasers', shipId: 23 },
      { name: 'laser cannons', shipId: 23 },
      { name: 'concussion missiles', shipId: 23 },
      { name: 'tractor beams', shipId: 23 },
      { name: 'super laser', shipId: 24 },
      { name: 'turbo lasers', shipId: 24 },
      { name: 'laser cannons', shipId: 24 },
      { name: 'concussion missiles', shipId: 24 },
      { name: 'tractor beams', shipId: 24 },
      { name: 'laser cannons', shipId: 25 },
      { name: 'tractor beams', shipId: 26 },
      { name: 'turbo laser', shipId: 27 },
      { name: 'laser cannons', shipId: 27 },
      { name: 'concussion missiles', shipId: 27 },
      { name: 'tractor beams', shipId: 27 },
      { name: 'laser cannons', shipId: 28 },
      { name: 'proton torpedos', shipId: 28 },
      { name: 'turbo lasers', shipId: 29 },
      { name: 'laser cannons', shipId: 29 },
      { name: 'super laser', shipId: 30 },
      { name: 'turbo lasers', shipId: 30 },
      { name: 'laser cannons', shipId: 30 },
      { name: 'ion cannons', shipId: 30 },
      { name: 'turbo lasers', shipId: 31 },
      { name: 'laser cannons', shipId: 31 },
      { name: 'tractor beams', shipId: 31 },
      { name: 'none', shipId: 32 },
      { name: 'laser cannons', shipId: 33 },
      { name: 'turbo lasers', shipId: 34 },
      { name: 'laser cannons', shipId: 34 },
      { name: 'ion cannons', shipId: 34 },
      { name: 'tractor beams', shipId: 34 },
      { name: 'laser cannons', shipId: 35 },
      { name: 'proton torpedos', shipId: 35 },
      { name: 'laser cannons', shipId: 36 },
      { name: 'laser cannons', shipId: 37 },
      { name: 'concussion missisles', shipId: 37 },
      { name: 'turbo lasers', shipId: 38 },
      { name: 'laser cannons', shipId: 38 },
      { name: 'concussion missiles', shipId: 38 },
      { name: 'laser cannons', shipId: 39 },
      { name: 'laser cannons', shipId: 40 },
      { name: 'none', shipId: 41 },
      { name: 'none', shipId: 42 },
      { name: 'laser cannons', shipId: 43 },
      { name: 'ion cannons', shipId: 43 },
      { name: 'proton torpedoes', shipId: 43 },
      { name: 'turbo lasers', shipId: 44 },
      { name: 'tractor beams', shipId: 44 },
      { name: 'turbo lasers', shipId: 45 },
      { name: 'ion cannons', shipId: 45 },
      { name: 'tractor beams', shipId: 45 },
      { name: 'concussion missiles', shipId: 45 },
      { name: 'laser cannons', shipId: 46 },
      { name: 'turbo lasers', shipId: 47 },
      { name: 'laser cannons', shipId: 48 },
      { name: 'ion cannons', shipId: 48 },
      { name: 'concussion missiles', shipId: 48 },
      { name: 'laser cannons', shipId: 49 },
      { name: 'proton torpedos', shipId: 49 },
      { name: 'laser cannons', shipId: 50 },
      { name: 'laser cannons', shipId: 51 },
      { name: 'laser cannons', shipId: 52 },
      { name: 'concussion missiles', shipId: 52 },
      { name: 'turbo laser', shipId: 53 },
      { name: 'tractor beams', shipId: 53 },
      { name: 'gravity well generators', shipId: 53 },
      { name: 'laser cannons', shipId: 54 },
      { name: 'gravity well generators', shipId: 54 },
      { name: 'turbo lasers', shipId: 55 },
      { name: 'laser cannons', shipId: 55 },
      { name: 'ion cannons', shipId: 55 },
      { name: 'tractor beams', shipId: 55 },
      { name: 'proton torpedoes', shipId: 55 },
      { name: 'turbo lasers', shipId: 56 },
      { name: 'laser cannons', shipId: 56 },
      { name: 'turbo lasers', shipId: 57 },
      { name: 'laser cannons', shipId: 57 },
      { name: 'ion cannons', shipId: 57 },
      { name: 'tractor beams', shipId: 57 },
      { name: 'mass drivers', shipId: 57 },
      { name: 'laser cannons', shipId: 58 },
      { name: 'laser cannons', shipId: 59 },
      { name: 'laser cannons', shipId: 60 },
      { name: 'turbo lasers', shipId: 61 },
      { name: 'laser cannons', shipId: 61 },
      { name: 'laser cannons', shipId: 62 },
      { name: 'ion cannons', shipId: 62 },
      { name: 'concussion missiles', shipId: 62 },
      { name: 'turbo lasers', shipId: 63 },
      { name: 'tractor beams', shipId: 63 },
      { name: 'plasma drills', shipId: 64 },
      { name: 'none', shipId: 65 },
      { name: 'turbo lasers', shipId: 66 },
      { name: 'ion cannons', shipId: 66 },
      { name: 'turbo lasers', shipId: 67 },
      { name: 'ion cannons', shipId: 67 },
      { name: 'tractor beams', shipId: 67 },
      { name: 'concussion missiles', shipId: 67 },
      { name: 'turbo lasers', shipId: 68 },
      { name: 'ion cannons', shipId: 68 },
      { name: 'tractor beams', shipId: 68 },
      { name: 'concussion missiles', shipId: 68 },
      { name: 'laser cannons', shipId: 69 },
      { name: 'concussion missiles', shipId: 69 },
      { name: 'laser cannons', shipId: 70 },
      { name: 'concussion missiles', shipId: 70 },
      { name: 'laser cannons', shipId: 71 },
      { name: 'proton torpedos', shipId: 71 },
      { name: 'laser cannons', shipId: 72 },
      { name: 'proton torpedos', shipId: 72 },
      { name: 'none', shipId: 73 },
      { name: 'none', shipId: 74 },
      { name: 'laser cannons', shipId: 75 },
      { name: 'turbo lasers', shipId: 76 },
      { name: 'ion cannons', shipId: 76 },
      { name: 'concussion missiles', shipId: 76 },
      { name: 'laser cannons', shipId: 77 },
      { name: 'laser cannons', shipId: 78 },
      { name: 'laser cannons', shipId: 79 },
      { name: 'turbo lasers', shipId: 80 },
      { name: 'ion cannons', shipId: 80 },
      { name: 'laser cannons', shipId: 81 },
      { name: 'none', shipId: 82 },
      { name: 'laser cannons', shipId: 83 },
      { name: 'turbo lasers', shipId: 84 },
      { name: 'ion cannons', shipId: 84 },
      { name: 'tractor beams', shipId: 84 },
      { name: 'concussion missiles', shipId: 84 },
      { name: 'turbo lasers', shipId: 85 },
      { name: 'laser cannons', shipId: 85 },
      { name: 'ion cannons', shipId: 85 },
      { name: 'tractor beams', shipId: 85 },
      { name: 'proton torpedoes', shipId: 85 },
      { name: 'laser cannons', shipId: 86 },
      { name: 'laser cannons', shipId: 87 },
      { name: 'laser cannons', shipId: 88 },
      { name: 'laser cannons', shipId: 89 },
      { name: 'laser cannons', shipId: 90 },
      { name: 'ion cannons', shipId: 90 },
      { name: 'proton torpedoes', shipId: 90 },
      { name: 'none', shipId: 91 },
      { name: 'turbo lasers', shipId: 92 },
      { name: 'laser cannons', shipId: 92 },
      { name: 'laser cannons', shipId: 93 },
      { name: 'laser cannons', shipId: 94 },
      { name: 'concussion missiles', shipId: 94 },
      { name: 'laser cannons', shipId: 95 },
      { name: 'ion cannons', shipId: 95 },
      { name: 'concussion missiles', shipId: 95 },
      { name: 'none', shipId: 96 },
      { name: 'turbo lasers', shipId: 97 },
      { name: 'ion cannons', shipId: 97 },
      { name: 'ion cannons', shipId: 97 },
      { name: 'tractor beams', shipId: 97 },
      { name: 'laser cannons', shipId: 98 },
      { name: 'proton torpedos', shipId: 98 },
      { name: 'laser cannons', shipId: 99 },
      { name: 'ion cannons', shipId: 99 },
      { name: 'proton torpedoes', shipId: 99 },
      { name: 'tractor beam', shipId: 99 },
      { name: 'laser cannons', shipId: 100 },
      { name: 'proton torpedos', shipId: 100 },
      { name: 'concussion missisles', shipId: 100 },
      { name: 'laser cannons', shipId: 101 },
      { name: 'ion cannons', shipId: 101 },
      { name: 'proton torpedoes', shipId: 101 },
      { name: 'laser cannons', shipId: 102 },
      { name: 'laser cannons', shipId: 103 },
      { name: 'ion cannons', shipId: 104 },
      { name: 'tractor beams', shipId: 104 },
      { name: 'laser cannons', shipId: 105 },
      { name: 'turbo lasers', shipId: 106 },
      { name: 'ion cannons', shipId: 106 },
      { name: 'none', shipId: 107 },
      { name: 'turbo lasers', shipId: 108 },
      { name: 'turbo lasers', shipId: 109 },
      { name: 'laser cannons', shipId: 109 },
      { name: 'tractor beams', shipId: 109 },
      { name: 'laser cannons', shipId: 110 },
      { name: 'turbo lasers', shipId: 111 },
      { name: 'none', shipId: 112 },
      { name: 'turbo lasers', shipId: 113 },
      { name: 'ion cannons', shipId: 113 },
      { name: 'tractor beams', shipId: 113 },
      { name: 'concussion missiles', shipId: 113 },
      { name: 'laser cannons', shipId: 114 },
      { name: 'tractor beam', shipId: 114 },
      { name: 'Resonance torpedo', shipId: 114 },
      { name: 'turbo lasers', shipId: 115 },
      { name: 'laser cannons', shipId: 115 },
      { name: 'ion cannons', shipId: 115 },
      { name: 'tractor beams', shipId: 115 },
      { name: 'turbo lasers', shipId: 116 },
      { name: 'laser cannons', shipId: 116 },
      { name: 'laser cannons', shipId: 117 },
      { name: 'none', shipId: 118 },
      { name: 'laser cannons', shipId: 119 },
      { name: 'concussion missiles', shipId: 119 },
      { name: 'turbo lasers', shipId: 120 },
      { name: 'laser cannons', shipId: 120 },
      { name: 'ion cannons', shipId: 120 },
      { name: 'tractor beams', shipId: 120 },
      { name: 'laser cannons', shipId: 121 },
      { name: 'laser cannons', shipId: 122 },
      { name: 'concussion missiles', shipId: 122 },
      { name: 'laser cannons', shipId: 123 },
      { name: 'proton torpedos', shipId: 123 },
      { name: 'laser cannons', shipId: 124 },
      { name: 'ion cannons', shipId: 124 },
      { name: 'concussion missiles', shipId: 124 },
      { name: 'laser cannons', shipId: 125 },
      { name: 'laser cannons', shipId: 126 },
      { name: 'none', shipId: 127 },
      { name: 'turbo lasers', shipId: 128 },
      { name: 'ion cannons', shipId: 128 },
      { name: 'concussion missiles', shipId: 128 },
      { name: 'laser cannons', shipId: 129 },
      { name: 'laser cannons', shipId: 130 },
      { name: 'laser cannons', shipId: 131 },
      { name: 'laser cannons', shipId: 132 },
      { name: 'turbo lasers', shipId: 133 },
      { name: 'laser cannons', shipId: 133 },
      { name: 'tractor beams', shipId: 133 },
      { name: 'concussion missiles', shipId: 133 },
      { name: 'turbo lasers', shipId: 134 },
      { name: 'ion cannons', shipId: 134 },
      { name: 'tractor beams', shipId: 134 },
      { name: 'laser cannons', shipId: 135 },
      { name: 'laser cannons', shipId: 136 },
      { name: 'laser cannons', shipId: 137 },
      { name: 'none', shipId: 138 },
      { name: 'laser cannons', shipId: 139 },
      { name: 'proton torpedos', shipId: 139 },
      { name: 'laser cannons', shipId: 140 },
      { name: 'ion cannons', shipId: 140 },
      { name: 'proton torpedoes', shipId: 140 },
      { name: 'laser cannons', shipId: 141 },
      { name: 'laser cannons', shipId: 142 },
      { name: 'laser cannons', shipId: 143 },
      { name: 'laser cannons', shipId: 144 },
      { name: 'laser cannons', shipId: 145 },
      { name: 'ion cannons', shipId: 145 },
      { name: 'concussion missiles', shipId: 145 },
      { name: 'laser cannons', shipId: 146 },
      { name: 'turbo lasers', shipId: 147 },
      { name: 'laser cannons', shipId: 147 },
      { name: 'tractor beams', shipId: 147 },
      { name: 'concussion missiles', shipId: 147 },
      { name: 'turbo lasers', shipId: 148 },
      { name: 'laser cannons', shipId: 148 },
      { name: 'tractor beams', shipId: 148 },
      { name: 'concussion missiles', shipId: 148 },
      { name: 'turbo lasers', shipId: 149 },
      { name: 'laser cannons', shipId: 149 },
      { name: 'tractor beams', shipId: 149 },
      { name: 'concussion missiles', shipId: 149 }
    ])

    return queryInterface.bulkInsert('affiliations', [
      { name: 'Rebels', shipId: 1 },
      { name: 'New Republic', shipId: 1 },
      { name: 'Imperial', shipId: 2 },
      { name: 'Imperial', shipId: 3 },
      { name: 'pirates', shipId: 4 },
      { name: 'Zann Consortium', shipId: 5 },
      { name: 'Imperial', shipId: 6 },
      { name: 'Imperial', shipId: 7 },
      { name: 'Rebels', shipId: 8 },
      { name: 'New Republic', shipId: 8 },
      { name: 'Jedi', shipId: 9 },
      { name: 'civilian', shipId: 9 },
      { name: 'civilian', shipId: 10 },
      { name: 'Hapes Consortium', shipId: 11 },
      { name: 'New Republic', shipId: 11 },
      { name: 'New Republic', shipId: 12 },
      { name: 'Bespin Wing Guard', shipId: 13 },
      { name: 'Imperial', shipId: 14 },
      { name: 'New Republic', shipId: 14 },
      { name: 'Confederation', shipId: 14 },
      { name: 'pirates', shipId: 14 },
      { name: 'civilian', shipId: 15 },
      { name: 'Jedi', shipId: 16 },
      { name: 'Imperial', shipId: 17 },
      { name: 'New Republic', shipId: 17 },
      { name: 'Jedi', shipId: 17 },
      { name: 'Hutt Cartel', shipId: 17 },
      { name: 'Black Sun', shipId: 17 },
      { name: 'pirates', shipId: 17 },
      { name: 'Galactic Republic', shipId: 18 },
      { name: 'smugglers', shipId: 18 },
      { name: 'New Republic', shipId: 19 },
      { name: 'Mandalorians', shipId: 20 },
      { name: 'Galactic Republic', shipId: 20 },
      { name: 'Galactic Republic', shipId: 21 },
      { name: 'Imperial', shipId: 21 },
      { name: 'pirates', shipId: 21 },
      { name: 'civilian', shipId: 21 },
      { name: 'Imperial', shipId: 22 },
      { name: 'Imperial', shipId: 23 },
      { name: 'Imperial', shipId: 24 },
      { name: 'Jedi', shipId: 25 },
      { name: 'Confederation', shipId: 26 },
      { name: 'Galactic Republic', shipId: 27 },
      { name: 'Corporate Sector Authority', shipId: 27 },
      { name: 'Imperial', shipId: 27 },
      { name: 'Confederation', shipId: 27 },
      { name: 'New Rupbulic', shipId: 27 },
      { name: 'Hutt Cartel', shipId: 27 },
      { name: 'Chiss Ascendancy', shipId: 27 },
      { name: 'New Republic', shipId: 28 },
      { name: 'smugglers', shipId: 29 },
      { name: 'Imperial', shipId: 30 },
      { name: 'Hutt Cartel', shipId: 31 },
      { name: 'civilian', shipId: 32 },
      { name: 'Jedi', shipId: 33 },
      { name: 'Sith', shipId: 33 },
      { name: 'Galactic Repbulic', shipId: 33 },
      { name: 'Imperial', shipId: 33 },
      { name: 'Imperial', shipId: 34 },
      { name: 'Mandalorians', shipId: 35 },
      { name: 'Rebels', shipId: 35 },
      { name: 'pirates', shipId: 35 },
      { name: 'Imperial', shipId: 36 },
      { name: 'Confederation', shipId: 37 },
      { name: 'civilian', shipId: 37 },
      { name: 'Imperial', shipId: 38 },
      { name: 'pirates', shipId: 38 },
      { name: 'smugglers', shipId: 39 },
      { name: 'Imperial', shipId: 40 },
      { name: 'Black Sun', shipId: 40 },
      { name: 'pirates', shipId: 40 },
      { name: 'civilian', shipId: 40 },
      { name: 'New Republic', shipId: 41 },
      { name: 'civilian', shipId: 41 },
      { name: 'civilian', shipId: 42 },
      { name: 'Black Sun', shipId: 43 },
      { name: 'Galactic Republic', shipId: 44 },
      { name: 'New Republic', shipId: 45 },
      { name: 'Tennloss Syndicte', shipId: 46 },
      { name: 'civilian', shipId: 47 },
      { name: 'bounty hunters', shipId: 48 },
      { name: 'civilian', shipId: 49 },
      { name: 'smugglers', shipId: 50 },
      { name: 'Imperial', shipId: 51 },
      { name: 'New Republic', shipId: 51 },
      { name: 'Confederation', shipId: 51 },
      { name: 'bounty hunters', shipId: 52 },
      { name: 'Sith', shipId: 53 },
      { name: 'Imperial', shipId: 54 },
      { name: 'Confederation', shipId: 55 },
      { name: 'Ithullian', shipId: 56 },
      { name: 'Zann Consortium', shipId: 57 },
      { name: 'Mandalorians', shipId: 57 },
      { name: 'smugglers', shipId: 58 },
      { name: 'Imperial', shipId: 59 },
      { name: 'Imperial', shipId: 59 },
      { name: 'Confederation', shipId: 61 },
      { name: 'Naboo', shipId: 62 },
      { name: 'Hutt Cartel', shipId: 62 },
      { name: 'smugglers', shipId: 62 },
      { name: 'Corporate Sector Authority', shipId: 63 },
      { name: 'pirates', shipId: 64 },
      { name: 'Jedi', shipId: 65 },
      { name: 'Rebels', shipId: 66 },
      { name: 'New Republic', shipId: 66 },
      { name: 'New Republic', shipId: 67 },
      { name: 'New Republic', shipId: 68 },
      { name: 'smugglers', shipId: 69 },
      { name: 'Hapes Consortium', shipId: 70 },
      { name: 'Confederation', shipId: 70 },
      { name: 'smugglers', shipId: 71 },
      { name: 'Naboo', shipId: 72 },
      { name: 'Naboo', shipId: 73 },
      { name: 'Naboo', shipId: 74 },
      { name: 'Naboo', shipId: 75 },
      { name: 'New Republic', shipId: 76 },
      { name: 'Jedi', shipId: 77 },
      { name: 'Imperial Remnant', shipId: 78 },
      { name: 'Confederation', shipId: 79 },
      { name: 'Hapes Consortium', shipId: 80 },
      { name: 'Chiss Ascendancy', shipId: 81 },
      { name: 'Imperial Remnant', shipId: 81 },
      { name: 'Naboo', shipId: 82 },
      { name: 'smugglers', shipId: 83 },
      { name: 'New Republic', shipId: 84 },
      { name: 'Trade Federation', shipId: 85 },
      { name: 'Confederation', shipId: 85 },
      { name: 'civilian', shipId: 86 },
      { name: 'Imperial', shipId: 87 },
      { name: 'Rebels', shipId: 87 },
      { name: 'pirates', shipId: 87 },
      { name: 'bounty hunters', shipId: 88 },
      { name: 'Imperial', shipId: 89 },
      { name: 'Rebels', shipId: 89 },
      { name: 'pirates', shipId: 89 },
      { name: 'Resistance', shipId: 90 },
      { name: 'Jedi', shipId: 91 },
      { name: 'Sith', shipId: 91 },
      { name: 'New Repbulic', shipId: 91 },
      { name: 'Imperial', shipId: 91 },
      { name: 'Galactic Republic', shipId: 92 },
      { name: 'Galactic Republic', shipId: 93 },
      { name: 'Imperial', shipId: 94 },
      { name: 'Imperial', shipId: 95 },
      { name: 'New Republic', shipId: 96 },
      { name: 'Ssi - Ruuvi', shipId: 97 },
      { name: 'Sith', shipId: 98 },
      { name: 'Galactic Republic', shipId: 99 },
      { name: 'Imperial', shipId: 99 },
      { name: 'Zann Consortium', shipId: 99 },
      { name: 'Imperial Remnant', shipId: 99 },
      { name: 'pirates', shipId: 99 },
      { name: 'smugglers', shipId: 99 },
      { name: 'bounty hunters', shipId: 100 },
      { name: 'bounty hunters', shipId: 101 },
      { name: 'civilian', shipId: 102 },
      { name: 'Confederation', shipId: 103 },
      { name: 'Jedi', shipId: 103 },
      { name: 'Ssi - Ruuvi', shipId: 104 },
      { name: 'Ssi - Ruuvi', shipId: 105 },
      { name: 'Ssi - Ruuvi', shipId: 106 },
      { name: 'civilian', shipId: 107 },
      { name: 'Infinite Empire', shipId: 108 },
      { name: 'Sith', shipId: 108 },
      { name: 'Hapes Consortium', shipId: 109 },
      { name: 'Hutt Cartel', shipId: 110 },
      { name: 'smugglers', shipId: 111 },
      { name: 'Jedi', shipId: 112 },
      { name: 'Imperial', shipId: 113 },
      { name: 'Imperial', shipId: 114 },
      { name: 'Imperial', shipId: 115 },
      { name: 'Rebels', shipId: 116 },
      { name: 'Zann Consortium', shipId: 117 },
      { name: 'Imperial', shipId: 117 },
      { name: 'New Republic', shipId: 118 },
      { name: 'civilian', shipId: 118 },
      { name: 'Confederation', shipId: 119 },
      { name: 'civilian', shipId: 120 },
      { name: 'Galactic Republic', shipId: 121 },
      { name: 'Imperial', shipId: 121 },
      { name: 'Imperial', shipId: 122 },
      { name: 'Imperial', shipId: 123 },
      { name: 'Imperial', shipId: 124 },
      { name: 'Imperial', shipId: 125 },
      { name: 'Imperial', shipId: 126 },
      { name: 'Confederation', shipId: 127 },
      { name: 'Imperial Remnant', shipId: 128 },
      { name: 'New Republic', shipId: 129 },
      { name: 'First Order', shipId: 130 },
      { name: 'Galactic Republic', shipId: 131 },
      { name: 'New Republic', shipId: 131 },
      { name: 'Imperial', shipId: 131 },
      { name: 'New Republic', shipId: 132 },
      { name: 'civilian', shipId: 132 },
      { name: 'Galactic Republic', shipId: 133 },
      { name: 'Confederation', shipId: 133 },
      { name: 'Imperial', shipId: 133 },
      { name: 'Imperial', shipId: 134 },
      { name: 'Black Sun', shipId: 135 },
      { name: 'Confederation', shipId: 136 },
      { name: 'smugglers', shipId: 137 },
      { name: 'Imperial', shipId: 138 },
      { name: 'Rebels', shipId: 139 },
      { name: 'New Republic', shipId: 139 },
      { name: 'pirates', shipId: 139 },
      { name: 'Rebels', shipId: 140 },
      { name: 'pirates', shipId: 140 },
      { name: 'Imperial', shipId: 141 },
      { name: 'civilian', shipId: 142 },
      { name: 'civilian', shipId: 143 },
      { name: 'civilian', shipId: 144 },
      { name: 'Rebels', shipId: 145 },
      { name: 'pirates', shipId: 145 },
      { name: 'Imperial', shipId: 146 },
      { name: 'Imperial', shipId: 147 },
      { name: 'Rebels', shipId: 147 },
      { name: 'New Republic', shipId: 147 },
      { name: 'pirates', shipId: 147 },
      { name: 'civilian', shipId: 147 },
      { name: 'Imperial', shipId: 148 },
      { name: 'Imperial Remnant', shipId: 148 },
      { name: 'First Order', shipId: 148 },
      { name: 'New Republic', shipId: 148 },
      { name: 'Imperial', shipId: 149 },
    ])
  },

  down: async (queryInterface,) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable{(}'users');
     */
    await queryInterface.bulkDelete('affiliations')

    await queryInterface.bulkDelete('weapons')

    return queryInterface.bulkDelete('ships')
  }
}
