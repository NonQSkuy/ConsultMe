"use-client";
import { SchedulerProvider, SchedularView } from "mina-scheduler";

export default function CalendarScheduler() {
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
      <SchedulerProvider>
        <SchedularView />
      </SchedulerProvider>
    </section>
  );
}
