require("dotenv").config({ debug: true }); // pour utiliser les données stockées dans le fichier .env en tant que variables d'environnement (password, etc.)
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//Middleware pour gérer les données au format json et les url encodées (POST & PUT)
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// alternative :
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));

//TODO : ajouter une gestion des headers

//TODO ajouter les routes
app.use("/", (req, res, next) => {
    try {
        res.status(200).json("Le serveur est à l'écoute !");
    } catch (err) {
        next({ message: "erreur serveur personnalisée", statusCode: 501 });
    }
});

//TODO : ajouter une gestion des erreurs
app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json(err.message);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
