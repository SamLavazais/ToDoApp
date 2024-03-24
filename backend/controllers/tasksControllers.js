const pgp = require("pg-promise")(/* options */);
// const db = pgp(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
const db = pgp({
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER, // any admin user
    password: process.env.DB_PASSWORD,
});

// obtenir la liste des tâches
const getAllTasks = (req, res, next) => {
    db.any("SELECT * from tasks")
        .then((data) => {
            console.log("DATA:", data);
            res.status(200).json(data);
        })
        .catch((error) => {
            console.log("ERROR:", error);
            next({
                message: "Impossible de récupérer les tâches demandées",
                statusCode: 404,
            });
        });
};

// créer un seul todo
const addNewTask = (req, res, next) => {
    const newToDo = req.body;
    // placer les paramètres du body dans la requête //TODO paramétrer le user_id
    const createTodoQuery = `INSERT INTO tasks (title, category, deadline, is_important, details, user_id)
                            VALUES ('${newToDo.title}', '${newToDo.category}', '${newToDo.deadline}'::date, ${newToDo.is_important}, '', 99) RETURNING task_id ;`;
    db.one(createTodoQuery)
        .then((resp) =>
            res.status(201).json(`Le todo ${resp.task_id} a bien été créé !`)
        )
        .catch((error) => {
            console.log("ERROR:", error);
            next({
                message: "Impossible de créer le todo",
                statusCode: 400,
            });
        });
};

module.exports = { getAllTasks, addNewTask };
