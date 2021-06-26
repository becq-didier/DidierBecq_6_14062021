//import le module dotenv
const dotenv = require("dotenv").config();
//importe bcrypt pour hashage du mot de passe
const bcrypt = require("bcrypt");
// package jsonwebtoken pour encoder des données
const jwt = require("jsonwebtoken");
// importe le model User
const User = require("../models/Auth");
const PassValidator = require("../middleware/password-validator");

//Middleware inscription
exports.signup = (req, res, next) => {
    if (!PassValidator.validate(req.body.password)) {
        return res.status(401).json({ error: "Mot de passe trop simple !" });
    }
    console.log(typeof PassValidator);
    bcrypt
    //hashage du mot de passe
        .hash(req.body.password, 10)
        // ecupere le hash du mot de passe
        .then((hash) => {
            //on passe le hash dans un objet du modèle user et l'émail
            const user = new User({
                email: req.body.email,
                password: hash,
            });
            user
            //utilisation de la methode save dans la base de données
                .save()
                //retour du code 201 pour dire tout ce passe bien + message
                .then(() =>
                    res.status(201).json({ message: "Utilisateur créé !" })
                )
                //retour du code erreur 400 + Message d'erreur en json
                .catch((error) => res.status(400).json({ error }));
        })
        .catch((error) => res.status(500).json({ error }));
};
//Middleware connexion
exports.login = (req, res, next) => {
    // methode findOne avec l'adresse email demandé
    User.findOne({ email: req.body.email })
        //
        .then((user) => {
            // si utilisateur non trouvé
            if (!user) {
                // status 401 + message
                return res.status(401).json({ error: "Utilisateur non trouvé !" });
            }
            //package bcrypt
            //compare mot de passe de la requête avec le hash du mot de passe enregistré dans le user trouver avec findOne 
            bcrypt
                .compare(req.body.password, user.password)
                // recoit boolean
                .then((valid) => {
                    //si pas valable
                    if (!valid) {
                        // status 401 + message mot de passe incorrect
                        return res.status(401).json({ error: "Mot de passe incorrect !" });
                    }
                    //renvoit status 200 + objet json avec userID + Token
                    res.status(200).json({
                        userId: user._id,
                        // création du jeton avec jsonwebtoken, fonction sign demande :les données(user Id) à encoder, la clé et la durée
                        token: jwt.sign({ userId: user._id },
                            process.env.SECRET_KEY, {
                                expiresIn: "24h",
                            }
                        ),
                    });
                })
                //probleme de connexion satus 500 et message
                .catch((error) => res.status(500).json({ error }));
        })
        //probleme de connexion satus 500 et message
        .catch((error) => res.status(500).json({ error }));
};