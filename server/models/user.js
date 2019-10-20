const mongoose = require("mongoose");
// Fürs Passwort-Hashing
const bcrypt = require("bcrypt");

// Das User-Schema für die Datenbank
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        // Damit man sich mit einer Email nur einmal einloggen kann
        unique: true
    },
    username:  {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profileImageUrl: {
        type: String
    }
});

// "Pre save hook" Before ein Document (= Instanz von einem Model => User) in mongoose abgespeichert wird, 
// wird das Passwort von User noch gehasht (mit bcrypt), damit das Passwort nicht im Plain-Text auf der Datenbank liegt.
// Ich verwende eine Async-Function weil bcrypt.hash asynchron ist.
// Quelle: https://www.thepolyglotdeveloper.com/2019/02/hash-password-data-mongodb-mongoose-bcrypt/
userSchema.pre("save", async function(next){
    try {
        if(!this.isModified("password")){
            return next();
        }
        // bcrypt arbeitet auch mit Salt -> "10" ist der "Salt Work Factor"
        // https://stackoverflow.com/questions/4443476/optimal-bcrypt-work-factor
        let hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        return next();
    } catch(err){
        // falls was schiefgeht, geht's an ErrorHandler
        return next(err);
    }
})

// Diese Methode ist nachher für den Login nützlich damit man 
// schauen kann ob das eingegebene Passwort das richtige ist.
userSchema.method.comparePassword = async function(candidatePassword, next) {
    try {
        // Vergleich von Übvergebenen Passwort und Passwort des Users in der Datenbank
        // bcrypt.compare gibt true/false zurück
        let isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch(err) {
        return next(err);
    }
}


// Jedes erstellte Objekt von diesem Schema wird durch ein Model erstellt
// https://mongoosejs.com/docs/models.html
const User = mongoose.model("User", userSchema);
module.exports = User;

