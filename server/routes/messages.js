const express = require("express");
// mergeParams erlaubt den Zugriff auf die User-Id in dem Router.
const router  = express.Router({mergeParams: true});

const { createMessage, getMessage, updateMessage, deleteMessage } = require("../handlers/messages");

// Der Prefix ist /api/users/:id/messages
// Wenn ein Post-Request an diese Url gesendet wird 
// createMessage ausgeführt
router.route("/").post(createMessage)

// Der Prefix ist /api/users/:id/messages/:message_id
router
    .route("/:message_id")
    .get(getMessage)
    .put(updateMessage)
    .delete(deleteMessage);

module.exports = router;