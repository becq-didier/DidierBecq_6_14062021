# OPENCLASSROOMS Projet 6 - Construire une API sécurisée pour l'application So Pekocko


Pour ce projet 6 d'Openclassrooms vous devez développer une application d’évaluation de ses sauces piquantes, appelée “Piquante”. le MVP du projet sera une application web permettant aux utilisateurs d’ajouter leurs sauces préférées et de liker ou disliker les sauces ajoutées par les autres utilisateurs.


## Contexte du projet

    L’entreprise souhaite désormais développer une application d’évaluation de ses sauces piquantes, appelée “Piquante”. 

    Même si l’application deviendra peut-être un magasin en ligne dans un futur proche, Sophie, la product owner de So Pekocko, a décidé que le MVP du projet sera une application web permettant aux utilisateurs d’ajouter leurs sauces préférées et de liker ou disliker les sauces ajoutées par les autres utilisateurs. 

    Lors de votre premier jour, vous discutez avec elle sur la messagerie instantanée interne de l’entreprise. 

## Objectifs et Compétences évaluées

le frontend étant déjà fourni il est demandé de réaliser la partie backend de l'application


## Documents fournies sur l'API

* [Guidelines](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P6/Guidelines+API.pdf)
* [Note de cadrage](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P6/Guidelines+API.pdf)
* [Lien vers le repo GitHub](https://github.com/OpenClassrooms-Student-Center/dwj-projet6)

## Installation

### Création de la base de données sur MongoDB

* Accédez au site Web de MongoDB et inscrivez-vous pour obtenir un compte gratuit. Une fois que vous avez accès à votre tableau de bord, créez un cluster puis configurez-le avec l'option AWS et uniquement les options gratuites afin de pouvoir développer gratuitement.
* Pendant le démarrage de votre cluster, vous pouvez accéder à l'onglet Database Access. D'abord, vous devrez ajouter un utilisateur disposant de la capacité de lecture et d'écriture dans n'importe quelle base de données. Choisissez le nom d'utilisateur ainsi que le mot de passe de votre choix et notez-les, car vous en aurez besoin pour connecter votre API à votre cluster.
* Vous devrez également accéder à l'onglet Network Access, cliquer sur Add IP Adress et autoriser l'accès depuis n'importe où (Add access from Anywhere).

### Utilisation de variable d'evironnement avec le package dotenv

* Créer un fichier .env à la racine du projet
* Placer les variables suivantes avec les valeurs adéquates : 
    * SECRET_KEY=*Votre_Key_Secret*
    * MONGODB_CONNECT=*mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]*

### Démarrer le FrontEnd 

* Ouvrir le terminal sur l'emplacement du dossier
* exécuter npm install pour installer les dépendances.
* Exécuter npm install node-sass pour installer sass.
* Le projet est réaliser avec Angular CLI
Pour démarrer le serveur exécuter l'instruction 'ng serve' dans le terminal.
Le liens de l'application est : http://localhost:4200.

### Démarrer le Backend

* Ouvrir le terminal sur l'emplacement du dossier
* installer le package nodemon : npm install - nodemon
* Lancez le serveur : nodemon server

### instruction

* Une fois l'installation exercuté rendez-vous dans votre navigateur à cette Url : http://localhost:4200
pour lancer l'application So Pekocko
* Entrez votre email et votre mot de passe avec au minimum 8 caractères dont une majuscule, une minuscule, deux chiffres et sans espaces. Les mots de passes suivant sont bannis : 'Passw0rd', 'Password123'

## Dépendances utilisées pour le Backend

    "dependencies": {
        "bcrypt": "^5.0.1",
        "body-parser": "^1.19.0",
        "dotenv": "^10.0.0",
        "express": "^4.17.1",
        "express-rate-limit": "^5.2.6",
        "fs": "0.0.1-security",
        "helmet": "^4.6.0",
        "jsonwebtoken": "^8.5.1",
        "mongoose": "^5.12.12",
        "express-mongo-sanitize": "^2.1.0",
        "mongoose-unique-validator": "^2.0.3",
        "multer": "^1.4.2",
        "password-validator": "^5.1.1"
    },
    "devDependencies": {
        "nodemon": "^2.0.7"
    }