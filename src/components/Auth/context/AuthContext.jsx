"use client";

import { createContext, useState, useEffect } from "react";
import { encodeBase64, decodeBase64 } from "@/utils/Crypto";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");

    if (stored) {
      //Decodifica el valor del objeto del usuario en sesion para poder utilizar sus propiedades en los componentes
      const decodedUser = decodeBase64(stored);
      if (decodedUser) setUser(decodedUser);
    }
  }, []);

  const login = (userData) => {
    const sessionUser = {
      id: userData.id,
      email: userData.email,
      name: userData.name,
      role: userData.role
    };
    //Se envia codificado al local storage para evitar manipulaciones al rol del usuario y acceder a funciones no autorizadas
    const encoded = encodeBase64(sessionUser);
    localStorage.setItem("user", encoded);
    setUser(sessionUser);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
