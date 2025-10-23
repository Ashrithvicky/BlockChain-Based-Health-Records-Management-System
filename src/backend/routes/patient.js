const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/sync", async (req, res) => {
  const patient = req.body;
  try {
    const [record, created] = await db.patients.upsert(patient);
    res.json({ message: "Patient saved", record });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "DB sync failed" });
  }
});

router.get("/", async (req, res) => {
  const data = await db.patients.findAll();
  res.json(data);
});

module.exports = router;
