CREATE DATABASE messages;
USE messages;

CREATE TABLE messages
(
id INTEGER AUTO_INCREMENT,
message TEXT,
PRIMARY KEY (id)
) COMMENT='messages table';
