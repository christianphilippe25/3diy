use 3diy;

drop table contacts;
drop table clients;
drop table users;

CREATE TABLE IF NOT EXISTS users (
	id INT AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS clients (
	id INT AUTO_INCREMENT,
    name VARCHAR(100),
    surname VARCHAR(100),
    user_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS contacts (
	id INT AUTO_INCREMENT,
    email VARCHAR(100),
    user_id INT,
    phone VARCHAR(20),
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);