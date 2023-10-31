import Ticket from "@/app/(models)/ticket-model";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    try {
        const { id } = params
        const foundTicket = await Ticket.findOne({ _id: id })
        return NextResponse.json({ foundTicket }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ message: 'failed to find ticket' }, { status: 500 })
    }
}


export async function DELETE(req, { params }) {
    try {
        const { id } = params
        await Ticket.findByIdAndDelete(id)
        return NextResponse.json({ message: 'ticket deleted' }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ message: 'failed to delete' }, { status: 500 })
    }
}

export async function PUT(req, { params }) {
    try {
        const { id } = params;
        console.log(id)
        const body = await req.json()
        const ticketData = body;
        console.log('updated successfully')
        const updatedTicket = await Ticket.findByIdAndUpdate(id, {
            ...ticketData,
        })
        return NextResponse.json({ message: 'ticket updated' }, { status: 200 })
    } catch (err) {
        console.error("Failed to update ticket:", err);
        return NextResponse.json({ message: 'failed to update' }, { status: 500 })
    }
}

