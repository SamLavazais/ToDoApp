require("dotenv").config({ debug: true }); // pour utiliser les données stockées dans le fichier .env en tant que variables d'environnement (password, etc.)
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const TasksRouter = require("./routes/tasksRoutes");

//Middleware pour gérer les données au format json et les url encodées (POST & PUT)
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// alternative :
    // const bodyParser = require("body-parser");
    // app.use(bodyParser.urlencoded({ extended: true }));

//TODO : ajouter une gestion des headers

//TODO ajouter les routes
app.use("/tasks", TasksRouter);

//TODO : ajouter une gestion des erreurs
app.use("/", (err, req, res, next) => {
    res.status(err.statusCode || 500).json(err.message || "Cette route n'existe pas.");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
