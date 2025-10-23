//import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import DoctorImage from "../images/DoctorRegisterPage.PNG";
import PatientImage from "../images/PatientRegisterPage.PNG";
import DiagonosticsImage from "../images/DiagonosticsRegisterPage.png"


const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-black font-mono">
        <div className="flex space-x-16 mt-[-50px]">
          {/* Doctor Registration */}
          <div className="flex flex-col items-center space-y-4">
            <img src={DoctorImage} alt="Doctor Registration" className="w-48 h-48 object-cover rounded-md" />
            <button 
              className="bg-black text-white font-bold py-3 px-5 rounded w-48 transition duration-300 ease-in-out transform hover:scale-110 hover:bg-white hover:text-black"
              onClick={() => navigate("/doctor_login")}>
              Doctor Login
            </button>
          </div>

          {/* Patient Registration */}
          <div className="flex flex-col items-center space-y-4">
            <img src={PatientImage} alt="Patient Registration" className="w-48 h-48 object-cover rounded-md" />
            <button 
              className="bg-black text-white font-bold py-3 px-5 rounded w-48 transition duration-300 ease-in-out transform hover:scale-110 hover:bg-white hover:text-black"
              onClick={() => navigate("/patient_login")}
            >
              Patient Login
            </button>
          </div>

          {/* Diagnostics Registration */}
          <div className="flex flex-col items-center space-y-4">
            <img src={DiagonosticsImage} alt="Diagnostics Registration" className="w-48 h-48 object-cover rounded-md" />
            <button 
              className="bg-black text-white font-bold py-3 px-5 rounded w-48 transition duration-300 ease-in-out transform hover:scale-110 hover:bg-white hover:text-black"
              onClick={() => navigate("/diagnostic_login")}
            >
              Diagnostics Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
