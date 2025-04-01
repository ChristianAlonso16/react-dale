"use client";
import { useContext } from "react";
import { AuthContext } from "@/components/Auth/context/AuthContext";

export const useAuth = () => {
    return useContext(AuthContext);
};


