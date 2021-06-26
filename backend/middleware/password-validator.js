//npm install password-validator

// // Valider contre une chaîne de mot de passe
// console.log(schemaPassword.validate('validPASS123'));
// // => true
// console.log(schemaPassword.validate('invalidPASS'));
// // => false

// // Obtenez une liste complète des règles qui ont échoué
// console.log(schemaPassword.validate('joke', { list: true }));
// // => [ 'min', 'uppercase', 'digits' ]

var passwordValidator = require('password-validator');

// Créer un schéma
var schemaPassword = new passwordValidator();

// Ajouter des propriétés à elle
schemaPassword
    .is().min(8) // Longueur minimale 8
    .is().max(100) // Longueur maximale 100
    .has().uppercase() //Doit avoir des lettres majuscules
    .has().lowercase() // Doit avoir des lettres minuscules
    .has().digits(2) // Doit avoir au moins 2 chiffres
    .has().not().spaces() // Ne devrait pas avoir d'espaces
    .is().not().oneOf(['Passw0rd', 'Password123']); //Liste noire ces valeurs


module.exports = schemaPassword;