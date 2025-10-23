const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const filePath = path.join(__dirname, "patients.json");

function loadPatients() {
  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, JSON.stringify({}));
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function savePatients(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// Add patient
app.post("/add-patient", (req, res) => {
  const patient = req.body;
  const hhNumber = patient.hhNumber;

  if (!hhNumber) return res.status(400).json({ error: "hhNumber required" });

  const patients = loadPatients();

  if (patients[hhNumber]) {
    return res.status(409).json({ error: "Patient already exists" });
  }

  patients[hhNumber] = patient;
  savePatients(patients);
  res.json({ message: "Patient saved successfully" });
});

// Get all patients
app.get("/patients", (req, res) => {
  const patients = loadPatients();
  res.json(Object.values(patients));
});

// Get one patient
app.get("/patient/:hhNumber", (req, res) => {
  const patients = loadPatients();
  const patient = patients[req.params.hhNumber];
  if (!patient) return res.status(404).json({ error: "Not found" });
  res.json(patient);
});

app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});
