import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [valid, setValid] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);

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

      // Check for existing user
      const existingUser = prev.find((user) => user.email === email);
      if (existingUser) {
        alert("Email already exists");
        return prev;
      }

      // Add new user
      const updatedUsers = [...prev, newUser];
      localStorage.setItem("users", JSON.stringify(updatedUsers));

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

  return (
    <AuthContext.Provider value={{ valid, validEmail, validPassword, signup }}>
      {children}
    </AuthContext.Provider>
  );
}
