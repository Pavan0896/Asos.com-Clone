import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AllRoutes from "./Components/AllRoutes";

function App() {
  return (
    <>
      <Navbar />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
