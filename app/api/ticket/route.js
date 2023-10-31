import Ticket from '@/app/(models)/ticket-model';
import axios from 'axios'
import { NextResponse } from 'next/server'


//sends a POST request to create a ticket object in the database
/**
 * This JavaScript function handles a POST request by creating a ticket with the provided data and
 * returning a response indicating success or failure.
 * @param req - The `req` parameter is the request object that contains information about the incoming
 * HTTP request. It includes details such as the request method, headers, and body.
 * @returns The code is returning a JSON response with a message and a status code. If the try block is
 * successful, it returns a JSON response with the message "Ticket Created" and a status code of 201.
 * If there is an error, it returns a JSON response with the message "there is an error" and a status
 * code of 500.
 */
export async function POST(req) {
    
    try {
        const body = await req.json()
        const ticketData = body;
        await Ticket.create(ticketData)
        return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
    } catch (error) {
      return  NextResponse.json({message:'there is an error'},{status:500})
    }
}

export async function GET() {
    try {
        const ticketData = await Ticket.find()
        return NextResponse.json({ticketData},{status:200})
    } catch (error) {
        return NextResponse.json({message:'there was an error'},{status:500})
    }
}