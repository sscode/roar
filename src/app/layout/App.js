import React, { useEffect, useState } from "react";
import Main from "../../features/Home/Main";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import Lion from "../../features/Home/Lion";


function App() {
    
  return (
    <div className="screen">
      < Lion />
    </div>
  );
}

export default App;
