CREATE TABLE messages (
  username VARCHAR(255),
  chatName VARCHAR(255),
  chatNumber INT,
  messages VARCHAR(1000)
);

INSERT INTO messages (username, chatName, chatNumber, messages) 
VALUES ('JohnDoe', 'General', 1, 'Hello everyone!');