BEGIN ;

DROP TABLE if exists users, posts cascade;

CREATE TABLE users (
    id SERIAL PRIMARY KEY ,
    username VARCHAR(255) NOT NULL ,
    email  VARCHAR(255) NOT NULL , 
    password  VARCHAR(255) NOT NULL , 
    image TEXT 
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY ,
    title VARCHAR(255) NOT NULL ,
    content text NOT NULL , 
    image TEXT,
    userId int, 
    dateTime timestamp not null default CURRENT_TIMESTAMP,
    foreign key (userId) references users(id) on delete cascade
);

COMMIT;