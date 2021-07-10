// // This...
// app.use(helmet());

// // ...is equivalent to this:
// app.use(helmet.contentSecurityPolicy());
// app.use(helmet.dnsPrefetchControl());
// app.use(helmet.expectCt());
// app.use(helmet.frameguard());
// app.use(helmet.hidePoweredBy());
// app.use(helmet.hsts());
// app.use(helmet.ieNoOpen());
// app.use(helmet.noSniff());
// app.use(helmet.permittedCrossDomainPolicies());
// app.use(helmet.referrerPolicy());
// app.use(helmet.xssFilter());
// const Helmet = require("helmet");

const Helmet = require("helmet");

module.exports = Helmet({
    referrerPolicy: { policy: "no-referrer" },
});

// Helmet n’est actuellement qu’une collection de neuf fonctions middleware plus petites qui définissent des en-têtes HTTP liés à la sécurité :

// csp définit l’en-tête Content-Security-Policy pour la protection contre les attaques de type cross-site scripting et autres injections intersites.
// hidePoweredBy supprime l’en-tête X-Powered-By.
// hsts définit l’en-tête Strict-Transport-Security qui impose des connexions (HTTP sur SSL/TLS) sécurisées au serveur.
// ieNoOpen définit X-Download-Options pour IE8+.
// noCache définit des en-têtes Cache-Control et Pragma pour désactiver la mise en cache côté client.
// noSniff définit X-Content-Type-Options pour protéger les navigateurs du reniflage du code MIME d’une réponse à partir du type de contenu déclaré.
// frameguard définit l’en-tête X-Frame-Options pour fournir une protection clickjacking.
// xssFilter définit X-XSS-Protection afin d’activer le filtre de script intersites (XSS) dans les navigateurs Web les plus récents.