// Schema de données
// Importation de mongoose
const mongoose = require("mongoose");

// création du schema de données pour mongoose
const sauceSchema = mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    mainPepper: { type: String, required: true },
    imageUrl: { type: String, required: true },
    heat: { type: Number, required: true },
    likes: { type: Number, required: false },
    dislikes: { type: Number, required: false },
    usersLiked: { type: [String], required: false },
    usersDisliked: { type: [String], required: false },
});

// Sanitize contre les attaques XSS
const sanitizer = require("express-mongo-sanitize");
sauceSchema.plugin(sanitizer, ); //  champ optionnel `options` 

// export le modele avec "nom" et schema
module.exports = mongoose.model("Sauce", sauceSchema);