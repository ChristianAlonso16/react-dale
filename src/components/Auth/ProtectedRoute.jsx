"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {useAuth} from "@/components/Auth/hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const isLoginPage = pathname === "/login";
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCheckingAuth(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!checkingAuth && !user && !isLoginPage) {
      router.replace("/login");
    }
  }, [checkingAuth, user, isLoginPage, router]);


  return children;
};

export default ProtectedRoute;
