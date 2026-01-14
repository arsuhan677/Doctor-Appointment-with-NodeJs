const express = require("express");
const router = express.Router();
const { createUser, login } = require("../controllers/user.controller");

// Register
router.post("/register", createUser);

// Login
router.post("/login", login);

module.exports = router;
