const pgp = require("pg-promise")(/* options */);
const db = pgp(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

const getTasks = (req, res, next) => {
    try {
        db.any("SELECT * from Tasks")
            .then((data) => {
                console.log("DATA:", data);
                res.status(200).json(data);
            })
            .catch((error) => {
                console.log("ERROR:", error);
            });
    } catch (err) {
        next({
            message: "Impossible de récupérer les tâches demandées",
            statusCode: 404,
        });
    }
};

module.exports = { getTasks };
