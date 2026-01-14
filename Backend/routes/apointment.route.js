const express = require("express");
const { createApointment, getApointments, getApointment } = require("../controllers/apointment.controller");
const router = express.Router();



router.get("/", getApointments)
router.get("/:id", getApointment)
router.post("/", createApointment)
// router.delete("/:id", deleteDoctor)


module.exports = router;