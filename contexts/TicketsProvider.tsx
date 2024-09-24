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
interface Tickets {
  title: string;
  description: string;
  priority: string;
  due_date: string;
  responsable: string;
}

interface TicketsContextProps {
  tickets: Tickets | null;
  loading: boolean;
}

// Crear el contexto
const TicketsContext = createContext<TicketsContextProps | undefined>(
  undefined,
);

// Proveedor del contexto
export const TicketsProvider = ({ children }: { children: ReactNode }) => {
  const [tickets, setTickets] = useState<Tickets | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const tickets = await api.tickets.geAll();
        setTickets(tickets);
      } catch (error) {
        setTickets(null);
      } finally {
        setLoading(false);
      }
    };
    fetchTickets();
  }, []);

  return (
    <TicketsContext.Provider value={{ tickets, loading }}>
      {children}
    </TicketsContext.Provider>
  );
};

// Hook para usar el contexto de autenticación
export const useTickets = () => {
  const context = useContext(TicketsContext);
  if (!context) {
    throw new Error("useTickets debe usarse dentro de un TicketsProvider");
  }
  return context;
};
