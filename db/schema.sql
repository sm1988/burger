-- create a database to connect with app --
CREATE DATABASE burgers_db;
USE burgers_db;
-- create a table to store burgers a user is eating --
CREATE TABLE burgers(
    id INTEGER(10) AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY(id)
);
