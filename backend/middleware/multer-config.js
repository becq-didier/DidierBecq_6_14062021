//npm install --save multer
//middleware multer pour gestion des fichiers
const multer = require("multer");
// Dictionnair de correspondances des extentions
const MIME_TYPES = {
    "image/jpg": "jpg",
    "image/jpeg": "jpg",
    "image/png": "png",
};
// création constante storage  comme configuration à multer pour indiquer à multer où enregistrer les fichiers entrants :
// la fonction destination indique à multer le dossier d'enregistrement des images ;
// la fonction filename indique à multer d'utiliser le nom d'origine, de remplacer les espaces par des underscores
// et d'ajouter un timestamp Date.now() comme nom de fichier.
// Elle utilise ensuite la constante dictionnaire de type MIME pour résoudre l'extension de fichier appropriée ;
// storage = objet de configuration pour multer
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "images");
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(" ").join("_"); //remplace les " " par "_"
        const extension = MIME_TYPES[file.mimetype]; // prend l'extention correspondant
        callback(null, name + Date.now() + "." + extension); //'date.now()' rend le nom du fichier unique
    },
});
//exportation du module methode multer avec l'objet storage ainsi que la methode single pour un fichier unique d'image
module.exports = multer({ storage: storage }).single("image");