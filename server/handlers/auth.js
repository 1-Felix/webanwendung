// Diese Handlers sind funktionen die ich später 
// exportiere und in den verschiedenen Routes verwenden kann

// Sucht dach dem index.js in models
const db = require("../models");
// Wird benutzt um Users als eingloggt zu markieren
// Ein Token soll bei Login und Registrierung generiert werden
const jwt = require("jsonwebtoken");

exports.signin = function () {};

exports.signup = async function (req, res, next) {
    try {
        // Ein neues User-Objekt wird erstellt
        // req.body kommt durch einen ajax-request rein.
        let user = await db.User.create(req.body);
        let {
            id,
            username,
            profileImageUrl
        } = user;
        // Erstellung eines Tokens für die Authentifizierung
        // Das erste Argument von sign() ist der Payload, also
        // die Daten zu einem User. Hier überge ich id, username, profileImageUrl
        // Das zweite Argument ist der Secret-Key der in .env abgespeichert ist und durch das module dotenv verfügbar ist.
        // Somit ist kann der Token nicht einfach decrypted werden, weil nur der Server den Secret-Key hat.
        let token = jwt.sign({
                id,
                username,
                profileImageUrl
            },
            process.env.SECRET_KEY
        );
        // Als Repsonse wird ein JSON mit den User-Daten zurückgeliefert
        return res.status(200).json({
            id,
            username,
            profileImageUrl,
            token
        });
    } catch (err) {
        // Wenn Validierung fehlschlägt
        // Error Code ist von MongoDb Docs : https://docs.mongodb.com/manual/core/index-unique/#unique-index-and-missing-field
        if (err.code === 11000) {
            err.message = "Sorry, der Benutzername und/oder email ist nicht mehr verfügbar"
        }
        // Geht wieder an Error-Handler
        return next({
            status: 400,
            message: err.message
        });
    }
};