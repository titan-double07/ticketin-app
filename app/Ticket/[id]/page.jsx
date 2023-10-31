
import TicketForm from '@/app/(components)/TicketForm'
import { getTicketById } from '@/app/utilities/ticket-functions'
import React from 'react'

export default async function Ticket({ params }) {
  const EDITMODE = params.id === 'new' ? false : true;
  let updateTicket;
  if (EDITMODE) {
     const {foundTicket} = await getTicketById(params.id);
    updateTicket = foundTicket
  }
return (
    <div className='w-full  flex justify-center items-center '>
      <TicketForm foundTicket={updateTicket} editMode={EDITMODE} />
    </div>
  )
}
