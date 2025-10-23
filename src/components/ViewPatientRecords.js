import React from "react";
import NavBar_Logout from "./NavBar_Logout";
import ligamentImage from "../images/lIGAMENT.png"; // Make sure the filename and path are correct

function ViewPatientRecords() {
  return (
    <div>
      <NavBar_Logout />
      <div className="bg-gradient-to-b from-black to-gray-800 text-white p-10 font-mono min-h-screen">
        <h2 className="text-2xl text-center font-bold mb-6">Record Viewer</h2>

        {/* Records Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-600">
            <thead>
              <tr className="bg-gray-700">
                <th className="px-4 py-2 border-r border-gray-600">S.NO</th>
                <th className="px-4 py-2 border-r border-gray-600">Patient Name</th>
                <th className="px-4 py-2 border-r border-gray-600">Department</th>
                <th className="px-4 py-2 border-r border-gray-600">Report Type</th>
                <th className="px-4 py-2">Files</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-800 hover:bg-gray-700">
                <td className="px-4 py-2 border-r border-gray-600">1</td>
                <td className="px-4 py-2 border-r border-gray-600">VIGNESHWAR S I</td>
                <td className="px-4 py-2 border-r border-gray-600">ORTHO</td>
                <td className="px-4 py-2 border-r border-gray-600">LEFT KNEE LIGAMENT MRI</td>
                <td className="px-4 py-2">
                  <a href={ligamentImage} target="_blank" rel="noopener noreferrer">
                    <img
                      src={ligamentImage}
                      alt="Ligament MRI"
                      className="w-20 h-20 object-cover rounded hover:scale-105 transition-transform"
                    />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewPatientRecords;
