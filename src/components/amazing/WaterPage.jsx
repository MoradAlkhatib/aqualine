import React from "react";

export default function WaterPage() {
  const parameters = [
    { label: "Salmonella", unit: "CFU/100mL" },
    { label: "Shigella", unit: "CFU/100mL" },
    { label: "Pseudomonas aeruginosa", unit: "CFU/100mL" },
    { label: "Total Plate Count (TPC)", unit: "CFU/mL" },
    { label: "Viruses", unit: "units/L" },
    { label: "Protozoa", unit: "units/L" },
  ];

  const traceParameters = [
    { label: "Free Chlorine (OCl⁻)", unit: "mg/L" },
    { label: "Combined Chlorine (NH₂Cl)", unit: "mg/L" },
    { label: "Radium-226 (Ra²²⁶)", unit: "pCi/L" },
    { label: "Radium-228 (Ra²²⁸)", unit: "pCi/L" },
    { label: "Uranium (UO₂²⁺)", unit: "µg/L" },
    { label: "Radon-222 (Rn)", unit: "pCi/L" },
    { label: "Strontium-90 (Sr²⁺)", unit: "pCi/L" },
    { label: "Radiation Ions", unit: "units" },
    { label: "Total Petroleum Hydrocarbons (TPH)", unit: "mg/L" },
    { label: "Polychlorinated Biphenyls (PCBs)", unit: "µg/L" },
    { label: "Pesticides & Herbicides", unit: "µg/L" },
    { label: "Pharma & Care Products (PPCPs)", unit: "µg/L" },
    { label: "Surfactants (MBAS)", unit: "mg/L" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center justify-center p-4">
      <div className="w-full bg-white rounded-2xl shadow-xl p-6 md:p-8 animate-fadeIn flex flex-col justify-between">
        
        <div className=" hide-scrollbar flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-700 text-center animate-slideDown">
            Water Quality Test
          </h1>

          {/* Microbiological Parameters */}
          <h2 className="text-xl font-semibold text-blue-600 mb-4 animate-fadeIn delay-100">
            Microbiological Parameters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {parameters.map((param, index) => (
              <div
                key={index}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-2 bg-blue-50 rounded-lg p-2 hover:shadow-md transition-all animate-fadeIn"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <label className="font-medium text-gray-700">{param.label}</label>
                <input
                  type="text"
                  className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400 w-20"
                />
                <span className="text-gray-500">{param.unit}</span>
              </div>
            ))}
          </div>

          {/* Trace Parameters */}
          <h2 className="text-xl font-semibold text-blue-600 mb-4 animate-fadeIn delay-200">
            Trace Parameters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {traceParameters.map((param, index) => (
              <div
                key={index}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-2 bg-blue-50 rounded-lg p-2 hover:shadow-md transition-all animate-fadeIn"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <label className="font-medium text-gray-700">{param.label}</label>
                <input
                  type="text"
                  className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400 w-20"
                />
                <span className="text-gray-500">{param.unit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-6 animate-slideUp">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 shadow-lg transition">
            Generate Report
          </button>
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition">
            Reset Form
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 shadow-lg transition">
            Exit
          </button>
        </div>
      </div>
    </div>
  );
}



// import React from "react";

// export default function WaterPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-6">
//       <h1 className="text-3xl font-bold mb-6 text-blue-700">Water Quality Test</h1>
//       <form className="space-y-4 max-w-lg">
//         <div>
//           <label className="block font-medium">Salmonella</label>
//           <input type="text" className="border p-2 w-full" placeholder="CFU/100mL" />
//         </div>
//         {/* Repeat for other fields from your image */}
//       </form>
//     </div>
//   );
// }

// import React from "react";

// export default function WaterPage() {
//   const parameters = [
//     { label: "Salmonella", unit: "CFU/100mL" },
//     { label: "Shigella", unit: "CFU/100mL" },
//     { label: "Pseudomonas aeruginosa", unit: "CFU/100mL" },
//     { label: "Total Plate Count (TPC)", unit: "CFU/mL" },
//     { label: "Viruses", unit: "units/L" },
//     { label: "Protozoa", unit: "units/L" },
//   ];

//   const traceParameters = [
//     { label: "Free Chlorine (OCl⁻)", unit: "mg/L" },
//     { label: "Combined Chlorine (NH₂Cl)", unit: "mg/L" },
//     { label: "Radium-226 (Ra²²⁶)", unit: "pCi/L" },
//     { label: "Radium-228 (Ra²²⁸)", unit: "pCi/L" },
//     { label: "Uranium (UO₂²⁺)", unit: "µg/L" },
//     { label: "Radon-222 (Rn)", unit: "pCi/L" },
//     { label: "Strontium-90 (Sr²⁺)", unit: "pCi/L" },
//     { label: "Radiation Ions (various isotopes)", unit: "units" },
//     { label: "Total Petroleum Hydrocarbons (TPH)", unit: "mg/L" },
//     { label: "Polychlorinated Biphenyls (PCBs)", unit: "µg/L" },
//     { label: "Pesticides and Herbicides", unit: "µg/L" },
//     { label: "Pharma and Care Products (PPCPs)", unit: "µg/L" },
//     { label: "Surfactants (MBAS)", unit: "mg/L" },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-8">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
//         <h1 className="text-3xl font-bold mb-6 text-blue-700">Water Quality Test</h1>

//         {/* Microbiological Parameters */}
//         <h2 className="text-xl font-semibold text-blue-600 mb-4">
//           Microbiological Parameters
//         </h2>
//         {parameters.map((param, index) => (
//           <div key={index} className="grid grid-cols-3 gap-2 mb-3">
//             <label className="col-span-1 font-medium text-gray-700">{param.label}</label>
//             <input
//               type="text"
//               className="col-span-1 border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <span className="col-span-1 text-gray-500">{param.unit}</span>
//           </div>
//         ))}

//         {/* Trace Parameters */}
//         <h2 className="text-xl font-semibold text-blue-600 mt-8 mb-4">
//           Trace Parameters
//         </h2>
//         {traceParameters.map((param, index) => (
//           <div key={index} className="grid grid-cols-3 gap-2 mb-3">
//             <label className="col-span-1 font-medium text-gray-700">{param.label}</label>
//             <input
//               type="text"
//               className="col-span-1 border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <span className="col-span-1 text-gray-500">{param.unit}</span>
//           </div>
//         ))}

//         {/* Action Buttons */}
//         <div className="flex justify-center gap-4 mt-8">
//           <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
//             Generate Report
//           </button>
//           <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400">
//             Reset Form
//           </button>
//           <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
//             Exit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

