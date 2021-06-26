//Initialisation du Projet:
// On se place sous le dossier Backend et on initialise le projet node avec 'npm init',
// ce qui crée un fichier package.json qui contiendra les information sur les packages utilisées pour l'application
// On crée ensuite le fichier serve.js qui contient le code pour le serveur node

const http = require("http"); // importer package http de node qui permet de créer un serveur Http/Https
const app = require("./app"); // importer application app.js

// La fonction normalizePort renvoie un port valide, qu'il soit fourni sous la forme d'un numéro ou d'une chaîne
const normalizePort = (val) => {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};

// On définie le port 'environement' ou '3000' avec la methode set d'express
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

// La fonction errorHandler  recherche les différentes erreurs et les gère de manière appropriée.
// Elle est ensuite enregistrée dans le serveur ;
const errorHandler = (error) => {
    if (error.syscall !== "listen") {
        throw error;
    }
    const address = server.address();
    const bind =
        typeof address === "string" ? "pipe " + address : "port: " + port;
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges.");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use.");
            process.exit(1);
            break;
        default:
            throw error;
    }
};

// Un écouteur d'évènements est également enregistré,
// consignant le port ou le canal nommé sur lequel le serveur s'exécute dans la console.

// Creation du serveur avec la methode creatServer qui recoit deux arguments la requête et la réponse importer depuis l'application app.js
const server = http.createServer(app);

// Affiche infos du serveur
server.on("error", errorHandler);
server.on("listening", () => {
    const address = server.address();
    const bind = typeof address === "string" ? "pipe " + address : "port " + port;
    console.log("Listening on " + bind);
});

//Le serveur ecoute les reqête envoyé
server.listen(port);