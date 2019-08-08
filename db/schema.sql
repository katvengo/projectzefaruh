CREATE DATABASE zefaruhevents;
 

 /* DROP DATABASE IF EXISTS project3;
CREATE database project3;
USE project3;
​
CREATE TABLE user (
  user_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  user_name VARCHAR(100) NULL,
  PRIMARY KEY (user_id)
);
CREATE TABLE event (
  event_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  event_name VARCHAR(100) NULL,
  PRIMARY KEY (event_id)
);
​
CREATE TABLE favorite (
  favorite_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  favorite_event_name VARCHAR(100) NULL,
  f_user_id INT NOT NULL,
  f_event_id INT NOT NULL,
  PRIMARY KEY (favorite_id),
  INDEX (f_event_id), 
  INDEX (f_user_id),
  Foreign Key (f_event_id) REFERENCES event(event_id) ON UPDATE CASCADE ON DELETE RESTRICT,
  Foreign Key (f_user_id) REFERENCES user(user_id)   
); */