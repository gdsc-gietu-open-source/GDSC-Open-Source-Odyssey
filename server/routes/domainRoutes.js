const express = require("express");
const router = express.Router();

const domainController = require("../controllers/domainController");


router.get("/", domainController.homepage);


module.exports = router;