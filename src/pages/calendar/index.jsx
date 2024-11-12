"use-client";
import { SchedulerProvider, SchedularView } from "mina-scheduler";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function CalendarScheduler() {
  const navigate = useNavigate();
  const events = [
    {
      id: "1d4c5c73-b5fa-4f67-bb6e-1d5d66cbd57d",
      title: "Kickoff Meeting.",
      description: "Initial project kickoff with stakeholders.",
      startDate: new Date(),
      endDate: new Date(new Date().getTime() + 60 * 60 * 1000),
      variant: "primary",
    },
  ];
  return (
    <section className="flex w-full flex-col items-center justify-center gap-4 py-8 md:py-10">
      <SchedulerProvider
        initialState={events}
        onUpdateEvent={() => navigate("/prepare")}
      >
        <SchedularView
          classNames={{
            buttons: {
              addEvent: "bg-red-500",
              next: "bg-blue-500",
              prev: "bg-green-500",
            },
          }}
          views={{ views: ["day", "month", "week"], mobileViews: ["day"] }}
          // CustomComponents={{
          //   CustomEventModal: {
          //     CustomAddEventModal: {
          //       title: "Custom Add Event",
          //       // CustomForm: MyCustomForm,
          //     },
          //   },
          // }}
        />
      </SchedulerProvider>
    </section>
  );
}