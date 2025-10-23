import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import lp_10 from "../images/LandingPageImage.png";
import lp_11 from "../images/heroImage.jpg";
import lp_12 from "../images/AboutUsImage.png";
import blockchainFlow from "../images/LandingPageChart2.png";

const images = [lp_10, lp_11, lp_12];

const ProjectDescription = () => {
  return (
    <div className="mt-12 p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700">
      <h2 className="text-2xl font-bold text-red-400 mb-4 text-center">
        About The Project
      </h2>
      <p className="text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
        This decentralized <span className="font-semibold text-white">Electronic Health Records (EHR)</span> system 
        uses <span className="text-red-300">Ethereum blockchain</span> and <span className="text-red-300">IPFS</span> to 
        create a secure, patient-controlled platform. Medical data is stored immutably via <span className="text-white">Smart Contracts</span>, 
        with zero centralized points of failure. Built with:
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-center">
        {["React.js", "Node.js", "Ethereum", "IPFS", "Truffle", "Ganache", "MetaMask", "Web3.js"].map((tech) => (
          <div key={tech} className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
            <span className="text-sm text-red-300">{tech}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: "Patient Control", desc: "Ownership via crypto wallets" },
          { title: "HIPAA-Compliant", desc: "Zero-knowledge encryption" },
          { title: "24/7 Global Access", desc: "Decentralized network" }
        ].map((item, index) => (
          <div key={index} className="p-4 bg-gray-800 rounded-lg border border-gray-700">
            <h3 className="text-red-400 font-bold">{item.title}</h3>
            <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

function LandingPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              Decentralized EHR on Blockchain
            </h1>
            <p className="text-lg text-gray-300">
              A tamper-proof healthcare records system powered by  
              <span className="font-semibold text-white"> Ethereum Smart Contracts </span> 
              and <span className="font-semibold text-white"> IPFS </span>
              for secure, immutable data storage.
            </p>
            
            <div className="p-4 bg-gray-900 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold text-red-400 mb-3">Core Features</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-red-300 font-medium mb-1">Blockchain Layer</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Smart Contracts (Truffle)</li>
                    <li>• Ganache Testnet</li>
                    <li>• MetaMask Auth</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-red-300 font-medium mb-1">Data Security</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• IPFS Storage</li>
                    <li>• Zero-Knowledge Proofs</li>
                    <li>• Encrypted EHR Data</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-900 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold text-red-400 mb-3">Tech Stack</h3>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 bg-gray-800 rounded">
                  <div className="text-red-400 font-bold">Frontend</div>
                  <div className="text-xs text-gray-300">React.js</div>
                </div>
                <div className="p-2 bg-gray-800 rounded">
                  <div className="text-red-400 font-bold">Backend</div>
                  <div className="text-xs text-gray-300">Node.js</div>
                </div>
                <div className="p-2 bg-gray-800 rounded">
                  <div className="text-red-400 font-bold">Database</div>
                  <div className="text-xs text-gray-300">IPFS + Ethereum</div>
                </div>
              </div>
            </div>

            {/* Blockchain Metrics */}
            <div className="p-4 bg-gray-900 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold text-red-400 mb-3">Why Blockchain?</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-xs text-gray-300">Data Integrity</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-xs text-gray-300">Accessibility</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">0</div>
                  <div className="text-xs text-gray-300">Data Breaches</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visuals */}
          <div className="space-y-6">
            {/* Image Slider */}
            <div className="relative h-[450px] rounded-xl overflow-hidden border-2 border-gray-800">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex ? "bg-red-600" : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Blockchain Flow Diagram */}
            <div className="p-4 bg-gray-900 rounded-xl border-2 border-gray-800">
              <h3 className="text-xl font-semibold text-red-400 mb-3 text-center">
                Blockchain Architecture Flow
              </h3>
              <img 
                src={blockchainFlow} 
                alt="Blockchain EHR Flow: React → Node.js → Smart Contracts → IPFS"
                className="w-full h-auto rounded-lg border border-gray-700"
              />
              <div className="mt-3 text-xs text-gray-400 text-center">
                Powered by Ethereum | IPFS | MetaMask | Truffle
              </div>
            </div>
          </div>
        </div>

        {/* Project Description Section - Added below the main grid */}
        <ProjectDescription />
      </div>
    </div>
  );
}

export default LandingPage;