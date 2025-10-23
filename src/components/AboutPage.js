import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/./AboutUs.css";
import NavBar from "./NavBar";
import AboutUsImage from "../images/KRMVHospitalAboutUs.png"; // Import the hospital image

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="root">
      <NavBar />
      <div className="hospital-image-container">
        <img
          src={AboutUsImage} // Use the imported hospital image
          alt="Hospital"
          className="hospital-image"
        />
      </div>

      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col text-custom-blue space-y-8 w-3/5 p-8 bg-black shadow-lg rounded-lg transition-transform duration-10000 ease-in-out transform hover:scale-105">
          <div className="space-y-4">
            <h1 className="text-lg text-bold font-mono text-center">About KRMV</h1> {/* Center align the "About Us" heading */}
            <div className="about-content text-left"> {/* Left align the content */} 

              <h2>Empowering Secure Healthcare with Blockchain</h2>
              <p>We are a team of healthcare professionals and technologists dedicated to redefining Electronic Health Records (EHR) management. Our mission is to deliver a secure, efficient, and intelligent solution for healthcare data integrity.</p>
              
              <h2>Our Solution</h2>
              <p>Leveraging the Ethereum blockchain, our platform ensures tamper-proof medical records, secure access control, and seamless data sharing among healthcare entities.</p> 

              <h2>For Healthcare Providers</h2>
              <p>Access assigned patient lists and medical history.</p> 
              <p>Document diagnoses, treatment plans, and medical notes.</p>  
              <p>Ensure streamlined, real-time collaboration.</p>

              <h2>For Patients</h2>  
              <p>Securely manage and access personal medical history.</p>
              <p>Upload and store medical reports with <strong>blockchain-backed authenticity.</strong></p>  
              <p>Grant or revoke access to healthcare providers.</p> 

              <h2>For Diagnostic Centers</h2>
              <p>Retrieve doctor-authorized patient data.</p>
              <p>Upload and store diagnostic reports securely.</p>
              <p>Ensure confidentiality and compliance with privacy regulations.</p>

              <h2>Data Security & Privacy</h2>
              <p>We uphold the highest standards of data security and patient autonomy. Our blockchain-powered access control ensures that only authorized entities can retrieve medical records, giving patients full control over their health data.</p>

              <h2>Connect With Us</h2> 
              <p>Phone: +123 456 7890 </p> 
              <p>Email: project@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

      {/* 
      <div className="flex justify-center">
        <button
          className="bg-white text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-110 hover:bg-black hover:text-white"
          onClick={() => {
            navigate("/");
          }}
        >
          Back to Home Page
        </button>
      </div> 
      */}
    </div>
  );
};

export default AboutUs;

