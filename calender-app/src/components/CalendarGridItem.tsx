import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import { CalendarEvent } from "./CalendarGrid";

type Props = {
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
      <Card.Header className="d-flex">
        <Button
          className="d-flex align-items-center justify-content-center"
          style={{
            marginRight: "10px",
            height: "20px",
            width: "20px",
          }}
          variant="primary"
          onClick={() => OnAddEvent(date)}
        >
          <FontAwesomeIcon icon={faPlus} size="xs" />
        </Button>
        {date.toLocaleString("en-UK", { weekday: "long" })} {format(date, "d")}
      </Card.Header>
      <Card.Body className="calendar-grid-item card-body custom-scrollbar">
        <div className="d-flex flex-wrap flex-column pt-2">
          {calendarEvents.map((event, index) => (
            <span key={index} className="badge badge-pill bg-primary mr-1 mb-1">
              <span className="badge-text">{event.name}</span>
            </span>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}
