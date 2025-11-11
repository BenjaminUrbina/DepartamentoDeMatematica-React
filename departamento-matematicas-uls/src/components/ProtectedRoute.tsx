import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();

  //Si esta cargando que muestre un spiner
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <p>Cargando... </p>
      </div>
    );
  }
  // Si es null retorna a login
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  return <>{children}</>;
};
