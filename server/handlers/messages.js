const db = require("../models");


exports.createMessage = async function(req, res, next) {
    try {
        // Eine Nachricht erstellen
        let message = await db.Message.create({
            // Beide Parameter sind im Schema vorgegeben
            // Der Text aus dem Request-Body
            text: req.body.text,
            // Die Referenz zu dem User, hole ich aus der Request-URL
            // Beispiel api/users/:id/messages -> id wird in dem Message Objekt gespeichert
            user:req.params.id
        });
        // Den User finden, um ihm die Messae-Referenz zu geben
        let foundUser = await db.User.findById(req.params.id);
        foundUser.messages.push(message.id);
        // User abspeichern
        await foundUser.save();
        // Wenn eine Nachricht erfolgreich erstellt wurde, wird zusätzlich zu den Daten der Nachricht, die Daten des Nutzers zurückgegeben.
        // Somit kann direkt beim erstellen einer Nachricht, der dazugehörige User auf meiner Website angezeigt werden.
        let foundMessage = await db.Message.findById(message._id).populate("user", {
            username: true,
            profileImageUrl: true
        })
        // Die Nachricht mitsamt dem dazugehörigen Nutzer werden als Json in der Response zurückgeliefert.
        return res.status(200).json(foundMessage);
    } catch (err) {
        next(err);
    }
};

exports.getMessage = async function(req, res, next) {
    
};

exports.deleteMessage = async function(req, res, next) {
    
};
