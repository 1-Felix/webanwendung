// Lädt alle Umgebungsvariablen
// Hilfreich um den Secret-Key (in der .env-Datei) 
// für den jsonwebtoken zu importieren (siehe auth.js)
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const messagesRoutes = require("./routes/messages");
const errorHandler = require("./handlers/error");
const { loginRequired, ensureCorrectUser } = require("./middleware/auth");

const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

// Wann immer ein Request an /api/auth/ eingeht
// verwende die "authRoutes"
app.use("/api/auth", authRoutes);
// :id ist ein Platzhalter für die User-Id
// "loginRequired" & "ensureCorrectUser" sind Middelware die prüfen 
// ob der User eingeloggt ist und ob er die Rechte hat um eine Nachricht zu senden
app.use("/api/users/:id/messages", loginRequired, ensureCorrectUser, messagesRoutes);

// Diese URL kann alle Nachrichten anzeigen, wenn der User eingeloggt ist.
app.get("/api/messages", loginRequired, async function(req, res, next){
    try {
        let messages = await db.Messsage.find()
        .sort({createdAt: "desc"})
        // Damit ich auch Profilbild + Nutzername dazu anzeigen kann.
        .populate("user", {
            username:true,
            profileImageUrl: true
        });
        return res.status(200).json(messages);
    } catch (err) {
        return next(err);
    }
});

// einfacher Error-Handler falls keine Seite gefunden wird (404)
app.use(function (req, res, next) {
    let err = new Error("Not Found")
    err.status = 404;
    next(err);
})

// Durch "next" wird jede Middleware dem errorHandler übergeben.
// https://expressjs.com/de/guide/error-handling.html
app.use(errorHandler);

app.listen(PORT, function () {
    console.log(`Server startet auf Port ${PORT}`)
})