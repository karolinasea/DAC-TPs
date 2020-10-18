CREATE DATABASE messages;
USE messages;

CREATE TABLE messages
(
id INTEGER AUTO_INCREMENT NOT NULL,
message TEXT,
PRIMARY KEY (id)
) COMMENT='messages table';
