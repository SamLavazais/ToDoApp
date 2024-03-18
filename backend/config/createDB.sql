CREATE DATABASE todolist;

CREATE TABLE Tasks
(
	id INT Primary key NOT NULL,
	title VARCHAR,
	completed bool NOT NULL
);

INSERT INTO tasks (id, title, completed)
VALUES
(1, 'Manger', true),
(2, 'Dormiiiiiir', false),
(3, 'Redormir', false),
(4, 'Coder un kata', false),
(5, 'Remanger', false),
(6, 'Avancer mon projet perso', true),
(7, 'Créer un MVP', false),
(8, 'Créer le serveur', true),
(9, 'Etablir la connexion avec le serveur PostGreSQL', true),
(10, 'Avancer mon projet perso (UI))', true);
