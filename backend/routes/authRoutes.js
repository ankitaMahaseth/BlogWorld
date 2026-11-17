const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getAllUsers,
} = require("../controllers/authController");

router.get("/", getAllUsers);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
