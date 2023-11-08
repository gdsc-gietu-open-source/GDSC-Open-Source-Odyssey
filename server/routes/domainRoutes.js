const express = require("express");
const router = express.Router();

const domainController = require("../controllers/domainController");


router.get("/", domainController.homepage);
router.get("/web", domainController.exploreWeb);
router.get("/data", domainController.exploreDataScience);
router.get("/android", domainController.exploreAndroid);
router.get("/cp", domainController.exploreCP);
router.get("/iot", domainController.exploreIOT);
router.get("/cloud", domainController.exploreCloud);
router.get("/cs", domainController.exploreCyberSecurity);
router.get("/aiml", domainController.exploreAIML);

module.exports = router;