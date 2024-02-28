import { faL } from "@fortawesome/free-solid-svg-icons";
import AddEventModal from "./AddEventModal";
import CalendarGridItem from "./CalendarGridItem";
import Slider from "./Slider";
import { useRef, useState } from "react";

enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

export type CalendarEvent = {
  name: string;
  date: Date;
};

function GetDaysInMonth(year: number, month: number) {
  let daysInMonth = new Date(year, month + 1, 0).getDate();
  return Array.from(new Array(daysInMonth), (x, i) => i + 1);
}

export default function CalendarGrid() {
  let currentDate = new Date();

  const [currentMonth, setMonth] = useState(currentDate.getMonth());
  const [currentYear, setYear] = useState(currentDate.getFullYear());
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const eventDate = useRef<Date>(new Date());

  function OnAddEvent(name: string, date: Date) {
    const newEvent: CalendarEvent = { name: name, date: date };
    setCalendarEvents([...calendarEvents, newEvent]);
    setIsModalOpen(false);
  }

  function GetEventsForDate(date: Date) {
    return calendarEvents.filter(
      (event) => event.date.toDateString() === date.toDateString()
    );
  }

  let daysArray = GetDaysInMonth(currentYear, currentMonth);

  return (
    <>
      <h6 className="display-6">
        {Month[currentMonth]} {currentYear}
      </h6>
      <div className="container slider-container">
        <Slider
          title="Month"
          selected={currentMonth}
          min={0}
          max={11}
          onSelectedChanged={setMonth}
        />
        <Slider
          title="Year"
          selected={currentYear}
          min={currentDate.getFullYear()}
          max={currentDate.getFullYear() + 5}
          onSelectedChanged={setYear}
        />
      </div>
      <div className="calender-grid flex-container">
        {daysArray.map((day) => (
          <CalendarGridItem
            key={crypto.randomUUID()}
            date={new Date(currentYear, currentMonth, day)}
            calendarEvents={GetEventsForDate(
              new Date(currentYear, currentMonth, day)
            )}
            OnAddEvent={(date) => {
              eventDate.current = date;
              setIsModalOpen(true);
            }}
          />
        ))}
      </div>
      <AddEventModal
        isOpen={isModalOpen}
        OnClose={() => setIsModalOpen(false)}
        OnAddEvent={(name) => OnAddEvent(name, eventDate.current)}
      />
    </>
  );
}
