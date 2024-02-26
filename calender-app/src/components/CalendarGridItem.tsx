import { useState } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

type Props = {
  day: number;
};

export default function CalendarGridItem({ day }: Props) {
  const [calendarEvents, setCalendarEvents] = useState<number[]>([]);

  function Set() {
    setCalendarEvents(
      Array.from(
        new Array(calendarEvents.push(calendarEvents.length + 1)),
        (x, i) => i + 1
      )
    );
  }

  return (
    <Card bg="dark" text="light">
      <Card.Header>{day}</Card.Header>
      <Card.Body className="calendar-grid-item card-body">
        <Button className="d-flex" variant="primary" onClick={Set}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        {calendarEvents.map((event) => (
          <span className="badge badge-pill bg-primary">{event}</span>
        ))}
      </Card.Body>
    </Card>
  );
}
