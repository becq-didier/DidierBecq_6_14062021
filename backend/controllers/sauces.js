// import controlleur sauces.js

const Sauce = require("../models/Sauces");
// fs pour avoir accé au opération sur les fichiers
const fs = require("fs-extra");

//Middleware création de sauce
exports.createSauce = (req, res, next) => {
    //récupère l'objet sauce dans la requête et parse la chaine de caractère 
    const sauceObject = JSON.parse(req.body.sauce);
    // suppression du champs _Id inutile
    delete sauceObject._id;
    //création de l'instance du model sauce
    const sauce = new Sauce({
        // raccourci pour copier les champs dans le corp de la requête
        ...sauceObject,
        //[protocol'http(s)']:[host(localhost:3000)]/images/[nom du fichier]
        imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
        likes: 0,
        dislikes: 0,
    });

    sauce
    //Methode save pour enregistrer l'object dans la base
        .save()
        //retour du code 201 pour dire tout ce passe bien 
        .then(() => res.status(201).json({ message: "Sauce enregistré !" }))
        //retour du code erreur 400 + Message d'erreur en json
        .catch((error) => res.status(400).json({ error }));
};
//Middleware recherche un sauce selon Id
exports.getOneSauce = (req, res, next) => {
    //model Sauce avec methode findOne avec paramètre Id
    Sauce.findOne({
            _id: req.params.id,
        })
        //retour du code 200 pour dire tout ce passe bien et la sauce de la base de données
        .then((sauce) => {
            res.status(200).json(sauce);
        })
        //retour du code erreur 400 + Message d'erreur en json
        .catch((error) => {
            res.status(404).json({
                error: error,
            });
        });

};
//Middleware modification de sauce
exports.modifySauce = (req, res, next) => {
    //avec ou sans modification de l'image grace à req.file
    const sauceObject = req.file ? { //fichier existe
        ...JSON.parse(req.body.sauce),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
    } : {...req.body }; // fichier image n'existe pas
    //model Sauce avec methode updateOne avec paramètre Id
    Sauce.updateOne({ _id: req.params.id }, {...sauceObject, _id: req.params.id })
        //retour du code 200 pour dire tout ce passe bien et la sauce est enregistré dans la base de données
        .then(() => res.status(200).json({ message: "Sauce modifié !" }))
        //retour du code erreur 400 + Message d'erreur en json
        .catch((error) => res.status(400).json({ error }));
};
//Middleware suppression de sauce
exports.deleteSauce = (req, res, next) => {
    //trouve la sauce
    Sauce.findOne({ _id: req.params.id })
        .then((sauce) => {
            //extraire le nom de l'image avec split '/images/' 
            const filename = sauce.imageUrl.split("/images/")[1];
            //supprime un fichier (chemin + callback)

            fs.unlink(`images/${filename}`, () => {
                //model Sauce avec methode deleteOne avec paramètre Id
                Sauce.deleteOne({ _id: req.params.id })
                    //retour du code 200 pour dire tout ce passe bien et la sauce est supprimé dans la base de données
                    .then(() => res.status(200).json({ message: "Sauce supprimé !" }))
                    //retour du code erreur 400 + Message d'erreur en json
                    .catch((error) => res.status(400).json({ error }));
            });
        })
        .catch((error) => res.status(500).json({ error }));
};
//middleware recherche des sauces
exports.getAllSauces = (req, res, next) => {
    //methode find pour récupérer les sauces
    Sauce.find()
        .then((sauces) => {
            //renvoie un staus 200 + le tableau des sauces
            res.status(200).json(sauces);
        })
        .catch((error) => {
            //renvoie un staus 400 + l'erreur
            res.status(400).json({
                error: error,
            });
        });
};

exports.likeDislike = (req, res, next) => {
    //parse de la requêt en json
    const sauceObject = JSON.parse(req.body.like);

    switch (req.body.like) {
        case 1: // si like
            if (req.body.like === 1) {

                Sauce.updateOne({ _id: req.params.id }, {
                        $inc: { likes: 1 },
                        $push: { usersLiked: req.body.userId },
                    })
                    .then(() => res.status(200).json({ message: "Like posté !" }))
                    .catch((error) => res.status(400).json({ error }));
            }
            break;
        case -1: //si dislike
            if (req.body.like === -1) {

                Sauce.updateOne({ _id: req.params.id }, {
                        $inc: { dislikes: 1 },
                        $push: { usersDisliked: req.body.userId },
                    })
                    .then(() => res.status(200).json({ message: "Dislike posté !" }))
                    .catch((error) => res.status(400).json({ error }));
            }
            break;
        case 0: // si suppression de like ou dislike
            if (req.body.like === 0) {
                //recherche sauce avec id
                Sauce.findOne({ _id: req.params.id })

                .then((UserLikeDislike) => {
                        //si l'id user figure dans le tableau des likes
                        if (UserLikeDislike.usersLiked.includes(req.body.userId)) {
                            Sauce.updateOne({ _id: req.params.id }, {
                                    $inc: { likes: -1 },
                                    $pull: { usersLiked: req.body.userId },
                                })
                                .then(() =>
                                    res.status(200).json({ message: "Like Supprimé !" })
                                )
                                .catch((error) => res.status(400).json({ error }));
                        }
                        //si l'id user figure dans le tableau des dislikes
                        if (UserLikeDislike.usersDisliked.includes(req.body.userId)) {
                            Sauce.updateOne({ _id: req.params.id }, {
                                    $inc: { dislikes: -1 },
                                    $pull: { usersDisliked: req.body.userId },
                                })
                                .then(() =>
                                    res.status(200).json({ message: "DisLike supprimé !" })
                                )
                                .catch((error) => res.status(400).json({ error }));
                        }
                    })
                    .catch((error) => res.status(500).json({ error }));
            }

            break;
    }
};