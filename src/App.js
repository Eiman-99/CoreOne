import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<CategoryPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
