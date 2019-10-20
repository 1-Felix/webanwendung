const mongoose = require("mongoose");
// Fürs Passwort-Hashing
const bcrypt = require("bcrypt");

// Das User-Schema für die Datenbank
const userShema = new mongoose.Schema({
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

// Jedes erstellte Objekt von diesem Schema wird durch ein Model erstellt
// https://mongoosejs.com/docs/models.html
const User = mongoose.model("User", userSchema);
module.exports = User

