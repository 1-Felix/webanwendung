const express = require("express");
// Mit der Klasse express.Router lassen sich modular einbindbare Routenhandler erstellen.
const router = express.Router();
// importiert die signup-Funktion 
const { signup } = require("../handlers/auth");

// Jedes mal wenn ein POST-Request an /api/auth/signup geht
// wird die signup funktion ausgeführt, die einen neuen Nutzer (+Token) anlegt
router.post("/signup", signup);

module.exports = router;