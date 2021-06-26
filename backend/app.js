// Import le module dotenv
const dotenv = require("dotenv").config();
// Iporte module express pour implémenté la structure CRUD
const express = require("express");
// Appel de la methode express dans la const app
const app = express();
// Transforme le corps de la reqête en JSON exploitable
const bodyParser = require("body-parser");
//Importe mongoose pour utiliser la base de données
const mongoose = require("mongoose");
// Importe path pour gérer le chemin des systèmes de fichier
const path = require("path");
// Importe le routeur sauce
const sauceRoutes = require("./routes/sauces");
// Importe le routeur userRoutes
const userRoutes = require("./routes/auth");
// Helmet aide à sécuriser l'applications Express en définissant divers en-têtes HTTP
const helmet = require("./middleware/helmet");



// Connection à la base de donnée MongoDB
mongoose
    .connect(process.env.MONGODB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"));


// Applique helmet à toute les demandes
app.use(helmet);
// Objet middleware  (request + response + function next)
// Ces headers permettent d'autoriser tout le monde à faire des requetes depuis son navigateur, retire erreur systèmes de sécurité CORS
app.use((req, res, next) => {
    // d'accéder à notre API depuis n'importe quelle origine ( '*' ) ;
    res.setHeader("Access-Control-Allow-Origin", "*");
    // d'ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.) ;
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    // d'envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.).
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    //passe requête suivante
    next();
});

app.use(bodyParser.json()); //Transforme les données en un objet JSON, exploitable plus facilement

//Ce middleware applique le chemin static a chaque requête '/images' | path donne accé au chemin du systeme de fichier
app.use("/images", express.static(path.join(__dirname, "images")));

// Routes de l'application
app.use("/api/sauces", sauceRoutes); //determine la route pour les Sauces
app.use("/api/auth", userRoutes); //determine la route pour l'utilisateur


process.on("warning", (warning) => {
    console.log(warning.stack);
});
// Exporter la const app pour accéder depuis le serveur node
module.exports = app;