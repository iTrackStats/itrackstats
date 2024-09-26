"use client";

import api from "@/lib/appwrite";
import { Tickets } from "@/types/appwrite";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface TicketsContextProps {
  allTickets: Tickets | null;
  loadingTickets: boolean;
}

// Crear el contexto
const TicketsContext = createContext<TicketsContextProps | undefined>(
  undefined,
);

// Proveedor del contexto
export const TicketsProvider = ({ children }: { children: ReactNode }) => {
  const [allTickets, setTickets] = useState<Tickets | null>(null);
  const [loadingTickets, setLoadingTickets] = useState<boolean>(true);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const tickets = await api.tickets.getAll();
        setTickets(tickets);
      } catch (error) {
        setTickets(null);
        console.error(error);
      } finally {
        setLoadingTickets(false);
      }
    };
    fetchTickets();
  }, []);

  return (
    <TicketsContext.Provider value={{ allTickets, loadingTickets }}>
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
