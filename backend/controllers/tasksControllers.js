const pgp = require("pg-promise")(/* options */);
// const db = pgp(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
const db = pgp({
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER, // any admin user
    password: process.env.DB_PASSWORD,
});

const getTasks = (req, res, next) => {
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

module.exports = { getTasks };
