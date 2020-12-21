
CREATE DATABASE starWars;

USE starWars;

CREATE USER 'sithLord'@'localhost' IDENTIFIED BY 'GLucas514!';

GRANT ALL ON starWars.* TO 'sithLord'@'localhost';

SHOW TABLES;

DROP TABLE ships;

CREATE TABLE ships (
    id INT AUTO_INCREMENT,
    name VARCHAR(255),
    manufacturer VARCHAR(255),
    shipClass VARCHAR(255),
    size INT,
    isUnique ENUM ('YES', 'NO'),
    slug VARCHAR(255),
 	createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY (id)
);

CREATE TABLE weapons (
  id INT auto_increment,
  name VARCHAR(255) NOT NULL,
  shipId INT,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id),
  FOREIGN KEY (shipId) REFERENCES ships(id)
);

CREATE TABLE  affiliations (
    id INT auto_increment,
    name VARCHAR(255),
    shipId INT,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id),
    FOREIGN KEY (shipId) REFERENCES ships(id)
);

SHOW TABLES;

DESC ships;

INSERT INTO ships (name, manufacturer,class, size, isUnique, slug) VALUES
('A Wing','Kuat Systems Engineering','interceptor',7,'no','a-wing'),
('AA-9 Coruscant Freighter','Botajef Shipyards','Freighter',390, 'no','aa-9-coruscant-freighter');
('Acclamator Assault Ship','Rothana Heavy Engineering','Cruiser - Heavy',460,'no','acclamator-assault-ship');
('Agressor Assault Bomber','Trilon','Starfighter',20,'no','agressor-assault-bomber');
('Agressor Class Destroyer','Galactic Empire','Destroyer',1500,'no','agressor-destroyer');
('Arquiten,Kuat Drive Yards','Cruiser - Light',325,'no','arquiten');
('Atmostphere Assault Lander','Sienar-Jaemus Army Systems','Transport',17,'no','atmostphere-assault-lander');
('B Wing','Slayn & Korpil','Starfighter',17,'no','b-wing');
('B7','Loronar Corporation','Freighter',19,'no','b7');
('Baleen Heavy Freighter','Correllian Engineering Corporation','Freighter',459,'no','baleen-heavy-freighter');

('Battle Dragon','Olanji-Charubah','Cruiser - Medium',500,'no','battle-dragon');
('Belarus','Loronar Corporation','Cruiser - Medium',400,'No','belarus');
('Bespin Twin Pod Cloud Car','Bespin Motors','Patrol Ship',7,'no','bespin-twin-pod-cloud car');
('Carrack Cruiser','Damorian Manufacturing Corporation','Cruiser - Light',350,'no','carrack-cruiser');
('Centerpoint Station','Killik','Station',350000,'yes','centerpoint-station');
('Chu`unthor','Republic Fleet Systems','Cruiser - Medium',2000,'yes','chu-unthor');
('Cloakshape fighter','Kuat Systems Engineering','Starfighter',15,'no','coakshape-fighter');
('Consular Cruiser','Correllian Engineering Corporation','Transport',115,'no','consular-cruiser');
('Corona Frigate','Kuat Drive Yards','Frigate',275,'No','corona-frigate');
('Coronet','Kalevala Spaceworks','Luxury Space Yacht',216,'yes','coronet');

('CR 90','Correllian Engineering Corporation','Corvette',150,'no','cr-90');
('Crusader','Mandal Motors','Corvette',80,'No','crusader');
('Death Star','Galactic Empire','Super Weapon',160000,'yes','death-star');
('Death Star II','Galactic Empire','Super Weapon',200000,'yes','death-star-ii');
('Delta 7 Starfighter','Kuat Systems Engineering','Starfighter',8,'no','delta-7');
('Dooku Solar Sailer','Huppla Pasa Tisc','Yacht',15,'yes','dooku-solar-sailer');
('Dreadnaught','Rendili StarDrive','Battleship',600,'no','dreadnaught');
('E Wing','Freitek','Starfighter',11,'no','e-wing');
('Ebon Hawk','Core Galaxy Systems','Freighter',24,'yes','ebon-hawk');
('Eclipse Star Destoyer','Kuat Drive Yards','Dreadnaught',17500,'Yes','eclipse-star-destoyer');

('Enforcer One','Core Galaxy Systems','Dreadnaught',900,'yes','enforcer-one');
('Escape Pod','Correllian Engineering Corporation','Transport',10,'no','escape-pod');
('ETA Starfighter','Kuat Systems Engineering','Starfighter',5,'no','eta-starfighter');
('Executor','Kuat Drive Yards','Super Weapon',19000,'yes','executor');
('Fang Fighter','Sorosuub','Starfighter',6,'no','fang-fighter')
('Far*Reach IV PQR','Loronar Corporation','Survey',80,'no','far-reach-iv-pqr');
('Firespray','Kuat Systems Engineering','Patrol Ship',21,'no','firespray');
('Gladiator Destroyer','Rendili StarDrive','Destroyer',600,'no','gladiator-destroyer');
('Ghost','Correllian Engineering Corporation','Freighter',45,'yes','ghost');
('Gozanti Cruiser','Correllian Engineering Corporation','Cruiser - Light',64,'no','gozanti-cruiser');

('GR-45','Gallofree Yards','Transport',60,'no','gr-45');
('GR-75','Gallofree Yards','Transport',90,'no','gr-75');
('Guri`s Stinger','Surronian','Assault Ship',1150,'yes','guris-stinger');
('Hammerhead Cruiser','Rendili StarDrive','Frigate',315,'no','hammerhead-cruiser');
('Home One','Mon Calmari Shipyards','Cruiser - Heavy',1400,'yes','home-one');
('Hornet Interceptor','Tenloss Syndicate','Scout Vessel',14,'no','hornet-interceptor');
('Hosk Station','Alderaan Royal Engineering','Station',200000,'yes','hosk-station');
('Hounds Tooth','Correllian Engineering Corporation','Freighter',47,'yes','hounds-tooth');
('HWK-290','Correllian Engineering Corporation','Freighter',17,'no','hwk-290');
('Hyperspace Marauder','TransGalMeg','Transport',165,'yes','hyperspace-marauder');

('I-7 Howlrunner','Incom','Starfighter',11,'no','i-7-howlrunner');
('IG-2000','Trilon','Starfighter',20,'yes','ig-2000');
('Sith Interdictor Cruiser','Republic Sienar Systems','Destroyer',600,'no','sith-interdictor-cruiser');
('Interdictor Cruiser','Sienar Fleet Systems','Cruiser - Heavy',1129,'no','interdictor-cruiser');
('Invisible Hand','Rendili StarDrive','Dreadnaught',1088,'yes','invisible-hand');
('Ithullian Ore Hauler','Ithullian','Transport',1000,'no','ithullian-ore-hauler');
('Keldabe','Mandal Motors','Battleship',1000,'No','keldabe');
('Lady Luck','Sorosuub','Luxury Space Yacht',50,'yes','lady-luck');
('Lambda Shuttle','Sienar Fleet Systems','Transport',20,'no','lambda-shuttle');
('Lancer Frigate','Kuat Drive Yards','Frigate',250,'no','lancer-frigate');

Lucrehulk Battleship,Hoersch-Kessel,Battleship,3170,no,lucrehulk-battleship,"Turbo lasers, laser cannons",Confederation
M22 T Krayt,Mandal Motors,Gunship,50,no,m22-t-krayt,"laser cannons, ion cannons, concussion missiles","Naboo, smugglers, Hutt Cartel"
Marauder Corvette,Republic Fleet Systems,Corvette,195,no,marauder-corvette,"Turbo Lasers, Tractor beams",Corporate Sector Authority
Marauder Starjacker,Byblos Drive Yards,Miner,110,no,marauder-starjacker,plasma drills,pirates
Master Arcas Ship,Hoersch-Kessel,Courier,70,yes,master-arcas-ship,none,jedi 
MC 80B,Mon Calmari Shipyards,Cruiser - Heavy,1200,No,mc-80b,"turbo lasers, ion cannons","Rebels, New Republic"
MC-75,Mon Calmari Shipyards,Cruiser - Heavy,1200,no,mc75,"turbo lasers, ion cannons, tractor beams, concussion missiles",New Republic
MC-80,Mon Calmari Shipyards,Cruiser - Heavy,1400,no,mc-80,"turbo lasers, ion cannons, tractor beams, concussion missiles",New Republic
Millennium Falcon,Correllian Engineering Corporation,Freighter,34,yes,millennium-falcon,"laser cannons, concussion missiles",smugglers
Miy'til Starfighter,Olanji-Charubah,Starfighter,8,no,miytil-starfighter,"laser cannons, concussion missiles","Hapes Consortium, confederation"

Moldy Crow,Correllian Engineering Corporation,Freighter,17,yes,moldy-crow,"laser cannons, proton torpedos",smugglers
Naboo N1 starfighter,Theed Palace Space Vessel Engineering Corps,Starfighter,11,no,naboo-n1-starfighter,"laser cannons, proton torpedos",naboo 
Naboo Royal Cruiser,Theed Palace Space Vessel Engineering Corps,Yacht,39,no,naboo-royal-cruiser,none,naboo 
Naboo Royal Starship,Theed Palace Space Vessel Engineering Corps,Yacht,76,yes,naboo-royal-starship,none,naboo
Naboo Star Skiff,Theed Palace Space Vessel Engineering Corps,Transport,30,yes,naboo-star-skiff,laser cannons,naboo 
Nebula Class Star Destroyer,Republic Engineering Corp,Destroyer,1040,no,nebula-star-destroyer,"turbo lasers, ion cannons, concussion missiles",New Republic
Nebulon Ranger,Corellia StarDrive,Courier,25,yes,nebulon-ranger,laser cannons,jedi
Needle Fighter,Loronar Corporation,Starfighter,2.5,No,needle-fighter,laser cannons,Imperial Remnant
Neimoidian Shuttle,Haor Chall Engineering,Transport,15,no,neimoidian-shuttle,laser cannons,confederation
Nova Class battle cruiser,Olanji-Charubah,Frigate,400,No,nova-class-battle-cruiser,"turbo lasers, ion cannons",Hapes Consortium

Nssis Clawcraft,Chiss Ascendancy,Starfighter,7,no,nssis-clawcraft,laser cannons,"Chiss Ascendancy, imperial remnant"
Nubian Yacht,Theed Palace Space Vessel Engineering Corps,Yacht,48,no,nubian-yacht,none,naboo
Outrider,Correllian Engineering Corporation,Freighter,21,yes,outrider,laser cannons,smugglers
Profundity,Mon Calmari Shipyards,Cruiser - Heavy,1200,yes,profundity,"turbo lasers, ion cannons, tractor beams, concussion missiles",New Republic
Providence Class Star Destroyer,Rendili StarDrive,Dreadnaught,1088,no,providence-class-sd,"turbo lasers, laser cannons, ion cannons, tractor beams, proton torpedoes","trade federation, confederation"
Quadjumper,Subpro Corp,Tug,8,no,quadjumper,laser cannons,civilian
Quasar cruiser,Sorosuub,Carrier,340,no,quasar-cruiser,laser cannons,"imperial, Rebels, pirates"
Razor Crest,unknown,Gunship,30,yes,razor-crest,laser cannons,bounty Hunters
Regulator X-Q2,Loronar Corporation,Scout Vessel,150,No,regulator-x-q2,laser cannons,"imperial, Rebels, pirates
Resistance Transport,Slayn & Korpil,Transport,16,no,resistance-transport,"laser cannons, ion cannons, proton torpedoes",Resistance

Rogue Shadow,Sienar Fleet Systems,Transport,65,yes,rogue shadow,none,"Jedi, Sith, New Repbulic, Imperial"
Sabaoth Destroyer,unknown,Destroyer,300,no,sabaoth-destroyer,"Turbo lasers, laser cannons",Galactic Republic 
Sabaoth Starfighter,unknown,Starfighter,8,no,sabaoth-starfighter,laser cannons,Galactic Republic 
Scimitar Assault Bomber,Sienar Fleet Systems,Bomber,14,no,scimitar-assault-bomber,"laser cannons, concussion missiles",Imperial
Sentiel Landing Craft,Cygnus spaceworks,Transport,38,no,sentiel-landing-craft,"laser cannons, ion cannons, concussion missiles",Imperial
ShieldShip,Republic Engineering Corp,Escort Vehicle,500,no,shieldShip,none,New Republic
Shree Battle Cruiser,Ssi-Ruuvi,Cruiser - Heavy,900,no,shree-battle-cruiser,"turbo lasers, ion cannons, tractor beams",Ssi-Ruuvi
Sith Infiltrator,Republic Sienar Systems,Courier,27,yes,sith-infiltrator,"laser cannons, proton torpedos",Sith
Skipray Blastboat,Sienar Fleet Systems,Starfighter,25,no,skipray-blastboat,"laser cannons, ion cannons, proton torpedoes, tractor beam","Galactic Republic, Imperial, Zann Consortium, Imperial Remnant, Pirates, Smugglers"
Slave I,Kuat Systems Engineering,Patrol Ship,21,yes,slave-i,"laser cannons, proton torpedos, concussion missisles",bounty Hunters

Slave II,Mandal Motors,Patrol Ship,30,Yes,slave-ii,"laser cannons, ion cannons, proton torpedoes",Bounty Hunters
Sorosuub 3000,sorosuub,Yacht,55,no,sorosuub-3000,laser cannons,civilian
Soulless One,Feethan Ottraw Scalable Assemblies,Starfighter,7,yes,soulless-one,laser cannons,"Confederation, Jedi"
Ssi-Ruuvi Assault Carrier,Ssi-Ruuvi,Carrier,750,no,ssi-ruuvi-assault-carrier,"ion cannons, tractor beams",ssi-Ruuvi
Ssi-Ruuvi Battle Droid,Ssi-Ruuvi,Starfighter,2,no,ssi-ruuvi-battle-droid,laser cannons,Ssi-Ruuvi
Ssi-Ruuvi Picket Ship,Ssi-Ruuvi,Patrol Ship,45,no,ssi-ruuvi-picket-ship,"turbo lasers, ion cannons",ssi-Ruuvi
Star Courier,Republic Sienar Systems,Courier,27,no,star-courier,none,civilian
Star Forge,Rakatan Infinite Empire,Station,3100,yes,star-forge,turbo lasers,"Infinite Empire, sith"
Star Home,Olanji-Charubah,luxury Space Yacht,2500,yes,star-home,"Turbo lasers, laser cannons, tractor beams",Hapes Consortium
Star Jewel,Ubrikkian ,Luxury Space Yacht,160,yes,star-jewel,laser cannons,Hutt Cartel

Starlight Intruder,Mobquet,Transport,113,yes,starlight-intruder,turbo lasers,smugglers
Stinger Mantis,Latero Spaceworks,Yacht,37,no,stinger-mantis,none,jedi
Strike Class Medium Cruiser,Loronar Corporation,Cruiser - Medium,450,No,strike-class-medium-cruiser,"turbo lasers, ion cannons, tractor beams, concussion missiles",Imperial
Sun Crusher,Galactic Empire,Super Weapon,13,yes,sun-crusher,"laser cannons, tractor beam, Resonance torpedo",Imperial
Super Star Destroyer,Kuat Drive Yards,Super Weapon,19000,no,super-star-destroyer,"turbo lasers, laser cannons, ion cannons, tractor beams",Imperial
Tantive IV,Correllian Engineering Corporation,corvette,150,yes,tantive-iv,"Turbo lasers, laser cannons",rebels
Tartan Patrol Cruiser,Damorian Manufacturing Corp,Patrol Ship,250,no,tartan-patrol-cruiser,laser cannons,"Zann Consortium, Imperial"
Taylander Shuttle,Gallofree Yards,Transport,43,no,taylander-shuttle,none,"New Republic, civilian"
Techno Union Starship,Techno Union,Transport,220,no,techno-union-starship,"laser cannons, concussion missiles",Confederation
The Wheel,Bolzi Design,Station,50000,yes,the-wheel,"turbo lasers, laser cannons, ion cannons, tractor beams",civilian

Theta Class Shuttle,Cygnus spaceworks,Transport,19,no,theta-class-shuttle,laser cannons,"Galactic Republic, Imperial"
TIE Advanced,Sienar Fleet Systems,Starfighter,11,no,tie -advanced,"laser cannons, concussion missiles",Imperial
TIE Bomber,Sienar Fleet Systems,Bomber,8,no,tie- bomber,"laser cannons, proton torpedos",Imperial
TIE Defender,Sienar Fleet Systems,Starfighter,9,no,tie-defender,"laser cannons, ion cannons, concussion missiles",Imperial
TIE Fighter,Sienar Fleet Systems,Starfighter,6,no,tie-fighter,laser cannons,Imperial
TIE Interceptor,Sienar Fleet Systems,Interceptor,11,no,tie-interceptor,laser cannons,Imperial
Trade Federation Landing ship,Haor Chall Engineering,Transport,210,no,trade-federation-landing-ship,none,confederation
Turbulwnt Class Star Destroyer,Imperial Remnant,Destroyer,1600,no,turbulent-star-destroyer,"turbo lasers, ion cannons, concussion missiles",Imperial Remnant
U Wing,Incom,Starfighter,24,no,u-wing,laser cannons,New Republic
Upsilon Class Shuttle,Sienar-Jaemus Army Systems,Transport,19,no,upsilon-class-shuttle,laser cannons,first Order

V Wing,Kuat Systems Engineering,Starfighter,8,no,v-wing,laser cannons,"Galactic Republic, New Republic, Imperial"
VCX 100,Correllian Engineering Corporation,Freighter,44,no,vcx-100,laser cannons,"New Republic, civilian"
Venator Star Destroyer,Kuat Drive Yards,Destroyer,1137,no,venator-star-destroyer,"Turbo lasers, laser cannons, tractor beams, concussion missiles","Galactic Republic, Confederacy, Imperial"
Victory Star Destroyer,Rendili StarDrive,Cruiser - Medium,900,no,victory-star-destroyer,"turbo lasers, ion cannons, tractor beams ",Imperial
Virago,Mandal Motors,Starfighter,21,Yes,virago,laser cannons,Black Sun
Vulture droids,Haor Chall Engineering,Starfighter,7,no,vulture-droids,laser cannons,confederation
Wild Karrde,Correllian Engineering Corporation,Transport,125,yes,wild-karrde,laser cannons,smugglers
World Devastator,Galactic Empire,Super Weapon,3200,no,world-devastator,none,Imperial
X Wing,Incom,Starfighter,13,No,x-wing,"laser cannons, proton torpedos","Rebels, New Republic, pirates"
Y Wing,Koensayr,Bomber,23,no,y-wing,"laser cannons, ion cannons, proton torpedoes","rebels, pirates"

Y-4 Raptor,Incom,Transport,28,no,y-4-raptor,laser cannons,Imperial
YR-2400,Correllian Engineering Corporation,Freighter,21,no,yt-2400,laser cannons,civilian
YT 1300,Correllian Engineering Corporation,Freighter,34,no,yt-1300,laser cannons,civilian
YV-666,Correllian Engineering Corporation,Freighter,47,no,yv-666,laser cannons,civilian
Z95 Headhunter,Incom/ Subpro,Starfighter,17,no,z95-headhunter,"laser cannons, ion cannons, concussion missiles","rebels, pirates"
Zeta Class Shuttle,Sienar Fleet Systems,Freighter,31,no,zeta-class-shuttle,laser cannons,Imperial

INSERT INTO weapons (name, shipId) VALUES
 ('laser cannons',1),
 ('concussion missiles',1),
 ('none', 2);
 ('turbo lasers',3);
 ('laser cannons',3);
 ('ion cannons',3);
 ('concussion missiles',3);
 ('proton torpedoes', 3);
 ('laser cannons', 4);
 ('concussion missiles',4);
 ('turbo lasers',5); 
 ('laser cannons',5);
 ('ion cannons',5);
 ('tractor beams',5);
 ('mass drivers',5);
 ('turbo lasers',6);
 ('ion cannons',6);
 ('tractor beams',6);
 ('concussion missiles',6);
 ('none',7);
 ('laser cannons',8);
 ('ion cannons',8);
 ('proton torpedos',8);
 ('laser cannons',9);
 ('tractor beams',10);
 ('turbo lasers',11);
 ('laser cannons',11);
 ('ion cannons',11);
 ('tractor beams',11);
 ('proton torpedoes' 11);
 ('turbo lasers',12);
 ('ion cannons',12);
 ('tractor beams',12);
 ('laser cannons',13);
 ('turbo lasers',14);
 ('laser cannons',14);
 ('ion cannons',14);
 ('tractor beams',14);
 ('tractor beams',15);
 ('tractor beams',16);
 ('laser cannons',17);
 ('concussion missiles',17);
 ('none',18);
 ('turbo lasers',19);
 ('laser cannons',19);
 ('ion cannons',19);
 ('tractor beams',19);
 ('laser cannons',20);
 ('ion cannons',20);
 ('turbo lasers',21);
 ('laser cannons'21);
 ('laser cannons', 22);
 ('Super laser',23);
 ('turbo lasers',23);
 ('laser cannons',23);
 ('concussion missiles',23);
 ('tractor beams',23);
 ('super laser',24);
 ('turbo lasers',24);
 ('laser cannons',24);
 ('concussion missiles',24);
 ('tractor beams',24);
 ('laser cannons',25);
 ('tractor beams',26);
 ('turbo laser',27);
 ('laser cannons',27);
 ('concussion missiles',27);
 ('tractor beams',27);
 ('laser cannons',28);
 ('proton torpedos',28);
 ('turbo lasers',29);
 ('laser cannons',29);
 ('super laser',30);
 ('turbo lasers',30);
 ('laser cannons',30);
 ('ion cannons',30);
 ('turbo lasers',31);
 ('laser cannons',31);
 ('tractor beams',31);
 ('none',32);
 ('laser cannons',33);
 ('turbo lasers',34);
 ('laser cannons',34);
 ('ion cannons',34);
 ('tractor beams',34);
 ('laser cannons',35);
 ('proton torpedos',35);
 ('laser cannons',36);
 ('laser cannons',37);
 ('concussion missisles',37);
 ('turbo lasers',38);
 ('laser cannons',38);
 ('concussion missiles',38);
 ('laser cannons',39);
 ('laser cannons',40);
 ('none',41);
 ('none',42);
 ('laser cannons',43);
 ('ion cannons',43);
 ('proton torpedoes',43);
 ('turbo lasers',44);
 ('tractor beams',44);
 ('turbo lasers',45);
 ('ion cannons',45);
 ('tractor beams',45);
 ('concussion missiles',45);
 ('laser cannons',46);
('turbo lasers',47);
('laser cannons',48);
('ion cannons',48);
('concussion missiles'48);
('laser cannons',49);
('proton torpedos',49);
('laser cannons',50);
('laser cannons',51);
('laser cannons',52);
('concussion missiles',52);
('turbo laser',53);
('tractor beams',53);
('gravity well generators',53);
('laser cannons',54);
('gravity well generators',54);
('turbo lasers',55);
('laser cannons',55);
('ion cannons',55);
('tractor beams',55);
('proton torpedoes',55);
('turbo lasers',56);
('laser cannons',56);
('turbo lasers',57);
('laser cannons',57);
('ion cannons',57);
('tractor beams',57);
('mass drivers',57);
('laser cannons',58);
('laser cannons',59);
('laser cannons',60);
 
 

 


INSERT INTO affiliations (name, shipId) VALUES
 ('Rebels',1),
 ('New Republic',1),
 ('Imperial',2);
 ('Imperial'3);
 ('pirates',4);
 ('Zann Consortium',5);
 ('Imperial',6);
 ('Imperial',7);
 ('Rebels', 8);
 ('New Republic',8);
 ('Jedi',9);
 ('civilian',9);
 ('civilian',10);
 ('Hapes Consortium',11):
 ('New Republic',11);
 ('New Republic',12);
 ('Bespin Wing Guard',13);
 ('Imperial',14);
 ('New Rublic',14);
 ('Confederation',14);
 ('pirates',14);
 ('civilian',15);
 ('jedi',16);
 ('Imperial',17);
 ('New Rublic',17);
 ('Jedi',17);
 ('Hutt Cartel',17);
 ('Black Sun',17);
 ('pirates',17);
 ('Galactic Republic',18);
 ('Smugglers',18);
 ('New Republic',19);
 ('Mandalorians',20);
 ('Galactic Republic',20);
 ('Galactic Republic',21);
 ('Imperial',21);
 ('pirates',21);
 ('civilian', 21);
 ('Imperial',22);
 ('Imperial',23);
 ('Imperial',24);
 ('Jedi',25);
 ('Confederation',26);
 ('Galactic Republic',27);
 ('Corporate Sector Authority',27);
 ('Imperial',27);
 ('Confederacy',27);
 ('New Rupbulic',27);
 ('Hutt Cartel',27);
 ('Chiss',27);
 ('New Republic',28);
 ('smugglers',29);
 ('Imperial',30);
 ('Hutt Cartel',31);
 ('civilian)',32);
 ('Jedi',33);
 ('Sith',33);
 ('Galactic Repbulic',33);
 ('Imperial',33);
 ('Imperial',34);
 ('Mandalorians',35);
 ('Rebels',35);
 ('pirates',35);
 ('Imperial',36);
 ('Confederation',37);
 ('civilian',37);
 ('Galactic Empire',38);
 ('pirates',38);
 ('smugglers',39);
 ('Imperial',40);
 ('Black Sun',40);
 ('pirates',40);
 ('civilian',40);
 ('New Republic',41);
 ('civilian',41);
 ('civilian',42);
 ('Black Sun',43);
 ('Galactic Republic',44);
 ('New Republic',45);
 ('Tennloss Syndicte',46);
 ('civilian',47);
 ('bounty Hunters',48);
 ('civilian',49);
 ('smugglers',50);
 ('Imperial',51);
('New Republic',51);
('Confederation',51);
('bounty hunters',52);
('Sith',53);
('Imperial',54);
('Confederation',55);
('Ithullian',56);
('Zann Consortium',57);
('Mandalorians',57);
('smugglers',58);
('Imperial',59);
('Imperial',59);




SELECT * from ships;
SELECT * from affiliations;
SELECT * from weapons;


