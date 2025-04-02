"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  //Al iniciar el proyecto por defecto se envia a la lista de usuarios y a nivel contexto se valida si tiene la sesion para ingresar a la interfaz o no
  useEffect(() => {
    router.replace("/users");
  }, [router]);

  return null;
}
