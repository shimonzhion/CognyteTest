
CREATE TABLE person (
    id INTEGER PRIMARY KEY,
    name TEXT
);

CREATE TABLE friend (
    id INTEGER,
    id2 INTEGER,
    FOREIGN KEY (id) REFERENCES person(id),
    FOREIGN KEY (id2) REFERENCES person(id)
);

INSERT INTO person VALUES (1, 'Dan'),(2, 'Avi'),(3, 'Shirel'),(4, 'Dana');

INSERT INTO friend  VALUES (1, 2),(1, 3),(2, 3),(2, 4),(3, 2);



SELECT p1.name AS person_name, p2.name AS friend_name 
FROM friend friendship
JOIN person p1 ON friendship.id = p1.id
JOIN person p2 ON friendship.id2 = p2.id;
