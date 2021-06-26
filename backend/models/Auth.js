// schema de données
// Import de mongoose
const mongoose = require("mongoose");

// mongoose-unique-validator est un plugin qui ajoute une validation de pré-enregistrement
// pour les champs uniques dans un schéma Mongoose.
// Cela rend la gestion des erreurs beaucoup plus facile,
// car vous obtiendrez une erreur de validation Mongoose lorsque vous tenterez de violer une contrainte unique ,
// plutôt qu'une erreur E11000 de MongoDB.
const uniqueValidator = require("mongoose-unique-validator");

// Créer schema de données pour mongoose
const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
// Sanitize contre les attaques XSS
const sanitizer = require("express-mongo-sanitize");
userSchema.plugin(sanitizer, ); //  champ optionnel `options`  

// Appliquez le pakage uniquevalidator au schéma pour email unique
userSchema.plugin(uniqueValidator);

// Export le modele avec "nom" et schema
module.exports = mongoose.model("User", userSchema);