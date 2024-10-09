import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Footer from "./components/Footer";
import AuthProvider from "./utilities";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
function App() {
  // useEffect(() => {
  //   localStorage.clear();
  // }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <CustomNavbar />
        <Routes>
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
