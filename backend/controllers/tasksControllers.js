const getTasks = (req, res, next) => {
    try {
        res.status(200).json("voici la liste des tâches demandées !");
    } catch (err) {
        next({
            message: "Impossible de récupérer les tâches demandées",
            statusCode: 404,
        });
    }
};

module.exports = { getTasks };
