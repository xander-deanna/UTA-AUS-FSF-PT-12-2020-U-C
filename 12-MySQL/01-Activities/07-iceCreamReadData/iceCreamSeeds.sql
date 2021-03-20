DROP DATABASE IF EXISTS play_listDB;

CREATE DATABASE play_listDB;

USE ice_creamDB;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NOT NULL,
  artist VARCHAR(45) NOT NULL,
  genre VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ("Hold On", "Wilson Phillips" );

INSERT INTO songs (title, artist, genre)
VALUES ("vanilla", 2.50, 100);

INSERT INTO songs (title, artist, genre)
VALUES ("vanilla", 2.50, 100);

-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);
