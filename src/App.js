import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IPhones from "./pages/IPhones";
import Macbooks from "./pages/Macbooks";

// import { useState } from "react";

// const [count, setCount] = useState(0);

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/iphones" element={<IPhones />} />
          <Route path="/macbooks" element={<Macbooks />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
