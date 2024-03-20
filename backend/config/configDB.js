require("dotenv").config({ debug: true }); // pour utiliser les données stockées dans le fichier .env en tant que variables d'environnement (password, etc.)
const pgp = require("pg-promise")(/* initialization options */);

console.log("mdp :", process.env);

async function DBinit() {
    // let db = pgp({
    //     database: "postgres",
    //     host: process.env.DB_HOST,
    //     port: process.env.DB_PORT,
    //     user: process.env.DB_USER, // any admin user
    //     password: process.env.DB_PASSWORD,
    // });

    // await db.none("CREATE DATABASE todolist");

    let db = pgp({
        database: "todolist",
        port: process.env.DB_PORT,
        user: process.env.DB_USER, // any admin user
        password: process.env.DB_PASSWORD,
    });

    await db.none(`CREATE TABLE IF NOT EXISTS Tasks
                    (
                        id INT Primary key NOT NULL,
                        title VARCHAR NOT NULL,
                        completed bool NOT NULL
                    );
                    `);

    await db.none(`INSERT INTO Tasks (id, title, completed)
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
                    `);
}

DBinit();
