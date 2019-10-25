require("dotenv").config();
const jwt = require("jsonwebtoken");

// Sicherstellen das der User eingeloggt ist (Authentification)
// Diese Funktion wird zwischen dem Request und meinen Handlern eingesetzt
exports.loginRequired = function (req, res, next) {
    // Try/Catch, falls req.headers.authorization nicht existiert
    try {
        // Der Token befindet sich im Request-Header 
        // Man bekommt bsw. "Bearer fdfueiahfiw" zurück. 
        // "fdfueiahfiw" ist der Token den ich brauche, deswegen split(" ").[1] 
        // https://mherman.org/blog/token-based-authentication-with-node/#jwt-setup
        const token = req.headers.authorization.split(" ")[1];
        console.log("header", token)
        // Der Payload des Tokens, beinhaltet die Infos über ein User
        // https://jwt.io/introduction/
        // jwt.verify() -> enoded den Payload -> Falls einer existiert (if(payload)) dann mach weiter
        jwt.verify(token, process.env.SECRET_KEY, function (err, payload) {
            // Wenn hier true zurückkommt, ist der User eingeloggt
            if (payload) {
                return next();
            } else {
                // Wenn kein Payload gefunden wurde / Der User nicht eingeloggt ist,
                // Liefere 401 (unauthorized) zurück
                return next({
                    status: 401,
                    message: "Bitte melde dich zuerst an!"
                });
            }
        })
    } catch (err) {
        return next({
            status: 401,
            message: "Bitte melde dich zuerst an"
        })
    }
};

// Sicherstellen, dass es der korrekte User ist (Authorisation)
exports.ensureCorrectUser = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(toke, process.env.SECRET_KEY, function (err, payload) {
            // Die ID des Users, ist sowohl im Token-Payload als ich in der Request-URL
            // Wenn diese übereinstimmten, ist der User authorisiert.
            if (payload && payload.id === req.params.id) {
                return next();
            } else {
                return next({
                    status: 401,
                    message: "Nicht authorisiert"
                })
            }
        })
    } catch (err) {
        return next({status: 401, message: "Nicht authorisiert"})
    }

};