// Verantwortlich um sich mit einer Mongo 
// Datenbank zu verbinden und mongoose zu konfigurieren

// User Model
// https://mongoosejs.com/
const mongoose = require("mongoose");
// Um die Mongo-Queries im Terminal zu sehen
mongoose.set("debug", true);
// Ich verwende Promises anstatt callback-patterns (ES15)
// Um später Async-Funktionen (ES17) benutzen zu können,
// die Promises zurückgeben, muss Mongoose auch Promises zurückgeben.
// https://mongoosejs.com/docs/promises.html
mongoose.Promise = Promise;
// Mit einer Datenbank verbinden
mongoose.connect("mongodb://mongodb/webandwendung", {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: false
});

module.exports.User = require("./user");
module.exports.Message = require("./message");