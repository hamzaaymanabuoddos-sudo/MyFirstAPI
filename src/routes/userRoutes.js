/*const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");

const authenticate = require("../middlewares/authMiddleware");

router.get("/profile", authenticate, userController.getProfile);

router.get("/", userController.getUsers);

router.get("/:id", userController.getUser);

router.post("/", userController.createUser);

router.delete("/:id", userController.deleteUser);


module.exports = router;*/
const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");

const authenticate = require("../middlewares/authMiddleware");

const authorizeAdmin = require("../middlewares/authorizeAdmin");

router.get("/profile", authenticate, userController.getProfile);

router.get("/", userController.getUsers);

router.get("/:id", userController.getUser);

router.post("/", userController.createUser);

router.delete("/:id", authenticate, authorizeAdmin, userController.deleteUser);

module.exports = router;