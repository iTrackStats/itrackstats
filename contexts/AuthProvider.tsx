"use client";

import api from "@/lib/appwrite";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

// Tipo de datos del usuario
interface User {
  name: string;
  labels: string[];
}

interface AuthContextProps {
  user: User | null;
  loading: boolean;
  signout: () => Promise<void>;
}

// Crear el contexto
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Proveedor del contexto
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await api.auth.getCurrentSession();
        setUser(currentUser);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const signout = async () => {
    try {
      await api.auth.deleteCurrentSession();
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar el contexto de autenticación
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};
