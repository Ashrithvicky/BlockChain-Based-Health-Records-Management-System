import React from "react";
import NavBar_Logout from "./NavBar_Logout";

const dummyPatients = [
  {
    hospitalNumber: "123456",
    name: "Vigneshwar S I",
    bloodGroup: "B+",
    gender: "Male",
    homeaddress: "Ariyur, Vellore",
  },
];

function ViewPatientList() {
  return (
    <div>
      <NavBar_Logout />
      <div className="bg-gradient-to-b from-black to-gray-800 text-white p-10 font-mono min-h-screen">
        <h2 className="text-3xl font-semibold text-center mb-6">Patient List</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-900 border border-gray-700 rounded-lg">
            <thead>
              <tr className="bg-gray-700 text-white text-left">
                <th className="py-3 px-4 border-b border-gray-600">Patient Hospital Number</th>
                <th className="py-3 px-4 border-b border-gray-600">Patient Name</th>
                <th className="py-3 px-4 border-b border-gray-600">Blood Group</th>
                <th className="py-3 px-4 border-b border-gray-600">Gender</th>
                <th className="py-3 px-4 border-b border-gray-600">Home Address</th>
              </tr>
            </thead>
            <tbody>
              {dummyPatients.map((patient, index) => (
                <tr key={index} className="hover:bg-gray-800">
                  <td className="py-3 px-4 border-b border-gray-700">{patient.hospitalNumber}</td>
                  <td className="py-3 px-4 border-b border-gray-700">{patient.name}</td>
                  <td className="py-3 px-4 border-b border-gray-700">{patient.bloodGroup}</td>
                  <td className="py-3 px-4 border-b border-gray-700">{patient.gender}</td>
                  <td className="py-3 px-4 border-b border-gray-700">{patient.homeaddress}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewPatientList;