//contiendra la logique des routes

// appel à express
const express = require("express");
//créer un routeur avec la methode express 
const router = express.Router();
//route middleware de protection avec jsonwebtoken
const auth = require("../middleware/auth");
//route pour le gestion des fichier images
const multer = require("../middleware/multer-config");

//Chemin de controllers
const sauceCtrl = require("../controllers/sauces");



//auth = protection encodage, multer = chemin + renomme image , sauce... = controlleur
//crée une sauce
router.post("/", auth, multer, sauceCtrl.createSauce);
//récupère toutes les sauces
router.get("/", auth, sauceCtrl.getAllSauces);
//récupère une sauce selon son Id les ':' est un paramètre de route dinamique
router.get("/:id", auth, sauceCtrl.getOneSauce, );
//modifie une sauce selon son Id
router.put("/:id", auth, multer, sauceCtrl.modifySauce);
//supprime une sauce selon son Id
router.delete("/:id", auth, sauceCtrl.deleteSauce);
//poste un like ou dislike selon son Id
router.post("/:id/like", auth, sauceCtrl.likeDislike);

//export le routeur
module.exports = router;