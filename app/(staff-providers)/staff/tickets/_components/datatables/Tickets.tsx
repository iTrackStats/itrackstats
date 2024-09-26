"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";

import { useTickets } from "@/contexts/TicketsProvider";
import api from "@/lib/appwrite";
import { dateStringFormat } from "@/lib/utils";
import { Tickets } from "@/types/appwrite";
import { useRouter } from "next/navigation";
import Searchbox from "./Searchbox";
import {
  TableBodySkeleton,
  TableCellSkeleton,
} from "./skeleton/TableBodySkeleton";

export function TicketsTable() {
  const [tickets, setTickets] = useState<Tickets[]>([]);
  const [filteredTickets, setFilteredTickets] = useState<Tickets[]>([]);
  const [ticketsLoading, setTicketsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { allTickets, loadingTickets } = useTickets();
  const [userNames, setUserNames] = useState<{ [key: string]: string }>({});
  const [userNamesLoading, setUserNamesLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!loadingTickets && allTickets) {
      const sortedTickets = allTickets.documents.sort((a: any, b: any) =>
        a.title.localeCompare(b.title),
      );
      setTickets(sortedTickets);
      setTicketsLoading(false);
    }
  }, [allTickets, loadingTickets]);

  useEffect(() => {
    const results = tickets.filter((ticket) =>
      ticket.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredTickets(results);
  }, [searchTerm, tickets]);

  useEffect(() => {
    const fetchUserNames = async () => {
      const userMap: { [key: string]: string } = {};
      for (const ticket of tickets) {
        if (!userMap[ticket.responsable]) {
          const user = await api.users.findById(ticket.responsable);
          userMap[ticket.responsable] = user.name;
        }
      }
      setUserNames(userMap);
      setUserNamesLoading(false);
    };

    if (tickets.length > 0) {
      fetchUserNames();
    }
  }, [tickets]);

  const enterTicket = (ticketId: string) => () => {
    router.push(`/staff/tickets/${ticketId}`);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full gap-4 !text-base lg:!text-lg">
        <Searchbox onSearchChange={setSearchTerm} />
      </div>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Responsable</TableHead>
          </TableRow>
        </TableHeader>
        {ticketsLoading || userNamesLoading ? (
          <TableBodySkeleton />
        ) : (
          <TableBody>
            {filteredTickets.map((ticket) => (
              <TableRow
                id={ticket.$id}
                key={ticket.$id}
                onDoubleClick={enterTicket(ticket.$id)}
              >
                <TableCell>{ticket.title}</TableCell>
                <TableCell>{ticket.description}</TableCell>
                <TableCell>{ticket.priority.toUpperCase()}</TableCell>
                <TableCell>{dateStringFormat(ticket.due_date)}</TableCell>
                <TableCell>
                  {userNames[ticket.responsable] || <TableCellSkeleton />}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </div>
  );
}
