import AddEventModal from "./AddEventModal";
import CalendarGridItem from "./CalendarGridItem";
import Slider from "./Slider";
import axios from "axios";
import { useState, useRef, useEffect } from "react";

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
  id: string;
  name: string;
  eventDate: Date;
};

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export default function CalendarGrid() {
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>(currentDate);
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const eventDate = useRef<Date>(currentDate);

  useEffect(() => {
    fetchEvents(selectedDate);
  }, [selectedDate]);

  const fetchEvents = async (date: Date) => {
    try {
      const formattedDate = formatDate(date);
      const response = await axios.post<CalendarEvent[]>(
        "https://localhost:7101/api/events",
        formattedDate,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // TODO: not sure why this extra mapping is required? (workaround)
      const events: CalendarEvent[] = response.data.map((event) => ({
        ...event,
        eventDate: new Date(event.eventDate),
      }));

      setCalendarEvents(events);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  function OnAddEvent(name: string, date: Date) {
    const newEvent: CalendarEvent = { id: "new id", name, eventDate: date };
    setCalendarEvents([...calendarEvents, newEvent]);
    setIsModalOpen(false);
  }

  function GetEventsForDate(date: Date) {
    return calendarEvents.filter(
      (event) => event.eventDate.toDateString() === date.toDateString()
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
