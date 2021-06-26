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