import Image from "next/image";
import TicketCard from "./(components)/TicketCard";
import { getTickets } from "@/app/utilities/ticket-functions";

export default async function Home() {
  const { ticketData } = await getTickets();
  const uniqueCategories = [
    ...new Set(ticketData?.map(({ category }) => category)),
  ];
  return (
    <main className=" p-5">
      {ticketData &&
        uniqueCategories.map((uniqueCategory, uniqueCategoryIndex) => {
          return (
            <div key={uniqueCategoryIndex} className="mb-3">
              <h2>{uniqueCategory}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ticketData
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket,i) => {
                    return <TicketCard key={filteredTicket._id} id={filteredTicket._id} {...filteredTicket} />;
                  })}
              </div>
            </div>
          );
        })}
    </main>
  );
}
