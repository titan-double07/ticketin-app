import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
    return (
        <div className="flex justify-between items-center bg-blue-950 px-5 py-3">
            <div className="flex gap-5">
                <Link href={'/'}><FontAwesomeIcon icon={faHome} className="icon"/></Link>
                <Link href={'/Ticket/new'}><FontAwesomeIcon icon={faTicket} className="icon"/></Link>
            </div>
            <p>Tickectier</p>
        </div>
    );
}
