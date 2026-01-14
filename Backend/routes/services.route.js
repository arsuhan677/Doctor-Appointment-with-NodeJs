const express = require("express");
const router = express.Router();
const { getServices, createServices } = require("../controllers/services.controller");



router.get("/", getServices)
router.post("/", createServices)
// router.get("/:id/:date", getDateDoctor)
// router.post("/", createDoctor)
// router.put("/:id", updateDoctor)
// router.delete("/:id", deleteDoctor)


module.exports = router;