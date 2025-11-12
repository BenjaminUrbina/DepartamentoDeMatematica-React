import { createContext, useContext, useEffect, useState } from "react";
import { supabaseCliente } from "../backend/supabaseCliente";
import type { User, Session } from "@supabase/supabase-js";

// Los tipos de datos que usaremos
interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
}

// Creamos un contexto con valores iniciales
const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
});
// Funcion que permite tomar el contexto facilmente
export const useAuth = () => {
  const context = useContext(AuthContext); // Tomamos el contexto y leemos su informacion
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de AuthProvider");
  }
  return context;
};

//Proveedor que alimen a los hijos que envuelva
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  // Este código se ejecuta UNA VEZ cuando el componente se monta
  useEffect(() => {
    // Obtener sesión inicial
    supabaseCliente.auth.getSession().then(({ data: { session } }) => {
      console.log("✅ Sesión obtenida:", session); // 👈 DEBUG
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Escuchador de cambios de autenticación, el "vigilante"
    const {
      data: { subscription },
    } = supabaseCliente.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []); // El [] al final significa: "ejecuta esto solo una vez al inicio".

  //Empaquetamos la informacion para despues poder retonarla a todos los que los pidan.
  const value = {
    user,
    session,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
