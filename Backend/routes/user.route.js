// const express = require("express");
// // const User = require("../model/user.mode");
// const router = express.Router();
// const { getUser, createUser, updateUser, deleteUser } = require("../controllers/user.controller");



// router.get("/", getUser)
// router.post("/", createUser)
// router.put("/:id", updateUser)
// router.delete("/:id", deleteUser)


// module.exports = router;




const express = require("express");
const router = express.Router();

const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

// User CRUD routes
router.get("/", getUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;

