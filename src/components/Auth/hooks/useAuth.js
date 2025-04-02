"use client";
import { useContext } from "react";
import { AuthContext } from "@/components/auth/context/AuthContext";

export const useAuth = () => {
    return useContext(AuthContext);
};


