const express = require("express");
const router = express.Router();

// Define routes
router.get("/", (req, res) => {
  res.send(
    "Hello, running a Caddy server and Node.js Application in a Docker Container"
  );
});

module.exports = router;
