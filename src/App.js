import { useSelector, useDispatch } from 'react-redux';
import Home from './components/home/home.js';
import { Routes, Route } from "react-router-dom";
import FormPage from './components/FormPage.js';
import Login from './components/home/Login.js';
import Signup from './components/home/Signup.jsx';
import WaterPage from "../src/components/amazing/WaterPage.jsx";
function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    // <Home/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<FormPage />} />
          <Route path="/login" element={<Login />} />
           <Route path="/water-page" element={<WaterPage />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    // <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    //   <h1 className="text-4xl font-bold mb-4">Counter: {count}</h1>
    //   <div className="flex gap-4">
    //     <button 
    //       className="px-4 py-2 bg-blue-500 text-white rounded"
    //       onClick={() => dispatch(increment())}
    //     >
    //       Increment
    //     </button>
    //     <button 
    //       className="px-4 py-2 bg-red-500 text-white rounded"
    //       onClick={() => dispatch(decrement())}
    //     >
    //       Decrement
    //     </button>
    //   </div>
    // </div>
  );
}

export default App;


// import './App.css';

// function App() {
//   return (
//      <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

// export default App;
