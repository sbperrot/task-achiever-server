"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const OpenIDStrategy = require('passport-openid').Strategy;
// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the OpenID identifier is serialized and
//   deserialized.
passport_1.default.serializeUser(function (user, done) {
    done(null, user.identifier);
});
passport_1.default.deserializeUser(function (identifier, done) {
    done(null, { identifier: identifier });
});
// Use the OpenIDStrategy within Passport.
//   Strategies in passport require a `validate` function, which accept
//   credentials (in this case, an OpenID identifier), and invoke a callback
//   with a user object.
passport_1.default.use(new OpenIDStrategy({
    returnURL: 'http://localhost:3000/auth/openid/return',
    realm: 'http://localhost:3000/'
}, (identifier, done) => {
    // asynchronous verification, for effect...
    process.nextTick(function () {
        // To keep the example simple, the user's OpenID identifier is returned to
        // represent the logged-in user.  In a typical application, you would want
        // to associate the OpenID identifier with a user record in your database,
        // and return that user instead.
        return done(null, { identifier: identifier });
    });
}));
//# sourceMappingURL=passport-oidc.js.map