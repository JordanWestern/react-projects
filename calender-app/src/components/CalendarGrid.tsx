import AddEventModal from "./AddEventModal";
import CalendarGridItem from "./CalendarGridItem";
import Slider from "./Slider";
import { useState, useRef } from "react";

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

export default function CalendarGrid() {
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>(currentDate);
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const eventDate = useRef<Date>(currentDate);

  function OnAddEvent(name: string, date: Date) {
    const newEvent: CalendarEvent = { name, date };
    setCalendarEvents([...calendarEvents, newEvent]);
    setIsModalOpen(false);
  }

  function GetEventsForDate(date: Date) {
    return calendarEvents.filter(
      (event) => event.date.toDateString() === date.toDateString()
    );
  }

  return (
    <>
      <h6 className="display-6">
        {Month[selectedDate.getMonth()]} {selectedDate.getFullYear()}
      </h6>
      <div className="container slider-container">
        <Slider
          title="Month"
          selected={selectedDate.getMonth()}
          min={0}
          max={11}
          onSelectedChanged={(month) =>
            setSelectedDate(new Date(selectedDate.getFullYear(), month))
          }
        />
        <Slider
          title="Year"
          selected={selectedDate.getFullYear()}
          min={currentDate.getFullYear()}
          max={currentDate.getFullYear() + 5}
          onSelectedChanged={(year) =>
            setSelectedDate(new Date(year, selectedDate.getMonth()))
          }
        />
      </div>
      <div className="calender-grid flex-container">
        {Array.from(
          {
            length: new Date(
              selectedDate.getFullYear(),
              selectedDate.getMonth() + 1,
              0
            ).getDate(),
          },
          (_, i) => i + 1
        ).map((day) => (
          <CalendarGridItem
            key={day}
            date={
              new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day)
            }
            calendarEvents={GetEventsForDate(
              new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day)
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
