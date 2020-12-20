
CREATE DATABASE starWars;

USE starWars;

CREATE USER 'sithLord'@'localhost' IDENTIFIED BY 'GLucas514!';

GRANT ALL ON starWars.* TO 'sithLord'@'localhost';

SHOW TABLES;

DROP TABLE ships;

CREATE TABLE ships (
    id INT AUTO_INCREMENT,
    name VARCHAR(255),
    class VARCHAR(255),
    size INT,
    manufacturer VARCHAR(255),
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

INSERT INTO ships (name, class, size, manufacturer, isUnique,slug) VALUES
 ('Captain Hook','Peter Pan','captain-hook'),


INSERT INTO weapons (name, class, size, manufacturer, isUnique,slug) VALUES
 ('Captain Hook','Peter Pan','captain-hook'),

INSERT INTO affiliations (name, class, size, manufacturer, isUnique,slug) VALUES
 ('Captain Hook','Peter Pan','captain-hook'),
SELECT * from ships;



