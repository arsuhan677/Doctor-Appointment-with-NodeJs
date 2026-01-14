const express = require("express");
const router = express.Router();
const { getAllDoctors, createDoctor, updateDoctor, deleteDoctor, getDateDoctor, getDoctor } = require("../controllers/doctor.controller");



router.get("/", getAllDoctors)
router.get("/:id", getDoctor)
router.get("/:id/:date", getDateDoctor)
router.post("/", createDoctor)
router.put("/:id", updateDoctor)
router.delete("/:id", deleteDoctor)


module.exports = router;