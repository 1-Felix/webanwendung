// Message Model
const mongoose = require("mongoose");
// User-Model wird importiert, damit jede Nachricht eine 
// Referenz auf den User hat, der die Nachricht erstellt.a
const User = require("./user");

// Message Schema
const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        maxLength: 160
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        // Hier wird zu dem User-Model referenziert
        ref: "User"
    }
});

// Wieder ein pre-Hook -> Bevor die Nachricht gelöscht wird, 
// muss die Nachricht-Refernz die der User besitzt auch gelöscht werden
messageSchema.pre("remove", async function(next){
    try {
        // Schritt 1: Den User finden
        // "this" refreziert auf das spezifische Document
        let user = await User.findById(this.user)
        // Die Nachricht wird von der message-Liste gelöscht
        user.messages.remove(this.id);
        // Den User wieder abspeichern
        await user.save();
        return next();
    } catch (err) {
        return next(err);
    }
})

// Message Model
const Message = mongoose.model("Message", messageSchema);
module.exports = Message;