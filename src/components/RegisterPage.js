import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import DoctorImage from "../images/DoctorRegisterPage.PNG";
import PatientImage from "../images/PatientRegisterPage.PNG";
import DiagonosticsImage from "../images/DiagonosticsRegisterPage.png";



// eslint-disable-next-line no-lone-blocks
{ /*import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
// No need to import "./LandingPage.css" if you are using Tailwind CSS classes

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <div>
        <NavBar></NavBar>
    <div className="min-h-screen flex items-center justify-center bg-black font-mono">
      <div className="space-y-6 mt-[-50px] w-full max-w-xs mx-auto">
        <button className="bg-black text-white font-bold py-2 px-4 rounded w-full transition duration-300 ease-in-out transform hover:scale-110 hover:bg-white hover:text-black"      
        onClick={() => {
            navigate("/doctor_registration");
          }}
        >
          Doctor Registration
        </button>
        <button
          className="bg-black text-white font-bold py-2 px-4 rounded w-full transition duration-300 ease-in-out transform hover:scale-110 hover:bg-white hover:text-black" // Added transform and grey color for hover
          onClick={() => {
            navigate("/patient_registration");
          }}
        >
          Patient Registration
        </button>
        <button
          className="bg-black text-white font-bold py-2 px-4 rounded w-full transition duration-300 ease-in-out transform hover:scale-110 hover:bg-white hover:text-black"
          onClick={() => {
            navigate("/diagnostic_registration");
          }}
        >
          Diagnostics Registration
        </button>
      </div>
      </div>
      </div>
  );
};

export default RegisterPage; */}



const RegisterPage = () => {
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
              onClick={() => navigate("/doctor_registration")}>
              Doctor Registration
            </button>
          </div>

          {/* Patient Registration */}
          <div className="flex flex-col items-center space-y-4">
            <img src={PatientImage} alt="Patient Registration" className="w-48 h-48 object-cover rounded-md" />
            <button 
              className="bg-black text-white font-bold py-3 px-5 rounded w-48 transition duration-300 ease-in-out transform hover:scale-110 hover:bg-white hover:text-black"
              onClick={() => navigate("/patient_registration")}
            >
              Patient Registration
            </button>
          </div>

          {/* Diagnostics Registration */}
          <div className="flex flex-col items-center space-y-4">
            <img src={DiagonosticsImage} alt="Diagnostics Registration" className="w-48 h-48 object-cover rounded-md" />
            <button 
              className="bg-black text-white font-bold py-3 px-5 rounded w-48 transition duration-300 ease-in-out transform hover:scale-110 hover:bg-white hover:text-black"
              onClick={() => navigate("/diagnostic_registration")}
            >
              Diagnostics Registration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
