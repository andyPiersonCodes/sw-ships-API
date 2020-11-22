
CREATE DATABASE starWars;

USE starWars;

SHOW TABLES;

DROP TABLE ships;

CREATE TABLE ships (
    id INT AUTO_INCREMENT,
    name VARCHAR(255),
    class VARCHAR(255),
    size INT,
    manufacturer VARCHAR(255),
    weapons,
    affiliation,
    isUnique ENUM ('YES', 'NO'),
    slug VARCHAR(255),
 	createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY (id)
);

SHOW TABLES;

DESC ships;

INSERT INTO villains (name, class, size, manufacturer, weapons, affiliation, isUnique,slug) VALUES
 ('Captain Hook','Peter Pan','captain-hook'),
 ('Cruella de Vil','One Hundred and One Dalmatians','cruella-de-vil'),
 ('Gaston','Beauty and the Beast','gaston'),
 ('Hades','Hercules','hades'),
 ('Horned King','The Black Cauldron','horned-king'),
 ('Jafar','Aladdin','jafar'),
 ('Lady Tremaine','Cinderella','lady-tremaine'),
 ('Madame Medusa','The Rescuers','madame-medusa'),
('Madam Mim','The Sword in the Stone','madam-mim'),
('Maleficent','Sleeping Beauty','maleficent'),
('Prince John','Robin Hood','prince-john'),
('Sir Hiss','Robin Hood','sir-hiss'),
('Queen Grimhilde','Snow White and the Seven Dwarfs','queen-grimhilde'),
('Queen of Hearts','Alice in Wonderland','queen-of-hearts'),
('Scar','The Lion King','scar'),
('Shan Yu','Mulan','shan-yu'),
('Shere Khan','The Jungle Book','shere-khan'),
('Ursula','The Little Mermaid','ursula');

SELECT * from ships;

'Nebulon B',
'Frigate',
300,
'Kuat Drive Yards',
['Turbo Lasers', 'Laser Cannons', 'Tractor Beams'],
['Imperial', 'Rebels', 'Pirates'],
'No',
'nebulon-b',



GRANT ALL ON disney.* TO 'director'@'localhost';