import { createContext, useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const [valid, setValid] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const localCurrentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (localCurrentUser) {
      setCurrentUser(localCurrentUser);
      setIsLoggedIn(true);
    }
  }, []);

  function signup(userName, email, password) {
    const newUser = {
      id: uuidv4(),
      userName,
      email,
      password,
      cart: [],
    };

    setUsers((prev) => {
      // Validate inputs
      if (!userName || !email || !password) {
        setValid(false);
        return prev;
      }

      setValid(true);

      // Validate email format
      if (!validateEmail(email)) {
        setValidEmail(false);
        return prev;
      }
      setValidEmail(true);

      // Validate password length
      if (password.length < 6) {
        setValidPassword(false);
        return prev;
      }
      setValidPassword(true);

      // Get local users (if present)
      const localUsers = JSON.parse(localStorage.getItem("users")) || [];

      // Check for existing user
      const existingUser = localUsers.find((user) => user.email === email);
      if (existingUser) {
        toast.error("Email already exists", {
          position: "top-center",
          pauseOnHover: false,
        });
        return prev;
      }

      // Add new user
      const updatedUsers = [...prev, newUser];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      login(email, password);
      return updatedUsers;
    });
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function login(email, password) {
    if (!email || !password) {
      setValid(false);
      return;
    }
    setValid(true);
    const localUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (localUsers.length > 0) {
      const currentUser = localUsers.find(
        (user) => user.email === email && user.password === password
      );

      if (currentUser) {
        setCurrentUser(currentUser);
        setIsLoggedIn(true);

        // Save the logged in user to localStorage
        localStorage.setItem("currentUser", JSON.stringify(currentUser));

        navigate("/");
        toast.success(`Welcome ${currentUser.userName}`, {
          position: "top-center",
          theme: "dark",
          hideProgressBar: true,
          pauseOnHover: false,
          autoClose: 4000,
        });
      } else {
        toast.error("Incorrect email or password", {
          position: "top-center",
          pauseOnHover: false,
        });
      }
    } else {
      alert("Email is not found. Please sign up first.");
    }
  }

  function logout() {
    setCurrentUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("currentUser");
    toast.success("You have successfully logged out", {
      position: "top-center",
      theme: "dark",
      hideProgressBar: true,
      pauseOnHover: false,
      autoClose: 3000,
    });
  }

  return (
    <AuthContext.Provider
      value={{
        users,
        valid,
        validEmail,
        validPassword,
        isLoggedIn,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
