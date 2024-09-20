"use client";
import api from "@/lib/appwrite";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface User {
  name: string;
}

interface AuthContextProps {
  auth: User | null;
  authLoading: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await api.auth.getCurrentSession();
        setUser(response);
        setAuthLoading(false);
      } catch (error) {
        console.error(error);
        setAuthLoading(false);
      }
    };
    getUser();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, authLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
