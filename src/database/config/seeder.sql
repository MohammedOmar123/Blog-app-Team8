BEGIN;

insert into users(username, email, password, image) values 
('Mustafa', 'mustafa@gmail.com', '123456', 'url'), 
('Zayan', 'zayan@gmail.com', '123456789', 'zayanUrl');

insert into posts(title, content, image, userId) values 
('IMPORTANt', 'this is too important!', 'imURL', 1), 
('Hello', 'Welcome', 'HiURL', 2),
('test', 'test content ', 'testteset', 1);



COMMIT;