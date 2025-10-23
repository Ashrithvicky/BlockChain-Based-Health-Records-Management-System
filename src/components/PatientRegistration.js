import React, { useState, useEffect } from "react";
import Web3 from "web3";
import PatientRegistration from "../build/contracts/PatientRegistration.json";
import DoctorContract from "../build/contracts/DoctorRegistration.json";
import { useNavigate } from "react-router-dom";
import "../CSS/PatientRegistration.css";
import NavBar from "./NavBar";

const PatientRegistry = () => {
  const [contract, setContract] = useState(null);
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [hhNumber, sethhNumber] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [gender, setGender] = useState("");
  const [bg, setBloodGroup] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [doctorHH, setDoctorHH] = useState(""); // Doctor's HH input
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [hhNumberError, sethhNumberError] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null); // Optional file upload

  const navigate = useNavigate();

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable();

        const networkId = await web3.eth.net.getId();
        const deployedNetwork = PatientRegistration.networks[networkId];

        const instance = new web3.eth.Contract(
          PatientRegistration.abi,
          deployedNetwork && deployedNetwork.address
        );

        setContract(instance);
      } else {
        alert("Please install MetaMask to use this app.");
      }
    };

    init();
  }, []);

  const handleRegister = async () => {
    if (
      !walletAddress ||
      !name ||
      !dateOfBirth ||
      !homeAddress ||
      !hhNumber ||
      !gender ||
      !bg ||
      !email ||
      !password ||
      !confirmPassword ||
      !doctorHH
    ) {
      alert("Please fill all required fields including Doctor HH Number.");
      return;
    }

    if (hhNumber.length !== 6) {
      sethhNumberError("Please enter a 6-digit HH Number.");
      return;
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    try {
      const web3 = new Web3(window.ethereum);
      const networkId = await web3.eth.net.getId();
      const accounts = await web3.eth.getAccounts();

      const patientInstance = new web3.eth.Contract(
        PatientRegistration.abi,
        PatientRegistration.networks[networkId].address
      );

      const isRegistered = await patientInstance.methods
        .isRegisteredPatient(hhNumber)
        .call();

      if (isRegistered) {
        alert("Patient already exists");
        return;
      }

      // Register patient
      await patientInstance.methods
        .registerPatient(
          walletAddress,
          name,
          dateOfBirth,
          gender,
          bg,
          homeAddress,
          email,
          hhNumber,
          password
        )
        .send({ from: accounts[0] });

      // Grant permission to doctor after registering
      const doctorInstance = new web3.eth.Contract(
        DoctorContract.abi,
        DoctorContract.networks[networkId].address
      );

      await doctorInstance.methods
        .grantPermission(hhNumber, doctorHH, name)
        .send({ from: accounts[0] });

      console.log("Uploaded file (optional):", uploadedFile);

      alert("Patient registered and permission granted successfully!");
      navigate("/");
    } catch (error) {
      console.error("Registration Error:", error);
      alert("An error occurred during registration.");
    }
  };

  const cancelOperation = () => navigate("/");

  return (
    <div>
      <NavBar />
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-black to-gray-800 font-mono">
        <div className="w-full max-w-4xl">
          <h2 className="text-3xl text-white mb-6 font-bold text-center">
            Patient Registration
          </h2>
          <form className="bg-gray-900 p-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Wallet Address" value={walletAddress} setValue={setWalletAddress} />
            <Input label="Full Name" value={name} setValue={setName} />
            <Input label="Date of Birth" type="date" value={dateOfBirth} setValue={setDateOfBirth} />
            <Select label="Gender" value={gender} setValue={setGender} options={["Male", "Female", "Other"]} />
            <Select label="Blood Group" value={bg} setValue={setBloodGroup} options={["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]} />
            <Input label="Home Address" value={homeAddress} setValue={setHomeAddress} />
            <Input label="HH Number" value={hhNumber} setValue={sethhNumber} error={hhNumberError} />
            <Input label="Email" type="email" value={email} setValue={setEmail} error={emailError} />
            <Input label="Password" type="password" value={password} setValue={setPassword} error={passwordError} />
            <Input label="Confirm Password" type="password" value={confirmPassword} setValue={setConfirmPassword} error={confirmPasswordError} />

            {/* Doctor HH Number + File Upload */}
            <div className="md:col-span-2 flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <Input label="Doctor HH Number" value={doctorHH} setValue={setDoctorHH} />
              </div>
              <div className="w-full">
                <label className="block font-bold text-white mb-2">Upload Report (Optional)</label>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={(e) => setUploadedFile(e.target.files[0])}
                  className="p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition"
                />
                <p className="text-sm text-gray-400 mt-1"></p>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-x-4 md:col-span-2 flex justify-center mt-6">
              <button
                type="button"
                onClick={handleRegister}
                className="px-5 py-2.5 bg-teal-500 text-white font-bold text-lg rounded-lg hover:bg-gray-600 transition"
              >
                Register
              </button>
              <button
                onClick={cancelOperation}
                className="px-5 py-2.5 bg-teal-500 text-white font-bold text-lg rounded-lg hover:bg-gray-600 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Reusable Input Component
const Input = ({ label, type = "text", value, setValue, error }) => (
  <div className="mb-4">
    <label className="block font-bold text-white">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={`mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200 ${error && "border-red-500"}`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

// Reusable Select Component
const Select = ({ label, value, setValue, options }) => (
  <div className="mb-4">
    <label className="block font-bold text-white">{label}</label>
    <select
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition"
    >
      <option value="">Select {label}</option>
      {options.map((opt, i) => (
        <option key={i} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

export default PatientRegistry;
