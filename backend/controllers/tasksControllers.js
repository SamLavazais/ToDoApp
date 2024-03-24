const pgp = require("pg-promise")(/* options */);
// const db = pgp(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
const db = pgp({
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER, // any admin user
    password: process.env.DB_PASSWORD,
});

const getAllTasks = (req, res, next) => {
    db.any("SELECT * from tasks ORDER BY deadline;")
        .then((data) => {
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

const deleteTask = (req, res, next) => {
    // récupère l'id du todo qu'on veut supprimer
    const taskId = req.params.taskId;
    // créer la query SQL pour supprimer la ligne
    const deleteToDoQuery = `DELETE FROM tasks where tasks.task_id = ${taskId} RETURNING *;`;
    // exécuter la query
    db.one(deleteToDoQuery)
        .then(() => res.status(200).json("todo supprimé !"))
        .catch((error) => {
            // console.log("ERROR:", error);
            next({
                message: "Impossible de supprimer le todo.",
                statusCode: 404,
            });
        });
};

const completeTask = (req, res, next) => {
    const taskId = req.params.taskId;
    const is_completed = req.body.is_completed;
    // créer la query SQL pour supprimer la ligne
    const completeTodoQuery = `UPDATE tasks SET is_completed = ${is_completed} where task_id = ${taskId} RETURNING *;`
    // exécuter la query
    db.one(completeTodoQuery)
        .then((resp) => res.status(200).json(`Todo mise à jour : todo désormais ${resp.is_completed ? "effectué" : "encore à effectuer"}`))
        .catch((error) => {
            // console.log("ERROR:", error);
            next({
                message: "Impossible d'updater le todo.",
                statusCode: 404,
            });
        });
}

module.exports = { getAllTasks, addNewTask, deleteTask, completeTask };