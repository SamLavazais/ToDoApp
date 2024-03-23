-- à exécuter dans un terminal POSTGRE de la default database "postgres"
-- SELECT 'CREATE DATABASE todolist'
-- WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'todolist')\gexec
-- A EXECUTER DANS UN TERMINAL shell/bash
-- psql -U postgres -tc "SELECT 1 FROM pg_database WHERE datname = 'mydb'" | grep -q 1 || psql -U postgres -c "CREATE DATABASE mydb"


CREATE DATABASE todolist;
\connect todolist;

-- CREATE TABLE IF NOT EXISTS Users (
--     user_id INTEGER GENERATED ALWAYS AS IDENTITY,
--     alias VARCHAR(20) NOT NULL,
--     first_name VARCHAR(50) NOT NULL,
--     last_name VARCHAR(50) NOT NULL,
--     email VARCHAR(50) UNIQUE NOT NULL,
--     password TEXT NOT NULL,
--     PRIMARY KEY(user_id)
-- );

-- INSERT INTO Users (alias, first_name, last_name, email, password)
-- SELECT
--     'alias' || i,
--     'First' || i,
--     'Last' || i,
--     'email' || i || '@example.com',
--     'hashed_password'
-- FROM generate_series(1, 10) as i
-- WHERE NOT EXISTS (SELECT 1 FROM Users);

CREATE TABLE IF NOT EXISTS Tasks (
	task_id INTEGER GENERATED ALWAYS AS IDENTITY,
	title VARCHAR(100) NOT NULL,
	category VARCHAR(20) DEFAULT 'noCat',
	is_completed BOOLEAN DEFAULT false,
	deadline DATE DEFAULT CURRENT_DATE,
	is_important BOOLEAN DEFAULT false,
	details TEXT,
	user_id INTEGER NOT NULL,
    PRIMARY KEY(task_id)
    -- ,
    -- CONSTRAINT fk_user
    --     FOREIGN KEY(user_id) 
    --         REFERENCES Users(user_id)
    --         ON DELETE CASCADE
);

INSERT INTO Tasks (title, category, is_completed, deadline, is_important, details, user_id)
SELECT
    'Task ' || i,
    CASE WHEN i % 2 = 0 THEN 'Work' ELSE 'Personal' END,
    FALSE,
    CURRENT_DATE + (i % 30),
    CASE WHEN i % 3 = 0 THEN TRUE ELSE FALSE END,
    'Details for task ' || i,
    1 + ((i-1) % 10)
FROM generate_series(1, 30) as i
WHERE NOT EXISTS (SELECT 1 FROM Tasks);

-- CREATE TABLE IF NOT EXISTS Subtasks (
--     subtask_id INTEGER GENERATED ALWAYS AS IDENTITY,
--     title VARCHAR(100) NOT NULL,
--     is_completed BOOLEAN DEFAULT false,
--     task_id INTEGER NOT NULL,
--     PRIMARY KEY(subtask_id),
--     CONSTRAINT fk_task
--         FOREIGN KEY(task_id) 
--             REFERENCES Tasks(task_id)
--             ON DELETE CASCADE
-- );

-- INSERT INTO Subtasks (title, is_completed, task_id)
-- SELECT
--     'Subtask ' || i,
--     FALSE,
--     (i-1) % 8 * 4 + 1
-- FROM generate_series(1, 40) as i
-- WHERE NOT EXISTS (SELECT 1 FROM Subtasks);