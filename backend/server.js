const express = require("express");
require("dotenv").config({ debug: true }); // pour utiliser les données stockées dans le fichier .env en tant que variables d'environnement (password, etc.)
const TasksRouter = require("./routes/tasksRoutes");

const app = express();

//TODO : ajouter une gestion des headers
//Middleware pour gérer les CORS
app.use((req, res, next) => {
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Content, Accept, Authorization"
    );
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

//Middleware pour gérer les données au format json et les url encodées (POST & PUT)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// alternative :
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));

//TODO ajouter les routes
app.use("/tasks", TasksRouter);

// gestion des erreurs
// en cas de route inexistante :
app.use((req, res, next) => {
    next({
        message: "Cette route n'existe pas",
        statusCode: 404,
    });
});

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json(err.message);
});

// mettre le serveur en écoute
app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
);
