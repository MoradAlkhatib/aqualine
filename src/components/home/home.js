import { motion } from "framer-motion";
import LogoIcon from "../../assets/Logo.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import WaterButton from "../amazing/WaterButton";

export default function Home() {

  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleGetStarted = () => {
    if (isLoggedIn) {
      navigate("/form");
    } else {
      Swal.fire({
        title: "Login Required",
        text: "You need to log in to continue. Do you want to log in now?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, log in",
        cancelButtonText: "Cancel",
        confirmButtonColor: "#3b82f6",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-blue-700 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* <img src={Logo} alt="Aqualine Logo" className="w-10 h-10" /> */}
            <LogoIcon/>
            <span className="text-white text-2xl font-bold">Aqualine</span>
          </div>
          <nav className="hidden md:flex gap-6 text-white font-medium">
            <a href="#about" className="hover:text-blue-200">About</a>
            <a href="#features" className="hover:text-blue-200">Features</a>
            <a href="#contact" className="hover:text-blue-200">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800">
            Welcome to <span className="text-blue-500">Aqualine</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-blue-600 max-w-2xl mx-auto">
            Dive into the pure essence of water. Inspired by the sky, designed for your lifestyle.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600"
            onClick={() => navigate("/form")}
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className=" ml-8 mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600"
            onClick={handleGetStarted}
          >
          Login
          </motion.button>
          <WaterButton/>
    


        </motion.div>
      </main>

      {/* About Section */}
      <section id="about" className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-blue-800"
          >
            About Aqualine
          </motion.h2>
          <p className="mt-4 text-blue-600">
            Aqualine is your gateway to cleaner, fresher water, crafted with the beauty of nature and the calmness of the sky.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Aqualine. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}


// import React from "react";
// import { useNavigate } from "react-router-dom";
// // import WaterButton from "./WaterButton";
// import WaterButton from "../amazing/WaterButton";

// export default function Home() {
//   const navigate = useNavigate();

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white">
//       <h1 className="text-5xl font-bold mb-6 text-blue-700">Welcome to Aqualine</h1>
//       <div className="flex gap-4">
//         {/* Existing Get Started Button */}
//         <button
//           onClick={() => navigate("/form")}
//           className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600"
//         >
//           Get Started
//         </button>

//         {/* New Water Test Button */}
//         <WaterButton />
//       </div>
//     </div>
//   );
// }


