"use client";
import { faFire, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { deleteTicket } from "../utilities/ticket-functions";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function TicketCard({
  id,
  title,
  description,
  createdAt,
  priority,
  progress,
  status,
}) {
  const router = useRouter();
  function displayPriority(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
      arr.push(
        <FontAwesomeIcon key={i} icon={faFire} className="text-red-500" />
      );
    }
    return arr;
  }
  const statusColor = (status) => {
    let color;
    switch (status) {
      case "started":
        color = "bg-yellow-500";
        break;
      case "not started":
        color = "bg-red-500";
        break;
      case "done":
        color = "bg-green-500";
        break;

      default:
        break;
    }
    return color;
  };
  // console.log(deleteTicket(id))
  const date = new Date(createdAt);
  return (
    <div className="card-container flex flex-col p-5 bg-cyan-800 gap-1.5 rounded-lg ">
      <div className="flex justify-between">
        <div className="priority ">{displayPriority(priority)}</div>
        <div
          onClick={() => {
            deleteTicket(id);
            router.refresh();
            return;
          }}
          className="del-btn text-red-500 hover:text-repd-300 font-bold text-xl">
          <FontAwesomeIcon icon={faX} />
        </div>
      </div>
      <h4 className="title capitalize">{title}</h4>
      <hr className="h-px bg-cyan-950 border-0 my-2" />
      {/* <div className="flex-grow"></div> */}
      <Link href={`/Ticket/${id}`}>
        <p className="desc">{description}</p>
        <p className="date">
          {date.toLocaleDateString()} {date.toLocaleTimeString()}
        </p>
        <div className="flex justify-between items-center w-full gap-5">
          <div className="progress-bar h-2 rounded bg-white w-full">
            <div
              className={`bar bg-blue-500 h-2 rounded `}
              style={{ width: `${progress}%` }}></div>
          </div>

          <div
            className={`status rounded-xl ${statusColor(
              status
            )} px-4 py-2 text-center capitalize text-white w-fit whitespace-nowrap`}>
            {status}
          </div>
        </div>
      </Link>
    </div>
  );
}
