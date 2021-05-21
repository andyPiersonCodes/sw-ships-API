
CREATE DATABASE starWars;

USE starWars;

DROP DATABASE starWars;


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
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id),
);

CREATE TABLE ships_affiliations (
    id INT auto_increment,
    shipId INT,
    affiliationId INT,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id),
    FOREIGN KEY (shipId) REFERENCES ships(id),
    FOREIGN KEY(affiliationId) REFERENCES affiliations(id)
);
SHOW TABLES;

DESC ships;



SELECT * from ships;
SELECT * from affiliations;
SELECT * from weapons;


