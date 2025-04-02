import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { AuthProvider } from "@/components/auth/context/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export const metadata = {
  title: "Users",
  description: "Exam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <AuthProvider>
          <ProtectedRoute>
            {children}
          </ProtectedRoute>
        </AuthProvider>
      </body>
    </html>
  );
}
