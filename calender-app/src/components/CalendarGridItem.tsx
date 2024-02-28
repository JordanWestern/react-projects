import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import { CalendarEvent } from "./CalendarGrid";

type Props = {
  key: string;
  date: Date;
  calendarEvents: CalendarEvent[];
  OnAddEvent: (date: Date) => void;
};

export default function CalendarGridItem({
  date,
  calendarEvents,
  OnAddEvent,
}: Props) {
  return (
    <Card bg="dark" text="light">
      <Card.Header>
        {date.toLocaleString("en-UK", { weekday: "long" })} {format(date, "d")}
      </Card.Header>
      <Card.Body className="calendar-grid-item card-body">
        <Button
          className="d-flex"
          variant="primary"
          onClick={() => OnAddEvent(date)}
        >
          <FontAwesomeIcon icon={faPlus} size="xs" />
        </Button>
        {calendarEvents.map((event) => (
          <span
            key={crypto.randomUUID()}
            className="badge badge-pill bg-success"
          >
            {event.name} {event.date.toDateString()}
          </span>
        ))}
      </Card.Body>
    </Card>
  );
}
