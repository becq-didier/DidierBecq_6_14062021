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
### - FrontEnd

* Ouvrir le terminal sur l'emplacement du dossier
* exécuter npm install pour installer les dépendances.
* Exécuter npm install node-sass pour installer sass.
* Le projet est réaliser avec Angular CLI
Pour démarrer le serveur exécuter l'instruction 'ng serve' dans le terminal.
Le liens de l'application est : http://localhost:4200.

### - Backend
* Ouvrir le terminal sur l'emplacement du dossier
* installer le pacge nodemon : npm install - nodemon
* Lancez le serveur : nodemon server

### - .env example


### - instruction
* Une fois les instruction exercuté rendz-vous dans votre navigateur à cette Url : http://localhost:4200
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