"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/components/Auth/hooks/useAuth";

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    const router = useRouter();
    const path = usePathname();

    const isPublic = path === "/login";

    useEffect(() => {
        if (!user && !isPublic) {
            router.replace("/login");
        }
    }, [user, isPublic, router]);

    if (!user && !isPublic) return null;

    return children;
};

export default ProtectedRoute;
