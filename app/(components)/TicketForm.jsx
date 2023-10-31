"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { revalidateTag } from "next/cache";

export default function TicketForm({ foundTicket, editMode }) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: editMode && foundTicket,
  });
  const [priority, setPriority] = useState();
  const isChecked = (n) => {
    return n === foundTicket.priority;
  };
  useEffect(() => {
    setPriority(watch("priority"));
    setValue("priority", foundTicket?.priority, {
      shouldValidate: true,
    });
  }, [watch, foundTicket]);
  // const priority= watch('priority')
  // console.log(isChecked(4));
  const router = useRouter();
  const categories = [
    "Hardware Problem",
    "Software Problem",
    "Application Deveopment",
    "Project",
  ];

  async function onSubmit(data, e) {
    e.preventDefault();
    if (editMode) {
      const res = await axios.put(`/api/ticket/${foundTicket._id}`, data);
      console.log(res.status);

      if (res.status !== 200) {
        throw new Error("Failed to update ticket");
      }
    } else {
      const res = await axios.post("/api/ticket", data);

      console.log(res.status);
      if (res.status !== 201) {
        throw new Error("Failed to create ticket");
      }
    }
    router.refresh();
    router.push("/");
  }
  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center py-10 ">
      <h2 className="capitalize text-center">create your ticket</h2>
      <form
        className="flex flex-col gap-4 w-3/4 max-w-sm"
        noValidate
        onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label htmlFor="title" className="capitalize">
            title
          </label>
          <input
            type="text"
            {...register("title", { required: "field required" })}
            id="title"
            className="rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="capitalize">
            description
          </label>
          <textarea
            id=""
            rows="5"
            {...register("description", {
              required: "field required",
            })}></textarea>
        </div>
        <div className="flex flex-col">
          <label htmlFor="category" className="capitalize">
            Category
          </label>
          <select
            id="category"
            {...register("category", { required: "field required" })}>
            {categories.map((category) => {
              return (
                <option
                  key={category}
                  value={category}
                  className=" appearance-none max-w-[70px]">
                  {category}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="priority" className="capitalize">
            Priority
          </label>
          <div className="flex space-x-1">
            <input
              id="priority-1"
              type="radio"
              {...register("priority", { required: "field required" })}
              value={1}
              checked={watch("priority") === foundTicket?.priority}
            />
            <label>1</label>
            <input
              id="priority-2"
              type="radio"
              {...register("priority", { required: "field required" })}
              value={2}
              checked={watch("priority") === foundTicket?.priority}
            />
            <label>2</label>
            <input
              id="priority-3"
              type="radio"
              {...register("priority", { required: "field required" })}
              value={3}
              checked={watch("priority") === foundTicket?.priority}
            />
            <label>3</label>
            <input
              id="priority-4"
              type="radio"
              {...register("priority", { required: "field required" })}
              value={4}
              checked={watch("priority") === foundTicket?.priority}
            />
            <label>4</label>
            <input
              id="priority-5"
              type="radio"
              {...register("priority", { required: "field required" })}
              value={5}
              checked={watch("priority") === foundTicket?.priority}
            />
            <label>5</label>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="progress" className="capitalize">
            Progress
          </label>
          <input
            type="range"
            id="progress"
            min="0"
            max="100"
            {...register("progress")}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="status" className="capitalize">
            Status
          </label>
          <select
            id="status"
            {...register("status", { required: "field required" })}>
            <option value="not started">Not Started</option>
            <option value="started">Started</option>
            <option value="done">Done</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-3/4 border-2 border-slate-500 rounded mx-auto active:bg-slate-500 p-2 uppercase ">
          {editMode ? "update" : "create"}
        </button>
      </form>
    </div>
  );
}
