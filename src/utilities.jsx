import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [users, setUsers] = useState([]);

  function signup(email, password) {
    const newUser = {
      id: uuidv4(),

      email,
      password,
      cart: [],
    };

    setUsers((prev) => {
      if (email && password) {
        if (!validateEmail(email)) {
          alert("enter a valid email");
          return prev;
        }
        const existingUser = prev.find((user) => user.email === email);
        if (existingUser) {
          alert("email already exists");
          return prev;
        } else {
          const updatedUsers = [...users, newUser];
          localStorage.setItem("users", JSON.stringify(updatedUsers));
          return updatedUsers;
        }
      } else {
        alert("Enter a valid email & password.");
        return prev;
      }
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
    <AuthContext.Provider value={{ signup }}>{children}</AuthContext.Provider>
  );
}
