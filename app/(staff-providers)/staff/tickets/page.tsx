import { TicketsTable } from "./_components/datatables/Tickets";

const page = () => {
  return (
    <>
      <div className="flex w-full flex-col">
        <TicketsTable />
      </div>
    </>
  );
};

export default page;
