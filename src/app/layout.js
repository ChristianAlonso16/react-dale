import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "@/components/Auth/context/AuthContext";
import ProtectedRoute from "@/components/Auth/ProtectedRoute";

export const metadata = {
  title: "CRUD Usuarios",
  description: "Examen técnico con Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <AuthProvider>
          <ProtectedRoute>
            <div className="container my-4 p-4 shadow">
              {children}
            </div>
          </ProtectedRoute>
        </AuthProvider>
      </body>
    </html>
  );
}
