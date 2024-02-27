import { useState } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";

type Props = {
  date: Date;
};

type CalendarEvent = {
  name: string;
  date: Date;
};

export default function CalendarGridItem({ date }: Props) {
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);

  function OnAddEvent() {
    const newEvent: CalendarEvent = { name: "new event", date: date };
    setCalendarEvents([...calendarEvents, newEvent]);
  }

  return (
    <Card bg="dark" text="light">
      <Card.Header>
        {date.toLocaleString("en-UK", { weekday: "long" })} {format(date, "d")}
      </Card.Header>
      <Card.Body className="calendar-grid-item card-body">
        <Button className="d-flex" variant="primary" onClick={OnAddEvent}>
          <FontAwesomeIcon icon={faPlus} size="xs" />
        </Button>
        {calendarEvents.map((event) => (
          <span className="badge badge-pill bg-success">
            {event.name} {event.date.toDateString()}
          </span>
        ))}
      </Card.Body>
    </Card>
  );
}
