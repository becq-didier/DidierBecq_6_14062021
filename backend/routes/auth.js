// Limite le nombre de connection, s'applique à toutes les demandes (express.rate.limite)
const limiter = require("../middleware/express-rate-limit");

//installation d'express
const express = require("express");
// Création du routeur.
const router = express.Router();
// Chemin des controllers d'authentifications
const userCtrl = require("../controllers/auth");
//Route inscription
router.post("/signup", limiter, userCtrl.signup); // limiter: Limite les connexions à Login avec espress-rate-limit
//Route connexion
router.post("/login", limiter, userCtrl.login);
//module router exporté
module.exports = router;