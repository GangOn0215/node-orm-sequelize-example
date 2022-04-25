const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

/* Customer */

/* Create a new Customer */
router.post("/", userController.create);

// Retrieve all Customer 
router.get("/", userController.findAll);


module.exports = router;
