const express = require("express");
// mergeParams erlaubt den Zugriff auf die User-Id in dem Router.
const router  = express.Router({mergeParams: true});

const { createMessage } = require("../handlers/messages");

// Der Prefix ist /api/users/:id/messages
// Wenn ein Post-Request an diese Url gesendet wird 
// createMessage ausgeführt
router.route("/").post(createMessage)

module.exports = router;