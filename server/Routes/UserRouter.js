const express = require("express");
const router = express.Router();

// Ensure karein ke UserControllers.js file Controllers folder me majood ho
const {
  registerUser,
  loginUser,
} = require("../Controllers/UserControllers");

// Test route
router.get("/", (req, res) => {
  res.send("User Route Working!");
});

module.exports = router;