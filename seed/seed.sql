CREATE SCHEMA foo;

CREATE TABLE division ( 
  id SERIAL PRIMARY KEY,
  en VARCHAR(50),
  fr VARCHAR(50)
);

CREATE TABLE loser (
  ID SERIAL PRIMARY KEY,
  name text,
  division_id BIGINT references division(id)
);


CREATE TABLE weight (
  loser_id BIGINT REFERENCES loser(ID),
  weight decimal,
  week integer
);

INSERT INTO division(en, fr) VALUES('DTS', 'STD');
INSERT INTO division(en, fr) VALUES('I&S', 'S&I');

INSERT INTO loser(name, division_id) VALUES('Foo', 1);
INSERT INTO loser(name, division_id) VALUES('far', 1);
INSERT INTO loser(name, division_id) VALUES('boo', 2);
INSERT INTO loser(name, division_id) VALUES('bar', 2);
INSERT INTO loser(name, division_id) VALUES('baz', 2);

insert into weight (weight, week, loser_id)  VALUES(100.11, 1, 1);
insert into weight (weight, week, loser_id)  VALUES(110.33, 1, 2);
insert into weight (weight, week, loser_id)  VALUES(200.11, 1, 3);
insert into weight (weight, week, loser_id)  VALUES(187.11, 1, 4);
insert into weight (weight, week, loser_id)  VALUES(324.11, 1, 5);