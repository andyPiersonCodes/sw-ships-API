
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
    class VARCHAR(255),
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
  PRIMARY KEY(id)
  FOREIGN KEY (shipId) REFERENCES ships(id)
);

CREATE TABLE  affiliations (
    id INT auto_increment,
    name VARCHAR(255)
    shipId INT,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id),
    FOREIGN KEY (shipId) REFERENCES ships(id)
)

SHOW TABLES;

DESC ships;

INSERT INTO ships (name, manufacturer,class, size, isUnique, slug) VALUES
('A Wing','Kuat Systems Engineering','interceptor',7,'no','a-wing'),
('AA-9 Coruscant Freighter','Botajef Shipyards','Freighter',390, 'no','aa-9-coruscant-freighter')

INSERT INTO weapons (name, shipId) VALUES
 ('laser cannons',1),
 ('concussion missiles',1),
 ('None', 2),

INSERT INTO affiliations (name, shipId) VALUES
 ('Rebels', 1),
 ('New Republic', 1),
 ('Imperial', 2),
SELECT * from ships;



