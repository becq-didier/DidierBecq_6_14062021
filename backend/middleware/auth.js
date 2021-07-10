//npm install -- save jsonwebtoken
// package jsonwebtoken
const jwt = require("jsonwebtoken");
// middleware, fonction exportable
module.exports = (req, res, next) => {
    try {
        // récuperation du token avec split " "
        const token = req.headers.authorization.split(" ")[1];
        // décoder le token avec la methode verify
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        //recupère le userID
        console.log(req.headers);
        const userId = decodedToken.userId;
        //si un userId ET qu'ils est différent de userId décodé
        if (req.body.userId && req.body.userId !== userId) {
            // renvois une erreur
            throw "user ID non valable !";
        } else {
            //si ok passer à la requête suivante
            next();
        }
    } catch {
        //statue 401 +requete invalide
        res.status(401).json({
            error: new Error("Requête non authentifiée !"),
        });
    }
};